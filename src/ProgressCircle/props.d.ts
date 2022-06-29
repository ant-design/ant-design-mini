import { IBaseProps } from '../_base';
export interface IProgressBarProps extends IBaseProps {
  /**
   * @description canvas id
   * @default 'amd-progressBar-canvas'
   */
  id: string;
  /**
   * @description canvas 样式
   * @default ''
   */
  className: string;
  /**
   * @description 进度条宽度
   * @default 8
   */
  progressWidth: number;
  /**
   * @description 每次绘制进度条推进的角度，默认6deg
   * @default 6
   */
  speed: number;
  /**
   * @description canvas 宽度
   */
  width: number;
  /**
   * @description canvas 高度
   */
  height: number;
  /**
   * @description 进度百分比，范围 [0, 100]
   * @default 0
   */
  percent: number;
  /**
   * @description 进度条颜色
   * @default #1677FF
   */
  progressColor: string;
  /**
   * @description 进度条轨道颜色
   * @default #E5E5E5
   */
  orbitColor: string;
  /**
   * @description 进度单位
   * @default '%'
   */
  unit?: string;
  /**
   * @description 自定义进度文案
   * @default ''
   */
  progressText?: string
  /**
   * @description 自定义进度提示文案
   * @default ''
   */
  label?: string
}
export declare const ProgressDefaultProps: Partial<IProgressBarProps>;
