import { getInstance } from '../../../tests/utils';
import fmtEvent from '../../_util/fmtEvent';
import { describe, it, expect, vi } from 'vitest';

const my = {
  canIUse() {
    return false;
  },
};
describe('picker onVisibleChange', () => {
  it('onOpen', () => {
    const onVisibleChange = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        onVisibleChange,
      },
      my
    );
    instance.callMethod('onOpen');
    expect(onVisibleChange).toBeCalledWith(true, fmtEvent({}));
  });
  it('onMaskDismiss', () => {
    const onVisibleChange = vi.fn();
    const onCancel = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        onVisibleChange,
        onCancel,
      },
      my
    );
    instance.callMethod('onMaskDismiss');
    expect(onVisibleChange).toBeCalledWith(false, fmtEvent({}));
    expect(onCancel).toBeCalled();
  });
  it('onCancel', () => {
    const onVisibleChange = vi.fn();
    const onCancel = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        onVisibleChange,
        onCancel,
      },
      my
    );
    instance.callMethod('onCancel');
    expect(onVisibleChange).toBeCalledWith(false, fmtEvent({}));
    expect(onCancel).toBeCalled();
  });
});

describe('picker select', () => {
  it('singleOptions', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const value = '北京';
    const onChange = vi.fn();
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        options,
        onChange,
        onOk,
      },
      my
    );
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
  it('multiOptions', () => {
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
    const onChange = vi.fn();
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        options,
        onChange,
        onOk,
      },
      my
    );
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
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        options,
        value,
        onOk,
      },
      my
    );
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith('上海', '上海', fmtEvent({}));
  });
  it('update value', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        options,
        onOk,
      },
      my
    );
    instance.setProps({ value: '上海' });
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith('上海', '上海', fmtEvent({}));
  });
  it('empty value', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const value = '';
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        options,
        value,
        onOk,
      },
      my
    );
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith('北京', '北京', fmtEvent({}));
  });
});
describe('picker updateColumns', () => {
  it('updateColumns', () => {
    const options = ['北京', '上海', '深圳', '广州'];
    const value = '上海';
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        options,
        value,
        onOk,
      },
      my
    );
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
    const instance = getInstance(
      'Picker',
      {
        options,
        value,
        onFormat,
      },
      my
    );
    expect(instance.getData().formatValue).toBe('选择了上海');
  });
});

describe('picker value component2', () => {
  const my = {
    canIUse() {
      return true;
    },
  };
  it('picker value component2', () => {
    const options = [['北京', '上海', '深圳', '广州']];
    const value = ['上海'];
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker',
      {
        options,
        value,
        onOk,
      },
      my
    );
    expect(instance.getData().columns).toStrictEqual(options);
  });
});
