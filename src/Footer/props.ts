// TODO create-component

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
   * @description 链接内容
   * @default undefined
   */
  links?: Array<ActionItem>;
  /**
   * @description 底部标签
   * @default undefined
   */
  chips?: Array<ActionItem>;
  /**
   * @description 点击行动点后的回调
   */
  onActionTap?: (actionItem?: ActionItem) => void;
}

export const DefaultProps: Partial<IProps> = {
  label: null,
  content: null,
  links: null,
  chips: null,
  onActionTap() {},
};
