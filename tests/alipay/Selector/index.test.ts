import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import { describe, expect, it } from 'vitest';
import { createSelector } from './utils';

describe('Selector Test', () => {
  describe('多选', () => {
    it('如果当前小于 minSelectedCount, 允许选择新的项', async () => {
      const { instance, selectByValue } = createSelector({
        multiple: true,
        minSelectedCount: 1,
      });
      await selectByValue(1);
      expect(instance.getData().mixin.value).toEqual([1]);
      await selectByValue(2);
      expect(instance.getData().mixin.value).toEqual([1, 2]);
    });

    it('如果当前小于等于 minSelectedCount, 不允许反选', async () => {
      const { instance, selectByValue } = createSelector({
        defaultValue: [1, 2],
        multiple: true,
        minSelectedCount: 1,
      });
      await selectByValue(1);
      expect(instance.getData().mixin.value).toEqual([2]);

      // 此时不能小于 1
      await selectByValue(2);
      expect(instance.getData().mixin.value).toEqual([2]);
    });

    it('如果当前大于等于 maxSelectedCount, 允许反选', async () => {
      const { instance, selectByValue } = createSelector({
        defaultValue: [1, 2],
        multiple: true,
        maxSelectedCount: 1,
      });
      await selectByValue(2);
      expect(instance.getData().mixin.value).toEqual([1]);
      await selectByValue(2);
      expect(instance.getData().mixin.value).toEqual([1]);
      await selectByValue(1);
      expect(instance.getData().mixin.value).toEqual([]);
    });

    it('如果当前小于等于 maxSelectedCount, 不允许选择', async () => {
      const { instance, selectByValue } = createSelector({
        defaultValue: [1, 2],
        multiple: true,
        maxSelectedCount: 1,
      });
      await selectByValue(3);
      expect(instance.getData().mixin.value).toEqual([1, 2]);
    });

    it('测试 onSelectMax', async () => {
      const { selectByValue, onSelectMax } = createSelector({
        defaultValue: [1, 2],
        multiple: true,
        maxSelectedCount: 2,
      });
      await selectByValue(3);
      expect(onSelectMax.mock.lastCall).toEqual([
        3,
        { text: '3', value: 3 },
        fmtEvent({}),
      ]);
    });
  });

  describe('单选', () => {
    it('如果当前小于 minSelectedCount, 允许选择新的项', async () => {
      const { instance, selectByValue } = createSelector({
        minSelectedCount: 1,
      });
      await selectByValue(1);
      expect(instance.getData().mixin.value).toEqual(1);
      await selectByValue(2);
      expect(instance.getData().mixin.value).toEqual(2);
    });

    it('如果当前小于等于 minSelectedCount, 不允许反选', async () => {
      const { instance, selectByValue } = createSelector({
        minSelectedCount: 1,
      });
      await selectByValue(1);
      expect(instance.getData().mixin.value).toEqual(1);
      await selectByValue(1);
      expect(instance.getData().mixin.value).toEqual(1);
    });

    it('测试 disabled', async () => {
      const { instance, selectByValue } = createSelector({
        defaultValue: 1,
        disabled: true,
      });
      expect(instance.getData().mixin.value).toEqual(1);
      await selectByValue(2);
      expect(instance.getData().mixin.value).toEqual(1);
    });
  });

  it('onChange 事件 单选', async () => {
    const { instance, selectByValue, onChange } = createSelector({
      defaultValue: 1,
    });
    expect(instance.getData().mixin.value).toEqual(1);
    await selectByValue(2);
    expect(onChange.mock.lastCall).toEqual([
      2,
      { text: '2', value: 2 },
      fmtEvent({}),
    ]);
    expect(instance.getData().mixin.value).toEqual(2);
    await selectByValue(2);
    expect(onChange.mock.lastCall).toEqual([
      undefined,
      undefined,
      fmtEvent({}),
    ]);
    expect(instance.getData().mixin.value).toEqual(undefined);
  });

  it('onChange 事件 多选', async () => {
    const { instance, selectByValue, onChange } = createSelector({
      multiple: true,
      defaultValue: [1, 2],
    });
    expect(instance.getData().mixin.value).toEqual([1, 2]);
    await selectByValue(2);
    expect(onChange.mock.lastCall).toEqual([
      [1],
      [{ text: '1', value: 1 }],
      fmtEvent({}),
    ]);
    expect(instance.getData().mixin.value).toEqual([1]);
    await selectByValue(3);
    expect(onChange.mock.lastCall).toEqual([
      [1, 3],
      [
        { text: '1', value: 1 },
        { text: '3', value: 3 },
      ],
      fmtEvent({}),
    ]);
  });
});

describe('受控模式', () => {
  it('单选', async () => {
    const { instance, selectByValue, onChange } = createSelector({
      value: 1,
    });
    expect(instance.getData().mixin.value).toEqual(1);
    await selectByValue(2);
    expect(onChange.mock.lastCall).toEqual([
      2,
      { text: '2', value: 2 },
      fmtEvent({}),
    ]);
    expect(instance.getData().mixin.value).toEqual(1);
    await selectByValue(1);
    expect(onChange.mock.lastCall).toEqual([
      undefined,
      undefined,
      fmtEvent({}),
    ]);
  });

  it('多选', async () => {
    const { instance, selectByValue, onChange } = createSelector({
      multiple: true,
      value: [1, 2],
    });
    expect(instance.getData().mixin.value).toEqual([1, 2]);
    await selectByValue(2);
    expect(onChange.mock.lastCall).toEqual([
      [1],
      [{ text: '1', value: 1 }],
      fmtEvent({}),
    ]);
    expect(instance.getData().mixin.value).toEqual([1, 2]);
    await selectByValue(3);
    expect(onChange.mock.lastCall).toEqual([
      [1, 2, 3],
      [
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
      ],
      fmtEvent({}),
    ]);
  });
});
