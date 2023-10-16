import { expect, it, vi } from 'vitest';
import { getInstance, sleep } from 'tests/utils';

function testSwitch(props) {
  const my = {
    canIUse() {
      return true;
    },
  };
  const instance = getInstance('Switch', props, my);
  return instance;
}

it('受控模式', async () => {
  const onChange = vi.fn();
  const instance = testSwitch({
    checked: false,
    onChange,
  });

  expect(instance.getData()).toEqual({
    mixin: { value: false },
  });
  instance.callMethod('onChange', {});
  await sleep(20);
  expect(onChange.mock.calls.length).toBe(1);
  expect(instance.getData()).toEqual({
    mixin: { value: false },
  });
  instance.setProps({ checked: true });
  await sleep(20);
  expect(instance.getData()).toEqual({
    mixin: { value: true },
  });
});

it('非受控模式', async () => {
  const onChange = vi.fn();
  const instance = testSwitch({
    onChange,
  });

  expect(instance.getData()).toEqual({
    mixin: { value: false },
  });
  instance.callMethod('onChange', {});
  await sleep(20);
  expect(onChange.mock.calls.length).toBe(1);
  expect(instance.getData()).toEqual({
    mixin: { value: true },
  });
});

it('测试默认值', async () => {
  const onChange = vi.fn();
  const instance = testSwitch({
    onChange,
    defaultChecked: true,
  });

  expect(instance.getData()).toEqual({
    mixin: { value: true },
  });
  instance.callMethod('onChange', {});
  await sleep(20);
  expect(onChange.mock.calls.length).toBe(1);
  expect(instance.getData()).toEqual({
    mixin: { value: false },
  });
});
