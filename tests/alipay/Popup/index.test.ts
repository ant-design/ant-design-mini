import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';

function createPopupInstance(props: any, SDKVersion?: string) {
  const my = {
    SDKVersion: SDKVersion || '2.0.0',
  };
  return getInstance('Popup', props, my);
}

describe('Popup', () => {
  it('基础库 2.0', () => {
    const instance = createPopupInstance({});
    expect(instance.getData().isOldVersion).toBe(false);
  });
  it('基础库 1.0', () => {
    const instance = createPopupInstance({}, '1.0.0');
    expect(instance.getData().isOldVersion).toBe(true);
  });

  it('测试 onAnimationEnd 逻辑', async () => {
    const instance = createPopupInstance({
      visible: true,
    });
    instance.setProps({
      visible: false,
    });
    await sleep(10);
    expect(instance.getData().closing).toBe(true);
    instance.callMethod('onAnimationEnd');
    await sleep(20);
    expect(instance.getData().closing).toBe(false);
  });

  it('测试 onTapMask', async () => {
    const onClose = vi.fn();
    const instance = createPopupInstance({
      visible: true,
      onClose,
    });
    instance.callMethod('onTapMask');
    expect(onClose.mock.calls.length).toBe(1);
    instance.setProps({
      visible: false,
    });
    await sleep(10);
    expect(instance.getData().closing).toBe(true);
    instance.callMethod('onTapMask');
    expect(onClose.mock.calls.length).toBe(1);
    instance.callMethod('onAnimationEnd');
    await sleep(20);
    expect(instance.getData().closing).toBe(false);
  });

  it('测试 animation: false', async () => {
    const onClose = vi.fn();
    const instance = createPopupInstance({
      visible: true,
      animation: false,
      onClose,
    });
    instance.setProps({
      visible: false,
    });
    expect(onClose.mock.calls.length).toBe(0);
    expect(instance.getData().closing).toBe(false);
    instance.callMethod('onTapMask');
    expect(onClose.mock.calls.length).toBe(1);
  });

  it('测试 onAfterShow 与 onAfterClose', async () => {
    const onAfterShow = vi.fn();
    const onAfterClose = vi.fn();
    const instance = createPopupInstance({
      visible: true,
      onAfterShow,
      onAfterClose,
    });

    instance.callMethod('onAnimationEnd');
    expect(onAfterShow.mock.calls.length).toBe(1);

    instance.setProps({
      visible: false,
    });
    instance.callMethod('onAnimationEnd');
    expect(onAfterClose.mock.calls.length).toBe(1);
  });

  it('测试 onAfterShow 与 onAfterClose: animation 为 false 的情况', async () => {
    const onAfterShow = vi.fn();
    const onAfterClose = vi.fn();
    const instance = createPopupInstance({
      visible: true,
      animation: false,
      onAfterShow,
      onAfterClose,
    });

    instance.setProps({
      visible: false,
    });

    expect(onAfterClose.mock.calls.length).toBe(1);

    instance.setProps({
      visible: true,
    });
    expect(onAfterShow.mock.calls.length).toBe(1);
  });
});
