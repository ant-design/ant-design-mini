import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormInputProps } from 'compiled-alipay/Form/FormInput/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormInput(props: Partial<FormInputProps>) {
  const onChange = vi.fn();
  const onBlur = vi.fn();
  const onFocus = vi.fn();
  const onConfirm = vi.fn();
  const InputRefUpdate = vi.fn();

  const propsData = {
    onChange,
    onBlur,
    onFocus,
    onConfirm,
    name: 'input',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormInput', propsData);
  const ref = instance.ref<FromItemRef>();
  instance.callMethod('handleRef', {
    update: InputRefUpdate,
  });
  const form = createForm();
  form.addItem(ref);
  return {
    form,
    instance,
    onChange,
    onBlur,
    onFocus,
    onConfirm,
    propsData,
    InputRefUpdate,
  };
}

describe('FormInput', () => {
  it('测试集成 form', async () => {
    const { instance, form, InputRefUpdate } = createFormInput({});
    instance.callMethod('onChange', 'test value');
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      input: 'test value',
    });
    expect(InputRefUpdate.mock.lastCall).toEqual(['test value']);
  });

  it('测试集成 form', async () => {
    const { instance, form } = createFormInput({
      required: true,
    });
    const handleChange = vi.fn();
    form.onValuesChange(handleChange);
    instance.callMethod('onChange', '');
    expect(form.getFieldsValue()).toEqual({
      input: '',
    });
    await sleep(10);
    expect(form.getFieldValidatorStatus('input')).toEqual({
      errors: ['input is required'],
      status: 'error',
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormInput({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestValue = 'test value';
    const TestEvent = fmtEvent({});

    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormInput({});
      instance.callMethod('onChange', TestValue, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });

    it('测试 onBlur 事件', () => {
      const { instance, onBlur, propsData } = createFormInput({});
      instance.callMethod('onBlur', TestValue, TestEvent);
      expect(onBlur.mock.calls.length).toEqual(1);
      expect(onBlur.mock.lastCall).toEqual([TestValue, fmtEvent(propsData)]);
    });

    it('测试 onFocus 事件', () => {
      const { instance, onFocus, propsData } = createFormInput({});
      instance.callMethod('onFocus', TestValue, TestEvent);
      expect(onFocus.mock.calls.length).toEqual(1);
      expect(onFocus.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });

    it('测试 onConfirm 事件', () => {
      const { instance, onConfirm, propsData } = createFormInput({});
      instance.callMethod('onConfirm', TestValue, TestEvent);
      expect(onConfirm.mock.calls.length).toEqual(1);
      expect(onConfirm.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });
  });
});
