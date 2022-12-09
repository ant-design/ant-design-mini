import { IBaseProps } from '../_base';

export interface IndexbarProps extends IBaseProps {
  activeClassName?: string,
  defaultCurrent?: string,
  current?: string,
  vibrate?: boolean,
  items: [],
  preview?: boolean,
  itemSize?: number,
  onChange?: (item: string) => void,
}

export declare const IndexbarDefaultProps: Partial<IndexbarProps>;