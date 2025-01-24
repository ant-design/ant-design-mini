/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../../src/_util/base';

interface IThoughtChainItemProps {
  /**
   * @description 节点标题
   */
  title?: string;

  /**
   * @description 内容
   */
  content?: any;

  /**
   * @description UUID
   */
  key?: string;
  /**
   * @description 标题图标
   */
  icon?: string;

  /**
   * @description 二级思考链
   */
  items?: IThoughtChainItemProps[];
}

export interface ICollapsibleOptions extends IBaseProps {
  expandedKeys?: string[];
}

/**
 * @description 思考链
 * 用于可视化展示AI处理请求、生成内容或执行任务的进程与状态
 * 这是一个与动画相关的组件，需要提供各节点动画的props和API和使用方进行交互。
 */

export interface IThoughtChainProps extends IBaseProps {
  /**
   * @description 思考节点列表
   * @default default
   */
  items?: IThoughtChainItemProps[];

  className?: string;

  /**
   * @description 是否可折叠
   * @default true
   */
  collapsible?: boolean | ICollapsibleOptions;
  /**
   * @description 样式
   */
  style?: string;

  onExpand?: (expandedKeys: string[], currentExpandeKey: string) => void;
  /** 内容点击事件 */
  onContentTap?: (e) => void;
}

export const ThoughtChainProps: Partial<IThoughtChainProps> = {
  items: [],
  className: '',
  collapsible: true,
  style: '',
  onExpand: () => {},
  onContentTap: () => {},
};
