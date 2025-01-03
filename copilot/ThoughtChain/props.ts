/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../../src/_util/base';

interface IThoughtChainItemProps {
  /**
   * @description 节点状态 'loading' | 'success' | 'fail'
   */
  status?: string;
  /**
   * @description 节点标题
   */
  title?: string;
  /**
   * @description 内容类型，内置了text、tag以及link类型，也可以自定义
   */
  contentType?: string;

  /**
   * @description 内容
   */
  content?: any;

  /**
   * @description ID
   */
  id?: string;

  /**
   * @description 二级思考链
   */
  list?: IThoughtChainItemProps[];
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
  list?: IThoughtChainItemProps[];

  className?: string;

  onContentItemTap?: (e: any) => void;
}


export const ThoughtChainProps: Partial<IThoughtChainProps> = {
  list: [],
  className: '',
};
