import { IBaseProps, IconType } from '../../_base';
/**
 * @description 步骤条内部元素，必须配合 Steps 使用。
 */

export interface IStepItemProps extends IBaseProps {
  /**
   * @description 标题
   */
  title: string;
  /**
   * @description 补充信息
   */
  desc?: string;
  /**
   * @description 是否失败步骤
   * @default false
   */
  fail?: boolean;
  /**
   * @description 图标，横向和纵向都有各自的默认图标
   */
  icon?: IconType;
  /**
   * @description 激活步骤图标，横向和纵向都有各自的默认图标
   */
  activeIcon?: IconType;
  /**
   * @description 失败步骤图标，横向和纵向都有各自的默认图标
   */
  failIcon?: IconType;
  /**
   * @description 小程序必填，用于标记当前是第几步，必须按顺序递增
   */
  index: number;
  /**
   * @description 当页面有多个Steps时需传入，页面唯一，与外部的 Steps 组件的 uid 一致
   * @default 'steps'
   */
  uid?: string;
}
export declare const StepItemDefaultProps: Partial<IStepItemProps>;
