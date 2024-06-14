import { IBaseProps } from '../_util/base';
export interface PickerData {
  value: PickerValue;
  label: string;
}
export declare type PickerValue =
  | string
  | number
  | PickerData
  | (string | number | PickerData)[];
/**
 * @description 选择器，包括一个或多个不同值的可滚动列表，每个值可以在视图的中心以较暗的文本形式显示。当用户激活 **Picker** 后，将会从底部弹出。
 */
export interface IPickerProps extends IBaseProps {
  visible?: boolean;
  defaultVisible?: boolean;
  /**
   * @desciption  动画类型
   * @default "transform"
   */
  animationType: 'transform' | 'position';
  /**
   * @description picker 数据
   */
  value: PickerValue;
  /**
   * @description 格式化后的 value 文本, 优先级大于 onFormat
   */
  formattedValueText?: string;
  /**
   * @description 默认picker 数据
   */
  defaultValue: PickerValue;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 标题
   */
  title: string;
  /**
   * @description 确定按钮文案
   * @default "确定"
   */
  okText: string;
  /**
   * @description 取消文案
   * @default "取消"
   */
  cancelText: string;
  /**
   * @description 提示文案
   * @default '请选择'
   */
  placeholder: string;
   /**
   * @description 空状态提示文案
   * @default '暂无数据'
   */
  emptyText?: string;
  /**
   * @description picker 数据
   */
  options: PickerValue[];

  /**
   * @description 点击蒙层是否可以关闭
   * @default false
   */
  maskClosable: boolean;
  /**
   * @description 弹出框类名
   */
  popClassName: string;
  /**
   * @description 弹出框样式
   */
  popStyle: string;
  /**
   *@description 选中框样式
   * 版本要求： 支付宝小程序基础库 1.10.0 及以上
   */
  indicatorStyle?: string;

  /**
   *@description 选中框类名
   * 版本要求： 支付宝小程序基础库 1.10.0 及以上
   */
  indicatorClassName?: string;

  /**
   * @description 蒙层的样式。
   * 版本要求： 支付宝小程序基础库 1.10.0 及以上
   */
  maskStyle?: string;

  /**
   * @description 蒙层的类名。
   * 版本要求： 支付宝小程序基础库 1.10.0 及以上
   */
  maskClassName?: string;
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
  onCancel?: (e: Record<string, any>) => void;
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
  onFormat?: (value: PickerValue, column: PickerValue) => string;
  /**
   * @description 切换显示隐藏
   */
  onVisibleChange?: (visible: boolean, e: Record<string, any>) => void;
}

export const PickerDefaultProps: Partial<IPickerProps> = {
  okText: '确定',
  cancelText: '取消',
  disabled: false,
  maskClosable: false,
  options: [],
  placeholder: '请选择',
  defaultValue: [],
  emptyText: '暂无数据'
};

export const PickerFunctionalProps: Partial<IPickerProps> = {
  formattedValueText: null,
  visible: null,
  defaultVisible: null,
  animationType: 'transform',
  value: null,
  defaultValue: null,
  disabled: false,
  title: '',
  okText: '确定',
  cancelText: '取消',
  placeholder: '请选择',
  options: [],
  popClassName: '',
  popStyle: '',
  maskClosable: true,
  onFormat: null,
  emptyText: '暂无数据'
};
