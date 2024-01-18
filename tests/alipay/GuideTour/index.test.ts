import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';
import { IGuideTour } from '../../../src/GuideTour/props';

const createGuideTour = (options: Partial<IGuideTour>) => {
  const my = {
    canIUse() {
      return true;
    },
  };
  const onChange = vi.fn();
  const onCancel = vi.fn();
  const instance = getInstance(
    'GuideTour',
    {
      onCancel,
      onChange,
      ...options,
    },
    my
  );
  return {
    instance,
    onCancel,
    onChange,
  };
};

describe('guideTour onCancel', () => {
  it('guideTour onCancel', () => {
    const { instance, onCancel } = createGuideTour({});
    instance.callMethod('onCancel');
    expect(onCancel).toBeCalled();
  });
});

describe('guideTour onChange', () => {
  it('guideTour onNext', async () => {
    const { instance, onChange } = createGuideTour({});
    instance.callMethod('onNext');
    await sleep(10);
    expect(instance.getData().mixin.value).toBe(1);
    expect(onChange).toBeCalledWith(1, fmtEvent({}));
  });

  it('guideTour onPrev', async () => {
    const { instance, onChange } = createGuideTour({
      defaultCurrent: 1,
    });

    instance.callMethod('onPrev');
    await sleep(10);
    expect(instance.getData().mixin.value).toBe(0);
    expect(onChange).toBeCalledWith(0, fmtEvent({}));
  });
  it('guideTour onSwiperChange', () => {
    const { instance, onChange } = createGuideTour({
      defaultCurrent: 1,
    });
    instance.callMethod('onSwiperChange', { detail: { current: 1 } });
    expect(instance.getData().mixin.value).toBe(1);
    expect(onChange).toBeCalledWith(1, fmtEvent({}));
  });
  it('guideTour controlled', () => {
    const { instance, onChange } = createGuideTour({
      current: 0,
    });
    instance.callMethod('onNext');
    expect(instance.getData().mixin.value).toBe(0);
    expect(onChange).toBeCalledWith(1, fmtEvent({}));
  });
});
