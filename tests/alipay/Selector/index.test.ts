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
  });
});
