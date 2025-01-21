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
   * @description 是否禁用
   */
  disabled?: boolean;
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

/**
 * @description 按钮，用户只需单击一下即可执行操作并做出选择。
 * 常用于表单提交、界面跳转、模块引导点击。具体用法和小程序框架中 button 保持一致，在 button 基础上做了样式的封装。
 * 封装后的按钮可改变按钮形态、增加 loading，以及内置了几种不同样式的按钮。
 */

export interface IPromptsProps extends IBaseProps {
  /**
   * @description 提示列表
   * @default []
   */
  items?: Conversation[];

  /**
   * @description 会话操作菜单
   * @default []
   */
  menu?: MenuItem[];

  /**
   * @description 点击会话项之后的回调
   */
  onItemTap?: (item: Conversation, index: number) => void;

  /**
   * @description 点击菜单项之后的回调
   */
  onMenuItemTap?: (item: MenuItem, index: number) => void;
}

export const PromptsProps: Partial<IPromptsProps> = {
  className: '',
  style: '',
  items: [],
  menu: [],
  onItemTap() {},
};
