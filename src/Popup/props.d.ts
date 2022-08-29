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
   * @description 点击蒙层是否可以关闭
   * @default false
   */
  maskClosable?: boolean;
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
   * @description 展示关闭图标
   * @default false
  */
  showCloseIcon?: boolean;
  /**
   * @desciption 是否开启过渡动画
   */
  animation?: boolean;
  /**
   * @description 弹窗展示时，是否禁止页面滚动
   */
  disableScroll?: boolean;
  /**
   * @description 过渡动画时长，单位毫秒
   */
  duration?: number;
  /**
   * @description 是否自适应内容区高度
   * @default false
   */
  autoHeight?: boolean;
}
export declare const PopupDefaultProps: Partial<IPopupProps>;
