// vite.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      tests: new URL('tests', import.meta.url).pathname,
      'compiled-alipay': new URL('./compiled/alipay/src', import.meta.url)
        .pathname,
    },
  },
  test: {
    server: {
      deps: {
        inline: [/functional-mini/],
      },
    },
    watch: true,
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      all: false,
      provider: 'istanbul',
    },
  },
});
