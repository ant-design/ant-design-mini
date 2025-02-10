/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { IBaseProps } from '../_util/base';

interface Conversation {
  /**
   * @description 唯一标识用于区分每个会话
   */
  key: string;
  /**
   * @description 会话名称
   */
  label?: string;
  /**
   * @description 描述
   */
  description?: string;
  /**
   * @description 会话图标
   */
  icon?: string;
  /**
   * @description 会话时间戳
   */
  timestamp?: string;
  /**
   * @description 是否禁用点击
   */
  disabled?: boolean;
  /**
   * @description 是否菜单禁用滑动
   */
  disabledMenu?: boolean;
}

interface MenuItem {
  /**
   * @description 按钮文字
   */
  text: string;
  /**
   * @description 按钮宽度
   * @default 150
   */
  width?: number;
  /**
   * @description 按钮背景颜色
   */
  bgColor?: string;
  /**
   * @description 按钮字体颜色
   * @default "#fff"
   */
  color?: string;
  /**
   * @description 二次确认的文案描述；若为空，则展示 text
   */
  confirmText?: string;
}

export interface IConversationsProps extends IBaseProps {
  /**
   * @description 会话列表
   * @default []
   */
  items?: Conversation[];

  /**
   * @description 会话操作菜单
   * @default []
   */
  menus?: MenuItem[];

  /**
   * @description 点击会话项之后的回调
   */
  onItemTap?: (item: Conversation, index: number) => void;

  /**
   * @description 点击菜单项之后的回调
   */
  onMenuItemTap?: (item: {
    menuInfo: MenuItem;
    itemInfo: Conversation;
  }) => void;
}

export const ConversationsProps: Partial<IConversationsProps> = {
  className: '',
  style: '',
  items: [],
  menus: [],
  onItemTap() {},
  onMenuItemTap() {},
};
