import { Component, triggerEvent } from '../../src/_util/simply';
import { ThoughtChainProps } from './props';

Component(
  ThoughtChainProps,
  // methods
  {
    onContentItemTap(e) {
      if (this.props.onContentItemTap) {
        triggerEvent(this, 'contentItemTap', e, e);
      }
    },
    onTitleTap(e) {
      if (!this.props.collapsible) return;
      // 受控模式
      if (this.props.onExpand && this.props.collapsible?.expandedKeys) {
        const { collapsible, onExpand } = this.props;
        const { expandedKeys } = collapsible;
        const { key } = e.currentTarget.dataset;
        const isExpandNow = expandedKeys.includes(key);
        const newExpandedKeys = [...expandedKeys];
        if (isExpandNow) {
          newExpandedKeys.splice(newExpandedKeys.indexOf(key), 1);
        } else {
          newExpandedKeys.push(key);
        }
        onExpand(newExpandedKeys, key);
      } else {
        const { key } = e.currentTarget.dataset;
        const foldStatusMap = { ...this.data.foldStatusMap };
        const isFold = foldStatusMap[key];
        foldStatusMap[key] = !isFold;
        this.setData({
          foldStatusMap,
        });
      }
    },
  },
  // data
  {
    foldStatusMap: {},
  },
  // mixins
  undefined,
  // 生命周期方法
  {}
);
