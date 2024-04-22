import { getInstance, sleep } from 'tests/utils';
import { vi } from 'vitest';
import { ICascaderProps } from 'compiled-alipay/Picker/CascaderPicker/props';

export function createCascaderPicker(
  props: Partial<ICascaderProps & Record<string, any>> = {}
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
    'Picker/CascaderPicker',
    {
      onChange,
      onCancel,
      onVisibleChange,
      onOk,
      ...props,
    },
    my
  );
  async function callVisibleChange(visible) {
    instance.callMethod('onVisibleChange', visible);
    await sleep(100);
  }

  return {
    callVisibleChange,
    onCancel,
    onVisibleChange,
    onChange,
    onOk,
    instance,
    callMethod: async (name, ...args) => {
      const res = instance.callMethod(name, ...args);
      await sleep(10);
      return res;
    },
  };
}
export const cityList = [
  {
    label: '北京',
    children: [
      {
        label: '北京',
        value: '110',
      },
    ],
    value: '11',
  },
  {
    label: '河北',
    children: [
      {
        label: '石家庄',
        value: '188',
      },
      {
        label: '唐山',
        value: '181',
      },
      {
        label: '秦皇岛',
        value: '182',
      },
    ],
    value: '18',
  },
];
