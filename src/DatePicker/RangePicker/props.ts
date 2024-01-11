import { IBaseProps } from '../../_util/base';

export type PickerValue = [Date, Date];
/**
 * @description 对话框
 */
export interface IDateRangePickerProps extends IBaseProps {
  /**
   * @desciption  动画类型
   * @default "transform"
   */
  animationType: 'transform' | 'position';
  /**
   * @description 时间格式化显示，例如YYYY-MM-DD
   */
  format: string;
  /**
   * @description 最小值
   * @default 十年前
   */
  min: Date;
  /**
   * @description 最大值
   * @default 十年后
   */
  max: Date;
  /**
   * @description 当前数据
   */
  value: PickerValue;
  /**
   * @description 默认值
   */
  defaultValue: PickerValue;
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
   * @description 是否禁用
   */
  disabled?: boolean;
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
    date: PickerValue,
    dateStr: [string, string],
    e: Record<string, any>
  ) => void;
  /**
   * @description 点击取消回调
   */
  onCancel?: (e: Record<string, any>) => void;
  /**
   * @description 发生滚动即触发， 与 onChange 点击 ok 后触发不同
   */
  onPickerChange?: (
    type: 'start' | 'end',
    date: Date,
    dateStr: string,
    e: Record<string, any>
  ) => void;
  /**
   * @description 精度
   * @default 'day'
   */
  precision: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';

  /**
   * @description 选中值的文本显示格式
   */
  onFormat?: (date: PickerValue, dateStr: [string, string]) => string;
  /**
   * @description 切换显示隐藏
   */
  onVisibleChange?: (visible, e: Record<string, any>) => void;
  /**
   * @description 显示连接符
   * @default '-''
   */
  splitCharacter: string;
  /**
   * @description 开始时间提示文案
   * @default '未选择'
   */
  startPlaceholder: string;
  /**
   * @description 结束时间提示文案
   * @default '未选择'
   */
  endPlaceholder: string;
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
   * 自定义每列展示的内容
   * @param type
   * @param value
   */
  onFormatLabel?(
    type: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second',
    value: number
  ): string;
}

export const DateRangePickerDefaultProps: Partial<IDateRangePickerProps> = {
  okText: '确定',
  cancelText: '取消',
  maskClosable: true,
  placeholder: '请选择',
  format: 'YYYY/MM/DD',
  splitCharacter: '-',
  startPlaceholder: '未选择',
  endPlaceholder: '未选择',
  precision: 'day',
};

export const DateRangePickerFunctionalProps: Partial<IDateRangePickerProps> = {
  animationType: 'transform',
  format: 'YYYY/MM/DD',
  min: null,
  max: null,
  value: null,
  defaultValue: null,
  title: '',
  okText: '确定',
  cancelText: '取消',
  placeholder: '请选择',
  precision: 'day',
  splitCharacter: '-',
  startPlaceholder: '未选择',
  endPlaceholder: '未选择',
  maskClosable: true,
  popClassName: '',
  popStyle: '',
  disabled: false,
  onFormatLabel: null,
};
