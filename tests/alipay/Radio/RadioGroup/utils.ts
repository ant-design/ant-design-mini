import { IRadioGroupProps } from 'compiled-alipay/Radio/RadioGroup/props';
import { getInstance, sleep } from 'tests/utils';
import { vi } from 'vitest';

export const defaultOptions: IRadioGroupProps['options'] = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
];

export function createRadioGroup(props: Partial<IRadioGroupProps>) {
  const onChange = vi.fn();

  const my = {};
  const instance = getInstance(
    'Radio/RadioGroup',
    {
      onChange,
      options: defaultOptions,
      ...props,
    },
    my
  );

  return {
    onChange,
    instance,
    callMethod: async (name, ...args) => {
      const res = instance.callMethod(name, ...args);
      await sleep(10);
      return res;
    },
  };
}
