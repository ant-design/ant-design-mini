import { getInstance, sleep } from 'tests/utils';
import { vi } from 'vitest';
import {
  ISelectorItem,
  ISelectorProps,
} from '../../../compiled/alipay/src/Selector/props';

export const options: ISelectorItem[] = [
  {
    text: '1',
    value: 1,
  },
  {
    text: '2',
    value: 2,
  },
  {
    text: '3',
    value: 3,
  },
  {
    text: 'disabled',
    value: 'disabled',
    disabled: true,
  },
];

export function createSelector(props: Partial<ISelectorProps>) {
  const onChange = vi.fn();
  const onSelectMax = vi.fn();
  const onSelectMin = vi.fn();

  const componentProps: Partial<ISelectorProps> = {
    options,
    onChange,
    onSelectMin,
    onSelectMax,
    ...props,
  };

  const instance = getInstance('Selector', componentProps);

  async function selectByValue(value: string | number) {
    const selectItem = componentProps.options?.find((v) => v.value === value);
    if (!selectItem) {
      throw new Error(`找不到 value 为 ${value} 的选项`);
    }
    instance.callMethod('onChange', {
      currentTarget: {
        dataset: {
          disabled: selectItem.disabled,
          value: selectItem.value,
        },
      },
    });
    await sleep(10);
  }
  return {
    instance,
    onChange,
    onSelectMin,
    onSelectMax,
    selectByValue,
  };
}
