import { describe, expect, it } from 'vitest';
import { testRate } from './utils';

describe('Radio', () => {
  it('默认为 null', async () => {
    const { instance } = testRate({});
    expect(instance.getData().mixin.value).toBe(null);
  });

  it('测试点击', async () => {
    const { instance, startTap } = testRate({});
    await startTap(20);
    expect(instance.getData().mixin.value).toBe(1);
    await startTap(25);
    expect(instance.getData().mixin.value).toBe(2);
  });

  it('支持 allowHalf', async () => {
    const { instance, startTap } = testRate({
      allowHalf: true,
    });
    await startTap(20);
    expect(instance.getData().mixin.value).toBe(1);
    await startTap(25);
    expect(instance.getData().mixin.value).toBe(1.5);
  });

  it('支持 allowClear, 再次点击后清除', async () => {
    const { instance, startTap } = testRate({
      allowHalf: true,
    });
    await startTap(20);
    expect(instance.getData().mixin.value).toBe(1);
    await startTap(20);
    expect(instance.getData().mixin.value).toBe(0);
  });

  it('支持 readonly', async () => {
    const { instance, startTap } = testRate({
      readonly: true,
    });
    await startTap(20);
    expect(instance.getData().mixin.value).toBe(null);
  });

  it('测试 defaultValue', async () => {
    const { instance, startTap } = testRate({
      defaultValue: 2,
    });
    expect(instance.getData().mixin.value).toBe(2);
    await startTap(20);
    expect(instance.getData().mixin.value).toBe(1);
  });

  it('非受控模式 starMoveEnd 后恢复之前状态', async () => {
    const { instance, starMove, starMoveEnd } = testRate({
      defaultValue: 2,
    });
    expect(instance.getData().mixin.value).toBe(2);
    await starMove(20);
    expect(instance.getData().mixin.value).toBe(1);
    await starMoveEnd();
    expect(instance.getData().mixin.value).toBe(1);
  });

  it('测试 readonly', async () => {
    const { instance, starMove, starMoveEnd } = testRate({
      defaultValue: 2,
      readonly: true,
    });
    expect(instance.getData().mixin.value).toBe(2);
    await starMove(20);
    expect(instance.getData().mixin.value).toBe(2);
    await starMoveEnd();
    expect(instance.getData().mixin.value).toBe(2);
  });

  it('测试 starMoveEnd', async () => {
    const { instance, starMoveEnd } = testRate({
      defaultValue: 2,
    });
    await starMoveEnd();
    expect(instance.getData().mixin.value).toBe(2);
  });
});

describe('受控模式', () => {
  it('starMoveEnd 后恢复之前状态', async () => {
    const { instance, starMove, starMoveEnd } = testRate({
      value: 2,
    });
    expect(instance.getData().mixin.value).toBe(2);
    await starMove(20);
    expect(instance.getData().mixin.value).toBe(1);
    await starMove(50);
    expect(instance.getData().mixin.value).toBe(3);
    await starMoveEnd();
    expect(instance.getData().mixin.value).toBe(2);
  });
});
