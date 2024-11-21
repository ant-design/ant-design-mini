import { IBaseProps } from '../_util/base';

/**
 * @description 空状态
 */

interface Button {
  /**
   * @description 按钮文案
   */
  text: string;
  /**
   * @description 按钮类型
   */
  type: string;
}

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
  /**
   * @description 图片模式
   */
  imageMode: string;
  /**
   * @description 按钮信息
   */
  buttonInfo: {
    /**
     * @description 按钮信息
     * @default horizontal
     */
    layout: 'vertical' | 'horizontal';
    list: Button[];
  };
  /**
   * @description 空状态尺寸
   * @default normal
   */
  size: 'small' | 'normal';
  /**
   * @description 按钮点击事件
   */
  onClickButton: (button: Button) => void;
}

export const EmptyDefaultProps: Partial<IEmptyProps> = {};

export const EmptyFunctionalProps: IEmptyProps = {
  title: '',
  message: '',
  image: '',
  imageMode: 'scaleToFill',
  buttonInfo: {
    list: [],
    layout: 'horizontal',
  },
  size: 'normal',
  onClickButton: () => {},
};
