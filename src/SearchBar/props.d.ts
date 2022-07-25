import { IBaseFormItemProps } from '../_base';
/**
 * @description 搜索框。
 */

export interface ISearchBarProps extends IBaseFormItemProps<string> {
  /**
   * @description 辅助图标类型
   * @default 'AudioFill'
   */
  bizIconType: string;

  /**
   * @description 取消按钮文案
   * @default "取消"
   */
  cancelText?: string;

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
   * @description 是否展示辅助图标
   * @default false
   */
  showBizIcon?: boolean;

  /**
   * @description 是否显示取消按钮
   * @default false
   */
  showCancelButton?: boolean;

  /**
   * @deprecated
   * @description 是否展示语音图标
   * @default false
   */
  showVoice?: boolean;

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
   * @deprecated
   * @description 点击语音图标回调
   */
  onBizIconTap?: (e: Record<string,any>) => void;

  /**
   * @description 点击取消回调
   */
  onCancel?: (v: string, e: Record<string,any>) => void;
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

  /**
   * @deprecated
   * @description 点击语音图标回调
   */
  onVoiceTap?: (e: Record<string,any>) => void;
}

export declare const SearchBarDefaultProps: Partial<ISearchBarProps>;
