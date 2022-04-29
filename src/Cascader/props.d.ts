import { IBaseProps } from '../_base';



/**
 * @description 级联选择
 */

type Option = {
  value?: string | number;
  label?: string | number;
  children?: Option[];
  disabled?: boolean,
  leaf?: boolean;
  level?: number;
  [key: PropertyKey]: any;
}

export interface ICascaderProps extends IBaseProps {
  /**
  * @description 是否可见
  * @default false
  */
  visible: boolean;
  /**
  * @description 是否开启异步加载
  * @default false
  */
  lazy: boolean;
  /**
  * @description 对话框标题
  */
  title?: string;
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
  options?: Option[][];
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
  onChange?: (item: Option, items: Array<Option>) => void;
  /**
  * @description 关闭事件
  */
  onClose?: () => void;
  /**
  * @description 异步请求
  */
  onLazyLoad?: (node: Option, resolve: any) => void;
}
export declare const CascaderDefaultProps: Partial<ICascaderProps>;
