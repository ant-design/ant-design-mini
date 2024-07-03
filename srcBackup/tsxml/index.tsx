import { Props } from './type';

export { Textarea } from './textarea';
export { Input } from './input';
export { Template } from './template';

export const Text = (props: Props): any => {};

export const MovableView = (props: Props): any => {};
export const MovableArea = (props: Props): any => {};

export const View = (props: Props): any => {};

export const Image = (props: Props): any => {};

export const PickerViewColumn = (props: Props): any => {};

export const PickerView = (props: Props): any => {};

export const ScrollView = (props: Props): any => {};

type AnyProps = {
  [key: string]: any;
};

export const Slot = (props: AnyProps): any => {};

export const Canvas = (props: AnyProps): any => {};

export const Block = (props: Props): any => {};

export const Page = (props: Props): any => {};
export const Swiper = (props: Props): any => {};
export const SwiperItem = (props: Props): any => {};

export const Component = (props: Props): any => {};

export const Button = (props: Props): any => {};

export const Event = (...args: any[]): any => {};

export const Label = (props: Props): any => {};
export const Radio = (props: Props): any => {};
export const RadioGroup = (props: Props): any => {};

export const Checkbox = (...args: any[]): any => {};
export const CheckboxGroup = (...args: any[]): any => {};

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
    children?: any;
  }
>;

export type InternalData = any;

export function $toArray(num: number): Array<string> {
  return [];
}
