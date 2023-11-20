import { getInstance } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';

describe('Calendar', () => {
  it('测试默认的 props', () => {
    const instance = getInstance('Checkbox', {});
    expect(instance.getConfig().props).toEqual({});
    expect(instance.getData().mixin.value).toEqual(undefined);
  });

  it('测试 defaultChecked', () => {
    const instance = getInstance('Checkbox', {
      defaultChecked: true,
    });
    expect(instance.getData().mixin.value).toEqual(true);
  });

  it('测试 defaultChecked 和 value 优先级', () => {
    const instance = getInstance('Checkbox', {
      checked: false,
      defaultChecked: true,
    });
    expect(instance.getData().mixin.value).toEqual(false);
  });

  it('测试受控模式', () => {
    const onChange = vi.fn();
    const instance = getInstance('Checkbox', {
      checked: false,
      defaultChecked: true,
      'data-id': 1,
      onChange,
    });
    expect(instance.getData().mixin.value).toEqual(false);
    instance.callMethod('onChange', {});
    expect(instance.getData().mixin.value).toEqual(false);
    expect(onChange.mock.calls.length).toEqual(1);
    expect(onChange.mock.calls[0][0]).toEqual(true);
    expect(onChange.mock.calls[0][1]).toMatchInlineSnapshot(`
      {
        "currentTarget": {
          "dataset": {
            "id": 1,
          },
        },
        "target": {
          "dataset": {
            "id": 1,
          },
          "targetDataset": {
            "id": 1,
          },
        },
      }
    `);
  });
});
