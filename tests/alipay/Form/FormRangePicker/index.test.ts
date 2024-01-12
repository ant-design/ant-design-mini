import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormRangePickerProps } from 'compiled-alipay/Form/FormRangePicker/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormRangePicker(props: Partial<FormRangePickerProps>) {
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
    name: 'range',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormRangePicker', propsData);
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

describe('FormRangePicker', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormRangePicker({});
    const TestDate = [new Date(2023, 3, 1), new Date(2023, 3, 15)];
    instance.callMethod('onOk', TestDate);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      range: TestDate,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormRangePicker({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestDate = [new Date(2023, 3, 1), new Date(2023, 3, 15)];
    const TestDateStr = ['2023-04-01', '2023-04-15'];
    const TestEvent = fmtEvent({});
    const TestType = 'start';

    it('测试 onOk', () => {
      const { onOk, instance, propsData } = createFormRangePicker({});
      instance.callMethod('onOk', TestDate, TestDateStr, TestEvent);
      expect(onOk.mock.calls.length).toEqual(1);
      expect(onOk.mock.calls[0]).toEqual([
        TestDate,
        TestDateStr,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onPickerChange', () => {
      const { onPickerChange, instance, propsData } = createFormRangePicker({});
      instance.callMethod(
        'onPickerChange',
        TestType,
        TestDate,
        TestDateStr,
        TestEvent
      );
      expect(onPickerChange.mock.calls.length).toEqual(1);
      expect(onPickerChange.mock.calls[0]).toEqual([
        TestType,
        TestDate,
        TestDateStr,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onVisibleChange', () => {
      const { onVisibleChange, instance, propsData } = createFormRangePicker(
        {}
      );
      instance.callMethod('onVisibleChange', true, TestEvent);
      expect(onVisibleChange.mock.calls.length).toEqual(1);
      expect(onVisibleChange.mock.calls[0]).toEqual([
        true,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onFormat', () => {
      const { onFormat, instance } = createFormRangePicker({});
      instance.callMethod('handleFormat', TestDate, TestDateStr);
      expect(onFormat.mock.calls.length).toEqual(1);
      expect(onFormat.mock.calls[0]).toEqual([TestDate, TestDateStr]);
    });

    it('测试 onDismissPicker', () => {
      const { onDismissPicker, instance, propsData } = createFormRangePicker(
        {}
      );
      instance.callMethod('onDismissPicker', TestEvent);
      expect(onDismissPicker.mock.calls.length).toEqual(1);
      expect(onDismissPicker.mock.calls[0]).toEqual([fmtEvent(propsData)]);
    });

    it('测试 onFormatLabel', () => {
      const { onFormatLabel, instance } = createFormRangePicker({});
      onFormatLabel.mockImplementation(() => 'label');
      const res = instance.callMethod(
        'handleFormatLabel',
        TestType,
        TestDate[0]
      );
      expect(res).toEqual('label');
      expect(onFormatLabel.mock.calls.length).toEqual(1);
      expect(onFormatLabel.mock.calls[0]).toEqual([TestType, TestDate[0]]);
    });
  });
});
