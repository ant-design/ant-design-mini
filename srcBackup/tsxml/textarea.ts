import { Props } from './type';

/**
 * 有效值：return（显示“换行”）、done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”）。
 */
export type ConfirmType = 'return' | 'done' | 'go' | 'next' | 'search' | 'send';

interface AlipayTextareaProps {
  name?: string;
  placeholder?: string;
  /**
   * @description 指定 placeholder 的样式类。
   */
  'placeholder-style'?: string;

  /**
   * @description 最大长度，当设置为 -1 时不限制最大长度。
   * @default 140
   */
  maxlength?: number;
  /**
   * @description 获取焦点
   * @default false
   */
  focus?: boolean;
  /**
   * @description 是否是受控模式
   * @default false
   */
  controlled?: boolean;

  /**
   * 仅支持 Android。
   * @description 设置键盘右下角按钮的文字。
   * @default 'return'
   */
  'confirm-type'?: ConfirmType;
  onInput: string;
  onConfirm: string;
  onFocus: string;
  onBlur: string;
}

export const Textarea = (props: Props & AlipayTextareaProps): any => {};
