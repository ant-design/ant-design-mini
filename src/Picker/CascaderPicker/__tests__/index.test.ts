import { getInstance } from '../../../../tests/utils';
import fmtEvent from '../../../_util/fmtEvent';
import { describe, it, expect, vi } from 'vitest';

const cityList = [
  {
    label: '北京',
    children: [
      {
        label: '北京',
        value: '110',
      },
    ],
    value: '11',
  },
  {
    label: '河北',
    children: [
      {
        label: '石家庄',
        value: '188',
      },
      {
        label: '唐山',
        value: '181',
      },
      {
        label: '秦皇岛',
        value: '182',
      },
    ],
    value: '18',
  },
];
const my = {
  canIUse() {
    return false;
  },
};
describe('cascaderPicker onVisibleChange', () => {
  it('onVisibleChange', () => {
    const onVisibleChange = vi.fn();
    const instance = getInstance(
      'Picker/CascaderPicker',
      {
        options: cityList,
        onVisibleChange,
      },
      my
    );
    instance.callMethod('onVisibleChange', true);
    expect(onVisibleChange).toBeCalledWith(true, fmtEvent({}));
  });
  it('onCancel', () => {
    const onCancel = vi.fn();
    const instance = getInstance(
      'Picker/CascaderPicker',
      {
        options: cityList,
        onCancel,
      },
      my
    );
    instance.callMethod('onCancel');
    expect(onCancel).toBeCalled();
  });
});
describe('cascaderPicker component2', () => {
  const my = {
    canIUse() {
      return true;
    },
  };
  it('cascaderPicker component2', () => {
    getInstance(
      'Picker/CascaderPicker',
      {
        options: cityList,
      },
      my
    );
  });
});

describe('cascaderPicker select', () => {
  it('cascaderPicker select', () => {
    const onChange = vi.fn();
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker/CascaderPicker',
      {
        options: cityList,
        onChange,
        onOk,
      },
      my
    );
    instance.callMethod('onChange', ['11', '110']);
    instance.callMethod('onChange', ['18', '188']);
    expect(onChange).toBeCalledWith(
      ['18', '188'],
      [
        { value: '18', label: '河北' },
        { value: '188', label: '石家庄' },
      ],
      fmtEvent({})
    );
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith(
      ['18', '188'],
      [
        { value: '18', label: '河北' },
        { value: '188', label: '石家庄' },
      ],
      fmtEvent({})
    );
  });
});
describe('cascaderPicker update', () => {
  it('cascaderPicker updateValue', () => {
    const onChange = vi.fn();
    const onOk = vi.fn();
    const value = ['11', '110'];
    const instance = getInstance(
      'Picker/CascaderPicker',
      {
        options: cityList,
        onChange,
        onOk,
        value,
      },
      my
    );
    instance.setProps({ value: ['18', '188'] });
    instance.callMethod('onVisibleChange', true);
    instance.callMethod('onOk');
    expect(onOk).toBeCalledWith(
      ['18', '188'],
      [
        { value: '18', label: '河北' },
        { value: '188', label: '石家庄' },
      ],
      fmtEvent({})
    );
  });
  it('cascaderPicker updateOptions', () => {
    const onChange = vi.fn();
    const onOk = vi.fn();
    const instance = getInstance(
      'Picker/CascaderPicker',
      {
        options: cityList,
        onChange,
        onOk,
      },
      my
    );
    instance.setProps({
      options: [
        {
          label: '北京',
          children: [
            {
              label: '北京',
              value: '110',
            },
          ],
          value: '11',
        },
        {
          label: '河北',
          children: [
            {
              label: '石家庄',
              value: '188',
            },
          ],
          value: '18',
        },
      ],
    });
    instance.setProps({
      value: ['18', '188'],
      options: [
        {
          label: '北京',
          children: [
            {
              label: '北京',
              value: '110',
            },
          ],
          value: '11',
        },
        {
          label: '河北',
          children: [
            {
              label: '石家庄',
              value: '188',
            },
            {
              label: '唐山',
              value: '181',
            },
          ],
          value: '18',
        },
      ],
    });
    expect(instance.getData().currentValue).toStrictEqual(['18', '188']);
    expect(instance.getData().columns).toStrictEqual([
      [
        { value: '11', label: '北京' },
        { value: '18', label: '河北' },
      ],
      [
        { value: '188', label: '石家庄' },
        { value: '181', label: '唐山' },
      ],
    ]);
  });
});
describe('cascaderPicker onFormat', () => {
  it('defaultFormat', () => {
    const value = ['11', '110'];
    const instance = getInstance(
      'Picker/CascaderPicker',
      {
        options: cityList,
        value,
      },
      my
    );
    const formatValue = instance.callMethod('onFormat');
    expect(formatValue).toBe('北京北京');
  });
  it('onFormat', () => {
    const value = ['11', '110'];
    const onFormat = (value, options) =>
      `选择了${options.map((v) => v.label).join('')}`;
    const instance = getInstance(
      'Picker/CascaderPicker',
      {
        options: cityList,
        value,
        onFormat,
      },
      my
    );
    const formatValue = instance.callMethod('onFormat');
    expect(formatValue).toBe('选择了北京北京');
  });
});
