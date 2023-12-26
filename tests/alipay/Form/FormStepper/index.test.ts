import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormStepperProps } from 'compiled-alipay/Form/FormStepper/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormStepper(props: Partial<FormStepperProps>) {
  const onChange = vi.fn();
  const onBlur = vi.fn();
  const onFocus = vi.fn();
  const onConfirm = vi.fn();

  const propsData = {
    onChange,
    onBlur,
    onFocus,
    onConfirm,
    name: 'stepper',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormStepper', propsData);

  const ref = instance.ref<FromItemRef>();
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
  };
}

describe('FormStepper', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormStepper({});
    instance.callMethod('onChange', 2);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      stepper: 2,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormStepper({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestValue = 2;
    const TestEvent = fmtEvent({});

    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormStepper({});
      instance.callMethod('onChange', TestValue, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });

    it('测试 onBlur 事件', () => {
      const { instance, onBlur, propsData } = createFormStepper({});
      instance.callMethod('onBlur', TestEvent);
      expect(onBlur.mock.calls.length).toEqual(1);
      expect(onBlur.mock.calls[0]).toEqual([fmtEvent(propsData)]);
    });

    it('测试 onFocus 事件', () => {
      const { instance, onFocus, propsData } = createFormStepper({});
      instance.callMethod('onFocus', TestEvent);
      expect(onFocus.mock.calls.length).toEqual(1);
      expect(onFocus.mock.calls[0]).toEqual([fmtEvent(propsData)]);
    });

    it('测试 onConfirm 事件', () => {
      const { instance, onConfirm, propsData } = createFormStepper({});
      instance.callMethod('onConfirm', TestValue, TestEvent);
      expect(onConfirm.mock.calls.length).toEqual(1);
      expect(onConfirm.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });
  });
});
