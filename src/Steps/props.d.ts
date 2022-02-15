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
}
export declare const StepsDefaultProps: Partial<IStepsProps>;
