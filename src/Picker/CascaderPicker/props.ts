import { IBaseProps } from '../../_util/base';

export interface ICascaderOption {
  label: string;
  value: any;
  children?: ICascaderOption[];
}

/**
 * @description 级联组件，基于Picker封装
 */
export interface ICascaderProps extends IBaseProps {
  /**
   * @desciption  动画类型
   * @default "transform"
   */
  animationType: 'transform' | 'position';
  /**
   * @description 当前数据
   */
  value: any[];
  /**
   * @description 默认值
   */
  defaultValue: any[];
  /**
   * @description 可选项数据
   */
  options: ICascaderOption[];
  /**
   * @description 提示文案
   * @default '请选择'
   */
  placeholder: string;
  /**
   * @description 取消文案
   * @default "取消"
   */
  cancelText: string;
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
    value: any[],
    selectedOptions: ICascaderOption[],
    e: Record<string, any>
  ) => void;
  /**
   * @description 点击取消回调
   */
  onCancel?: (e: Record<string, any>) => void;
  /**
   * @description 选中值的文本显示格式
   */
  onFormat?: (value: any[], selectedOptions: ICascaderOption[]) => string;
  /**
   * @description 切换显示隐藏
   */
  onVisibleChange?: (visible: boolean, e: Record<string, any>) => void;
  /**
   * @description 发生滚动即触发， 与 onChange 点击 ok 后触发不同
   */
  onChange?: (
    value: any[],
    selectedOptions: ICascaderOption[],
    e: Record<string, any>
  ) => void;
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
}

export const CascaderDefaultProps: Partial<ICascaderProps> = {
  placeholder: '请选择',
  okText: '确定',
  cancelText: '取消',
  disabled: false,
  maskClosable: false,
};

export const CascaderFunctionalProps: Partial<ICascaderProps> = {
  animationType: 'transform',
  value: null,
  defaultValue: null,
  options: [],
  placeholder: '请选择',
  cancelText: '取消',
  disabled: false,
  title: '',
  okText: '确定',
  maskClosable: true,
  popClassName: '',
  popStyle: '',
  onFormat: null,
};
