import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { ITypographyProps } from '../../../src/Typography/props';

const createTypography = (options: Partial<ITypographyProps>) => {
  const my = {
    canIUse() {
      return true;
    },
    env: {
      platform: 'iOS',
    },
  };
  const instance = getInstance(
    'Typography',
    {
      ...options,
    },
    my
  );
  return {
    instance,
  };
};

describe('typography', () => {
  it('typography config', () => {
    const { instance } = createTypography({});
    const { data, props } = instance.getConfig();
    expect({ data, props }).toMatchFileSnapshot(
      'snapshot/typography_alipay_config.txt'
    );
  });

  it('test tap', async () => {
    const onTap = vi.fn();
    const catchTap = vi.fn();
    const onDisabledTap = vi.fn();
    const { instance } = createTypography({
      onTap,
      catchTap,
      onDisabledTap,
    });

    await instance.callMethod('onTap');
    await instance.callMethod('catchTap');
    await sleep(10);

    expect(catchTap).toBeCalledTimes(1);
    expect(onTap).toBeCalledTimes(1);
    expect(onDisabledTap).toBeCalledTimes(0);
  });

  it('disabled 为 true', async () => {
    const onTap = vi.fn();
    const catchTap = vi.fn();
    const onDisabledTap = vi.fn();
    const { instance } = createTypography({
      disabled: true,
      onTap,
      catchTap,
      onDisabledTap,
    });

    await instance.callMethod('onTap');
    await sleep(10);

    expect(catchTap).toBeCalledTimes(0);
    expect(onTap).toBeCalledTimes(0);
    expect(onDisabledTap).toBeCalledTimes(1);
  });
});
