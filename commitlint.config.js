module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', []],
    'references-empty': [2, 'never'],
    'subject-case': [0, 'always'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['PC-'],
    },
  },
};
