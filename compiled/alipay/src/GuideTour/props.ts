import { IBaseProps } from '../_util/base';

interface IStep {
  /**
   * @description 图片地址
   */
  imageUrl: string;
  /**
   * @description 图片模式
   */
  imageMode: string;
  /**
   * @description 图片内联样式
   */
  imageStyle: string;
  /**
   * @description 距离顶部
   */
  top: string;
  /**
   * @description 距离左边
   */
  left: string;
  /**
   * @description className
   */
  className?: string;
}

export interface IGuideTour extends IBaseProps {
  /**
   * @description 蒙层样式
   */
  maskStyle: string;
  /**
   * @description 蒙层 className
   */
  maskClassName?: string;
  /**
   * @description 步骤详情
   */
  items: IStep[];
  /**
   * @description 当前步骤
   */
  current: number;
  /**
   * @description 初始step
   */
  defaultCurrent: number;
  /**
   * @description 是否开启滑动模式
   */
  swiperable: boolean;
  /**
   * @description 引导是否可见, 受控
   * @default true
   */
  visible: boolean;
  /**
   * @description 关闭回调
   */
  onCancel: () => void;
  /**
   * @description 步骤改变回调
   */
  onChange: (index: number) => boolean;
   /**
   * @description 上一步按钮文案
   * @default "上一步"
   */
  prevStepText?: string;
   /**
   * @description 下一步按钮文案
   * @default "下一步"
   */
  nextStepText?: string;
   /**
   * @description 知道了按钮文案
   * @default "知道了"
   */
  gotItText?: string;
   /**
   * @description 跳过按钮文案
   * @default "跳过"
   */
  jumpText?: string;
}

export const GuideTourDefaultProps: Partial<IGuideTour> = {
  visible: false,
  swiperable: false,
  items: [],
  defaultCurrent: 0,
  gotItText: '知道了',
  nextStepText: '下一步',
  prevStepText: '上一步',
  jumpText: '跳过'
};

export const GuideTourFunctionalProps: Partial<IGuideTour> = {
  maskStyle: '',
  maskClassName: '',
  items: [],
  current: null,
  defaultCurrent: 0,
  swiperable: false,
  visible: false,
};
