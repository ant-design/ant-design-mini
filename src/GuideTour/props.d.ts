import { IBaseProps } from '../_base';

interface IStep {
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 补充信息
   */
  desc?: string;
  /**
   * @description 图片地址
   */
  imageUrl?: string;
  /**
   * @description 距离顶部
   */
  top?: string;
  /**
   * @description 距离左边
   */
  left?: string;
}

export interface IGuideTour extends IBaseProps {
  /**
   * @description 步骤详情
   */
  steps?: IStep[];
  /**
   * @description 当前步骤，默认0
   */
  index?: number;
  /**
   * @description 是否开启滑动模式
   */
  swiperable?: boolean;
  /**
   * @description 引导是否可见, 受控
   * @default true
   */
  visible?: boolean;
  /**
   * @description 关闭回调
   */
  onCancel?: () => void;
  /**
   * @description 步骤改变回调
   */
  onChange?: (index: number) => void;
}
export declare const GuideTourDefaultProps: Partial<IGuideTour>;
