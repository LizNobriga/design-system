module.exports = {
  root: true,
  extends: ['@open-wc/eslint-config', 'prettier'],
  rules: {
    indent: 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
    'operator-linebreak': 'off',
    'arrow-parens': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
  },
  ignorePatterns: ['**/dist/*', '**/stories/*'],
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
  },
  plugins: ['html'],
};
