import { IBaseFormItemPropsWithOutFocus } from '../_base';

export interface PickerData {
  value: PickerValue;
  label: string;
}
export declare type PickerValue = string | number | (string | number)[];
/**
 * @description 选择器，包括一个或多个不同值的可滚动列表，每个值可以在视图的中心以较暗的文本形式显示。当用户激活 **Picker** 后，将会从底部弹出。
 */
export interface IPickerProps
  extends IBaseFormItemPropsWithOutFocus<PickerValue> {
  /**
   * @description picker 数据
   */
  value?: PickerValue;
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
   * @description 取消文案
   * @default "取消"
   */
  dismissText?: string;
  /**
   * @description 提示文案
   * @default '请选择'
   */
  placeholder?: string;
  /**
   * @description 是否受控
   * @default false
   */
  controlled?: boolean;
  /**
   * @description picker 数据
   */
  data: PickerValue[];
  /**
   * @description 点击确认前回调
   */
  onBeforeOk?: (
    value: PickerValue,
    column: PickerData,
    e: Record<string, any>
  ) => boolean;
  /**
   * @description 点击确认回调
   */
  onOk?: (
    value: PickerValue,
    column: PickerData,
    e: Record<string, any>
  ) => void;
  /**
   * @description 点击取消回调
   */
  onDismiss?: (e: Record<string, any>) => void;
  /**
   * @description 发生滚动即触发， 与 onChange 点击 ok 后触发不同
   */
  onChange?: (
    value: PickerValue,
    column: PickerData,
    e: Record<string, any>
  ) => void;
  /**
   * @description 选中值的文本显示格式
   */
  onFormat?: (value: PickerValue, column: PickerValue, data) => string;
  /**
   * @description 切换显示隐藏
   */
  onTriggerPicker?: (visible: boolean, e: Record<string,any>) => void;
  /**
   * @description 点击蒙层是否可以关闭
   * @default false
   */
  maskClosable?: boolean;
}
export declare const PickerDefaultProps: Partial<IPickerProps>;
