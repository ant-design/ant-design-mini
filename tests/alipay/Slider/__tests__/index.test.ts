import { createSelectorQueryFactory, MockSelect } from 'tests/selector-query';
import { getInstance, sleep, TestInstance } from 'tests/utils';
import { expect, it, vi } from 'vitest';

function testSlider(props, mock?: MockSelect) {
  const my = {
    canIUse() {
      return true;
    },
    createSelectorQuery: createSelectorQueryFactory(mock),
  };
  const instance = getInstance('Slider', props, my);
  return instance;
}

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
  await sleep(10);
}

it('测试滚动到末尾', async () => {
  const selectorMock = vi.fn().mockImplementation(async () => {
    return {
      left: 0,
      width: 100,
    };
  });
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

it('测试 step 为 0.5', async () => {
  const selectorMock = vi.fn().mockImplementation(async () => {
    return {
      left: 0,
      width: 100,
    };
  });
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

it('测试双滑块滑动', async () => {
  const selectorMock = vi.fn().mockImplementation(async () => {
    return {
      left: 0,
      width: 100,
    };
  });
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

it('测试受控模式', async () => {
  const selectorMock = vi.fn().mockImplementation(async () => {
    return {
      left: 0,
      width: 100,
    };
  });

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
});
