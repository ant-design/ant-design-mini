import { getInstance, sleep } from 'tests/utils';
import { describe, it, expect, vi } from 'vitest';

describe('Input 非受控', () => {
  it('如果有 controlled, 以 controlled 为准', async () => {
    const instance = getInstance('Input', {
      value: '1',
      controlled: false,
    });
    expect(instance.getData().mixin).toMatchInlineSnapshot(`
      {
        "controlled": false,
        "updated": true,
        "value": "1",
      }
    `);
  });
  it('onChange and onClear', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Input', { onChange });
    expect(instance.getData()).toMatchInlineSnapshot(`
      {
        "mixin": {
          "controlled": false,
          "updated": true,
        },
        "selfFocus": false,
      }
    `);
    instance.callMethod('onChange', {
      detail: {
        value: '3',
      },
    });
    await sleep(20);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"3"');
    instance.callMethod('onClear', {});
    await sleep(20);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('""');
    expect(onChange.mock.calls.map((o) => o[0])).toMatchInlineSnapshot(`
      [
        "3",
        "",
      ]
    `);
  });
});

describe('Input 受控模式', () => {
  it('test default props', async () => {
    const instance = getInstance('Input', {});
    expect(instance.getConfig().props).toMatchInlineSnapshot('{}');
  });
  it('如果有 controlled, 以 controlled 为准', async () => {
    const instance = getInstance('Input', {
      controlled: true,
    });
    expect(instance.getData().mixin).toMatchInlineSnapshot(`
      {
        "controlled": true,
        "updated": true,
      }
    `);
  });
  it('test onChange', async () => {
    const onChange = vi.fn();
    const instance = getInstance('Input', {
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
        "selfFocus": false,
      }
    `);
    instance.callMethod('onChange', {
      detail: {
        value: '3',
      },
    });
    await sleep(20);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"1"');
  });

  it('test onFocus', async () => {
    const onFocus = vi.fn();
    const instance = getInstance('Input', {
      value: '1',
      onFocus,
    });
    instance.callMethod('onFocus', {
      detail: {
        value: '2',
      },
    });
    await sleep(30);
    expect(instance.getData().selfFocus).toBeTruthy();
    expect(onFocus.mock.calls.map((o) => o[0])).toMatchInlineSnapshot(`
    [
      "2",
    ]
  `);
    instance.callMethod('update', '3');
    await sleep(30);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"3"');
    instance.callMethod('onChange', {
      detail: {
        value: '4',
      },
    });
    await sleep(30);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"3"');
  });
  it('test onBlur', async () => {
    const onBlur = vi.fn();
    const instance = getInstance('Input', {
      value: '1',
      onBlur,
    });
    instance.callMethod('onBlur', {
      detail: {
        value: '4',
      },
    });
    await sleep(20);
    expect(instance.getData().mixin.value).toMatchInlineSnapshot('"1"');
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
    const instance = getInstance('Input', {
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
