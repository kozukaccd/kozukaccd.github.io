module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  // plugins: ['prettier'],
  // add your custom rules here
  rules: {
    "comma-dangle": 0,
    "space-before-function-parenthes":0,
  }
}