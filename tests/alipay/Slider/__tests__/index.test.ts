import { createSelectorQueryFactory, MockSelect } from 'tests/selector-query';
import { getInstance, sleep, TestInstance } from 'tests/utils';
import { describe, expect, it, vi } from 'vitest';

function testSlider(props, mock?: MockSelect): TestInstance {
  const my = {
    canIUse() {
      return true;
    },
    createSelectorQuery: createSelectorQueryFactory(mock),
  };
  const instance = getInstance('Slider', props, my);
  return instance;
}

async function callStep(
  instance: TestInstance,
  start: number,
  end: number,
  step: number
) {
  const dataList = [];

  for (let i = start; i <= end; i = i + step) {
    let command = 'handleTrackTouchMove';
    if (i === start) {
      command = 'handleTrackTouchStart';
    } else if (i === end) {
      command = 'handleTrackTouchEnd';
    }
    await touchEvent(instance, command, i);
    dataList.push(instance.getData().mixin.value);
  }
  return dataList;
}

const selectorMock = vi.fn().mockImplementation(async () => {
  return {
    left: 0,
    width: 100,
  };
});

async function touchEvent(
  instance: TestInstance,
  event: string,
  pageX: number,
  id = ''
) {
  instance.callMethod(event, {
    currentTarget: {
      id,
    },
    changedTouches: [
      {
        pageX: pageX,
      },
    ],
  });
  await sleep(20);
}

describe('单滑块', () => {
  it('测试滚动到末尾', async () => {
    const instance = testSlider(
      {
        min: 0,
        max: 50,
      },
      selectorMock
    );
    await touchEvent(instance, 'handleTrackTouchStart', -10);
    expect(instance.getData().mixin.value).toBe(0);
    await touchEvent(instance, 'handleTrackTouchEnd', 30);
    expect(instance.getData().mixin.value).toBe(15);
    await touchEvent(instance, 'handleTrackTouchEnd', 110);
    expect(instance.getData().mixin.value).toBe(50);
  });

  it('测试 step 为 0.5', async () => {
    const instance = testSlider(
      {
        min: 0,
        max: 4,
        step: 0.5,
        showTicks: true,
      },
      selectorMock
    );
    const dataList = await callStep(instance, -10, 100, 10);
    expect(dataList).toEqual([0, 0, 0.5, 1, 1, 1.5, 2, 2.5, 3, 3, 3.5, 4]);
  });
});

describe('双滑块', () => {
  it('测试双滑块滑动', async () => {
    const instance = testSlider(
      {
        min: 0,
        max: 10,
        defaultValue: [1, 5],
        range: true,
        step: 1,
      },
      selectorMock
    );
    const dataList = await callStep(instance, -10, 100, 10);
    expect(dataList).toEqual([
      [0, 5],
      [0, 5],
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [4, 5],
      [4, 6],
      [4, 7],
      [4, 8],
      [4, 9],
      [4, 10],
    ]);
  });

  it('测试默认值', async () => {
    const instance = testSlider(
      {
        range: true,
        min: 0,
        max: 4,
      },
      selectorMock
    );
    expect(instance.getData().mixin.value).toEqual([0, 0]);
  });
});

it('测试 tickList', async () => {
  const instance = testSlider({
    checked: false,
    min: 2,
    max: 3,
    step: 0.5,
    showTicks: true,
  });
  await sleep(20);
  expect(instance.getData().tickList).toMatchInlineSnapshot(`
    [
      {
        "left": 0,
        "value": 2,
      },
      {
        "left": 50,
        "value": 2.5,
      },
      {
        "left": 100,
        "value": 3,
      },
    ]
  `);
});

it('测试 disabled', async () => {
  const instance = testSlider(
    {
      min: 0,
      max: 50,
      disabled: true,
    },
    selectorMock
  );
  await touchEvent(instance, 'handleTrackTouchStart', 50);
  expect(instance.getData().mixin.value).toBe(0);
  instance.setProps({
    disabled: false,
  });
  await touchEvent(instance, 'handleTrackTouchStart', 50);
  expect(instance.getData().mixin.value).toBe(25);
});

