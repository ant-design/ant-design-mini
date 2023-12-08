import { IRadioProps } from 'compiled-alipay/radio/props';
import { getInstance, sleep } from 'tests/utils';
import { describe, it, vi } from 'vitest';

export function createRadio(props: IRadioProps) {
  const onChange = vi.fn();

  const my = {};
  const instance = getInstance(
    'Radio',
    {
      onChange,
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
