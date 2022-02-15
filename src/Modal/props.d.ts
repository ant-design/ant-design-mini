
import { IBaseProps } from '../_base';
/**
 * @description 对话框，当应用中需要比较明显的对用户当前的操作行为进行警示或提醒时，可以使用对话框。用户需要针对对话框进行操作后方可结束。
 */

export interface IModalProps extends IBaseProps {
  /**
   * @description 标题
   */
  title: string;
  /**
   * @description 内容
   */
  content: string;
  /**
   * @description 缩略图
   */
  image?: string;
  /**
   * @description 缩略图尺寸
   * @default "medium"
   */
  imageSize?: 'medium' | 'large' | 'x-large';
  /**
   * @description 是否可见，受控模式
   * @default false
   */
  visible: boolean;
  /**
 * @description 点击蒙层关闭
 * @default true
 */
  maskClosable: boolean;
  /**
   * @description 主按钮文本
   */
  mainButtonText: string
  /**
   * @description 辅助按钮文本
   */
  addonButtonText: string
  /**
   * @description 关闭图标的颜色，用于在深色和浅色背景上切换，不传时表示无关闭图标
   */
  closeType?: 'dark' | 'light';
  /**
   * @description 弹窗动画时长，单位 ms
   * @default 300
   */
  duration: number;
  /**
   * @description 触发关闭时回调
   */
  onClose?: () => void;
  /**
   * @description 点击按钮回调
   */
  onButtonTap?: (type: 'main' | 'addon' | 'cancel') => void;
}
export declare const ModalDefaultProps: Partial<IModalProps>;
