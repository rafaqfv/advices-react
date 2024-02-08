module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': ["error", {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': false,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': true,
      'endOfLine': 'auto',
    }],
  },
}

