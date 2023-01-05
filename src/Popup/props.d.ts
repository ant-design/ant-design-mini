import { IBaseProps } from '../_base';
/**
 * @description 弹窗，可在其中加入具体内容，展示更多信息供用户使用。
 */
export interface IPopupProps extends IBaseProps {
  /**
   * @description 是否显示
   * @default false
   */
  visible?: boolean;
  /**
   * @description 是否关闭后销毁内部元素
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @description 是否展示蒙层
   * @default true
   */
  showMask?: boolean;
  /**
   * @description 关闭时回调
   */
  onClose?: () => void;
  /**
   * @description 弹窗布局
   * @default "center"
   */
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  /**
   * @desciption 是否开启过渡动画
   */
  animation?: boolean;
  /**
   * @description 过渡动画时长，单位毫秒
   */
  duration?: number;
  /**
   * @description 内容区高度，单位px
   */
  height?: number;
  /**
   * @description 内容区宽度，单位px
   */
  width?: number;
  /**
   * @description 遮罩层类名
   */
  maskClassName?: string;
  /**
   * @description 遮罩层样式
   */
  maskStyle?: string;
}
export declare const PopupDefaultProps: Partial<IPopupProps>;
