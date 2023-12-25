import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormRadioGroupProps } from 'compiled-alipay/Form/FormRadioGroup/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormRadioGroup(props: Partial<FormRadioGroupProps>) {
  const onChange = vi.fn();

  const propsData = {
    onChange,
    name: 'radioGroup',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormRadioGroup', propsData);

  const ref = instance.ref<FromItemRef>();
  const form = createForm();
  form.addItem(ref);

  return {
    form,
    instance,
    onChange,
    propsData,
  };
}

describe('FormRadioGroup', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormRadioGroup({});
    instance.callMethod('onChange', 'option1');
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      radioGroup: 'option1',
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormRadioGroup({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormRadioGroup({});
      const TestValue = 'option1';
      const TestEvent = fmtEvent({});

      instance.callMethod('onChange', TestValue, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });
  });
});
