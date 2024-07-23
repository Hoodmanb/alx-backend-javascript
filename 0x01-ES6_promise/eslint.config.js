import js from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';
import jest from 'eslint-plugin-jest';

export default [
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        jest: 'readonly',
      },
    },
    plugins: {
      jest,
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['*.test.js'],
    languageOptions: {
      env: {
        jest: true,
      },
    },
  },
  {
    ignores: ['babel.config.js'],
  },
  airbnbBase,
];
