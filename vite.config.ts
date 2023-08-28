// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch: true,
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'istanbul',
    },
  },
});
