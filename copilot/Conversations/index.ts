import {
  Component,
  getValueFromProps,
  triggerEventValues,
} from '../../src/_util/simply';
import { ConversationsProps } from './props';

Component(ConversationsProps, {
  onItemTap(e) {
    const { item, index } = e.currentTarget.dataset;
    triggerEventValues(this, 'itemTap', [item, index], e);
  },
  onButtonTap(menu, e) {
    const menus = getValueFromProps(this, 'menus');
    let menuInfo, itemInfo;
    /// #if ALIPAY
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
});
