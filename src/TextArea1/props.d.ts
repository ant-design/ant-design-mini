import { IBaseFormItemProps } from '../_base';
/**
 * @description 输入框。
 */

export interface ITextAreaItemProps extends IBaseFormItemProps {
  /**
   * @description 文本域的值
   */
  value?: string;
  /**
   * @description 提示文字
   */

  maxLength?: number;
   /**
    * @description 类名
    */

  placeholder?: string;

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

  className?:string;
  /**
   * @description 是否禁用
   */
  disabled?:boolean;

  /**
   * @description 是否自动增高
   */
  autoHeight?:string;

  /**
   * @description 是否渲染字数统计功能
   */
  showCount?:boolean;

  /**
   * @description 是否为受控组件。为 true 时，value 内容会完全受 setData 控制。
   */
  controlled?:boolean;

  /**
   * @description 是否启用 Native 渲染，参照原生input enableNative属性说明
   */
  enableNative?:boolean;

  /**
   * @description 表单元素
   */
  name?:string

}
export declare const TextAreaDefaultProps: Partial<ITextAreaItemProps>;
