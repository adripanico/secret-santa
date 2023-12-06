module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
    'plugin:i18next/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'simple-import-sort', 'import', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': 'error',
    curly: ['error', 'all'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
          // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/first': 'error',
    'import/no-unresolved': ['error', { ignore: ['.(scss|less|css)$', 'environment'] }],
    'import/newline-after-import': 'off',
    'import/no-duplicates': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      /* Alias definitions. Also in tsconfig.json and vite.config.ts. */
      alias: {
        map: [
          ['assets', './src/assets'],
          ['components', './src/components'],
          ['hooks', './src/hooks'],
          ['i18n', './src/i18n'],
          ['models', './src/models'],
          ['store', './src/store'],
          ['utils', './src/utils'],
        ],
        extensions: ['.ts', '.js', '.tsx', '.json'],
      },
    },
  },
};
