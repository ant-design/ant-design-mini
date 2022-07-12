import { IBaseProps } from '../_base';

/**
 * @description 级联选择
 */

export type TreeSelectValue = string | number;

export type TreeSelectOption = {
  /**
   * @description 当前选项名称
   */
  label: string;

  /**
   * @description 当前选项值
   */
  value: string;

  /**
   * @description 当前选项是否禁用
   */
  disabled?: boolean;

  /**
   * @description 当前选项的下一级列表
   */
  children?: TreeSelectOption[];
};

export interface ITreeSelectProps extends IBaseProps {
  /**
   * @description 树形选择的数据源，目前只支持两级或三级树形选择
   * @default []
   */
  options: TreeSelectOption[];

  /**
   * @description 当前选项的值
   */
  value?: TreeSelectValue[];

  /**
   * @description 当前组件是否以蒙层的形式出现
   * @default false
   */
  visible?: boolean;

  /**
   * @description 当组件的值变化时触发
   */
  onChange?: (value: TreeSelectValue[], selectedList: { label: string; value: TreeSelectValue }[]) => void;
}

export declare const treeSelectDefaultProps: Partial<ITreeSelectProps>;
