module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'import/no-unresolved': [2, { ignore: ['~'] }],
  },
};
