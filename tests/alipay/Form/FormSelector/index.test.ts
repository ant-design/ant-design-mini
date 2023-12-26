import { FromItemRef } from 'compiled-alipay/Form/form';
import { FormSelectorProps } from 'compiled-alipay/Form/FormSelector/props';
import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { getInstance, sleep } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';
import { createForm } from '../utils';

function createFormSelector(props: Partial<FormSelectorProps>) {
  const onChange = vi.fn();
  const onSelectMax = vi.fn();
  const onSelectMin = vi.fn();

  const propsData = {
    onChange,
    onSelectMax,
    onSelectMin,
    name: 'selector',
    'data-test': 'test',
    ...props,
  };

  const instance = getInstance('Form/FormSelector', propsData);
  const ref = instance.ref<FromItemRef>();
  const form = createForm();
  form.addItem(ref);

  return {
    form,
    instance,
    onChange,
    onSelectMax,
    onSelectMin,
    propsData,
  };
}

describe('FormSelector', () => {
  it('测试集成 form', async () => {
    const { instance, form } = createFormSelector({});
    const TestValue = 'option1';
    instance.callMethod('onChange', TestValue);
    await sleep(10);
    expect(form.getFieldsValue()).toEqual({
      selector: TestValue,
    });
  });

  it('测试 props 改变', async () => {
    const { instance } = createFormSelector({});
    instance.setProps({ required: true });
    expect(instance.getData().formData.required).toEqual(true);
  });

  describe('测试事件', () => {
    const TestValue = 'option1';
    const TestItem = { label: 'Option 1', value: 'option1' };
    const TestEvent = fmtEvent({});

    it('测试 onChange 事件', () => {
      const { instance, onChange, propsData } = createFormSelector({});
      instance.callMethod('onChange', TestValue, TestItem, TestEvent);
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0]).toEqual([
        TestValue,
        TestItem,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onSelectMax 事件', () => {
      const { instance, onSelectMax, propsData } = createFormSelector({});
      instance.callMethod('onSelectMax', TestValue, TestItem, TestEvent);
      expect(onSelectMax.mock.calls.length).toEqual(1);
      expect(onSelectMax.mock.calls[0]).toEqual([
        TestValue,
        TestItem,
        fmtEvent(propsData),
      ]);
    });

    it('测试 onSelectMin 事件', () => {
      const { instance, onSelectMin, propsData } = createFormSelector({});
      instance.callMethod('onSelectMin', TestValue, TestItem, TestEvent);
      expect(onSelectMin.mock.calls.length).toEqual(1);
      expect(onSelectMin.mock.calls[0]).toEqual([
        TestValue,
        TestItem,
        fmtEvent(propsData),
      ]);
    });
  });
});
