import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { describe, expect, it } from 'vitest';
import { cityList, createCascaderPicker } from './utils';

describe('cascaderPicker onVisibleChange', () => {
  it('onVisibleChange', () => {
    const { onVisibleChange, callMethod } = createCascaderPicker({
      options: cityList,
    });

    callMethod('onVisibleChange', true);
    expect(onVisibleChange).toBeCalledWith(true, fmtEvent({}));
  });
  it('onCancel', () => {
    const { callMethod, onCancel } = createCascaderPicker({
      options: cityList,
    });

    callMethod('onCancel', true);
    expect(onCancel).toBeCalled();
  });
});

describe('columns ', () => {
  it('测试默认的 currentValue 和 columns', () => {
    const { instance } = createCascaderPicker({
      options: cityList,
    });
    expect(instance.getData().currentValue).toEqual([]);
    expect(instance.getData().columns).toEqual([
      [
        {
          label: '北京',
          value: '11',
        },
        {
          label: '河北',
          value: '18',
        },
      ],
      [
        {
          label: '北京',
          value: '110',
        },
      ],
    ]);
  });

  it('测试选择后切换 columns', async () => {
    const { instance, callMethod } = createCascaderPicker({
      options: cityList,
    });
    await callMethod('onChange', ['18', '110']);
    expect(instance.getData().currentValue).toEqual(['18', '188']);
    expect(instance.getData().columns).toEqual([
      [
        {
          label: '北京',
          value: '11',
        },
        {
          label: '河北',
          value: '18',
        },
      ],
      [
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
    ]);
  });
});

describe('cascaderPicker select', () => {
  it('cascaderPicker select', async () => {
    const { callMethod, onChange, onOk } = createCascaderPicker({
      options: cityList,
    });

    await callMethod('onChange', ['11', '110']);
    await callMethod('onChange', ['18', '188']);
    expect(onChange).toBeCalledWith(
      ['18', '188'],
      [
        { value: '18', label: '河北' },
        { value: '188', label: '石家庄' },
      ],
      fmtEvent({})
    );
    callMethod('onOk');
    expect(onOk).toBeCalledWith(
      ['18', '188'],
      [
        { value: '18', label: '河北' },
        { value: '188', label: '石家庄' },
      ],
      fmtEvent({})
    );
  });

  it('选择后再次打开 需要恢复状态', async () => {
    const { callMethod, instance } = createCascaderPicker({
      options: cityList,
    });

    await callMethod('onChange', ['18', '188']);

    await callMethod('onVisibleChange', false);
    await callMethod('onVisibleChange', true);
    expect(instance.getData().currentValue).toEqual(['11', '110']);
  });
});
describe('cascaderPicker update', () => {
  it('cascaderPicker updateValue', async () => {
    const value = ['11', '110'];
    const { callMethod, instance, onOk } = createCascaderPicker({
      options: cityList,
      value,
    });
    instance.setProps({ value: ['18', '188'] });
    await callMethod('onVisibleChange', true);
    await callMethod('onOk');
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
    const { instance } = createCascaderPicker({
      options: cityList,
    });

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
  it('defaultFormat', async () => {
    const value = ['11', '110'];
    const { instance } = createCascaderPicker({
      options: cityList,
      value,
    });
    expect(instance.getData().formattedValueText).toBe('北京北京');
  });

  it('onFormat', () => {
    const value = ['11', '110'];
    const onFormat = (value, options) =>
      `选择了${options.map((v) => v.label).join('')}`;

    const { instance } = createCascaderPicker({
      options: cityList,
      value,
      onFormat,
    });
    expect(instance.getData().formattedValueText).toBe('选择了北京北京');
  });
});

it('value 非受控', async () => {
  const { instance, callMethod } = createCascaderPicker({
    options: cityList,
  });
  expect(instance.getData().currentValue).toEqual([]);
  expect(instance.getData().formattedValueText).toBe('');
  await callMethod('onChange', ['18', '110']);
  expect(instance.getData().currentValue).toEqual(['18', '188']);
  expect(instance.getData().formattedValueText).toBe('');
  await callMethod('onOk');
  expect(instance.getData().formattedValueText).toBe('河北石家庄');
  instance.setProps({ value: [] });
  expect(instance.getData().currentValue).toEqual(['11', '110']);
  expect(instance.getData().formattedValueText).toBe('');
});

describe('cascaderPicker 受控模式', () => {
  it('value 受控', async () => {
    const value = ['11', '110'];
    const { instance, callMethod } = createCascaderPicker({
      options: cityList,
      value,
    });
    expect(instance.getData().currentValue).toEqual(['11', '110']);
    expect(instance.getData().formattedValueText).toBe('北京北京');
    await callMethod('onChange', ['18', '110']);
    expect(instance.getData().currentValue).toEqual(['18', '188']);
    expect(instance.getData().formattedValueText).toBe('北京北京');
    await callMethod('onOk');
    expect(instance.getData().formattedValueText).toBe('北京北京');
    instance.setProps({ value: [] });
    expect(instance.getData().currentValue).toEqual(['11', '110']);
    expect(instance.getData().formattedValueText).toBe('');
  });

  it('测试 default value', async () => {
    const value = ['18', '110'];
    // 仅有初始化的时候看 defaultValue
    const { instance } = createCascaderPicker({
      options: cityList,
      defaultValue: value,
    });
    expect(instance.getData().currentValue).toStrictEqual(['18', '110']);
    expect(instance.getData().columns).toStrictEqual([
      [
        { value: '11', label: '北京' },
        { value: '18', label: '河北' },
      ],
      [
        { value: '188', label: '石家庄' },
        { value: '181', label: '唐山' },
        {
          label: '秦皇岛',
          value: '182',
        },
      ],
    ]);
    instance.setProps({ defaultValue: ['11', '110'] });

    expect(instance.getData().formattedValueText).toBe('');
    expect(instance.getData().currentValue).toStrictEqual(['18', '110']);
    instance.setProps({ value: ['11', '110'] });
    expect(instance.getData().currentValue).toStrictEqual(['11', '110']);
    expect(instance.getData().formattedValueText).toBe('北京北京');
  });
});
