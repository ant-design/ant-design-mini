import { IBaseProps } from '../_util/base';
/**
 * @description 开关。
 */

export interface ISwitchProps extends IBaseProps {
  /**
   * @description 是否勾选
   */
  checked?: boolean;
  /**
   * @description 是否加载状态
   */
  loading?: boolean;

  /**
   * @description 选中时的颜色
   */
  color?: string;
  /**
   * @description 选中时的内容
   */
  checkedText?: string;
  /**
   * @description 非选中时的内容
   */
  uncheckedText?: string;
  /**
   * @default medium
   * @description 尺寸
   */
  size?: 'medium' | 'small' | 'x-small';

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 初始值
   */
  defaultChecked?: boolean;

  /**
   * @description 修改回调方法
   */
  onChange?: (checked: boolean, e: Record<string, any>) => void;
}

export const SwitchDefaultProps: Partial<ISwitchProps> = {
  size: 'medium',
};

export const SwitchFunctionalProps: Partial<ISwitchProps> = {
  checked: null,
  loading: false,
  color: '',
  checkedText: '',
  uncheckedText: '',
  size: 'medium',
  disabled: false,
  defaultChecked: false,
};
