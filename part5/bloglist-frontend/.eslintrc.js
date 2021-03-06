module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    "jest/globals": true,
    "cypress/globals": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018
  },
  plugins: ["react", "jest", "cypress"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    eqeqeq: "error",
    "no-unused-vars": "warn",
    "no-debugger": "off",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": 0,
    "react/prop-types": 0
  }
}
