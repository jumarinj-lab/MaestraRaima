import { cp, copyFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(fileURLToPath(new URL(".", import.meta.url)));
const outputDirectory = path.join(projectRoot, "dist");

if (path.dirname(outputDirectory) !== projectRoot || path.basename(outputDirectory) !== "dist") {
  throw new Error("Directorio de salida no seguro.");
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

const staticFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "robots.txt",
  "sitemap.xml",
  "_headers"
];

for (const fileName of staticFiles) {
  await copyFile(path.join(projectRoot, fileName), path.join(outputDirectory, fileName));
}

await cp(
  path.join(projectRoot, "imagenes de servicios"),
  path.join(outputDirectory, "imagenes de servicios"),
  { recursive: true }
);

console.log("Sitio preparado en dist/ para Cloudflare Workers.");
