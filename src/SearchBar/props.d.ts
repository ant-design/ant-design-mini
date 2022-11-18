import { IBaseFormItemProps } from '../_base';
/**
 * @description 搜索框。
 */

export interface ISearchBarProps extends IBaseFormItemProps<string> {
  /**
   * @description 是否受控模式
   * @default false
   */
  controlled?: boolean;

  /**
   * @description 是否启用 Native 渲染
   * @default false
   */
  enableNative?: boolean;

  /**
   * @description 最大长度
   */
  maxLength?: number;

  /**
   * @description 提示文字
   */
  placeholder?: string;

  /**
   * @description 搜索框的类型
   * @default 'text'
   */
  type: 'text' | 'number' | 'idcard' | 'digit' | 'numberpad' | 'digitpad' | 'idcardpad'

  /**
   * @description 搜索框的值
   */
  value?: string;

  /**
   * @description 点击删除回调
   */
  onClear?: (v: string, e: Record<string,any>) => void;

  /**
   * @description input 输入回调
   */
  onInput?: (v: string, e: Record<string,any>) => void;

  /**
   * @description submit 回调
   */
  onSubmit?: (v: string, e: Record<string,any>) => void;
}

export declare const SearchBarDefaultProps: Partial<ISearchBarProps>;
