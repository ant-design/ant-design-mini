import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormRateProps } from 'compiled-alipay/Form/FormRate/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormRate(props: Partial<FormRateProps>) {
  const onChange = vi.fn();

  const propsData = {
    onChange,
    name: 'rate',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormRate', propsData);

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

describe('FormRate', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormRate({});
    instance.callMethod('onChange', 3);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      rate: 3,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormRate({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormRate({});
      const TestValue = 4;
      const TestEvent = fmtEvent({});

      instance.callMethod('onChange', TestValue, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });
  });
});
