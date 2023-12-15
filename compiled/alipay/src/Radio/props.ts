import { IBaseProps } from '../_util/base';

export interface IRadioProps extends IBaseProps {
  /**
   * @description 组件值，选中时 change 事件会携带的 value。
   */
  value?: string;
  defaultChecked?: boolean;
  /**
   * @description radio 的颜色，同 CSS 色值。
   */
  color?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, e: any) => void;
}

export const RadioDefaultProps: Partial<IRadioProps> = {};
