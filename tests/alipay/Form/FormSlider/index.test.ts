import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormSliderProps } from 'compiled-alipay/Form/FormSlider/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormSlider(props: Partial<FormSliderProps>) {
  const onChange = vi.fn();
  const onAfterChange = vi.fn();

  const propsData = {
    onChange,
    onAfterChange,
    name: 'slider',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormSlider', propsData);

  const ref = instance.ref<FromItemRef>();
  const form = createForm();
  form.addItem(ref);

  return {
    form,
    instance,
    onChange,
    onAfterChange,
    propsData,
  };
}

describe('FormSlider', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormSlider({});
    instance.callMethod('onChange', 50);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      slider: 50,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormSlider({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestValue = 50;
    const TestEvent = fmtEvent({});

    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormSlider({});
      instance.callMethod('onChange', TestValue, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([TestValue, fmtEvent(propsData)]);
    });

    it('测试 onAfterChange 事件', () => {
      const { instance, onAfterChange, propsData } = createFormSlider({});
      instance.callMethod('onAfterChange', TestValue, TestEvent);
      expect(onAfterChange.mock.calls.length).toEqual(1);
      expect(onAfterChange.mock.calls[0]).toEqual([
        TestValue,
        fmtEvent(propsData),
      ]);
    });
  });
});
