import { IBaseProps } from '../_util/base';

/**
 * @description 滑块
 */

export type SliderValue = number | [number, number];

export interface ISliderProps extends IBaseProps {
  /**
   * @description 当前值
   */
  value: SliderValue;

  defaultValue: SliderValue;

  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 最大值
   * @default 100
   */
  max: number;

  /**
   * @description 最小值
   * @default 0
   */
  min: number;

  /**
   * @description 是否是双滑块
   * @default false
   */
  range: boolean;

  /**
   * @description 是否展示刻度上的数据
   * @default false
   */
  showNumber: boolean;

  /**
   * @description 步距，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，step 的配置失效
   * @default 1
   */
  step: number;

  /**
   * @description 是否显示刻度
   * @default false
   */
  showTicks: boolean;

  /**
   * @description 是否在拖动时显示悬浮提示
   * @default false
   */
  showTooltip: boolean;
  /**
   * @deprecated 选中线条的样式
   */
  activeLineStyle?: string;
  /**
   * @description 选中线条的样式
   */
  activeDotStyle?: string;
  /**
   * @description 选中线条的样式
   * @default '''
   */
  activeLineClassName?: string;

  /**
   * @description 选中小圆点的类名
   */
  activeDotClassName?: string;

  /**
   * @description 输入变化的时候触发， 参数为滑动组件的当前值
   */
  onChange: (value: SliderValue, event) => void;

  /**
   * @description 与 touchend 触发时机一致，把当前值作为参数传入
   */
  onAfterChange: (value: SliderValue, event) => void;
}

export const sliderDefaultProps: Partial<ISliderProps> = {
  min: 0,
  max: 100,
  step: 1,
};

export const SliderFunctionalProps: Partial<ISliderProps> = {
  value: null,
  defaultValue: null,
  disabled: false,
  max: 100,
  min: 0,
  range: false,
  showNumber: false,
  step: 1,
  showTicks: false,
  showTooltip: false,
  activeLineStyle: '',
  activeDotStyle: '',
  activeLineClassName: '',
  activeDotClassName: '',
};
