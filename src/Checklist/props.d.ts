import { IBaseProps } from '../_base';

/**
 * @description 可勾选列表
 */

interface ChecklistItem {
  /**
   * @description 可勾选项的描述文案
   */
  description: string;

  /**
   * @description 可勾选项的图片地址
   */
  image: string;

  /**
   * @description 可勾选项的标题文案
   */
  title: string;

  /**
   * @description 可勾选项的值
   */
  value: string | number;
}

interface IChecklistProps extends IBaseProps {
  /**
   * @description 默认值
   * @default []
   */
  defaultValue: Array<string | number>;

  /**
   * @description 是否支持多选
   * @default false
   */
  multiple: boolean;

  /**
   * @description 可勾选列表数据配置选项内容
   */
  options: Array<ChecklistItem>;

  /**
   * @description 可勾选列表值改变时触发
   */
  onChange: (v: Array<string | number>) => void;
}

export declare const ChecklistDefaultProps: Partial<IChecklistProps>;
