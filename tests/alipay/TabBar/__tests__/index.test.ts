import { getInstance, sleep } from 'tests/utils';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { describe, it, expect, vi } from 'vitest';

describe('tabBar onChange', () => {
  const my = {
    canIUse() {
      return false;
    },
  };
  const items = [
    {
      text: 'item1',
    },
    {
      text: 'item2',
    },
    {
      text: 'item3',
    },
  ];
  it('tabBar onChange', async () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'TabBar',
      {
        onChange,
        items,
      },
      my
    );
    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledWith(2, fmtEvent({}));
    await sleep(20);
    expect(instance.getData().mixin.value).toBe(2);
    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledTimes(1);
  });
  it('tabBar controlled', () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'TabBar',
      {
        onChange,
        items,
        current: 0,
      },
      my
    );
    instance.callMethod('onChange', fmtEvent({ 'data-index': 2 }));
    expect(onChange).toBeCalledWith(2, fmtEvent({}));
    expect(instance.getData().mixin.value).toBe(0);
  });
});
