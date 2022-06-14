/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_base';

/**
 * @description 面板当前高度，最大高度、次最大高度、最小高度
 */
export enum SCROLL_POS {
  MAX = 'MAX',
  MIDDLE = 'MIDDLE',
  MIN = 'MIN',
}

export interface IFloatPanelProps<T = any> extends IBaseProps {
  /**
   * @description 系统信息
   */
  systemInfo: any;

  /**
   * @description 最大高度，范围 0 - 0.95，单位为页面高度百分比
   * @default 0.95
   */
  maxHeight: number;

  /**
   * @description 次最大高度，范围 0 - 0.95，单位为页面高度百分比
   * @default 0.35
   */
  middleHeight: number;

  /**
   * @description 最小高度，范围 0 - 0.95，单位为页面高度百分比
   * @default 0.18
   */
  minHeight: number;

  /**
   * @description 组件根节点类
   */
  className: string;

  /**
   * @description 内容区域滚动到底部，常用于数据加载
   */
  onContentToBottom: () => {};

  /**
   * @description 距离内容区域底部多远触发 onContentToBottom 回调
   * @default 50
   */
  lowerThreshold: number;

  /**
   * @description 获得面板当前滚动位置
   */
  onScroll: (pos: SCROLL_POS) => {};

  /**
   * @description 是否开启蒙层，默认透明
   */
  withMask: boolean;
}
export declare const FLoatingPanelDefaultProps: Partial<IFloatPanelProps>;
