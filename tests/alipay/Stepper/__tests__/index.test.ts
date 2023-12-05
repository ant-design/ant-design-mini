import { getInstance, sleep } from 'tests/utils';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getPrecision, getValidNumber } from 'compiled-alipay/Stepper/utils';
import { describe, it, expect, vi } from 'vitest';

describe('stepper', () => {
  const my = {
    canIUse() {
      return true;
    },
  };

  it('getPrecision', () => {
    expect(getPrecision(1)).toBe(0);
    expect(getPrecision(1.2)).toBe(1);
    expect(getPrecision(-1)).toBe(0);
    expect(getPrecision(-1.2)).toBe(1);
    expect(getPrecision(1e-2)).toBe(2);
    expect(getPrecision(-1e-2)).toBe(2);
    expect(getPrecision(-1e-12)).toBe(12);
  });

  it('getValidNumber', async () => {
    expect(getValidNumber(undefined, undefined, undefined, 1, 1)).toEqual({
      valid: true,
      value: '',
    });
    expect(getValidNumber(undefined, -Infinity, Infinity, 1, 1)).toEqual({
      valid: true,
      value: '',
    });
    expect(getValidNumber(null, -Infinity, Infinity, 1, 1)).toEqual({
      valid: true,
      value: '',
    });
    expect(getValidNumber('', -Infinity, Infinity, 1, 1)).toEqual({
      valid: true,
      value: '',
    });
    expect(getValidNumber('0', -Infinity, Infinity, 1, 0)).toEqual({
      valid: true,
      value: '0',
    });
    expect(getValidNumber(0, -Infinity, Infinity, 1, 0)).toEqual({
      valid: true,
      value: '0',
    });
    expect(getValidNumber(1, -Infinity, Infinity, 1, 0)).toEqual({
      valid: true,
      value: '1',
    });
    expect(getValidNumber(1, 2, Infinity, 1, 0)).toEqual({
      valid: true,
      value: '2',
    });
    expect(getValidNumber(2, -Infinity, 1, 1, 0)).toEqual({
      valid: true,
      value: '1',
    });
    expect(getValidNumber(1, -Infinity, Infinity, 1, 1)).toEqual({
      valid: true,
      value: '1.0',
    });
  });

  function testMixinValue(props, expectValue) {
    const instance = getInstance('Stepper', props, my);
    expect(instance.getData().mixin.value).toBe(expectValue);
  }

  it('stepper defaultValue', async () => {
    [
      {
        props: {
          defaultValue: 1.02,
        },
        expectValue: '1.02',
      },
      {
        props: {
          defaultValue: null,
        },
        expectValue: '',
      },
      {
        props: {
          defaultValue: 'not_a_number',
        },
        expectValue: undefined,
      },
      {
        props: {
          defaultValue: '10.0',
        },
        expectValue: '10',
      },
      {
        props: {
          value: null,
        },
        expectValue: '',
      },
      {
        props: {
          value: {},
        },
        expectValue: undefined,
      },
    ].forEach(({ props, expectValue }) => {
      testMixinValue(props, expectValue);
    });
  });

  it('stepper defaultValue with step', async () => {
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 0,
        step: 0.1,
      },
      my
    );
    expect(instance.getData().mixin.value).toBe('0.0');
  });

  it('stepper defaultValue with precision', async () => {
    const instance1 = getInstance(
      'Stepper',
      {
        defaultValue: 1.02,
        precision: 1,
      },
      my
    );
    expect(instance1.getData().mixin.value).toBe('1.0');

    const instance2 = getInstance(
      'Stepper',
      {
        defaultValue: 1.05,
        precision: 1,
      },
      my
    );
    expect(instance2.getData().mixin.value).toBe('1.1');
  });

  it('stepper add', async () => {
    const instance1 = getInstance(
      'Stepper',
      {
        defaultValue: 0.9,
        step: 0.1,
      },
      my
    );
    instance1.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(20);
    expect(instance1.getData().mixin.value).toBe('1.0');

    const instance2 = getInstance(
      'Stepper',
      {
        defaultValue: 0.9,
        step: 0.12,
      },
      my
    );
    instance2.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(10);
    expect(instance2.getData().mixin.value).toBe('1.02');
  });

  it('stepper minus', async () => {
    const instance1 = getInstance(
      'Stepper',
      {
        defaultValue: 0.1,
        step: 0.1,
      },
      my
    );
    instance1.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'minus',
      })
    );
    await sleep(10);
    expect(instance1.getData().mixin.value).toBe('0.0');

    const instance2 = getInstance(
      'Stepper',
      {
        defaultValue: 0.2,
        step: 0.1,
        onChange(value: number | null) {
          expect(value).toBe(0.3);
        },
      },
      my
    );
    instance2.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(10);
    expect(instance2.getData().mixin.value).toBe('0.3');
  });

  it('stepper add with precision', async () => {
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 1.02,
        step: 0.1,
        precision: 1,
      },
      my
    );
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(10);
    expect(instance.getData().mixin.value).toBe('1.1');
  });

  it('stepper minus with precision', async () => {
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 1.02,
        step: 0.1,
        precision: 1,
      },
      my
    );
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'minus',
      })
    );
    await sleep(10);
    expect(instance.getData().mixin.value).toBe('0.9');
  });

  it('stepper controlled', async () => {
    let onChangeValue: number | null;
    const instance = getInstance(
      'Stepper',
      {
        value: 1.02,
        step: 0.1,
        precision: 1,
        onChange(value: number | null) {
          onChangeValue = value;
        },
      },
      my
    );

    expect(instance.getData().mixin.value).toBe('1.0');
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'minus',
      })
    );
    expect(onChangeValue).toBe(0.9);

    expect(instance.getData().mixin.value).toBe('1.0');
    instance.setProps({
      value: 0.9,
    });
    expect(instance.getData().mixin.value).toBe('0.9');
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    expect(onChangeValue).toBe(1);
    expect(instance.getData().mixin.value).toBe('0.9');
    instance.setProps({
      value: 1,
    });
    expect(instance.getData().mixin.value).toBe('1.0');

    instance.setProps({
      value: '1.12',
    });
    expect(instance.getData().mixin.value).toBe('1.1');

    instance.setProps({
      value: 'invalid',
    });
    expect(instance.getData().mixin.value).toBe('1.1');
  });

  it('stepper mix max', async () => {
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 0.1,
        step: 0.1,
        min: 0,
        max: 0.2,
      },
      my
    );
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'minus',
      })
    );
    await sleep(20);
    expect(instance.getData().mixin.value).toBe('0.0');
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'minus',
      })
    );
    expect(instance.getData().mixin.value).toBe('0.0');
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(10);
    expect(instance.getData().mixin.value).toBe('0.1');
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(10);
    expect(instance.getData().mixin.value).toBe('0.2');
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    expect(instance.getData().mixin.value).toBe('0.2');
  });

  it('stepper onChange, onFocus, onConfirm, onBlur', async () => {
    let onFoucsValue: number | null;
    let onChangeValue: number | null;
    let onConfirmValue: number;
    let onBlurValue: number | null;
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 0.1,
        step: 0.1,
        onFocus(value: number | null) {
          onFoucsValue = value;
        },
        onChange(value: number | null) {
          onChangeValue = value;
        },
        onConfirm(value: number | null) {
          onConfirmValue = value;
        },
        onBlur(value: number | null) {
          onBlurValue = value;
        },
      },
      my
    );
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'minus',
      })
    );
    expect(onChangeValue).toBe(0);
    await sleep(10);
    expect(instance.getData().mixin.value).toBe('0.0');
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(10);
    expect(instance.getData().mixin.value).toBe('0.1');
    expect(onChangeValue).toBe(0.1);
    instance.callMethod('onChange', '.');
    expect(onChangeValue).toBe(0.1);
    instance.callMethod('onChange', '');
    expect(onChangeValue).toBe(null);
    await sleep(10);
    instance.callMethod('onFocus');
    expect(onFoucsValue).toBe(null);
    instance.callMethod('onBlur');
    expect(onBlurValue).toBe(null);
    instance.callMethod('onConfirm');
    expect(onConfirmValue).toBe(null);

    instance.callMethod('onChange', '1');
    await sleep(10);
    instance.callMethod('onFocus');
    expect(onFoucsValue).toBe(1);
    instance.callMethod('onBlur');
    expect(onBlurValue).toBe(1);
    instance.callMethod('onConfirm');
    expect(onConfirmValue).toBe(1);

    const instance2 = getInstance(
      'Stepper',
      {
        value: 0.1,
        step: 0.1,
        onBlur(value: number | null) {
          onBlurValue = value;
        },
      },
      my
    );

    instance2.setProps({
      value: 1,
    });
    instance2.callMethod('onBlur');
    expect(instance2.getData().mixin.value).toBe('1.0');
    expect(onBlurValue).toBe(1);
  });

  it('测试 onChange 格式化数据', async () => {
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 0.1,
        step: 0.1,
      },
      my
    );

    instance.callMethod('onChange', '1.00');
    await sleep(10);
    expect(instance.getData().mixin.value).toBe('1.0');
    instance.callMethod('onChange', '1.000');
    expect(instance.getData().mixin.value).toBe('1.0');
  });

  it('测试 disabled', async () => {
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 0.1,
      },
      my
    );

    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(10);
    expect(instance.getData().mixin.value).toBe('1.1');
    instance.setProps({ disabled: true });
    instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    expect(instance.getData().mixin.value).toBe('1.1');
    instance.setProps({ disabled: false });
    await instance.callMethod(
      'onTap',
      fmtEvent({
        'data-mode': 'add',
      })
    );
    await sleep(20);
    expect(instance.getData().mixin.value).toBe('2.1');
  });

  it('测试 onChange 变化', async () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 0.1,
        onChange,
      },
      my
    );
    instance.callMethod('onChange', '1.00');
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(1);
  });

  it('测试 onChange 变化', async () => {
    const onChange = vi.fn();
    const instance = getInstance(
      'Stepper',
      {
        defaultValue: 0.1,
        onChange,
      },
      my
    );
    instance.callMethod('onChange', '1.00');
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(1);
  });
});
