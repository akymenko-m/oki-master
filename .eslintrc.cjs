module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: ['react', '@typescript-eslint', '@emotion'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
  },

  // ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts', 'src'],
};
