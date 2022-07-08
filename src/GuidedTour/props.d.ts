import { IBaseProps } from '../_base';

export interface IGuidedTour extends IBaseProps {
  /**
   * @description 控制组件是否显示
   * @default true
   */
  visible: boolean;
  /**
   * @description 指定初始步骤序号
   */
  defaultIndex: number;
  /**
   * @description 当页面有多个GuidedTour时需传入，页面唯一，与内部的 TourItem 组件的 uid 一致
   */
  uid?: string;
  /**
   * @description 关闭回调
   */
  onCancel?: () => void;
  /**
   * @description 步骤改变回调
   */
  onChange?: (index: number) => void;
}
export declare const GuidedTourDefaultProps: Partial<IGuidedTour>;
