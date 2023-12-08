import { getInstance, sleep } from 'tests/utils';
import { vi } from 'vitest';
import { IDateRangePickerProps } from 'compiled-alipay/DatePicker/RangePicker/props';

export const createDateRangePicker = (
  props?: Partial<IDateRangePickerProps>
) => {
  const onOk = vi.fn();
  const onCancel = vi.fn();
  const onPickerChange = vi.fn();
  const onVisibleChange = vi.fn();

  const instance = getInstance('DatePicker/RangePicker', {
    onOk,
    onCancel,
    onPickerChange,
    onVisibleChange,
    ...(props || {}),
  });

  return {
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

    currentDate() {
      const { currentStartDate, currentEndDate } = instance.getData();
      return {
        currentEndDate,
        currentStartDate,
      };
    },
  };
};
