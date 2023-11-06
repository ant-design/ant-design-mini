import { Props } from './type';

export { Textarea } from './textarea';
export { Input } from './input';

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

export type TSXMLProps<T> = Partial<
  {
    [K in keyof T]: T[K] extends (...args: unknown[]) => unknown
      ? string
      : T[K];
  } & {
    ref?: any;
    key?: string;
    $id?: string;
    slot?: string;
  }
>;

export type InternalData = any;
