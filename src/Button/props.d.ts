/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps, IconType } from '../_base';

/**
 * @description 按钮，用户只需单击一下即可执行操作并做出选择。
 * 常用于表单提交、界面跳转、模块引导点击。具体用法和小程序框架中 button 保持一致，在 button 基础上做了样式的封装。
 * 封装后的按钮可改变按钮形态、增加 loading，以及内置了几种不同样式的按钮。
 */

export interface IButtonProps extends IBaseProps {
  /**
   * @description 按钮类型
   * @default "default"
   */
  type?: 'default' | 'primary' | 'danger' | 'ghost' | 'danger-ghost' | 'light';
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 按下时的类名
   */
  activeClassName?: string;
  /**
   * @description 辅助文字，显示在第二行
   */
  subText?: string;
  /**
   * @description 内联，不撑满父级宽度
   * @default false
   */
  inline?: boolean;
  /**
   * @description 内联尺寸
   * @default "medium"
   */
  inlineSize?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  /**
   * @description 按钮左侧图标
   */
  icon?: IconType;
  /**
   * @description 是否加载中，加载中时不可点击
   * @default false
   */
  loading?: boolean;
  /**
   * @description 加载中时的文字
   */
  loadingText?: string;
  /**
   * @description 按钮原生类型，在表单提交时有效
   * @default "button"
   */
  htmlType?: 'button' | 'submit' | 'reset';
  /**
   * @description 点击回调
   */
  onTap?: (event?: any) => void;
  /**
   * @description 生活号 id，必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效。
   */
  publicId?: string;
  /**
   * @description 开放能力。
   */
  openType?: string;
  /**
   * @description 当 openType 为 getAuthorize 时有效。
   */
  scope?: string;
  /**
   * @description 当 openType 为 getAuthorize 时有效。
   */
  fill?: 'outline' | 'solid' | 'none';
  /**
  * @description 是否阻止事件冒泡
  */
  stopPropagation?: boolean;
}
export declare const ButtonDefaultProps: Partial<IButtonProps>;
