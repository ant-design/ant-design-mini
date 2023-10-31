import { Props } from './type';

interface AlipayInputProps {
  type?:
    | 'text'
    | 'number'
    | 'idcard'
    | 'digit'
    | 'numberpad'
    | 'digitpad'
    | 'idcardpad';
  /**
   * @description 当 type 为 number, digit, idcard 数字键盘是否随机排列。
   * @default false
   */
  'random-number'?: boolean;

  controlled?: boolean;
  password?: boolean;
  /**
   * @description 组件名字，用于表单提交获取数据。
   */
  name?: string;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * @description 最大长度
   */
  maxlength?: number;
  /**
   * @description 获取焦点。
   */
  focus?: boolean;
  /**
   * @description 指定 focus 时的光标位置。
   */
  cursor?: number;
  onInput?: string;
  onFocus?: string;
  onConfirm?: string;
  onBlur?: string;
}

export const Input = (props: Props & AlipayInputProps): any => {};
