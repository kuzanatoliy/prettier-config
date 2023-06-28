const { resolve } = require("path");
const { existsSync, copyFileSync } = require("fs");

const rootDir = process.cwd();
const packageJson = require(resolve(process.cwd(), "package.json"));

const filenames = [
  ".prettierrc",
  ".prettierrc.json",
  ".prettierrc.yml",
  ".prettierrc.yaml",
  ".prettierrc.json",
  ".prettierrc.js",
  ".prettierrc.cjs",
  "prettier.config.js",
  "prettier.config.cjs",
  ".prettierrc.toml",
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
