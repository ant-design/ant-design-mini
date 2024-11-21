import { IBaseProps } from '../_util/base';
/**
 * @description 气泡，内部配合 PopoverItem 使用。
 */

export interface IPopoverProps extends IBaseProps {
  /**
   * @description 是否可见
   * @default false
   */
  visible: boolean;
  /**
   * @description 默认是否可见
   * @default false
   */
  defaultVisible: boolean;
  /**
   * @description 是否关闭后销毁内部元素
   * @default false
   */
  destroyOnClose: boolean;
  /**
   * @description 背景颜色
   */
  color: string;
  /**
   * @description content区样式
   */
  contentStyle: string;
  /**
   * @description content类名
   */
  contentClassName: string;
  /**
   * @description content 内容
   */
  content?: string;
  /**
   * @description 蒙层类名
   */
  maskClassName: string;
  /**
   * @description 蒙层样式
   */
  maskStyle: string;
  /**
   * @description visible 变更时回调
   */
  onVisibleChange?: (visible: boolean, e: Record<string, any>) => void;
  /**
   * @description 点击行动点
   */
  onTapAction?: () => void;
  /**
   * @description 气泡框位置
   */
  placement:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'right'
    | 'right-top'
    | 'right-bottom';
  /**
   * @description 是否展示蒙层
   * @default false
   */
  showMask: boolean;

  /**
   * @description 气泡被遮挡时自动调整位置
   * @default true
   */
  autoAdjustOverflow: boolean;
  /**
   * @description 是否关闭的icon
   * @default false
   */
  showCloseIcon: boolean;
  /**
   * @description 气泡左侧的图片链接
   * @default ''
   */
  imageUrl: string;
  /**
   * @description 右侧操作按钮文案
   * @default ''
   */
  actionText: string;
}

export const PopoverDefaultProps: Partial<IPopoverProps> = {
  visible: null,
  imageUrl: '',
  defaultVisible: false,
  destroyOnClose: false,
  showCloseIcon: false,
  contentClassName: '',
  actionText: '',
  color: '',
  contentStyle: '',
  showMask: true,
  placement: 'top',
  autoAdjustOverflow: true,
  maskClassName: '',
  maskStyle: '',
  content: '',
  onVisibleChange() {},
  onTapAction() {},
};
