import { IBaseProps } from '../_util/base';

/**
 * @description 反馈，通过气泡和卡片的形式展示反馈的内容
 */

export interface FeedItem {
  /**
   * @description 反馈项的图标
   */
  icon?: string;
  /**
   * @description 反馈项的文案
   */
  text: string;
  /**
   * @description 反馈项的图片 和icon互斥 优先展示icon
   */
  image?: string;
  /**
   * @description 反馈项的唯一标识
   */
  id?: string;
}
export interface IFeedbackProps extends IBaseProps {
  /**
   * @description 是否可见
   * @default false
   */
  visible: boolean;
  /**
   * @description 反馈类型
   * @default card
   */
  type: 'popover' | 'card' | 'float';
  /**
   * @description 反馈的标题
   */
  title?: string;
  /**
   * @description 反馈气泡的位置
   * @default bottom-right
   */
  placement: string;
  /**
   * @description 反馈的列表
   */
  list?: FeedItem[];
  /**
   * @description 最外层的样式名
   */
  className: string;
  /**
   * @description 最外层的样式字符串
   */
  style: string;
  /**
   * @description 气泡反馈的引导样式
   */
  popoverType: 'circle' | 'default';
  /**
   * @description 气泡位置是否自适应
   * @default true
   */
  autoAdjustOverflow;
  /**
   * 展示状态改变的勾子
   * @param visible 反馈内容展示状态
   */
  onVisibleChange: (visible) => void;
  /**
   * 反馈项点击回调
   * @param item 点击的反馈项内容
   */
  onTapFeedItem: (item) => void;
}

export const FeedbackDefaultProps: Partial<IFeedbackProps> = {
  className: '',
  title: '',
  list: [],
  type: 'card',
  placement: 'bottom-right',
  visible: null,
  style: '',
  popoverType: 'default',
  autoAdjustOverflow: true,
  onVisibleChange: () => {},
  onTapFeedItem: () => {},
};
