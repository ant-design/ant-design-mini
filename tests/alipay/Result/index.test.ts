import { getInstance } from 'tests/utils';
import { describe, it, expect } from 'vitest';

describe('Result config', () => {
  it('Result config', () => {
    const instance = getInstance('Result', {});
    expect(instance.getConfig()).toMatchFileSnapshot(
      'snapshot/result_alipay_config.txt'
    );
  });
});
