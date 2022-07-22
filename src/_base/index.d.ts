/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBaseProps {
    /**
     * @description 类名
     */
    className?: string;
}
export interface IBaseFormItemPropsWithOutFocus<V = any> extends IBaseProps {
    /**
     * @description 表单元素 id
     */
    id?: string;
    /**
     * @description 表单元素 name
     */
    name?: string;
    /**
     * @description 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 表单触发变更回调
     */
    onChange?: (v: V, e: Record<string,any>) => void;
}
export interface IBaseFormItemProps<V = any> extends IBaseFormItemPropsWithOutFocus<V> {
    /**
     * @description 自动聚焦，ios 可能会失效
     * @default false
     */
    autoFocus?: boolean;
    /**
     * @description 聚焦时触发回调
     */
    onFocus?: (v: V, e: Record<string,any>) => void;
    /**
     * @description 失去焦点时触发回调
     */
    onBlur?: (v: V, e: Record<string,any>) => void;
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

export interface IScrollOffset {
  scrollTop: number
}
