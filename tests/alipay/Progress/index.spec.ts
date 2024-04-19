/* eslint-disable prefer-rest-params */
import { getInstance, sleep } from 'tests/utils';
import { expect, it } from 'vitest';
import { IProgressBarProps } from '../../../src/Progress/props';

class MockCanvas {
  public commands: Array<[string, any[]]> = [];
  constructor(public id: string) {
    this.fakeCommand('clearRect');
    this.fakeCommand('beginPath');
    this.fakeCommand('setLineCap');
    this.fakeCommand('arc');
    this.fakeCommand('stroke');
    this.fakeCommand('draw');
  }

  set imageSmoothingEnabled(v: boolean) {
    this.commands.push(['imageSmoothingEnabled', [v]]);
  }
  set lineWidth(width: number) {
    this.commands.push(['lineWidth', [width]]);
  }
  set strokeStyle(color: string) {
    this.commands.push(['strokeStyle', [color]]);
  }
  set imageSmoothingQuality(color: string) {
    this.commands.push(['imageSmoothingQuality', [color]]);
  }
  private fakeCommand(funcName) {
    this[funcName] = (...args: any[]) => {
      this.commands.push([funcName, args]);
    };
  }
}

function createProgress(props: Partial<IProgressBarProps>) {
  const canvasMap = new Map<string, MockCanvas>();
  const my = {
    canIUse() {
      return true;
    },
    getSystemInfo({ success }) {
      success({
        pixelRatio: 2,
      });
    },
    createCanvasContext(id: string) {
      if (!canvasMap.has(id)) {
        canvasMap.set(id, new MockCanvas(id));
      }
      return canvasMap.get(id);
    },
  };
  const instance = getInstance(
    'Progress',
    {
      ...props,
    },
    my
  );

  return { instance, canvasMap };
}

it('测试默认值', () => {
  const { instance } = createProgress({});

  const { percent, type, speed, width, strokeWidth, animation } =
    instance.getConfig().props;
  expect({
    percent,
    type,
    speed,
    width,
    strokeWidth,
    animation,
  }).toMatchFileSnapshot('snapshot/alipay_config_props.txt');

  // 默认动画开启
  expect(animation).toEqual(true);
});

it('测试 lint', () => {
  const { instance } = createProgress({
    // 测试异常情况
    percent: 'aaa',
  });
  instance.setProps({
    percent: 50,
  });
  expect(instance.getData().curProgress).toBe(50);
});

it('测试默认绘图', async () => {
  const { instance, canvasMap } = createProgress({
    type: 'circle',
  });
  instance.setProps({
    percent: 50,
  });
  await sleep(600);
  expect(instance.getData().curProgress).toBe(50);
  expect(canvasMap.size).toBe(1);
  expect(
    JSON.stringify(Array.from(canvasMap.values())[0].commands, null, 2)
  ).toMatchFileSnapshot('snap.json');
  expect(instance.getData().canvasWidth).toBe(200);
});

it('测试 speed strokeColor trailColor', async () => {
  const { instance, canvasMap } = createProgress({
    type: 'circle',
  });
  instance.setProps({
    percent: 50,
    speed: 60,
    strokeColor: 'red',
    trailColor: 'blue',
    strokeWidth: '8',
  });
  await sleep(600);
  expect(instance.getData().curProgress).toBe(50);
  expect(canvasMap.size).toBe(1);
  expect(
    JSON.stringify(Array.from(canvasMap.values())[0].commands, null, 2)
  ).toMatchFileSnapshot('snap-speed-12.json');
  expect(instance.getData().canvasWidth).toBe(200);
});

it('测试 speed strokeColor trailColor', async () => {
  const { instance, canvasMap } = createProgress({
    type: 'circle',
    percent: 50,
  });
  await sleep(600);
  instance.setProps({
    percent: 20,
  });
  await sleep(600);
  expect(instance.getData().curProgress).toBe(20);
  expect(canvasMap.size).toBe(1);
  expect(
    JSON.stringify(Array.from(canvasMap.values())[0].commands, null, 2)
  ).toMatchFileSnapshot('snap-speed-0-50-20.json');
  expect(instance.getData().canvasWidth).toBe(200);
});
