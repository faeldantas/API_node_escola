module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'using .mjs for all ES modules instead': 0,
    'prefer-destructuring': 0,
    'no-unused-vars': 0,
    'no-param-reassign': 0,
  },
};
