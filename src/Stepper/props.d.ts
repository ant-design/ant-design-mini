import { IBaseFormItemProps } from '../_base';
/**
 * @description 步进器，用作增加或者减少当前数值。
 */

export interface IStepperProps extends IBaseFormItemProps<number> {
  /**
   * @description 输入框的值, 表单提交的时候有效
   */
  value?: number;
  /**
   * @description 最小值
   */
  min?: number;
  /**
   * @description 最大值
   */
  max?: number;
  /**
   * @description 每次加减的值
   * @default 1
   */
  step?: number;
  /**
   * @description input唤起的键盘类型
   * @default 'digit'
   */
  type?: 'number' | 'digit';
  /**
   * @description 计算精度，保留几位小数
   * https://github.com/ant-design/ant-design/issues/5998
   */
  precision?: number;
  /**
   * @description 是否受控
   * @default false
   */
  controlled?: boolean;
  /**
   * @description 输入框宽度
   */
  inputWidth?: string;
  /**
   * @description 输入框宽度
   */
  onFocus?: ( e: number ) => void
  /**
   * @description 输入框宽度
   */
  onBlur?: ( e: number ) => void
  /**
   * @description 输入框宽度
   */
  onChange?: ( e: number, dataSet: Record<string, any> ) => void
}
export declare const StepperDefaultProps: Partial<IStepperProps>;

export interface IStepperData {
  confirm: boolean;
  _value: string;
  cValue: number;
  minusDisabled: boolean;
  addDisabled: boolean;
  min: number;
  max: number;
}
