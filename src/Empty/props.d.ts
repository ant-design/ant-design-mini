import { IBaseProps } from '../_base';

/**
 * @description 空状态
 */

export interface IEmptyProps extends IBaseProps {
  /**
   * @description 右侧主操作按钮文案
   * @default '操作2'
   */
  mainButtonText: string;

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
   * @description 左侧次操作按钮文案
   * @default '操作1'
   */
  subButtonText: string;

  /**
   * @description 副文案
   * @default '看看其它的吧'
   */
  subText: string;

  /**
   * @description 点击右侧主按钮触发
   */
  onMainBtnClick: () => void;

  /**
   * @description 点击左侧次按钮触发
   */
  onSubBtnClick: () => void;
}

export declare const EmptyDefaultProps: Partial<IEmptyProps>;
