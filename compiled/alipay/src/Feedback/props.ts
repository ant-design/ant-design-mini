import { IBaseProps } from '../_util/base';

/**
 * @description 头像，可展示头像以及用户名等简要信息。
 */
export interface IFeedbackProps extends IBaseProps {
  /**
   * @description 最外层的样式名
   */
  className: string;
  /**
   * @description 最外层的样式字符串
   */
  style: string;
  /**
   * @description 反馈的引导样式
   */
  type: 'circle' | 'default';
  /**
   * 展示状态改变的勾子
   * @param visible 反馈内容展示状态
   */
  onVisibleChange: (visible) => void;
}

export const FeedbackDefaultProps: Partial<IFeedbackProps> = {
  className: '',
  style: '',
  type: 'circle',
  onVisibleChange: (visible) => {},
};
