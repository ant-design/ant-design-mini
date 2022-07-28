import { IBaseProps } from '../_base';
/**
 * @description 弹窗，可在其中加入具体内容，展示更多信息供用户使用。
 */

export enum EProgressBarStatus {
  success = 'success',
  fail = 'fail'
}
export interface IProgressBarProps extends IBaseProps {
  /**
   * @description 当前进度，范围 0-100
   * @default 0
   */
  progress?: number;
  /**
   * @description 是否展示进度条右侧的默认指示器
   * @default true
   */
   showDefaultIndicator: boolean;
   /**
   * @description 样式
   * @default true
   */
  className: string;

  /**
   * @description 进度条状态
   */
  type: EProgressBarStatus;

  /**
   * @description 轨道颜色
   * @default #e5e5e5
   */
  orbitColor: string;

  /**
   * @description 进度颜色
   * @default #1677FF
   */
  progressColor: string;

  /**
   * @description 高度
   * @default 16rpx
   */
  height: string;

  /**
   * @description 宽度
   * @default 100%
   */
  width: string;
}
export declare const ProgressBarDefaultProps: Partial<IProgressBarProps>;
