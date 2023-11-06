import { getInstance, sleep } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('list props', () => {
  it('test onChange', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onChange,
    });
    expect(instance.getData()).toMatchInlineSnapshot(`
      {
        "mixin": {
          "controlled": true,
          "updated": true,
          "value": "1",
        },
      }
    `);
    instance.callMethod('onChange', {
      detail: {
        value: '3',
      },
    });
    await sleep(20);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"3"');
  });

  it('test onFocus', async () => {
    const onFocus = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onFocus,
    });
    instance.callMethod('onFocus', {
      detail: {
        value: '2',
      },
    });
    await sleep(30);
    instance.callMethod('update', '3');
    await sleep(30);
    expect(onFocus.mock.calls.map((o) => o[0])).toMatchInlineSnapshot(`
      [
        "2",
      ]
    `);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"1"');
    instance.callMethod('onChange', {
      detail: {
        value: '4',
      },
    });
    await sleep(30);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"4"');
  });
  it('test onBlur', async () => {
    const onBlur = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onBlur,
    });
    instance.callMethod('onBlur', {
      detail: {
        value: '4',
      },
    });
    await sleep(20);
    instance.callMethod('update', '2');
    await sleep(30);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"2"');
    expect(onBlur.mock.calls.map((o) => o[0])).toMatchInlineSnapshot(`
      [
        "4",
      ]
    `);
  });

  it('test onConfirm', async () => {
    const onConfirm = vi.fn();
    const instance = getInstance('Input/InputBlur', {
      value: '1',
      onConfirm,
    });
    instance.callMethod('onConfirm', {
      detail: {
        value: '2',
      },
    });
    await sleep(30);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"1"');
    expect(onConfirm.mock.calls.map((o) => o[0])).toMatchInlineSnapshot(`
      [
        "2",
      ]
    `);
  });
});
