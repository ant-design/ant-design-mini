import { IBaseProps } from '../_util/base';
/**
 * @description 步进器，用作增加或者减少当前数值。
 */

export interface IStepperProps extends IBaseProps {
  /**
   * @description 输入框的值
   */
  value: number;

  /**
   * @description 最小值
   */
  min: number;

  /**
   * @description 最大值
   */
  max: number;

  /**
   * @description 每次加减的值
   * @default 1
   */
  step: number;

  /**
   *  @description 输入框唤起键盘类型
   */
  type: 'number' | 'digit';

  /**
   * @description 计算精度，保留几位小数
   * https://github.com/ant-design/ant-design/issues/5998
   */
  precision: number;

  /**
   * @description 输入框类名
   */
  inputClassName: string;

  /**
   * @description 输入框样式
   */
  inputStyle: string;

  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 输入框是否只读
   * @default false
   */
  inputReadOnly?: boolean;

  /**
   * @description 输入框初始值
   */
  defaultValue: number;

  focus?: boolean;

  /**
   *
   * @description onChange
   */
  onChange?: (value: number, e: any) => void;

  /**
   *
   * @description onConfirm
   */
  onConfirm?: (value: number, e: any) => void;

  /**
   * @description onFocus
   */
  onFocus?: (value: number, e: any) => void;
  /**
   * @description onBlur
   */
  onBlur?: (value: number, e: any) => void;
}

export const StepperDefaultProps: Partial<IStepperProps> = {
  step: 1,
  disabled: false,
  type: 'digit',
};

export const StepperFunctionalProps: Partial<IStepperProps> = {
  value: null,
  defaultValue: null,
  precision: -1,
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  type: 'digit',
  inputClassName: '',
  inputStyle: '',
  disabled: false,
  inputReadOnly: false,
};