describe('受控模式测试', () => {
  it('测试 value 大于 max 的情况', async () => {
    const instance = testSlider(
      {
        value: 5,
        min: 0,
        max: 4,
        showTicks: true,
      },
      selectorMock
    );
    expect(instance.getData().mixin.value).toBe(4);
  });

  it('测试 defaultValue 大于 max 的情况', async () => {
    const instance = testSlider(
      {
        defaultValue: 5,
        min: 0,
        max: 4,
        showTicks: true,
      },
      selectorMock
    );
    expect(instance.getData().mixin.value).toBe(4);
  });

  it('测试 defaultValue 与 value 优先级', async () => {
    const instance = testSlider(
      {
        value: -1,
        defaultValue: 5,
        min: 0,
        max: 4,
        showTicks: true,
      },
      selectorMock
    );
    expect(instance.getData().mixin.value).toBe(0);
  });

  it('测试 range 的 value 超出范围的情况', async () => {
    const instance = testSlider(
      {
        value: [-1, 5],
        range: true,
        min: 0,
        max: 4,
      },
      selectorMock
    );
    expect(instance.getData().mixin.value).toEqual([0, 4]);
  });

  it('测试更新 props', async () => {
    const instance = testSlider(
      {
        value: 2,
        min: 0,
        max: 4,
        step: 0.5,
        showTicks: true,
      },
      selectorMock
    );
    await touchEvent(instance, 'handleTrackTouchStart', 0);
    expect(instance.getData().mixin.value).toBe(2);
    expect(instance.getData().changingEnd).toBe(true);
    expect(instance.getData().changingStart).toBe(false);
    instance.setProps({
      value: 3,
    });
    expect(instance.getData().mixin.value).toBe(3);
  });
});

describe('事件测试', () => {
  it('测试 onAfterChange', async () => {
    const onAfterChange = vi.fn();
    const instance = testSlider(
      {
        onAfterChange,
      },
      selectorMock
    );
    await touchEvent(instance, 'handleTrackTouchStart', 50);
    expect(instance.getData().mixin.value).toBe(50);
    await touchEvent(instance, 'handleTrackTouchEnd', 51);
    expect(onAfterChange.mock.calls[0][0]).toEqual(51);
    expect(onAfterChange.mock.calls[0][1]).toMatchInlineSnapshot(`
      {
        "changedTouches": [
          {
            "pageX": 51,
          },
        ],
        "currentTarget": {
          "dataset": {},
        },
        "target": {
          "dataset": {},
          "targetDataset": {},
        },
      }
    `);
  });

  it('数据不变的情况下 onChange 只会调用一次', async () => {
    const onChange = vi.fn();
    const instance = testSlider(
      {
        min: 0,
        max: 4,
        'data-test': 1,
        onChange,
      },
      selectorMock
    );
    await touchEvent(instance, 'handleTrackTouchStart', 50);
    expect(instance.getData().mixin.value).toBe(2);
    await touchEvent(instance, 'handleTrackTouchMove', 55);
    await touchEvent(instance, 'handleTrackTouchMove', 60);
    expect(onChange.mock.lastCall[0]).toEqual(2);
    expect(onChange.mock.calls.length).toBe(1);
    await touchEvent(instance, 'handleTrackTouchEnd', 75);
    expect(onChange.mock.lastCall[0]).toEqual(3);
    expect(onChange.mock.lastCall[1]).toMatchInlineSnapshot(`
      {
        "currentTarget": {
          "dataset": {
            "test": 1,
          },
        },
        "target": {
          "dataset": {
            "test": 1,
          },
          "targetDataset": {
            "test": 1,
          },
        },
      }
    `);
    expect(onChange.mock.calls.length).toBe(2);
  });

  it('测试忽略比较旧的事件', async () => {
    const selectorMock = vi.fn().mockImplementation(async (id) => {
      if (id === '#2') {
        await sleep(100);
      }
      return {
        left: 0,
        width: 100,
      };
    });
    const instance = testSlider({}, selectorMock);
    await touchEvent(instance, 'handleTrackTouchStart', 50, '1');
    await touchEvent(instance, 'handleTrackTouchMove', 55, '2');
    await touchEvent(instance, 'handleTrackTouchEnd', 60, '3');
    await sleep(300);
    expect(instance.getData().mixin.value).toBe(60);
  });
});
