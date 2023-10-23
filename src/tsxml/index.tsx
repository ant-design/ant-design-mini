interface Props {
  class?: string;
  style?: string;
  ref?: string;
  name?: string;
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

export type TSXMLProps<T> = Partial<{
  [K in keyof T]: T[K] extends (...args: unknown[]) => unknown ? string : T[K];
} & {
  $id?: string;
  slot?: string;
}>

export type InternalData = any;
