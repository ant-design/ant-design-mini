import { IBaseProps } from '../_base';

/**
 * @description 空状态
 */

export interface IEmptyProps extends IBaseProps {
  /**
   * @description 主文案
   */
  title?: string;

  /**
   * @description 副文案
   */
  message?: string;
}

export declare const EmptyDefaultProps: Partial<IEmptyProps>;
