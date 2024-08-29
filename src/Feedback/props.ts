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
}

export const FeedbackDefaultProps: Partial<IFeedbackProps> = {
  className: '',
  style: '',
};
