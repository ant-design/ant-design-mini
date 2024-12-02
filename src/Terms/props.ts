import { IBaseProps } from '../_util/base';

/**
 * @description 弹窗，可在其中加入具体内容，展示更多信息供用户使用。
 */
export interface IProps extends IBaseProps {
  /**
   * @description 是否显示
   * @default false
   */
  visible: boolean;

  /**
   * @description 关闭时回调
   */
  onClose?: () => void;
}

export const DefaultProps: Partial<IProps> = {
  visible: false,
};
