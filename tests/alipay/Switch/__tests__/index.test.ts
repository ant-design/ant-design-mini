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
    'data-instance-uid': '1',
    onChange,
  });

  expect(instance.getData().mixin.value).toEqual(false);
  instance.callMethod('onChange', {});
  await sleep(20);
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.calls[0][0]).toBe(true);
  expect(onChange.mock.calls[0][1]).toMatchInlineSnapshot(`
    {
      "currentTarget": {
        "dataset": {
          "instance-uid": "1",
        },
      },
      "target": {
        "dataset": {
          "instance-uid": "1",
        },
        "targetDataset": {
          "instance-uid": "1",
        },
      },
    }
  `);
  expect(instance.getData().mixin.value).toEqual(false);
  instance.setProps({ checked: true });
  await sleep(20);

  expect(instance.getData().mixin.value).toEqual(true);
});

it('非受控模式', async () => {
  const onChange = vi.fn();
  const instance = testSwitch({
    onChange,
  });

  expect(instance.getData().mixin.value).toEqual(false);
  instance.callMethod('onChange', {});
  await sleep(20);
  expect(onChange.mock.calls.length).toBe(1);

  expect(instance.getData().mixin.value).toEqual(true);
});

it('测试默认值', async () => {
  const onChange = vi.fn();
  const instance = testSwitch({
    onChange,
    defaultChecked: true,
  });

  expect(instance.getData().mixin.value).toEqual(true);
  instance.callMethod('onChange', {});
  await sleep(20);
  expect(onChange.mock.calls.length).toBe(1);

  expect(instance.getData().mixin.value).toEqual(false);
});

it('测试构造函数', async () => {
  const instance = testSwitch({});
  expect(instance.getConfig()).toMatchFileSnapshot(
    'snapshot/alipay_config.txt'
  );
});
