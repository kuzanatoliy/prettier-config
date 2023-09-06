const { cwd, exit } = require('node:process');
const { resolve } = require('node:path');
const { existsSync, copyFileSync } = require('node:fs');
const { exec } = require('node:child_process');

if (!cwd().includes('node_modules')) {
  exit();
}

const rootDir = resolve(cwd(), '../../..');
const packageJson = require(resolve(rootDir, 'package.json'));

const filenames = [
  '.prettierrc',
  '.prettierrc.json',
  '.prettierrc.js',
  '.prettierrc.cjs',
  'prettier.config.js',
  'prettier.config.cjs',
];

if (!packageJson.prettier) {
  if (existsSync(resolve(rootDir, 'package-lock.json'))) {
    console.info('Install prettier lib by npm');
    exec('npm install --save-dev prettier', { cwd: rootDir });
  } else if (existsSync(resolve(rootDir, 'package-lock.json'))) {
    console.info('Install prettier lib by yarn');
    exec('yarn add --dev prettier', { cwd: rootDir });
  }
}

if (!filenames.find((file) => existsSync(resolve(rootDir, file)))) {
  console.info('Create prettier configuration file');
  copyFileSync(
    resolve(__dirname, 'sample.js'),
    resolve(rootDir, '.prettierrc.js')
  );
} else {
  console.info('Prettier configuration file is existed');
}
