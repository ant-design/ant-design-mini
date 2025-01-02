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

const demoMap = {
  demo1: [
    {
      status: 'loading',
      title: '思考中',
    },
  ],
  demo2: [
    {
      status: 'fail',
      title: '思考中',
    },
  ],
  demo3: [
    {
      status: 'success',
      title: '理解问题',
    },
    {
      status: 'loading',
      title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
    },
  ],
  demo4: [
    {
      status: 'loading',
      title: '理解问题',
      content: '这是处理内容结果',
      contentType: 'text',
    },
    {
      status: 'fail',
      title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
      content: [
        '1. 这是处理内容结果',
        '2. 步骤2，这是一条很长的步骤，所以需要进行换行。需要进行换行',
        '3. 结束搜索',
      ],
      contentType: 'text',
    },
    {
      status: 'success',
      title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
      content: ['1. 这是处理内容结果', '2. 步骤2', '3. 结束搜索'],
      contentType: 'link',
    },
    {
      status: 'success',
      title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
      content: ['这是处理内容结果', '步骤2', '结束搜索'],
      contentType: 'tag',
    },
    {
      status: 'success',
      title: '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
      list: [
        {
          status: 'loading',
          title: '理解问题',
          content: '这是处理内容结果',
          contentType: 'text',
        },
        {
          status: 'fail',
          title:
            '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
          content: [
            '1. 这是处理内容结果',
            '2. 步骤2，这是一条很长的步骤，所以需要进行换行。需要进行换行',
            '3. 结束搜索',
          ],
          contentType: 'text',
        },
        {
          status: 'success',
          title:
            '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
          content: ['1. 这是处理内容结果', '2. 步骤2', '3. 结束搜索'],
          contentType: 'link',
        },
        {
          status: 'success',
          title:
            '搜索中：Ant Design X 的发布时间。这一句比较长所以需要进行换行',
          content: ['这是处理内容结果', '步骤2', '结束搜索'],
          contentType: 'tag',
        },
      ],
    },
  ],
};

export const ThoughtChainProps: Partial<IThoughtChainProps> = {
  list: [],
  className: '',
};
