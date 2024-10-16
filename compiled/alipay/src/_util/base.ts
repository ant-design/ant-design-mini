export interface IBaseProps {
  id?: string;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: string;
}

export declare type IconType = string;

export interface IBoundingClientRect {
  /**
   * @summary 上边界
   */
  top: number;
  /**
   * @summary 右边界
   */
  right: number;
  /**
   * @summary 下边界
   */
  bottom: number;
  /**
   * @summary 左边界
   */
  left: number;
  /**
   * @summary 宽度
   */
  width: number;
  /**
   * @summary 高度
   */
  height: number;
}
