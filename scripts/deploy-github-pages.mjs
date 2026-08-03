import { execSync, spawnSync } from "node:child_process";
import { existsSync, writeFileSync } from "node:fs";
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

  writeFileSync(resolve(distDir, ".nojekyll"), "", "utf8");

  if (isBuildOnly) {
    console.log("[pages] Build-only mode complete. Dist is ready for GitHub Pages.");
    return;
  }

  console.log("[pages] Publishing dist/ to gh-pages branch...");
  const message = `Deploy GitHub Pages ${new Date().toISOString()}`;

  run(`npx gh-pages -d dist -b gh-pages --dotfiles -m \"${message}\"`);

  console.log("[pages] Deployment complete.");
}

main();
