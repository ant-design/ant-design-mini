import { IBaseProps } from '../_base';

/**
 * @description 滑块
 */

export type SliderValue = number | [number, number];

type CustomizedNode = string;

interface ISliderProps extends IBaseProps {
  /**
   * @description 当前值
   */
  value?: SliderValue;

  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 自定义滑块的图标， 需要使用 antd-mini 的 icon 的 type 值
   */
  icon?: string;

  /**
   * @description 最大值
   * @default 100
   */
  max?: number;

  /**
   * @description 最小值
   * @default 0
   */
  min?: number;

  /**
   * @description 是否是双滑块
   * @default false
   */
  range?: boolean;

  /**
   * @description 是否展示刻度上的数据
   * @default false
   */
  showNumber?: boolean;

  /**
   * @description 步距，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，step 的配置失效
   * @default 1
   */
  step?: number;

  /**
   * @description 是否显示刻度
   * @default false
   */
  ticks?: boolean;

  /** 
   * @description 滑块和进度条的背景色
   * @default 
   */
  color: string;
  /**
   * @description 是否在拖动时显示悬浮提示
   * @default false
   */
   tooltip: boolean;

  /**
   * @description 输入变化的时候触发， 参数为滑动组件的当前值
   */
  onChange?: (value: SliderValue, event) => void;

  /** 
   * @description 与 touchend 触发时机一致，把当前值作为参数传入
   */
  onAfterChange: (value: SliderValue, event) => void;
}

export declare const sliderDefaultProps: Partial<ISliderProps>;
