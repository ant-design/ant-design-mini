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

    expect(upStep(1.53, 0.1, 1)).toBe(2); // 不合预期，先按现有代码写用例，后续应该把代码改了
    expect(upStep(1.23, 0.1, 1)).toBe(1); // 同上，不合预期
  });

  it('计算精度', async () => {
    const instance = getInstance('Stepper', { value: 1.23, precision: 2, step: 0.1 }, component2);
    expect(instance.getData().mixin.value).toEqual('1.23'); // 同上一个用例，这里的值不太对
    instance.callMethod('onTap', fmtEvent({ 'data-mode': 'add', }));
    expect(instance.getData().mixin.value).toEqual('1.23');
  });

  it('事件', async () => {
    const onConfirm = jest.fn();
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    const onChange = jest.fn();
    const instance = getInstance('Stepper', { value: 1.23, max: 100, onConfirm, onBlur, onFocus, onChange }, component2);
    expect(instance.getData().mixin.value).toEqual('1.23');

    instance.callMethod('onConfirm');
    expect(onConfirm.mock.calls.length).toBe(1);

    instance.callMethod('onConfirm', '34');
    expect(onConfirm.mock.calls.length).toBe(2);
    expect(onConfirm.mock.calls[1][0]).toBe('34');
    expect(instance.getData().mixin.value).toEqual('1.23'); // 不合理，为什么 onConfirm 的时候接收了 value 入参，但这里没变？

    instance.callMethod('onBlur');
    expect(onBlur.mock.calls.length).toBe(1);
    expect(onBlur.mock.calls[0][0]).toBe(1.23);

    instance.callMethod('onFocus');
    expect(onFocus.mock.calls.length).toBe(1);
    expect(onFocus.mock.calls[0][0]).toBe(1.23);

    instance.callMethod('onChange', '56');
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(56);
    expect(instance.getData().mixin.value).toEqual('56');
  });

  it('输入校验', async () => {
    const instance = getInstance('Stepper', { defaultValue: 'invalid string', }, component2);
    expect(instance.getData().mixin.value).toBeFalsy();
    instance.callMethod('onTap', fmtEvent({ 'data-mode': 'add', }));
    expect(instance.getData().mixin.value).toBeFalsy(); // 应该能恢复到一个正常值？
  });

  it('空输入', async () => {
    const instance = getInstance('Stepper', { defaultValue: '   ', step: 0.1 }, component2);
    expect(instance.getData().mixin.value).toBeFalsy();
    instance.callMethod('onTap', fmtEvent({ 'data-mode': 'add', }));
    expect(instance.getData().mixin.value).toBe('0.1');
  });

  it('min and max', async () => {
    const max = 100;
    const min = 1;
    const instance = getInstance('Stepper', { value: 1.23, max, min }, component2);
    instance.callMethod('onChange', max + 1);
    expect(instance.getData().mixin.value).toEqual(max + '');
    instance.callMethod('onChange', min - 1);
    expect(instance.getData().mixin.value).toEqual(min + '');
  });
});
