import { expect, it } from 'vitest';
import { compareVersion } from 'compiled-alipay/_util/compareVersion';

it('test compareVersion', () => {
  expect(compareVersion('1.0.0', '2.9.9')).toBe(-1);
  expect(compareVersion('1.0.0', '1.0.1')).toBe(-1);
  expect(compareVersion('1.0.0', '1.1.0')).toBe(-1);
  expect(compareVersion('1.0.0', '1.1')).toBe(-1);

  expect(compareVersion('2.9.9', '1.0.0')).toBe(1);

  expect(compareVersion('1.0.0', '1.0.0')).toBe(0);
});
