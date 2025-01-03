import { IBaseProps } from '../../src/_util/base';

export interface SuggestionItem {
  /**
   * @description 图标，支持 ant-icon 和 图片链接
   * @default ""
   */
  icon: string;
  /**
   * @description 文案
   * @default ""
   */
  label: string;
  /**
   * @description 选项值
   * @default ""
   */
  value: string;
}

export interface IProps extends IBaseProps {
  /**
   * @description 快捷指令列表
   * @default []
   */
  items: SuggestionItem[];

  /**
   * @description 选择之后的回调
   */
  onSelect?: (item: SuggestionItem, index: number) => void;
}

export const DefaultProps: Partial<IProps> = {
  items: [],
  onSelect() {},
};
