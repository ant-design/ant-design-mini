import { IDatePickerProps } from 'compiled-alipay/DatePicker/props';
import { getInstance, sleep } from 'tests/utils';
import { vi } from 'vitest';

export const createDatePicker = (props?: Partial<IDatePickerProps>) => {
  const onOk = vi.fn();
  const onCancel = vi.fn();
  const onPickerChange = vi.fn();
  const onVisibleChange = vi.fn();

  const instance = getInstance('DatePicker', {
    onOk,
    onCancel,
    onPickerChange,
    onVisibleChange,
    ...(props || {}),
  });

  async function callVisibleChange(visible) {
    instance.callMethod('onVisibleChange', visible);
    await sleep(100);
  }

  async function changeSelect(value) {
    instance.callMethod('onChange', value);
    await sleep(20);
  }

  async function callOk() {
    instance.callMethod('onOk');
    await sleep(20);
  }

  return {
    callVisibleChange,
    changeSelect,
    callOk,
    onOk,
    onCancel,
    onPickerChange,
    onVisibleChange,
    instance,
    callMethod: async (name, ...args) => {
      const res = instance.callMethod(name, ...args);
      await sleep(20);
      return res;
    },
  };
};
