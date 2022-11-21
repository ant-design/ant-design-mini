import { IBaseProps } from '../_base';

/**
 * @description 空状态
 */

export interface IEmptyProps extends IBaseProps {
  /**
   * @description 主文案
   * @default '这里什么都没有'
   */
  mainText: string;

  /**
   * @description 空状态模式, 'page'表示整页空状态，'section'表示局部空状态
   * @default 'page'
   */
  mode: 'page' | 'section';

  /**
   * @description 副文案
   * @default '看看其它的吧'
   */
  subText: string;
}

export declare const EmptyDefaultProps: Partial<IEmptyProps>;
