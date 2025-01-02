import { Component } from '../../src/_util/simply';
import { ThoughtChainProps } from './props';
enum statusEnum {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAIL = 'fail',
}

Component(
  ThoughtChainProps,
  // methods
  {
    onContentItemTap(e) {
      if (this.props.onContentItemTap) {
        this.props.onContentItemTap(e);
      }
    },
    onTitleTap(e) {
      const { index, isExpand } = e.target.dataset || {};
      const { firstLevelFoldStatusList } = this.data;
      const newStatusList = [...firstLevelFoldStatusList];
      newStatusList[index] = isExpand ? 'fold' : 'expand';
      this.setData({
        firstLevelFoldStatusList: newStatusList,
      });
    },
  },
  // data
  {
    statusEnum,
    firstLevelFoldStatusList: [],
  },
  // mixins
  undefined,
  // 生命周期方法
  {
  }
);
