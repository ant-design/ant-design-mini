import { afterAll, vi } from 'vitest';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
globalThis.jest = vi;

globalThis.componentCoverage = [];

afterAll(() => {
  globalThis.componentCoverage?.map((o) => {
    globalThis['__VITEST_COVERAGE__'] = Object.assign(
      globalThis['__VITEST_COVERAGE__'] ?? {},
      o['__ANTD_COVERAGE__']
    );
  });
});
