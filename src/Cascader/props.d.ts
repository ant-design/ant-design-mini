import { IBaseFormItemPropsWithOutFocus } from '../_base';

export interface ICascaderOption {
  label: string;
  value: any;
  children?: ICascaderOption[];
}

/**
 * @description 级联组件，基于Picker封装
 */
export interface ICascaderProps extends IBaseFormItemPropsWithOutFocus {
  /**
   * @description 当前数据
   */
  value: any[];
  /**
   * @description 可选项数据
   */
  options: ICascaderOption[];
  /**
   * @description options是否固定，若options无动态变化需求置为true，跳过比对以提升性能
   * @default false
   */
  isConstantOption: boolean;
  /**
   * @description 提示文案
   * @default '请选择'
   */
  placeholder?: string;
  /**
   * @description 取消文案
   * @default "取消"
   */
  dismissText?: string;
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 确定按钮文案
   * @default "确定"
   */
  okText?: string;
  /**
   * @description 点击确认回调
   */
  onOk?: (
    value: any[],
    selectedOptions: ICascaderOption[],
    e: Record<string, any>
  ) => void;
  /**
   * @description 点击取消回调
   */
  onDismiss?: (e: Record<string, any>) => void;
  /**
   * @description 选中值的文本显示格式
   */
  onFormat?: (value: any[], selectedOptions: ICascaderOption[]) => string;
  /**
   * @description 切换显示隐藏
   */
  onTriggerPicker?: (visible: boolean, e: Record<string, any>) => void;
  /**
   * @description 发生滚动即触发， 与 onChange 点击 ok 后触发不同
   */
  onPickerChange?: (
    value: any[],
    selectedOptions: ICascaderOption[],
    e: Record<string, any>
  ) => void;
}
export declare const CascaderDefaultProps: Partial<ICascaderProps>;
