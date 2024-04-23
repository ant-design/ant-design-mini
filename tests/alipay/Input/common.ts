import { getInstance, sleep, callMethod, wrapValue } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

export function textInputAndTextArea(componentName: string, defaultProps) {
  it('test default props', async () => {
    const instance = getInstance(componentName, {});
    expect(instance.getConfig().props).toEqual(defaultProps);
  });

  describe('Input 非受控', () => {
    it('测试 default value', async () => {
      const onChange = vi.fn();
      const instance = getInstance(componentName, {
        defaultValue: '1',
        onChange,
      });
      expect(instance.getData().state.value).toBe('1');
      instance.setProps({ value: '2' });
      expect(instance.getData().state.value).toEqual('2');
      instance.setProps({ value: undefined });
      expect(instance.getData().state.value).toEqual(undefined);
    });

    it('测试 default value 和 value 同时存在', async () => {
      const onChange = vi.fn();
      const instance = getInstance(componentName, {
        value: '3',
        isControlled: false,
        defaultValue: '1',
        onChange,
      });
      expect(instance.getData().state.value).toBe('3');
      instance.setProps({ value: '2' });
      expect(instance.getData().state.value).toEqual('2');
      instance.setProps({ value: undefined });
      expect(instance.getData().state.value).toEqual(undefined);
    });

    it('如果有 value 且 controlled 为 false, 以 controlled 为准', async () => {
      const onChange = vi.fn();
      const instance = getInstance(componentName, {
        value: '1',
        controlled: false,
        onChange,
      });
      expect(instance.getData().state.value).toBe('1');
      expect(instance.getData().state.controlled).toBe(false);
      await callMethod(instance, 'onChange', wrapValue('3'));
      expect(instance.getData().state.value).toEqual('3');
      expect(onChange.mock.calls.map((o) => o[0])).toEqual(['3']);

      instance.setProps({ value: '2' });
      expect(instance.getData().state.value).toEqual('2');
      instance.setProps({ value: undefined });
      expect(instance.getData().state.value).toEqual(undefined);
      instance.setProps({ value: null });
      expect(instance.getData().state.value).toEqual(null);
    });

    it('调用 update 函数的时候, 不触发 onChange', async () => {
      const onChange = vi.fn();
      const instance = getInstance(componentName, {
        value: '1',
        controlled: false,
        onChange,
      });
      await callMethod(instance, 'update', '2');
      expect(instance.getData().state.value).toBe('2');
      expect(onChange.mock.calls.map((o) => o[0])).toEqual([]);
    });

    it('onClear 触发的时候会调用 onChange', async () => {
      const onChange = vi.fn();
      const instance = getInstance(componentName, { onChange });
      expect(instance.getData().state.controlled).toBe(false);
      expect(instance.getData().state.value).toEqual(undefined);

      await callMethod(instance, 'onChange', wrapValue('3'));
      expect(instance.getData().state.value).toEqual('3');

      await callMethod(instance, 'onClear', {});
      expect(instance.getData().state.value).toEqual('');

      expect(onChange.mock.calls.map((o) => o[0])).toMatchInlineSnapshot(`
        [
          "3",
          "",
        ]
      `);
    });
  });

  describe('Input 受控模式', () => {
    it('测试 default value 和 value 同时存在', async () => {
      const onChange = vi.fn();
      const instance = getInstance(componentName, {
        value: '3',
        defaultValue: '1',
        onChange,
      });
      expect(instance.getData().state.value).toBe('3');
      instance.setProps({ value: '2' });
      expect(instance.getData().state.value).toEqual('2');
      instance.setProps({ value: undefined });
      expect(instance.getData().state.value).toEqual(undefined);
    });

    it('如果有 controlled, 以 controlled 为准', async () => {
      const instance = getInstance(componentName, {
        controlled: true,
      });
      expect(instance.getData().state.controlled).toBe(true);

      instance.setProps({ value: '2' });
      expect(instance.getData().state.value).toEqual('2');
      instance.setProps({ value: undefined });
      expect(instance.getData().state.value).toEqual(undefined);
      instance.setProps({ value: null });
      expect(instance.getData().state.value).toEqual(null);
    });

    it('受控模式下, update 无效', async () => {
      const instance = getInstance(componentName, {
        value: '1',
      });
      expect(instance.getData().state.controlled).toBe(true);
      expect(instance.getData().state.value).toBe('1');

      instance.setProps({ value: '2' });
      expect(instance.getData().state.value).toEqual('2');
      instance.setProps({ value: undefined });
      expect(instance.getData().state.value).toEqual(undefined);
      instance.setProps({ value: null });
      expect(instance.getData().state.value).toEqual(null);
    });

    // it('受控模式下, update 无效', async () => {
    //   const instance = getInstance(componentName, {
    //     value: '1',
    //     controlled: true,
    //   });
    //   expect(instance.getData().state.value).toBe('1');
    //   expect(instance.getData().state.controlled).toBe(true);
    //   await callMethod(instance, 'update', '3');
    //   expect(instance.getData().state.value).toBe('1');
    // });

    it('受控模式下 onChange 无效', async () => {
      const onChange = vi.fn();
      const instance = getInstance(componentName, {
        value: '1',
        onChange,
      });
      expect(instance.getData().state.value).toBe('1');
      await callMethod(instance, 'onChange', wrapValue('3'));
      expect(instance.getData().state.value).toEqual('1');
      expect(onChange.mock.calls.map((o) => o[0])).toEqual(['3']);
      instance.setProps({ value: '3' });
      expect(instance.getData().state.value).toEqual('3');
    });

    it('测试 onFocus 和 onBlur', async () => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      const instance = getInstance(componentName, {
        value: '1',
        onFocus,
        onBlur,
      });
      expect(instance.getData().selfFocus).toBeFalsy();
      await callMethod(instance, 'onFocus', wrapValue('3'));
      await sleep(30);
      expect(instance.getData().selfFocus).toBeTruthy();
      expect(onFocus.mock.calls.map((o) => o[0])).toEqual(['3']);
      await callMethod(instance, 'onBlur', wrapValue('4'));
      expect(instance.getData().state.value).toMatchInlineSnapshot('"1"');
      expect(onBlur.mock.calls.map((o) => o[0])).toEqual(['4']);
    });

    it('test onConfirm', async () => {
      const onConfirm = vi.fn();
      const instance = getInstance(componentName, {
        value: '1',
        onConfirm,
      });
      await callMethod(instance, 'onConfirm', wrapValue('1'));
      expect(onConfirm.mock.calls.map((o) => o[0])).toEqual(['1']);
    });

    it('受控模式下调用 onClear, 数据不变', async () => {
      const onChange = vi.fn();
      const instance = getInstance(componentName, {
        value: '1',
        onChange,
      });
      await callMethod(instance, 'onClear', {});
      expect(onChange.mock.calls.map((o) => o[0])).toEqual(['']);
      expect(instance.getData().state.value).toEqual('1');
    });
  });
}
