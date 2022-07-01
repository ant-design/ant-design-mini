import { IBaseProps } from '../_base';
/**
 * @description 弹窗，可在其中加入具体内容，展示更多信息供用户使用。
 */
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
}
export declare const ProgressBarDefaultProps: Partial<IProgressBarProps>;
