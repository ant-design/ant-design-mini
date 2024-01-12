import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormDatePickerProps } from 'compiled-alipay/Form/FormDatePicker/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormDatePicker(props: Partial<FormDatePickerProps>) {
  const onOk = vi.fn();
  const onPickerChange = vi.fn();
  const onVisibleChange = vi.fn();
  const onFormat = vi.fn();
  const onDismissPicker = vi.fn();
  const onFormatLabel = vi.fn();

  const propsData = {
    onOk,
    onPickerChange,
    onVisibleChange,
    onFormat,
    onDismissPicker,
    onFormatLabel,
    name: 'birthday',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormDatePicker', propsData);
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
    onDismissPicker,
    onFormatLabel,
    propsData,
  };
}

describe('FormDatePicker', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormDatePicker({});
    const testDate = new Date(2023, 3, 14); // April 14, 2023
    instance.callMethod('onOk', testDate);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      birthday: testDate,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormDatePicker({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestDate = new Date(2023, 3, 14);
    const TestDateStr = '2023-04-14';
    const TestEvent = fmtEvent({});
    const TestType = 'start';

    it('测试 onOk', () => {
      const { onOk, instance, propsData } = createFormDatePicker({});
      instance.callMethod('onOk', TestDate, TestDateStr, TestEvent);
      expect(onOk.mock.calls.length).toEqual(1);
      expect(onOk.mock.calls[0]).toEqual([
        TestDate,
        TestDateStr,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onPickerChange', () => {
      const { onPickerChange, instance, propsData } = createFormDatePicker({});
      instance.callMethod('onPickerChange', TestDate, TestDateStr, TestEvent);
      expect(onPickerChange.mock.calls.length).toEqual(1);
      expect(onPickerChange.mock.calls[0]).toEqual([
        TestDate,
        TestDateStr,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onVisibleChange', () => {
      const { onVisibleChange, instance, propsData } = createFormDatePicker({});
      instance.callMethod('onVisibleChange', true, TestEvent);
      expect(onVisibleChange.mock.calls.length).toEqual(1);
      expect(onVisibleChange.mock.calls[0]).toEqual([
        true,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onDismissPicker', () => {
      const { onDismissPicker, instance, propsData } = createFormDatePicker({});
      instance.callMethod('onDismissPicker', TestEvent);
      expect(onDismissPicker.mock.calls.length).toEqual(1);
      expect(onDismissPicker.mock.calls[0]).toEqual([fmtEvent(propsData)]);
    });

    it('测试 onFormat', () => {
      const { onFormat, instance } = createFormDatePicker({});
      instance.callMethod('handleFormat', TestDate, TestDateStr);
      expect(onFormat.mock.calls.length).toEqual(1);
      expect(onFormat.mock.calls[0]).toEqual([TestDate, TestDateStr]);
    });

    it('测试 onFormatLabel', () => {
      const { onFormatLabel, instance } = createFormDatePicker({});
      instance.callMethod('handleFormatLabel', TestType, TestDate);
      expect(onFormatLabel.mock.calls.length).toEqual(1);
      expect(onFormatLabel.mock.calls[0]).toEqual([TestType, TestDate]);
    });
  });
});
