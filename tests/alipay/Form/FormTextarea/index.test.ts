import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormTextareaProps } from 'compiled-alipay/Form/FormTextarea/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormTextarea(props: Partial<FormTextareaProps>) {
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
    name: 'textarea',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormTextarea', propsData);
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
  };
}

describe('FormTextarea', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormTextarea({});
    instance.callMethod('onChange', 'test value');
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      textarea: 'test value',
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormTextarea({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestValue = 'test value';
    const TestEvent = fmtEvent({});

    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormTextarea({});
      instance.callMethod('onChange', TestValue, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });

    it('测试 onBlur 事件', () => {
      const { instance, onBlur, propsData } = createFormTextarea({});
      instance.callMethod('onBlur', TestValue, TestEvent);
      expect(onBlur.mock.calls.length).toEqual(1);
      expect(onBlur.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });

    it('测试 onFocus 事件', () => {
      const { instance, onFocus, propsData } = createFormTextarea({});
      instance.callMethod('onFocus', TestValue, TestEvent);
      expect(onFocus.mock.calls.length).toEqual(1);
      expect(onFocus.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });

    it('测试 onConfirm 事件', () => {
      const { instance, onConfirm, propsData } = createFormTextarea({});
      instance.callMethod('onConfirm', TestValue, TestEvent);
      expect(onConfirm.mock.calls.length).toEqual(1);
      expect(onConfirm.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });
  });
});
