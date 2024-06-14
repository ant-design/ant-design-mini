import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createPicker } from './utils';

describe('picker onVisibleChange', () => {
  it('onOpen', () => {
    const { instance, onVisibleChange } = createPicker({});
    instance.callMethod('onOpen');
    expect(onVisibleChange).toBeCalledWith(true, fmtEvent({}));
  });

  it('onMaskDismiss', async () => {
    const { instance, onVisibleChange, onCancel } = createPicker({});
    instance.callMethod('onMaskDismiss');
    expect(onVisibleChange).toBeCalledWith(false, fmtEvent({}));
    expect(onCancel).toBeCalled();
    expect(onCancel.mock.calls[0][0].detail).toEqual({ type: 'mask' });

    instance.callMethod('onOpen');
    await sleep(20);
    expect(instance.getData().visible).toBeTruthy();
    instance.setProps({ maskClosable: false });
    instance.callMethod('onMaskDismiss');
    await sleep(20);
    expect(instance.getData().visible).toBeTruthy();
  });

  it('onCancel', () => {
    const { instance, onVisibleChange, onCancel } = createPicker({});
    instance.callMethod('onCancel');
    expect(onVisibleChange).toBeCalledWith(false, fmtEvent({}));
    expect(onCancel).toBeCalled();
    expect(onCancel.mock.calls[0][0].detail).toEqual({ type: 'cancel' });
  });
});

describe('picker select', () => {
  it('singleOptions', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const { instance, onChange, onOk } = createPicker({
      options,
    });
    expect(instance.getData().columns).toStrictEqual([options]);
    instance.callMethod('onChange', { detail: { value: [1] } });
    expect(onChange).toBeCalledWith(
      '上海',
      '上海',
      fmtEvent({}, { detail: { value: [1] } })
    );
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith('上海', '上海', fmtEvent({}));
  });

  it('multiOptions', async () => {
    const options = [
      [
        { label: '周一', value: 'Mon' },
        { label: '周二', value: 'Tues' },
        { label: '周三', value: 'Wed' },
        { label: '周四', value: 'Thur' },
        { label: '周五', value: 'Fri' },
      ],
      [
        { label: '上午', value: 'am' },
        { label: '下午', value: 'pm' },
      ],
    ];
    const { instance, onChange, onOk } = createPicker({ options });
    expect(instance.getData().columns).toStrictEqual(options);
    instance.callMethod('onChange', { detail: { value: [1, 0] } });
    expect(onChange).toBeCalledWith(
      ['Tues', 'am'],
      [
        { value: 'Tues', label: '周二' },
        { value: 'am', label: '上午' },
      ],
      fmtEvent({}, { detail: { value: [1, 0] } })
    );
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith(
      ['Tues', 'am'],
      [
        { value: 'Tues', label: '周二' },
        { value: 'am', label: '上午' },
      ],
      fmtEvent({})
    );
  });
});
describe('picker value', () => {
  it('props value', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const value = '上海';
    const { instance, onOk } = createPicker({
      options,
      value,
    });
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith('上海', '上海', fmtEvent({}));
  });
  it('update value', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const { instance, onOk } = createPicker({
      options,
    });
    instance.setProps({ value: '上海' });
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith('上海', '上海', fmtEvent({}));
  });
  it('empty value', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const value = '';
    const { instance, onOk } = createPicker({
      options,
      value,
    });
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith('北京', '北京', fmtEvent({}));
  });
});
describe('picker updateColumns', () => {
  it('updateColumns', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const value = '上海';
    const { instance, onOk } = createPicker({
      options,
      value,
    });
    instance.setProps({ options: ['北京', '深圳', '广州'] });
    expect(instance.getData().selectedIndex).toStrictEqual([0]);
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith('北京', '北京', fmtEvent({}));
  });
});

describe('picker onFormat', () => {
  it('onFormat', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const value = '上海';
    const onFormat = (value) => `选择了${value}`;
    const { instance } = createPicker({
      options,
      onFormat,
      value,
    });
    expect(instance.getData().formatValue).toBe('选择了上海');
  });
});

it('测试 format 事件', async () => {
  const { instance, onCancel } = createPicker({
    'data-test': 1,
  });
  instance.callMethod('onCancel');
  expect(onCancel.mock.calls[0][0].currentTarget.dataset).toEqual({ test: 1 });
  instance.setProps({ 'data-test': 2 });
  instance.callMethod('onCancel');
  expect(onCancel.mock.calls[1][0].currentTarget.dataset).toEqual({ test: 2 });
});

it('formattedValueText 优先级大于 onFormat', async () => {
  const { instance } = createPicker({
    formattedValueText: '1',
    onFormat: () => '3',
  });
  expect(instance.getData().formatValue).toEqual('1');
  instance.setProps({ formattedValueText: '2' });
  expect(instance.getData().formatValue).toEqual('2');
});

