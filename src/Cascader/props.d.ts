import { IBaseProps } from '../_base';



/**
 * @description 级联选择
 */

export interface Option {
  value?: any;
  label?: any;
  children?: Option[];
  disabled?: boolean
}

export interface ICascaderProps extends IBaseProps {
  /**
  * @description 是否可见
  * @default false
  */
  visible: boolean;
  /**
  * @description 对话框标题
  */
  title?: String;
  /**
  * @description 对话框按钮排列方向
  */
  direction: 'vertical' | 'horizontal';
  /**
  * @description 点击蒙层关闭对话框
  * @default true
  */
  maskClosable: boolean;
  /**
  * @description 选项
  */
  options?: Omit<Option, 'children' | 'disabled'>[][];
  /**
  * @description 数据值
  * @default []
  */
  value: (string | number)[];
  /**
  * @description 选择icon类型
  */
  confirmIcon?: string;
  /**
  * @description key配置
  */
  valueKey?: string;
  /**
   * @description 文本配置
   */
  titleKey?: string;
  /**
  * @description 子配置
  */
  childrenKey?: string;
  /**
  * @description 子配置
  */
  onChange?: Function;
  /**
  * @description 关闭事件
  */
  onClose?: Function;
}
export declare const CascaderDefaultProps: Partial<ICascaderProps>;
