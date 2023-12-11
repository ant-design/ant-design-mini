import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { describe, expect, it } from 'vitest';
import { createRadio } from './utils';

describe('Radio', () => {
  it('测试 defaultChecked', async () => {
    const { instance } = createRadio({
      defaultChecked: true,
    });
    expect(instance.getData().mixin.value).toEqual(true);
    instance.setProps({ checked: false });
    expect(instance.getData().mixin.value).toEqual(false);
  });

  it('受控模式', async () => {
    const { instance, callMethod } = createRadio({
      checked: false,
      defaultChecked: true,
    });
    expect(instance.getData().mixin.value).toEqual(false);
    await callMethod('onChange', { detail: { value: false } });
    expect(instance.getData().mixin.value).toEqual(false);
  });

  it('onChange 事件', async () => {
    const { instance, onChange, callMethod } = createRadio({
      defaultChecked: true,
    });
    await callMethod('onChange', { detail: { value: false } });
    expect(instance.getData().mixin.value).toEqual(false);
    expect(onChange.mock.lastCall).toEqual([
      false,
      fmtEvent({}, { detail: { value: false } }),
    ]);
    await callMethod('onChange', { detail: { value: true } });
    expect(onChange.mock.lastCall).toEqual([
      true,
      fmtEvent({}, { detail: { value: true } }),
    ]);
  });
});
