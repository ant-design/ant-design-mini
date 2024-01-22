import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { IToastProps } from '../../../src/Toast/props';

const createToast = (options: Partial<IToastProps>) => {
  const my = {
    canIUse() {
      return true;
    },
  };
  const onClose = vi.fn();
  const instance = getInstance(
    'Toast',
    {
      onClose,
      ...options,
    },
    my
  );
  return {
    instance,
    onClose,
  };
};

describe('test toast', () => {
  it('默认 close', () => {
    const { instance } = createToast({});
    expect(instance.getData().show).toBe(false);
  });

  it('测试修改 duration', async () => {
    const { instance, onClose } = createToast({
      duration: 100,
      visible: true,
    });
    expect(instance.getData().show).toBe(true);
    await sleep(200);
    expect(instance.getData().show).toBe(false);
    expect(onClose).toBeCalled();
  });

  it('duration 为 0 时一直显示', async () => {
    const { instance } = createToast({
      duration: 0,
      visible: true,
    });
    await sleep(200);
    expect(instance.getData().show).toBe(true);
  });

  it('maskCloseable 为 false', async () => {
    const { instance } = createToast({
      duration: 0,
      visible: true,
    });
    await instance.callMethod('handleClickMask');
    await sleep(10);
    expect(instance.getData().show).toBe(true);
  });

  it('maskCloseable 为 true', async () => {
    const { instance, onClose } = createToast({
      duration: 0,
      visible: true,
      showMask: true,
      maskCloseable: true,
    });
    await instance.callMethod('handleClickMask');
    await sleep(10);
    expect(instance.getData().show).toBe(false);
    expect(onClose).toBeCalled();
  });

  it('测试 Toast', async () => {
    const { instance, onClose } = createToast({
      duration: 100,
    });

    instance.setProps({
      visible: true,
    });
    expect(instance.getData().show).toBe(true);
    await sleep(300);
    expect(instance.getData().show).toBe(false);
    expect(onClose).toBeCalledTimes(1);
    instance.setProps({
      visible: false,
    });
    expect(onClose).toBeCalledTimes(1);
  });
});
