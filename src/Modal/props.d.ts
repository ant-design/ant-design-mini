import { IBaseProps } from '../_base';
/**
 * @description 对话框，当应用中需要比较明显的对用户当前的操作行为进行警示或提醒时，可以使用对话框。用户需要针对对话框进行操作后方可结束。
 */

export interface IModalProps extends IBaseProps {
  /**
   * @description Modal body类名
   */
  bodyClassName?: string;
  /**
   * @description Modal body样式
   */
  bodyStyle?: string;
  /**
   * @description 遮罩层类名
   */
  maskClassName?: string;
  /**
   * @description 遮罩层样式
   */
  maskStyle?: string;
  /**
   * @description 是否可点击蒙层关闭
   * @default true
   */
  maskClosable: boolean;
  /**
   * @description 类型
   */
  type: 'default' | 'focus';
  /**
   * @description 是否显示右上角的关闭按钮。只有在 type 为 focus 生效
   */
  closable?: string;
  /**
   * @description 标题
   */
  title: string;
  /**
   * @description 内容
   */
  content: string;
  /**
   * @description 是否可见，受控模式
   * @default false
   */
  visible: boolean;
  /**
   * @description 是否关闭后销毁内部元素
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @description 主按钮文本
   */
  primaryButtonText: string;
  /**
   * @description 辅助按钮文本
   */
  secondaryButtonText: string;
  /**
   * @description 取消按钮文案
   */
  cancelButtonText: string;
  /**
   * @description 主按钮样式
   */
  primaryButtonStyle: string;
  /**
   * @description 辅助按钮样式
   */
  secondaryButtonStyle: string;
  /**
   * @description 取消按钮样式
   */
  cancelButtonStyle: string;
  /**
   * @description 触发关闭时回调
   */
  onClose?: () => void;
  /**
   * @description 主按钮点击事件
   */
  onPrimaryButtonTap?: () => void;
  /**
   * @description 次要按钮点击事件
   */
  onSecondaryButtonTap?: () => void;
  /**
   * @description 取消按钮点击事件
   */
  onCancelButtonTap?: () => void;
}
export declare const ModalDefaultProps: Partial<IModalProps>;
