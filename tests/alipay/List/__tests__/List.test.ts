import { getInstance } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('list props', () => {
  it('list getConfig', () => {
    const onTap = vi.fn();
    const instance = getInstance('List', {
      onTap,
    });
    expect(instance.getConfig()).toMatchFileSnapshot(
      'snapshot/list_alipay_config.txt'
    );
  });
});
