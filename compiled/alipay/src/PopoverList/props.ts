import { IBaseProps } from '../_util/base';

export interface PopoverListItem {
  /**
   *  @description 菜单的icon
   */
  icon: string;
  /**
   *  @description 菜单的icon的图片, 优先取iconImage 没有再取icon字段
   *  @default ''
   */
  iconImage: string;
  /**
   *  @description 菜单项的文案，如果没有则不展示该菜单
   *  @default ''
   */
  text: string;
  /**
   *  @description 菜单项是否展示红点徽标
   *  @default false
   */
  showBadge: boolean;
  /**
   *  @description 菜单项的唯一标识
   *  @default ''
   */
  id: string;
}
/**
 * @description 气泡，内部配合 PopoverItem 使用。
 */

export interface IPopoverListProps extends IBaseProps {
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
   * @description 点击列表项
   */
  onTapItem?: (item: PopoverListItem, e: Record<string, any>) => void;
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
   * @description 菜单列表数据
   * @default []
   */
  list: PopoverListItem[];
}

export const PopoverDefaultProps: Partial<IPopoverListProps> = {
  visible: null,
  defaultVisible: false,
  destroyOnClose: false,
  contentClassName: '',
  contentStyle: '',
  showMask: true,
  placement: 'top',
  autoAdjustOverflow: true,
  maskClassName: '',
  maskStyle: '',
  content: '',
  list: [],
  onVisibleChange() {},
  onTapItem() {},
};