it('picker value component2', () => {
  const options = [['北京', '上海', '深圳', '广州']];
  const value = ['上海'];
  const { instance } = createPicker({
    options,
    value,
  });
  expect(instance.getData().columns).toStrictEqual(options);
});

it('模拟 picker 打开后关闭，需要调用 onFormat', async () => {
  const options = [['北京', '上海', '深圳', '广州']];
  const internalState = {
    value: ['上海'],
  };
  const onFormat = vi.fn();
  const { instance, callMethod, onChange, onOk } = createPicker({
    options,
    value: internalState.value,
    onFormat,
  });
  onFormat.mockImplementation(() => internalState.value.join('-'));
  onChange.mockImplementation((val) => {
    instance.setProps({ value: val });
  });
  onOk.mockImplementation((val) => {
    internalState.value = val;
  });
  await callMethod('onChange', { detail: { value: [0] } });
  expect(instance.getData().selectedIndex).toStrictEqual([0]);
  expect(instance.getData().formatValue).toEqual('上海');
  await callMethod('onOk');
  expect(internalState.value).toEqual(['北京']);
});

it('假设在滚动的时候, options 变化', async () => {
  const options = [['北京', '上海', '深圳', '广州']];
  const onFormat = vi.fn();
  const { instance, callMethod, onOk } = createPicker({
    options,
    onFormat,
  });

  await callMethod('onChange', { detail: { value: [1] } });
  instance.setProps({ options: [['上海', '深圳', '广州']] });
  expect(instance.getData().selectedIndex).toStrictEqual([0]);
  await callMethod('onOk');
  expect(onOk.mock.calls[0][0]).toEqual(['上海']);
});

it('假设在滚动的时候, value 变化', async () => {
  const options = [['北京', '上海', '深圳', '广州']];
  const onFormat = vi.fn();
  const { instance, callMethod, onOk } = createPicker({
    options,
    onFormat,
  });

  await callMethod('onChange', { detail: { value: [1] } });
  instance.setProps({ value: ['深圳'] });
  expect(instance.getData().selectedIndex).toStrictEqual([2]);
  await callMethod('onOk');
  expect(onOk.mock.calls[0][0]).toEqual(['深圳']);
});

it('多次开启关闭, visible 状态应该正确', async () => {
  const { instance, callMethod } = createPicker();
  await callMethod('onOpen');
  expect(instance.getData().visible).toBe(true);
  await callMethod('onOk');
  expect(instance.getData().visible).toBe(false);
  await callMethod('onOpen');
  expect(instance.getData().visible).toBe(true);
  await callMethod('onOk');
  expect(instance.getData().visible).toBe(false);
});

it('如果 disabled, 则无法打开', async () => {
  const { instance, callMethod } = createPicker({ disabled: true });
  await callMethod('onOpen');
  expect(instance.getData().visible).toBe(undefined);
});

describe('非受控模式', () => {
  it('测试非受控模式', async () => {
    const options = [['北京', '上海', '深圳', '广州']];
    const { instance, callMethod } = createPicker({
      options,
    });
    await callMethod('onOpen');
    expect(instance.getData().visible).toBe(true);
    await callMethod('onChange', { detail: { value: [1] } });
    expect(instance.getData().selectedIndex).toStrictEqual([1]);
    expect(instance.getData().mixin.value).toStrictEqual([]);
    await callMethod('onOk');
    expect(instance.getData().visible).toBe(false);
    expect(instance.getData().mixin.value).toStrictEqual(['上海']);
  });

  it('测试 defaultVisible 与 defaultValue', async () => {
    const options = [['北京', '上海', '深圳', '广州']];
    const { instance, callMethod, onOk } = createPicker({
      options,
      defaultValue: ['上海'],
      defaultVisible: true,
      'data-1': 2,
    });
    expect(instance.getData().visible).toBe(true);
    expect(instance.getData().selectedIndex).toEqual([1]);
    await callMethod('onOk');
    expect(instance.getData().visible).toBe(false);
    expect(onOk).toBeCalledWith(
      ['上海'],
      ['上海'],
      fmtEvent({
        'data-1': 2,
      })
    );
  });
});

describe('visible 受控模式', () => {
  it('value 优先级大于 defaultValue', async () => {
    const options = [['北京', '上海', '深圳', '广州']];
    const { instance, callMethod, onVisibleChange } = createPicker({
      options,
      visible: false,
      defaultVisible: true,
    });
    expect(instance.getData().visible).toEqual(false);
    await callMethod('onOpen');
    expect(instance.getData().visible).toEqual(true);
    expect(onVisibleChange).toBeCalledWith(true, fmtEvent({}));
  });
});

describe('value 受控模式', async () => {
  it('value 优先级大于 defaultValue', () => {
    const options = [['北京', '上海', '深圳', '广州']];
    const { instance } = createPicker({
      options,
      defaultValue: ['上海'],
      value: ['深圳'],
    });
    expect(instance.getData().selectedIndex).toEqual([2]);
  });
});
