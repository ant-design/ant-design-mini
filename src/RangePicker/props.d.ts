import { IBaseFormItemPropsWithOutFocus } from '../_base';

export type PickerValue = [Date, Date];
/**
 * @description 对话框
 */
export interface IDateRangePickerProps extends IBaseFormItemPropsWithOutFocus {
  /**
   * @description 时间格式化显示，例如YYYY-MM-DD
   */
  format: string;
  /**
   * @description 最小值
   * @default 十年前
   */
  min?: Date;
  /**
   * @description 最大值
   * @default 十年后
   */
  max?: Date;
  /**
   * @description 当前数据
   */
  value: PickerValue;
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
   * @description 点击确认回调
   */
  onOk?: (
    date: PickerValue,
    dateStr: [string, string],
    dateArr: [number[], number[]],
    e: Record<string, any>
  ) => void;
  /**
   * @description 点击取消回调
   */
  onDismiss?: (e: Record<string, any>) => void;
  /**
   * @description 发生滚动即触发， 与 onChange 点击 ok 后触发不同
   */
  onPickerChange?: (
    type: 'start' | 'end',
    date: Date,
    dateStr: string,
    dateArr: number[],
    e: Record<string, any>
  ) => void;
  /**
   * @description 精度
   * @default 'day'
   */
  precision: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
  // | 'week'
  // | 'week-day';
  /**
   * @description 选中值的文本显示格式
   */
  onFormat?: (
    date: PickerValue,
    dateStr: [string, string],
    dateArr: [number[], number[]]
  ) => string;
  /**
   * @description 切换显示隐藏
   */
  onTriggerPicker?: (visible, e: Record<string, any>) => void;
  /**
   * @description 显示连接符
   * @default '~''
   */
  splitCharacter?: string;
  /**
   * @description 开始时间提示文案
   * @default '未选择'
   */
  startPlaceholder?: string;
  /**
   * @description 结束时间提示文案
   * @default '未选择'
   */
  endPlaceholder?: string;
  /**
   * @description 点击蒙层是否可以关闭
   * @default false
   */
  maskClosable?: boolean;
}
export declare const DateRangePickerDefaultProps: Partial<IDateRangePickerProps>;
