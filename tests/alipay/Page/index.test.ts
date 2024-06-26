import { getInstance, sleep } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('Page', () => {
  it('Page config', async () => {
    const onActionTap = vi.fn();
    const instance = getInstance('Page', {
      onActionTap
    });
    const { props } = instance.getConfig();

    expect({ props }).toMatchFileSnapshot(
      'snapshot/page_alipay_config.txt'
    );

    instance.callMethod('handleActionTap');
    await sleep(10);
    expect(onActionTap).toBeCalled();
  });
});
