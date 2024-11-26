import { IBaseProps } from '../_util/base';

/**
 * @description 对话框，当应用中需要比较明显的对用户当前的操作行为进行警示或提醒时，可以使用对话框。用户需要针对对话框进行操作后方可结束。
 */

export interface Button {
  /**
   * @description 按钮名称
   */
  text: string;
  /**
   * @description 按钮样式
   * @default primary
   */
  type: string;
  /**
   * @description 按钮置灰
   * @default false
   */
  disabled: boolean;
  /**
   * @description 按钮唯一标识
   */
  id: string;
}
export interface Footer {
  /**
   * @description 按钮列表
   */
  buttons: Button[];
  /**
   * @description 按钮布局方式
   */
  layout: 'vertical' | 'horizontal';
}
export interface IDialogProps extends IBaseProps {
  /**
   * @description Modal body类名
   */
  bodyClassName: string;
  /**
   * @description Modal body样式
   */
  bodyStyle: string;
  /**
   * @description 遮罩层类名
   */
  maskClassName: string;
  /**
   * @description 遮罩层样式
   */
  maskStyle: string;
  /**
   * @description 是否可点击蒙层关闭
   * @default true
   */
  maskClosable: boolean;
  /**
   * @description 是否显示右上角的关闭按钮。只有在 type 为 focus 生效
   */
  closable: boolean;
  /**
   * @description 过渡动画时长，单位毫秒
   */
  duration: number;
  /**
   * @description 是否开启过渡动画
   */
  animation: boolean;
  /**
   * @description 弹窗层级
   */
  zIndex: number;
  /**
   * @description 标题
   */
  title: string;
  /**
   * @description 内容
   */
  content: string;
  /**
   * @description 是否可见，受控模式
   * @default false
   */
  visible: boolean;
  /**
   * @description 是否关闭后销毁内部元素
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * @description 底部按钮列表
   */
  footer: Footer;
  /**
   * @description 正常模式下 弹框头图, 氛围弹框场景下此图片不展示
   */
  headerImage: string;
  /**
   * @description 触发关闭时回调
   */
  onClose: () => void;
  /**
   * @description 按钮点击事件
   */
  onButtonTap?: (buttonItem) => void;
}

export const ModalDefaultProps: Partial<IDialogProps> = {
  visible: false,
  maskClosable: true,
  closable: true,
  duration: 200,
  animation: true,
  zIndex: 998,
};

export const ModalFunctionalProps: Partial<IDialogProps> = {
  bodyClassName: '',
  bodyStyle: '',
  maskClassName: '',
  maskStyle: '',
  maskClosable: true,
  closable: true,
  duration: 200,
  animation: true,
  zIndex: 998,
  title: '',
  content: '',
  visible: false,
  destroyOnClose: false,
  footer: {
    buttons: [],
    layout: 'vertical',
  },
};
