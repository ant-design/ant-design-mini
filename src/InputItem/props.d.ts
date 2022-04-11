import { IBaseFormItemProps } from '../_base';
/**
 * @description 输入框。
 */

export interface IInputItemProps extends IBaseFormItemProps {
  /**
   * @description 输入框的值
   */
  value?: string;
  /**
   * @description 提示文字
   */

  placeholder?: string;
  /**
   * @description 显示清除图标
   * @default true
   */

  clear?: boolean;
  /**
   * @description input 的类型
   * @default 'text'
   */
  type?:
    | 'text'
    | 'number'
    | 'idcard'
    | 'digit'
    | 'numberpad'
    | 'digitpad'
    | 'idcardpad';
  /**
   * @description 是否是密码类型
   * @default false
   */
  password?: boolean;
  /**
   * @description 指定 placeholder 的样式，可设置间距
   */
  placeholderStyle?: string;
  /**
   * @description 指定 placeholder 的样式类
   */
  placeholderClass?: string;
  /**
   * @description 最大长度
   * @default 140
   */
  maxLength?: number;
  /**
   * @description 设置键盘右下角按钮的文字, 只有在 type=text 时有效
   * @default 'done'
   */
  confirmType?: 'done' | 'go' | 'next' | 'search' | 'send';
  /**
   * @description 点击键盘右下角按钮时是否保持键盘不收起状态
   * @default false
   */
  confirmHold?: boolean;
  /**
   * @description 指定 focus 时的光标位置
   */
  cursor?: number;
  /**
   * @description 获取光标时，选中文本对应的焦点光标起始位置，需要和 selection-end 配合使用
   * @default -1
   */
  selectionStart?: number;
  /**
   * @description 获取光标时，选中文本对应的焦点光标结束位置，需要和 selection-start 配合使用
   * @default -1
   */
  selectionEnd?: number;
  /**
   * @description 当 type 为 number, digit, idcard 数字键盘是否随机排列
   * @default false
   */
  randomNumber?: boolean;
  /**
   * @description 是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效
   * @default false
   */
  alwaysSystem?: boolean;
  /**
   * @description 是否启用 Native 渲染，参照原生input enableNative属性说明
   */
  enableNative?:boolean;
}
export declare const InputItemDefaultProps: Partial<IInputItemProps>;
