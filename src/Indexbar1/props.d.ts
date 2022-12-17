import { IBaseProps } from '../_base';

interface ItemObj {
  label: string,
  disablePreview?: boolean
}

export interface IndexBarProps extends IBaseProps {
  /**
   * @description 触发的索引样式
   */
  activeClassName?: string,
  /**
   * @description 默认触发的索引
   */
  defaultCurrent?: string,
  /**
   * @description 触发的索引
   */
  current?: string,
  /**
   * @description 索引触发时是否震动
   */
  vibrate?: boolean,
  /**
   * @description 索引列表
   */
  items: ItemObj[],
  /**
   * @description 索引的尺寸
   */
  size?: number,
  /**
   * @description 触发索引时的回调
   */
  onChange?: (value: ItemObj, index: number) => void,
}

export declare const IndexBarDefaultProps: Partial<IndexBarProps>;