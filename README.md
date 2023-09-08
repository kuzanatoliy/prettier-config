# @kuzanatoliorg/prettier-config

Shared configuration to use a prettier library into the scope of @kuzantoliorg projects.

## Precondition

The package requires the installation of [the prettier package](https://www.npmjs.com/package/prettier)

## Usage

### Install:

#### npm

```
npm install @kuzanatoliorg/prettier-config --save-dev
```

#### yarn

```
yarn add @kuzanatoliorg/prettier-config --dev
```

### Usage:

In case you don't have configuration the following **.prettierrc.js** configuration will be generated into the repository:

    module.exports = {
      ...require("@kuzanatoliorg/prettier-config"),
    };

**Note:** Script check only .json or .js config files and config into package.json.

For manual set-up, it is possible to add a link to package.json

    {
      // ...
      "prettier": "@kuzanatoliorg/prettier-config"
    }

or import into the js config file

    module.exports = {
      ...require("@kuzanatoliorg/prettier-config"),
      // Overided rules
    };

**Note:** Only js configuration allows overriding rules.
