import { IBaseProps } from '../../_util/base';

/**
 * 有效值：return（显示“换行”）、done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”）。
 */
export type ConfirmType = 'return' | 'done' | 'go' | 'next' | 'search' | 'send';

/**
 * @description 输入框。
 */

export interface TextareaProps extends IBaseProps {
  value?: string;
  defaultValue: string;
  placeholder: string;
  placeholderClassName: string;
  placeholderStyle: string;
  autoHeight: boolean;
  showCount: boolean;
  allowClear: boolean;
  controlled: boolean;
  enableNative?: boolean;
  maxLength?: number;
  inputClassName: string;
  disabled?: boolean;
  inputStyle: string;
  focusStyle?: string;
  name?: string;
  confirmType?: ConfirmType;
  focus?: boolean;
  confirmHold?: string;
  onChange?: (value: string, e: any) => void;
  onBlur?: (value: string, e: any) => void;
  onFocus?: (value: string, e: any) => void;
  onConfirm?: (value: string, e: any) => void;
}

export const TextareaDefaultProps: Partial<TextareaProps> = {
  enableNative: false,
};

export const TextareaFunctionalProps: TextareaProps = {
  value: null,
  defaultValue: null,
  placeholder: null,
  placeholderClassName: null,
  placeholderStyle: null,
  autoHeight: null,
  showCount: null,
  allowClear: null,
  controlled: null,
  enableNative: false,
  inputClassName: null,
  disabled: null,
  inputStyle: null,
  focusStyle: null,
  name: null,
  confirmType: null,
  focus: null,
  confirmHold: null,
};
