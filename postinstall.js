const { cwd, exit } = require('node:process');
const { resolve } = require('node:path');
const { existsSync, copyFileSync } = require('node:fs');

if (!cwd().includes('node_modules')) {
  exit();
}

const rootDir = resolve(cwd(), '../../..');

const filenames = [
  '.prettierrc',
  '.prettierrc.json',
  '.prettierrc.js',
  '.prettierrc.cjs',
  'prettier.config.js',
  'prettier.config.cjs',
];

const { type } = require(resolve(rootDir, 'package.json'));

if (!filenames.find((file) => existsSync(resolve(rootDir, file)))) {
  console.info('Create prettier configuration file');
  copyFileSync(
    resolve(__dirname, 'sample.js'),
    resolve(rootDir, type === 'module' ? '.prettierrc.cjs' : '.prettierrc.js')
  );
} else {
  console.info('Prettier configuration file is existed');
}
