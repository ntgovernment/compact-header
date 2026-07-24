import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const source = resolve("src/nester/header.html");
const destination = resolve("dist/header.html");

if (!existsSync(source)) {
  console.error(`Missing source header template: ${source}`);
  process.exit(1);
}

mkdirSync(dirname(destination), { recursive: true });
copyFileSync(source, destination);

console.log(`Copied tokenized header to ${destination}`);
