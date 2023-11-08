import { callMethod, getInstance, wrapValue } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';

describe('InputBlur 的 Controlled 模式', () => {
  it('如果有 controlled, 以 controlled 为准', async () => {
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      controlled: false,
    });
    expect(instance.getData().mixin.value).toBe('1');
    expect(instance.getData().mixin.controlled).toBe(false);
  });

  it('test onChange', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onChange,
    });
    expect(instance.getData().mixin.value).toBe('1');
    expect(instance.getData().mixin.controlled).toBe(true);
    await callMethod(instance, 'onChange', wrapValue('3'));
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"3"');
  });

  it('test onFocus', async () => {
    const onFocus = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onFocus,
    });

    await callMethod(instance, 'onFocus', wrapValue('2'));
    expect(onFocus.mock.calls.map((o) => o[0])).toEqual(['2']);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"1"');
    await callMethod(instance, 'onChange', wrapValue('4'));
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"4"');

    // focus 的时候不响应 value 的变化
    instance.setProps({ value: '2' });
    expect(instance.getData().mixin.value).toEqual('4');
  });

  it('test onBlur', async () => {
    const onBlur = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onBlur,
    });
    await callMethod(instance, 'onChange', wrapValue('2'));
    expect(instance.getData().mixin.value).toEqual('2');
    await callMethod(instance, 'onBlur', wrapValue('4'));
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"1"');
    expect(onBlur.mock.calls.map((o) => o[0])).toEqual(['4']);
  });

  it('test onConfirm', async () => {
    const onConfirm = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onConfirm,
    });
    await callMethod(instance, 'onConfirm', wrapValue('2'));
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"1"');
    expect(onConfirm.mock.calls.map((o) => o[0])).toEqual(['2']);
  });
});
