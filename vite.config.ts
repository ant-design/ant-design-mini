// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      tests: 'tests',
      'compiled-alipay': 'compiled/alipay/src',
    },
  },
  test: {
    watch: true,
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'istanbul',
    },
  },
});
