import { IBaseProps } from '../_util/base';

/**
 * @description 空状态
 */

export interface IEmptyProps extends IBaseProps {
  /**
   * @description 主文案
   */
  title: string;

  /**
   * @description 副文案
   */
  message: string;

  /**
   * @description 图片路径
   */
  image: string;
}

export const EmptyDefaultProps: Partial<IEmptyProps> = {};

export const EmptyFunctionalProps: IEmptyProps = {
  title: '',
  message: '',
  image: '',
};
