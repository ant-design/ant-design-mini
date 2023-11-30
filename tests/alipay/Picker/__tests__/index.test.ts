import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { sleep } from 'tests/utils';
import { describe, expect, it } from 'vitest';
import { createPicker } from './utils';

describe('picker onVisibleChange', () => {
  it('onOpen', () => {
    const { instance, onVisibleChange } = createPicker({});
    instance.callMethod('onOpen');
    expect(onVisibleChange).toBeCalledWith(true, fmtEvent({}));
  });

  it('onMaskDismiss', () => {
    const { instance, onVisibleChange, onCancel } = createPicker({});
    instance.callMethod('onMaskDismiss');
    expect(onVisibleChange).toBeCalledWith(false, fmtEvent({}));
    expect(onCancel).toBeCalled();
  });

  it('onCancel', () => {
    const { instance, onVisibleChange, onCancel } = createPicker({});
    instance.callMethod('onCancel');
    expect(onVisibleChange).toBeCalledWith(false, fmtEvent({}));
    expect(onCancel).toBeCalled();
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

it('picker value component2', () => {
  const options = [['北京', '上海', '深圳', '广州']];
  const value = ['上海'];
  const { instance } = createPicker({
    options,
    value,
  });
  expect(instance.getData().columns).toStrictEqual(options);
});

it.skip('多次开启关闭, visible 状态应该正确', async () => {
  const { instance, callMethod } = createPicker();
  await callMethod('onOpen');
  expect(instance.getData().state.visible).toBe(true);
  await callMethod('onOk');
  expect(instance.getData().state.visible).toBe(false);
  await callMethod('onOpen');
  expect(instance.getData().state.visible).toBe(true);
  await callMethod('onOk');
  expect(instance.getData().state.visible).toBe(false);
});
