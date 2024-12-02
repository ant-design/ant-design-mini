import { IBaseProps } from '../_util/base';

export type ActionItem = {
  key?: string;
  text: string;
};

export interface IProps extends IBaseProps {
  /**
   * @description 带分割线的顶部内容
   * @default ''
   */
  label?: string;
  /**
   * @description 普通的内容部分
   * @default ''
   */
  content?: string;
  /**
   * @description 链接
   * @default undefined
   */
  links?: Array<ActionItem>;
  /**
   * @description 底部标签
   * @default undefined
   */
  chips?: Array<ActionItem>;
  /**
   * @description 没有label的分割线
   * @default false
   */
  noLabelDivider?: boolean;
  /**
   * @description 链接点击后的回调
   */
  onLinkTap?: (actionItem?: ActionItem) => void;
  /**
   * @description 底部标签点击后的回调
   */
  onChipTap?: (actionItem?: ActionItem) => void;
}

export const DefaultProps: Partial<IProps> = {
  className: null,
  label: null,
  content: null,
  links: null,
  chips: null,
  noLabelDivider: false,
  onLinkTap() {},
  onChipTap() {},
};
