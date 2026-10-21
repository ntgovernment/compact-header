import { execSync, spawnSync } from "node:child_process";
import {
  copyFileSync,
  cpSync,
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";

function run(command, options = {}) {
  const result = spawnSync(command, {
    stdio: "inherit",
    shell: true,
    ...options,
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function detectRepoName() {
  const configured = process.env.GITHUB_PAGES_REPO;
  if (configured) {
    return configured;
  }

  try {
    const remote = execSync("git config --get remote.origin.url", {
      encoding: "utf8",
    }).trim();

    const match = remote.match(/[:/]([^/]+?)\.git$/);
    if (match && match[1]) {
      return match[1];
    }

    const noGitSuffix = remote.replace(/\.git$/, "");
    const segments = noGitSuffix.split("/");
    return segments[segments.length - 1] || "compact-header";
  } catch {
    return "compact-header";
  }
}

function copyIfExists(source, target) {
  if (!existsSync(source)) {
    return false;
  }

  cpSync(source, target, { recursive: true });
  return true;
}

function ensureWebfonts(distDir) {
  const distWebfonts = resolve(distDir, "webfonts");
  const localWebfonts = resolve("webfonts");
  const faFreeWebfonts = resolve(
    "node_modules",
    "@fortawesome",
    "fontawesome-free",
    "webfonts",
  );

  if (!copyIfExists(localWebfonts, distWebfonts)) {
    copyIfExists(faFreeWebfonts, distWebfonts);
  }

  if (!existsSync(distWebfonts)) {
    return;
  }

  const fallbackPairs = [
    ["fa-regular-400.woff2", "fa-light-300.woff2"],
    ["fa-regular-400.woff", "fa-light-300.woff"],
    ["fa-regular-400.ttf", "fa-light-300.ttf"],
    ["fa-regular-400.eot", "fa-light-300.eot"],
    ["fa-regular-400.svg", "fa-light-300.svg"],
  ];

  fallbackPairs.forEach(function ([sourceName, fallbackName]) {
    const sourcePath = resolve(distWebfonts, sourceName);
    const fallbackPath = resolve(distWebfonts, fallbackName);

    if (existsSync(sourcePath) && !existsSync(fallbackPath)) {
      copyFileSync(sourcePath, fallbackPath);
    }
  });

  const webfontCount = readdirSync(distWebfonts).length;
  console.log(`[pages] Prepared webfonts (${webfontCount} files).`);
}

function patchRobotoCss(distDir) {
  const robotoCssPath = resolve(distDir, "DET intranet_files", "roboto.css");
  if (!existsSync(robotoCssPath)) {
    return;
  }

  const robotoCss = readFileSync(robotoCssPath, "utf8");
  const patched = robotoCss.replace(
    /url\(https:\/\/internal\.nt\.gov\.au\/__data\/assets\/file\/0004\/790906\/latin\.woff2\) format\('woff2'\);/g,
    "local('Roboto'), local('Arial');",
  );

  if (patched !== robotoCss) {
    writeFileSync(robotoCssPath, patched, "utf8");
    console.log("[pages] Patched roboto.css external font URLs for Pages.");
  }
}

function patchPagesHtml(distDir) {
  const htmlFiles = [resolve(distDir, "index.html"), resolve(distDir, "DET intranet.html")];

  htmlFiles.forEach(function (htmlPath) {
    if (!existsSync(htmlPath)) {
      return;
    }

    const html = readFileSync(htmlPath, "utf8");
    const patched = html.replace(
      /<link rel="stylesheet" href="\.\/DET intranet_files\/all\.css"[\s\S]*?crossorigin="anonymous">/,
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossorigin="anonymous">',
    );

    if (patched !== html) {
      writeFileSync(htmlPath, patched, "utf8");
    }
  });
}

function main() {
  const isBuildOnly = process.argv.includes("--build-only");
  const repoName = detectRepoName();
  const basePath = process.env.GITHUB_PAGES_BASE || `/${repoName}/`;

  console.log(`[pages] Using base path: ${basePath}`);
  console.log("[pages] Building project...");

  run("npm run build", {
    env: {
      ...process.env,
      GITHUB_PAGES_BASE: basePath,
    },
  });

  const distDir = resolve("dist");
  if (!existsSync(distDir)) {
    console.error("[pages] dist/ was not generated. Build failed.");
    process.exit(1);
  }

  const copiedLegacyAssets = copyIfExists(
    resolve("DET intranet_files"),
    resolve(distDir, "DET intranet_files"),
  );
  if (copiedLegacyAssets) {
    console.log("[pages] Copied DET intranet_files into dist/.");
  } else {
    console.warn(
      "[pages] DET intranet_files not found locally. Legacy scripts/styles may 404.",
    );
  }

  const copiedHeaderAssets = copyIfExists(
    resolve("src", "nester"),
    resolve(distDir, "src", "nester"),
  );
  if (copiedHeaderAssets) {
    console.log("[pages] Copied src/nester into dist/.");
  }

  ensureWebfonts(distDir);

  patchRobotoCss(distDir);
  patchPagesHtml(distDir);

  const indexPath = resolve(distDir, "index.html");
  const previewEntryPath = resolve(distDir, "DET intranet.html");
  if (!existsSync(indexPath) && existsSync(previewEntryPath)) {
    writeFileSync(indexPath, readFileSync(previewEntryPath, "utf8"), "utf8");
    console.log("[pages] Created dist/index.html from DET intranet.html");
  }

  patchPagesHtml(distDir);

  writeFileSync(resolve(distDir, ".nojekyll"), "", "utf8");

  if (isBuildOnly) {
    console.log(
      "[pages] Build-only mode complete. Dist is ready for GitHub Pages.",
    );
    return;
  }

  console.log("[pages] Publishing dist/ to gh-pages branch...");
  const message = `Deploy GitHub Pages ${new Date().toISOString()}`;

  run(`npx gh-pages -d dist -b gh-pages --dotfiles -m \"${message}\"`);

  console.log("[pages] Deployment complete.");
}

main();
