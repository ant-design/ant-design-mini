import { getInstance } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('guideTour onCancel', () => {
  it('guideTour onCancel', () => {
    const my = {
      canIUse() {
        return true;
      },
    };
    const onCancel = vi.fn();
    const instance = getInstance(
      'GuideTour',
      {
        onCancel,
      },
      my
    );
    instance.callMethod('onCancel');
    expect(onCancel).toBeCalled();
  });
});

describe('guideTour onChange', () => {
  it('guideTour onNext', () => {
    const my = {
      canIUse() {
        return true;
      },
    };
    const onChange = vi.fn();
    const instance = getInstance(
      'GuideTour',
      {
        onChange,
      },
      my
    );
    instance.callMethod('onNext');
    expect(instance.getData().mixin.value).toBe(1);
    expect(onChange).toBeCalledWith(1);
  });
  it('guideTour onPrev', () => {
    const my = {
      canIUse() {
        return true;
      },
    };
    const onChange = vi.fn();
    const instance = getInstance(
      'GuideTour',
      {
        onChange,
        defaultCurrent: 1,
      },
      my
    );

    instance.callMethod('onPrev');
    expect(instance.getData().mixin.value).toBe(0);
    expect(onChange).toBeCalledWith(0);
  });
  it('guideTour onSwiperChange', () => {
    const my = {
      canIUse() {
        return true;
      },
    };
    const onChange = vi.fn();
    const instance = getInstance(
      'GuideTour',
      {
        onChange,
      },
      my
    );

    instance.callMethod('onSwiperChange', { detail: { current: 1 } });
    expect(instance.getData().mixin.value).toBe(1);
    expect(onChange).toBeCalledWith(1);
  });
  it('guideTour controlled', () => {
    const my = {
      canIUse() {
        return true;
      },
    };
    const onChange = vi.fn();
    const instance = getInstance(
      'GuideTour',
      {
        onChange,
        current: 0,
      },
      my
    );
    instance.callMethod('onNext');
    expect(instance.getData().mixin.value).toBe(0);
    expect(onChange).toBeCalledWith(1);
  });
});
