interface Props {
  class?: string;
  style?: string;
  ref?: string;
  name?: string;
  onTap?: string;
  cell?: string;
  children?: any;
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
}

export const Text = (props: Props): any => {};

export const View = (props: Props): any => {};

export const ScrollView = (props: Props): any => {};

export const Slot = (props: Props): any => {};

export const Block = (props: Props): any => {};

export const Page = (props: Props): any => {};

export const Component = (props: Props): any => {};

export const Button = (props: Props): any => {};

export type TSXMLProps<T> = {
  [K in keyof T]: T[K] extends (...args: unknown[]) => unknown ? string : T[K];
};
