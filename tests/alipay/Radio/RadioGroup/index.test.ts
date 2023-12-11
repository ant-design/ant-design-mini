import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { describe, expect, it } from 'vitest';
import { createRadioGroup } from './utils';

describe('Radio', () => {
  it('测试 defaultValue', async () => {
    const { instance } = createRadioGroup({
      defaultValue: '1',
    });
    expect(instance.getData().mixin.value).toEqual('1');
  });

  it('受控模式', async () => {
    const { instance } = createRadioGroup({
      value: '1',
      defaultValue: '2',
    });
    expect(instance.getData().mixin.value).toEqual('1');
  });

  it('受控模式', async () => {
    const { instance, onChange, callMethod } = createRadioGroup({
      value: '1',
      defaultValue: '2',
    });
    await callMethod(
      'onChange',
      {},
      fmtEvent({
        'data-index': 2,
      })
    );
    expect(onChange.mock.lastCall).toEqual(['3', fmtEvent({})]);
    expect(instance.getData().mixin.value).toEqual('1');
  });

  it('非受控模式', async () => {
    const { instance, onChange, callMethod } = createRadioGroup({
      defaultValue: '2',
    });
    expect(instance.getData().mixin.value).toEqual('2');
    await callMethod(
      'onChange',
      {},
      fmtEvent({
        'data-index': 2,
      })
    );
    expect(onChange.mock.lastCall).toEqual(['3', fmtEvent({})]);
    expect(instance.getData().mixin.value).toEqual('3');
  });
});
