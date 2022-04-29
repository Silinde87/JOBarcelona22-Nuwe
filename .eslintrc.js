module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [{
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off'
    }
  }],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off'
  }
};