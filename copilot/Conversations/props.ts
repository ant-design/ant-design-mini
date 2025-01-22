/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../../src/_util/base';

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
  text: string;
  width?: number;
  bgColor?: string;
  color?: string;
  slotName?: string;
  confirmType?: '' | 'move' | 'tap';
  confirmText?: string;
}

export interface IConversationsProps extends IBaseProps {
  /**
   * @description 提示列表
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
  onMenuItemTap?: (item: MenuItem, index: number) => void;
}

export const ConversationsProps: Partial<IConversationsProps> = {
  className: '',
  style: '',
  items: [],
  menus: [],
  onItemTap() {},
  onMenuItemTap() {},
};
