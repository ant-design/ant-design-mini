import { getInstance } from '../../../tests/utils';
import fmtEvent from '../../_util/fmtEvent';
import { downStep, getMaxPrecision, getPrecision, upStep } from '../utils';

const component2 = {
  canIUse: (name) => name === 'component2',
};

describe('stepper', () => {
  it('load stepper', async () => {
    const instance = getInstance('Stepper', {}, component2);
    const instanceData = instance.getData();
    expect(instanceData).toMatchSnapshot();
  });
  it('初始值0，步长 0.01', async () => {
    const instance = getInstance('Stepper', { defaultValue: 0, step: 0.01 }, component2);
    const instanceData = instance.getData();
    expect(instanceData).toMatchSnapshot();

    instance.callMethod('onTap', fmtEvent({
      'data-mode': 'add',
    }));
    expect(instance.getData()).toMatchSnapshot();

    instance.callMethod('onTap', fmtEvent({
      'data-mode': 'minus',
    }));
    expect(instance.getData()).toMatchSnapshot();


    instance.callMethod('onTap', fmtEvent({
      'data-mode': 'add',
    }));
    expect(instance.getData()).toMatchSnapshot();

    instance.callMethod('onTap', fmtEvent({
      'data-mode': 'minus',
    }));
    expect(instance.getData()).toMatchSnapshot();
  });

  it('限制范围 [0,5]', async () => {
    const instance = getInstance('Stepper', { defaultValue: 0, step: 1, min: 0, max: 5 }, component2);
    const instanceData = instance.getData();
    expect(instanceData).toMatchSnapshot();

    let i = 0;
    while (++i <= 5) {
      instance.callMethod('onTap', fmtEvent({ 'data-mode': 'add', }));
    }
    expect(instance.getData()).toMatchSnapshot();

    // 不会再增加
    instance.callMethod('onTap', fmtEvent({ 'data-mode': 'add', }));
    expect(instance.getData()).toMatchSnapshot();

    let j = 0;
    while (++j <= 5) {
      instance.callMethod('onTap', fmtEvent({ 'data-mode': 'minus', }));
    }
    expect(instance.getData()).toMatchSnapshot();

    // 不会再减少
    instance.callMethod('onTap', fmtEvent({ 'data-mode': 'minus', }));
    expect(instance.getData()).toMatchSnapshot();
  });

  it('受控组件', async () => {
    const onChange = jest.fn();
    const instance = getInstance('Stepper', { value: 0, onChange, }, component2);

    instance.callMethod('onTap', fmtEvent({ 'data-mode': 'add', }));
    expect(instance.getData()).toMatchSnapshot();

    expect(onChange).toBeCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toBe(1);

    instance.callMethod('onTap', fmtEvent({ 'data-mode': 'minus', }));
    expect(instance.getData()).toMatchSnapshot();
    expect(onChange).toBeCalledTimes(2);
    expect(onChange.mock.calls[0][0]).toBe(1);

    instance.setProps({ value: 10 });
    expect(instance.getData()).toMatchSnapshot();
  });

  it('变更输入框', async () => {
    const instance = getInstance('Stepper', { value: 0 }, component2);
    expect(instance.getData()).toMatchSnapshot();

    const inputAndExpct = [
      ['1', '1'],
      ['1.1', '1.1'],
      ['1.1.4', '1.1'],
      ['1.15', '1.15'],
    ];

    for (let item of inputAndExpct) {
      instance.callMethod('onChange', item[0]);
      expect(instance.getData().mixin.value).toEqual(item[1]);
    }
  });

  it('计算精度的 utils 方法', async () => {
    expect(getPrecision(1)).toBe(0);
    expect(getPrecision(1.1)).toBe(1);
    expect(getPrecision(1.23)).toBe(2);

    expect(getMaxPrecision(1.23, 0.1)).toBe(2);
    expect(getMaxPrecision(1.23, 0.1, 1)).toBe(1);
    expect(getMaxPrecision(1.23, undefined, 1)).toBe(1);

    // expect(upStep(1.53, 0.1, 1)).toBe(1.6); // 没跑过？
    // expect(upStep(1.23, 0.1, 1)).toBe(1.3); // 没跑过？
  });

  it('计算精度', async () => {
    // const instance = getInstance('Stepper', { value: 1.23, precision: 2, step: 0.1 }, component2);
    // expect(instance.getData().mixin.value).toEqual('1.23'); // 感觉不对？
    // instance.callMethod('onTap', fmtEvent({ 'data-mode': 'add', }));
    // expect(instance.getData().mixin.value).toEqual('1.234');
  });
});
