import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormSwitchProps } from 'compiled-alipay/Form/FormSwitch/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormSwitch(props: Partial<FormSwitchProps>) {
  const onChange = vi.fn();

  const propsData = {
    onChange,
    name: 'switch',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormSwitch', propsData);

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

describe('FormSwitch', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormSwitch({});
    instance.callMethod('onChange', true);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      switch: true,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormSwitch({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormSwitch({});
      const TestValue = true;
      const TestEvent = fmtEvent({});

      instance.callMethod('onChange', TestValue, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });
  });
});
