import { getInstance } from 'tests/utils';
import { describe, it, expect } from 'vitest';

describe('badge', () => {
  it('Badge config', () => {
    const instance = getInstance('Badge', {});
    expect(instance.getConfig()).toMatchFileSnapshot(
      'snapshot/badge_alipay_config.txt'
    );
  });
  it.skip('badge overCount true', () => {
    const instance = getInstance('Badge', {
      text: 102,
    });
    expect(instance.getData().overCount).toBe(true);
  });
  it.skip('badge overCount false', () => {
    const instance = getInstance('Badge', {
      text: 75,
    });

    expect(instance.getData().overCount).toBe(false);
  });
});
