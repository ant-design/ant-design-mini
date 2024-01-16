import { IBaseProps } from '../_util/base';
/**
 * @description 弹窗，可在其中加入具体内容，展示更多信息供用户使用。
 */
export interface IPopupProps extends IBaseProps {
  /**
   * @description 是否显示
   * @default false
   */
  visible: boolean;
  /**
   * @description 是否关闭后销毁内部元素
   * @default false
   */
  destroyOnClose: boolean;
  /**
   * @description 是否展示蒙层
   * @default true
   */
  showMask: boolean;

  /**
   * @description 弹窗布局
   * @default "bottom"
   */
  position: 'center' | 'top' | 'bottom' | 'left' | 'right';
  /**
   * @description 是否开启过渡动画
   */
  animation: boolean;
  /**
   * @description  动画类型
   * @default "transform"
   */
  animationType: 'transform' | 'position';
  /**
   * @description 过渡动画时长，单位毫秒
   */
  duration: number;
  /**
   * @description 内容区高度，单位px
   */
  height: number;
  /**
   * @description 内容区宽度，单位px
   */
  width: number;
  /**
   * @description 遮罩层类名
   */
  maskClassName: string;
  /**
   * @description 遮罩层样式
   */
  maskStyle: string;

  zIndex: number;
  /**
   * @description 关闭时回调
   */
  onClose?: () => void;
  /**
   * @description 完全打开时回调
   */
  onAfterShow?: () => void;
  /**
   * @description 完全关闭时回调
   */
  onAfterClose?: () => void;
}

export const PopupDefaultProps: Partial<IPopupProps> = {
  visible: false,
  position: 'bottom',
  // 是否开启动画
  animation: true,
  // 动画持续时间
  duration: 300,
  // 弹窗层级
  zIndex: 998,
  showMask: true,
  animationType: 'transform',
};
