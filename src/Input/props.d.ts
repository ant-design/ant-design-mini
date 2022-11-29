import { InputBaseProps } from './InputBase/props';
/**
 * @description 输入框。
 */

export interface InputProps extends InputBaseProps {
  inputClassName?: string;
  inputStyle?: string;
}
export declare const InputDefaultProps: Partial<InputProps>;
