import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormCheckboxGroupProps } from 'compiled-alipay/Form/FormCheckboxGroup/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormCheckboxGroup(props: Partial<FormCheckboxGroupProps>) {
  const onChange = vi.fn();

  const propsData = {
    onChange,
    name: 'group',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormCheckboxGroup', propsData);

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

describe('FormCheckboxGroup', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormCheckboxGroup({});
    instance.callMethod('onChange', 2);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      group: 2,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormCheckboxGroup({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormCheckboxGroup({});
      const TestValue = ['option1', 'option2'];
      const TestEvent = fmtEvent({});

      instance.callMethod('onChange', TestValue, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });
  });
});
