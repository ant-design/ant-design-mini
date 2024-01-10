import { getInstance } from 'tests/utils';
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
  it('guideTour onNext', () => {
    const { instance, onChange } = createGuideTour({});
    instance.callMethod('onNext');
    expect(instance.getData().mixin.value).toBe(1);
    expect(onChange).toBeCalledWith(1);
  });

  it('guideTour onPrev', () => {
    const { instance, onChange } = createGuideTour({
      defaultCurrent: 1,
    });

    instance.callMethod('onPrev');
    expect(instance.getData().mixin.value).toBe(0);
    expect(onChange).toBeCalledWith(0);
  });
  it('guideTour onSwiperChange', () => {
    const { instance, onChange } = createGuideTour({
      defaultCurrent: 1,
    });
    instance.callMethod('onSwiperChange', { detail: { current: 1 } });
    expect(instance.getData().mixin.value).toBe(1);
    expect(onChange).toBeCalledWith(1);
  });
  it('guideTour controlled', () => {
    const { instance, onChange } = createGuideTour({
      current: 0,
    });
    instance.callMethod('onNext');
    expect(instance.getData().mixin.value).toBe(0);
    expect(onChange).toBeCalledWith(1);
  });
});
