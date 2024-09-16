module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off', // This disables the prop-types rule
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};