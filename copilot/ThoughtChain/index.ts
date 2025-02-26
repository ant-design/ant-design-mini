// @ts-nocheck
import {
  Component,
  getValueFromProps,
  triggerEventValues,
} from '../_util/simply';
import { ThoughtChainProps } from './props';

Component({
  props: ThoughtChainProps,
  data: {
    foldStatusMap: {},
  },
  methods: {
    onContentTap(e) {
      triggerEventValues(this, 'contentTap', [e], e);
    },
    onTitleTap(e) {
      const [collapsible, onExpand] = getValueFromProps(this, [
        'collapsible',
        'onExpand',
      ]);
      if (!collapsible) return;
      // 受控模式
      if (onExpand && collapsible?.expandedKeys) {
        const { expandedKeys } = collapsible;
        const { key } = e.currentTarget.dataset;
        const isExpandNow = expandedKeys.includes(key);
        const newExpandedKeys = [...expandedKeys];
        if (isExpandNow) {
          newExpandedKeys.splice(newExpandedKeys.indexOf(key), 1);
        } else {
          newExpandedKeys.push(key);
        }
        triggerEventValues(this, 'expand', [newExpandedKeys, key]);
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
});
