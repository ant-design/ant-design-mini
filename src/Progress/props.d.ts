import { IBaseProps } from '../_base';
/**
 * @description 弹窗，可在其中加入具体内容，展示更多信息供用户使用。
 */

export interface IProgressBarProps extends IBaseProps {
  /**
   * @description 当前进度，范围 0-100
   * @default 0
   */
  percent?: number;

  /**
   * @description 模式
   * @default 'line'
   */
  type: 'line' | 'circle';
  /**
   * @description 圆形进度条画布宽度，单位 px
   */
  width: number;
  /**
   * @description 进度条宽度，单位px
   */
  strokeWidth: number;
  /**
   * @description 状态，仅限 line
   */
  status: 'success' | 'exception';
  /**
   * @description 进度条颜色
   */
  strokeColor: string;
  /**
   * @description 轨道颜色
   */
  trailColor: string;
  /**
   * @description 每次绘制进度条推进的角度，默认6deg
   * @default 6
   */
  speed: number;
}
export declare const ProgressBarDefaultProps: Partial<IProgressBarProps>;
