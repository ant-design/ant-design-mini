import { IBaseProps } from '../_base';
/**
 * @description 步骤条，分步展示当前进展，配合 StepItem 使用
 */

export interface IStepsProps extends IBaseProps {
  /**
   * @description 当前步骤, 受控
   * @default 0
   */
  index?: number;
  /**
   * @description 方向
   * @default "horizontal"
   */

  direction?: 'horizontal' | 'vertical';
  /**
   * @description 当页面有多个Steps时需传入，页面唯一，与内部的 StepItem 组件的 uid 一致
   * @default 'steps'
   */
  uid?: string;
}
export declare const StepsDefaultProps: Partial<IStepsProps>;
