import { getInstance, sleep } from 'tests/utils';
import { IPickerProps } from '../../../../src/Picker/props';
import { vi } from 'vitest';

export function createPicker(
  props: Partial<IPickerProps & Record<string, any>> = {}
) {
  const onCancel = vi.fn();
  const onVisibleChange = vi.fn();
  const onChange = vi.fn();
  const onOk = vi.fn();

  const my = {
    canIUse() {
      return true;
    },
  };
  const instance = getInstance(
    'Picker',
    {
      onChange,
      onCancel,
      onVisibleChange,
      onOk,
      ...props,
    },
    my
  );

  return {
    instance,
    onCancel,
    onVisibleChange,
    onChange,
    onOk,
    callMethod: async (name, ...args) => {
      instance.callMethod(name, ...args);
      await sleep(10);
    },
  };
}
