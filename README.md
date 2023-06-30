# @kuzanatoliorg/prettier-config

Shared configuration to use prettier library into scope of @kuzantoliorg projects.

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

In case if you doesn't have configuration the following **.prettierrc.js** configuration will be generated into repository:

    module.exports = {
      ...require("@kuzanatoliorg/prettier-config"),
    };

**Note:** Script check ouly .json or .js config files and config into package.json.

For manula set up it is possible to add link to package.json

    {
      // ...
      "prettier": "@kuzanatoliorg/prettier-config"
    }

or import into js config file

    module.exports = {
      ...require("@kuzanatoliorg/prettier-config"),
      // Overided rules
    };

**Note:** Only js configuration allows overiding rules.
