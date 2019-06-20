const ifProduction = (a, b) => (process.env.NODE_ENV === 'production' ? a : b)

module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
    'no-console': [
      'off',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 'off',
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
}
