const process = require("process");
const { resolve } = require("path");
const { existsSync, copyFileSync } = require("fs");

if (!process.cwd().includes("node_modules")) {
  process.exit();
}

const rootDir = resolve(process.cwd(), "../../..");
const packageJson = require(resolve(rootDir, "package.json"));

const filenames = [
  ".prettierrc",
  ".prettierrc.json",
  ".prettierrc.js",
  ".prettierrc.cjs",
  "prettier.config.js",
  "prettier.config.cjs",
];

if (
  !packageJson.prettier &&
  !filenames.find((file) => existsSync(resolve(rootDir, file)))
) {
  console.info("Create prettier configuration file");
  copyFileSync(
    resolve(__dirname, "sample.js"),
    resolve(rootDir, ".prettierrc.js")
  );
} else {
  console.info("Prettier configuration file is existed");
}
