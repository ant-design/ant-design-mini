// @ts-nocheck
import {
  Component,
  getValueFromProps,
  triggerEventValues,
} from '../_util/simply';
import { ConversationsProps } from './props';

const maxTouchMove = 10;

Component({
  props: ConversationsProps,
  methods: {
    onTouchStart(e) {
      // 这里需要通过 Touch 来实现点击效果，因为微信 movable-view 中的内容都不支持Tap
      const touch = e.touches[0];
      this.touchStartX = touch.clientX;
      this.touchStartY = touch.clientY;
    },
    onItemTap(e) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = Math.abs(touchEndX - this.touchStartX);
      const deltaY = Math.abs(touchEndY - this.touchStartY);
      if (deltaX < maxTouchMove && deltaY < maxTouchMove) {
        const { item, index } = e.currentTarget.dataset;
        triggerEventValues(this, 'itemTap', [item, index], e);
      }
    },
    onButtonTap(menu, e) {
      const menus = getValueFromProps(this, 'menus');
      let menuInfo, itemInfo;
      /// #if ALIPAY || ALIPAYNATIVE
      const { item, index } = e.currentTarget.dataset;
      menuInfo = { ...menus[menu.btnIdx], index: menu.btnIdx };
      itemInfo = { ...item, index };
      /// #endif
      /// #if WECHAT
      const { item: itemW, index: indexW } = menu.currentTarget.dataset;
      menuInfo = { ...menus[menu.detail.btnIdx], index: menu.detail.btnIdx };
      itemInfo = { ...itemW, index: indexW };
      /// #endif
      triggerEventValues(this, 'menuItemTap', [menuInfo, itemInfo], e);
    },
  },
});
