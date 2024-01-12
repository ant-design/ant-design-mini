import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormCascaderPickerProps } from 'compiled-alipay/Form/FormCascaderPicker/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormCascaderPicker(props: Partial<FormCascaderPickerProps>) {
  const onOk = vi.fn();
  const onPickerChange = vi.fn();
  const onVisibleChange = vi.fn();
  const onFormat = vi.fn();
  const onCancel = vi.fn();
  const onChange = vi.fn();

  const propsData = {
    onOk,
    onPickerChange,
    onVisibleChange,
    onFormat,
    onCancel,
    onChange,
    name: 'name',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormCascaderPicker', propsData);
  const ref = instance.ref<FromItemRef>();
  const form = createForm();
  form.addItem(ref);
  return {
    form,
    instance,
    onOk,
    onPickerChange,
    onVisibleChange,
    onFormat,
    onCancel,
    onChange,
    propsData,
  };
}

describe('CascaderPicker', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormCascaderPicker({});
    instance.callMethod('onOk', 2);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      name: 2,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormCascaderPicker({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestValue = 2;
    const TestOption = [{ label: 'label', value: 'value' }];
    const TestEvent = fmtEvent({});

    it('测试 onOk', () => {
      const { onOk, instance, propsData } = createFormCascaderPicker({});
      instance.callMethod('onOk', TestValue, TestOption, TestEvent);
      expect(onOk.mock.calls.length).toEqual(1);
      expect(onOk.mock.calls[0]).toEqual([
        TestValue,
        TestOption,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onPickerChange', () => {
      const { onPickerChange, instance, propsData } = createFormCascaderPicker(
        {}
      );
      instance.callMethod(
        'onPickerChange',
        TestValue,
        TestOption,
        fmtEvent({})
      );
      expect(onPickerChange.mock.calls.length).toEqual(1);
      expect(onPickerChange.mock.calls[0]).toEqual([
        TestValue,
        TestOption,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onVisibleChange', () => {
      const { onVisibleChange, instance, propsData } = createFormCascaderPicker(
        {}
      );
      instance.callMethod('onVisibleChange', false, fmtEvent({}));
      expect(onVisibleChange.mock.calls.length).toEqual(1);
      expect(onVisibleChange.mock.calls[0]).toEqual([
        false,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onFormat', () => {
      const { onFormat, instance } = createFormCascaderPicker({});
      instance.callMethod('handleFormat', TestValue, TestOption);
      expect(onFormat.mock.calls.length).toEqual(1);
      expect(onFormat.mock.calls[0]).toEqual([TestValue, TestOption]);
    });

    it('测试 onDismissPicker', () => {
      const { onCancel, instance, propsData } = createFormCascaderPicker({});
      instance.callMethod('onDismissPicker', fmtEvent({}));
      expect(onCancel.mock.calls.length).toEqual(1);
      expect(onCancel.mock.calls[0]).toEqual([fmtEvent(propsData)]);
    });

    it('测试 onChange', () => {
      const { onChange, instance, propsData } = createFormCascaderPicker({});
      instance.callMethod('onChange', TestValue, TestOption, fmtEvent({}));
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([
        TestValue,
        TestOption,
        fmtEvent(propsData),
      ]);
    });
  });
});
