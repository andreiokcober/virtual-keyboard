module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: 'airbnb-base/legacy',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ignorePatterns: ['bundle.js', '.eslintrc.js', 'webpack.config.js'],
    rules: {
    },
  };