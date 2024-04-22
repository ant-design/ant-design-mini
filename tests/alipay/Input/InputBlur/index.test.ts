import { callMethod, getInstance, wrapValue } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';

it('测试 InputBlur 默认的 props', () => {
  const instance = getInstance('Input/InputBlur', {
    value: '1',
  });
  expect(instance.getConfig().props).toEqual({
    placeholderClassName: '',
    placeholderStyle: '',
  });
});

describe('InputBlur 的受控模式', () => {
  it('InputBlur 即使在受控模式下, 也会更新', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onChange,
    });
    expect(instance.getData().state.value).toBe('1');
    await callMethod(instance, 'onChange', wrapValue('3'));
    expect(instance.getData().state.value).toMatchInlineSnapshot('"3"');
  });

  it('受控模式, 随着 value 改变而改变', async () => {
    const onFocus = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onFocus,
    });

    instance.setProps({ value: '2' });
    expect(instance.getData().state.value).toEqual('2');
  });

  it('onFocus 时，不会随着 value 改变而改变', async () => {
    const onFocus = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onFocus,
    });

    await callMethod(instance, 'onFocus', wrapValue('2'));
    expect(onFocus.mock.calls.map((o) => o[0])).toEqual(['2']);
    expect(instance.getData().state.value).toMatchInlineSnapshot('"1"');

    // focus 的时候不响应 props 的变化
    instance.setProps({ value: '2' });
    expect(instance.getData().state.value).toEqual('1');

    await callMethod(instance, 'onChange', wrapValue('4'));
    expect(instance.getData().state.value).toMatchInlineSnapshot('"4"');
  });

  it('onBlur 时候需要将 value 更新为 props 的数值', async () => {
    const onBlur = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onBlur,
    });
    await callMethod(instance, 'onFocus', wrapValue('2'));

    await callMethod(instance, 'onChange', wrapValue('2'));
    expect(instance.getData().state.value).toEqual('2');

    instance.setProps({ value: '2.0' });
    expect(instance.getData().state.value).toEqual('2');

    // on blur 时候, 将 value 更新为 props.value
    await callMethod(instance, 'onBlur', wrapValue('4'));
    expect(onBlur.mock.calls.map((o) => o[0])).toEqual(['4']);
    expect(instance.getData().state.value).toEqual('2.0');
  });

  it('test onConfirm', async () => {
    const onConfirm = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onConfirm,
    });
    await callMethod(instance, 'onConfirm', wrapValue('2'));
    expect(instance.getData().state.value).toMatchInlineSnapshot('"1"');
    expect(onConfirm.mock.calls.map((o) => o[0])).toEqual(['2']);
  });
});

describe('InputBlur 的非受控模式', () => {
  it('非受控模式下, 内部的 value 一直不变, value 一直是 undefined', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      onChange,
    });
    expect(instance.getData().state.value).toBe(undefined);
    await callMethod(instance, 'onChange', wrapValue('3'));
    expect(onChange.mock.calls.map((o) => o[0])).toEqual(['3']);
    expect(instance.getData().state.value).toBe(undefined);

    instance.setProps({ value: '4' });
    expect(instance.getData().state.value).toBe('4');

    instance.setProps({ value: undefined });
    expect(instance.getData().state.value).toBe(undefined);
  });

  it('controlled 优先级高于 value', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '3',
      controlled: false,
      onChange,
    });
    expect(instance.getData().state.value).toBe('3');
    await callMethod(instance, 'onChange', wrapValue('2'));
    expect(onChange.mock.calls.map((o) => o[0])).toEqual(['2']);
    expect(instance.getData().state.value).toBe('3');

    instance.setProps({ value: '4' });
    expect(instance.getData().state.value).toBe('4');

    instance.setProps({ value: undefined });
    expect(instance.getData().state.value).toBe(undefined);
  });

  it('在有 value 的非受控模式, 仍然有 onBlur 的逻辑', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '3',
      controlled: false,
      onChange,
    });
    await callMethod(instance, 'onFocus', wrapValue('2'));
    instance.setProps({ value: '4' });
    expect(instance.getData().state.value).toBe('3');
    await callMethod(instance, 'onBlur', wrapValue('4'));
    instance.setProps({ value: '4' });
  });
});
