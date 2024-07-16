import { IBaseProps } from '../_util/base';

/**
 * @description 步骤条，分步展示当前进展
 */
export interface IStepsProps extends IBaseProps {
  /**
   * @description 当前步骤
   */
  current: number;

  /**
   * @description 方向
   */
  direction: 'horizontal' | 'vertical';

  /**
   *  @description 状态
   */
  status: 'finish' | 'error';

  items?: { title: string; description: string }[];
}

export const StepsDefaultProps: Partial<IStepsProps> = {
  current: 0,
  direction: 'horizontal',
  status: 'finish',
};

export const StepsFunctionalProps: Partial<IStepsProps> = {
  current: 0,
  direction: 'horizontal',
  status: 'finish',
  items: [],
};
