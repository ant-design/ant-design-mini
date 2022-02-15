import { IBaseFormItemProps } from '../_base';
/**
 * @description 搜索框。
 */

export interface ISearchBarProps extends IBaseFormItemProps<string> {
  /**
   * @description 搜索框的值
   */
  value?: string;
  /**
   * @description 提示文字
   */
  placeholder?: string;
  /**
   * @description submit 回调
   */
  onSubmit?: (v: string) => void;
  /**
   * @description 点击取消回调
   */
  onCancel?: (v: string) => void;
  /**
   * @description 点击删除回调
   */
  onClear?: (v: string) => void;
  /**
   * @description 是否显示取消按钮
   * @default false
   */
  showCancelButton?: boolean;
  /**
   * @description 取消按钮文案
   * @default "取消"
   */
  cancelText?: string;
  /**
   * @description 最大长度
   */
  maxLength?: number;
  /**
   * @description 辅助图标类型
   * @default AudioFill
   */
  bizIconType: string;
  /**
   * @deprecated
   * @description 是否展示语音图标
   * @default false
   */
  showVoice?: boolean;
  /**
   * @description 是否展示辅助图标
   * @default false
   */
  showBizIcon?: boolean;
  /**
   * @description 是否受控模式
   * @default false
   */
  controlled?: boolean;
  /**
   * @deprecated
   * @description 点击语音图标回调
   */
  onVoiceTap?: () => void;
  /**
   * @deprecated
   * @description 点击语音图标回调
   */
  onBizIconTap?: () => void;
  /**
   * @description input 输入回调
   */
  onInput?: (v: string) => void;
  /**
   * @description 是否启用 Native 渲染
   */
  enableNative?: boolean;
}
export declare const SearchBarDefaultProps: Partial<ISearchBarProps>;
