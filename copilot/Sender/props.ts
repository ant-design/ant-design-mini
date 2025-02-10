// @ts-nocheck
import { IBaseProps } from '../_util/base';

interface ISenderProps extends IBaseProps {
  /**
   * @description 输入框的值
   */
  value?: string;
  /**
   * @description 输入框占位符
   * @default "可以问我任何问题~"
   */
  placeholder?: string;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否发送中
   * @default false
   */
  loading?: boolean;
  /**
   * @description 输入框内容变化时触发
   */
  onChange?: (value: string) => void;
  /**
   * @description 点击发送按钮时触发
   */
  onSubmit?: (value: string) => void;
  /**
   * @description 点击取消按钮时触发
   */
  onCancel?: () => void;
}

export const SenderProps: ISenderProps = {
  value: '',
  placeholder: '可以问我任何问题~',
  disabled: false,
  loading: false,
};

export type { ISenderProps };
