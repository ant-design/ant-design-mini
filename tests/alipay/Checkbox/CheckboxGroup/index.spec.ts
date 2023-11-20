import { getInstance, sleep, TestInstance } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';

async function clickIndex(instance: TestInstance, index: number) {
  instance.callMethod(
    'onChange',
    {},
    {
      currentTarget: {
        dataset: {
          index,
        },
      },
    }
  );
  await sleep(100);
}

describe('Calendar', () => {
  it('测试默认的 props', () => {
    const instance = getInstance('Checkbox/CheckboxGroup', {});
    expect(instance.getConfig().props).toEqual({
      color: '',
      defaultValue: [],
      options: [],
      disabled: false,
      position: 'vertical',
    });
    expect(instance.getData().mixin.value).toEqual([]);
  });

  it('测试 clickIndex 点击', async () => {
    const instance = getInstance('Checkbox/CheckboxGroup', {
      options: [{ value: '1' }, { value: '2' }],
    });
    await clickIndex(instance, 1);
    expect(instance.getData().mixin.value).toEqual(['2']);
    await clickIndex(instance, 0);
    expect(instance.getData().mixin.value).toEqual(['2', '1']);
    await clickIndex(instance, 0);
    expect(instance.getData().mixin.value).toEqual(['2']);
    instance.setProps({
      disabled: true,
    });
    await clickIndex(instance, 0);
    expect(instance.getData().mixin.value).toEqual(['2']);
  });

  it('测试受控模式', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Checkbox/CheckboxGroup', {
      options: [{ value: '1' }, { value: '2' }],
      onChange,
      value: ['1'],
      'data-id': 'test',
    });
    await clickIndex(instance, 1);
    expect(instance.getData().mixin.value).toEqual(['1']);
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toEqual(['1', '2']);
    expect(onChange.mock.calls[0][1]).toMatchInlineSnapshot(`
      {
        "currentTarget": {
          "dataset": {
            "id": "test",
          },
        },
        "target": {
          "dataset": {
            "id": "test",
          },
          "targetDataset": {
            "id": "test",
          },
        },
      }
    `);
    instance.setProps({
      value: ['1', '2'],
    });
    expect(instance.getData().mixin.value).toEqual(['1', '2']);
  });
});
