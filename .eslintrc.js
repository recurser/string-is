module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@next/next/recommended', // Put this last before prettier.
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  rules: {
    // Customize defaults.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'import/default': 'error',
    'import/export': 'error',
    'import/namespace': ['error', { allowComputed: true }],
    'import/no-default-export': 'error',
    'import/no-unresolved': ['error', { amd: true, commonjs: true }],
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
    'sort-keys': 'error',
    'sort-imports': ['error', { allowSeparatedGroups: true }],
    // Disable unwanted rules.
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'tsdoc/syntax': 'error',

    // Dave: to fix later if necessary.
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Introduced after typescript-eslint upgrade - Todo fix sometime.
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
}
