import { IBaseProps } from '../_util/base';

export interface IActionItem {
  text: string;
  icon: string;
  description?: string;
  danger?: boolean;
  disabled?: boolean;
}
/**
 * @description 头像，可展示头像以及用户名等简要信息。
 */
export interface IActionSheetProps extends IBaseProps {
  /**
   * @description 标题
   * @default ""
   */
  title: string;

  /**
   * @description 面板选项列表
   * @default []
   */
  actions: IActionItem[];

  /**
   * @description 取消按钮文字
   * @default []
   */
  cancelText: string;

  /**
   * @description 是否显示
   * @default false
   */
  visible: boolean;

  /**
   * @description 点击选项时触发，禁用或加载状态下不会触发
   */

  onAction: (aciton: IActionItem, index: number, e) => void;

  /**
   * @description 关闭时触发
   */

  onClose: (e) => void;
}

export const ActionSheetDefaultProps: Partial<IActionSheetProps> = {
  title: '',
  actions: [],
  cancelText: '取消',
  visible: false,
};
