interface Props {
  class?: string;
  style?: string;
  ref?: string;
  name?: string;
  'a:key'?: string;
  onTap?: string;
  src?: string;
  mode?: string;
  cell?: string;
  children?: any;
  id?: string;
  onScroll?: any;
  scope?: any;
  onGetAuthorize?: any;
  onFollowLifestyle?: any;
  catchTap?: string;
  onError?: any;
  onGetUserInfo?: any;
  onGetPhoneNumber?: any;
  bindgetuserinfo?: string;
  bindcontact?: string;
  bindgetphonenumber?: string;
  bindgetrealtimephonenumber?: string;
  bindagreeprivacyauthorization?: string;
  binderror?: string;
  bindlaunchapp?: string;
  bindopensetting?: string;
  bindchooseavatar?: string;
  onTouchMove?: string;
  catchTouchStart?: string;
  onTouchEnd?: string;
  catchTouchEnd?: string;
  catchTouchMove?: string;
  slot?: string;
  value?: any;
  key?: any;
  index?: any;
  onAppear?: any;
  onAnimationEnd?: any;
  hidden?: any;
  enableNative?: any;
  disabled?: boolean;
}

export const Text = (props: Props): any => {};

export const View = (props: Props): any => {};

export const Image = (props: Props): any => {};

export const ScrollView = (props: Props): any => {};

export const Slot = (props: Props): any => {};

export const Block = (props: Props): any => {};

export const Page = (props: Props): any => {};

export const Component = (props: Props): any => {};

export const Button = (props: Props): any => {};

export const Event = (...args: any[]): any => {};

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

export type TSXMLProps<T> = Partial<
  {
    [K in keyof T]: T[K] extends (...args: unknown[]) => unknown
      ? string
      : T[K];
  } & {
    key?: string;
    $id?: string;
    slot?: string;
  }
>;

export type InternalData = any;
