import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormPickerProps } from 'compiled-alipay/Form/FormPicker/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormPicker(props: Partial<FormPickerProps>) {
  const onOk = vi.fn();
  const onChange = vi.fn();
  const onVisibleChange = vi.fn();
  const onFormat = vi.fn();
  const onCancel = vi.fn();

  const propsData = {
    onOk,
    onChange,
    onVisibleChange,
    onFormat,
    onCancel,
    name: 'picker',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormPicker', propsData);
  const ref = instance.ref<FromItemRef>();
  const form = createForm();
  form.addItem(ref);

  return {
    form,
    instance,
    onOk,
    onChange,
    onVisibleChange,
    onFormat,
    onCancel,
    propsData,
  };
}

describe('FormPicker', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormPicker({});
    instance.callMethod('onOk', 'value');
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      picker: 'value',
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormPicker({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestValue = 'value';
    const TestColumn = { label: 'label', value: 'value' };
    const TestEvent = fmtEvent({});

    it('测试 onOk', () => {
      const { onOk, instance, propsData } = createFormPicker({});
      instance.callMethod('onOk', TestValue, TestColumn, TestEvent);
      expect(onOk.mock.calls.length).toEqual(1);
      expect(onOk.mock.calls[0]).toEqual([
        TestValue,
        TestColumn,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onChange', () => {
      const { onChange, instance, propsData } = createFormPicker({});
      instance.callMethod('onChange', TestValue, TestColumn, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([
        TestValue,
        TestColumn,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onVisibleChange', () => {
      const { onVisibleChange, instance, propsData } = createFormPicker({});
      instance.callMethod('onVisibleChange', true, TestEvent);
      expect(onVisibleChange.mock.calls.length).toEqual(1);
      expect(onVisibleChange.mock.calls[0]).toEqual([
        true,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onFormat', () => {
      const { onFormat, instance } = createFormPicker({});
      instance.callMethod('handleFormat', TestValue, TestColumn);
      expect(onFormat.mock.calls.length).toEqual(1);
      expect(onFormat.mock.calls[0]).toEqual([TestValue, TestColumn]);
    });

    it('测试 onDismissPicker', () => {
      const { onCancel, instance, propsData } = createFormPicker({});
      instance.callMethod('onDismissPicker', TestEvent);
      expect(onCancel.mock.calls.length).toEqual(1);
      expect(onCancel.mock.calls[0]).toEqual([fmtEvent(propsData)]);
    });
  });
});
