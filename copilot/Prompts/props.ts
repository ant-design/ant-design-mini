/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../../src/_util/base';

interface IPromptsItem {
  /**
   * @description 唯一标识用于区分每个提示项
   */
  key: string;
  /**
   * @description 前面的icon图片链接
   */
  icon?: string;
  /**
   * @description 提示标签显示提示的主要内容
   */
  label?: string;
  /**
   * @description 提示描述提供额外的信息
   */
  description: string;
  /**
   * @description 提示是否展示右边的箭头
   */
  showArrow?: string;
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
  items?: IPromptsItem[];

  /**
   * @description 提示列表的标题
   * @default ''
   */
  title?: string;

  /**
   * @description 纵向布局
   * @default true
   */
  vertical?: boolean;

  /**
   * @description 横向布局下，自动换行
   * @default false
   */
  wrap?: boolean;

  /**
   * @description 点击选项之后的回调
   */
  onItemTap?: (item: IPromptsItem, index: number) => void;
}

export const PromptsProps: Partial<IPromptsProps> = {
  items: [],
  className: '',
  title: '',
  vertical: true,
  wrap: false,
  onItemTap() {},
};
