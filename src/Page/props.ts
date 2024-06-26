import { IBaseProps } from '../_util/base';

/**
 * @description 页面，提供开箱即用的页面状态展示和基础能力。
 */

export interface IPageProps extends IBaseProps {
  /**
   * @description 安全区内边距位置 top=顶部 bottom=底部 both=顶部和底部
   */
  safeArea?: 'top' | 'bottom' | 'both';

  /**
   * @description 加载中
   */
  loading?: boolean;

  /**
   * @description 加载样式类型，参考 Loading 组件
   */
  loadingType?: string;

  /**
   * @description 加载样式大小，参考 Loading 组件
   */
  loadingSize?: string;

  /**
   * @description 加载样式颜色，参考 Loading 组件
   */
  loadingColor?: string;

  /**
   * @description 页面异常状态
   */
  status?: 'failed' | 'busy' | 'disconnected' | 'empty';

  /**
   * @description 页面异常状态-标题
   */
  title?: string;

  /**
   * @description 页面异常状态-描述
   */
  message?: string;

  /**
   * @description 页面异常状态-按钮文案
   */
  actionText?: string;

  /**
   * @description 页面异常状态-次要按钮文案
   */
  secondaryActionText?: string;

  /**
   * @description 页面异常状态-按钮点击事件
   */
  onActionTap?: (e: any) => void;

  /**
   * @description 页面异常状态-次要按钮点击事件
   */
  onSecondaryActionTap?: (e: any) => void;
}

export const PageDefaultProps: IPageProps = {
  safeArea: 'both',
  loadingColor: '#ccc',
  loadingSize: 'medium',
  loadingType: 'spin',
};

// 内置异常配置
export const BuiltinStatus = {
  'failed': {
    image: 'https://gw.alipayobjects.com/mdn/rms_7cc883/afts/img/A*PG7NQoXbN38AAAAAAAAAAAAAARQnAQ',
    title: '页面遇到一些小问题',
    message: '待会来试试'
  },
  'disconnected': {
    image: 'https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*uqB5TY4urA4AAAAAAAAAAAAADj16AQ/original',
    title: '网络有点忙',
    message: '动动手指帮忙修复'
  },
  'empty': {
    title: '这里什么也没有',
    message: '看看其它吧',
    image: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*0AaRRrYlVDkAAAAAAAAAAAAAARQnAQ'
  },
  'busy': {
    image: 'https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*avTGQIyeHk0AAAAAAAAAAAAADj16AQ/original',
    title: '前方拥堵',
    message: '刷新试试'
  }
};
