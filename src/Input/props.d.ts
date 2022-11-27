import { InputBaseProps } from './InputBase/props';
/**
 * @description 输入框。
 */

export interface InputProps extends InputBaseProps {
  inputClassName?: string;
  inputStyle?: string;
  onClear?: (e: any) => void;
}
export declare const InputDefaultProps: Partial<InputProps>;
