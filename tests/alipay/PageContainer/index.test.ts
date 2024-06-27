import { getInstance, sleep } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('PageContainer', () => {
  it('PageContainer config', async () => {
    const onActionTap = vi.fn();
    const instance = getInstance('PageContainer', {
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
