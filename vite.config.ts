import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      failOnWarning: false,
      failOnError: true,
    }),
  ],
  resolve: {
    /* Alias definitions. Also in tsconfig.json and .eslintrc.cjs. */
    alias: {
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
      i18n: `${path.resolve(__dirname, './src/i18n/')}`,
      models: `${path.resolve(__dirname, './src/models/')}`,
      store: `${path.resolve(__dirname, './src/store/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
    },
  },
});
