/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_util/base';

/**
 * @description 文本自适应，用于未知长度的文案需要自适应宽度的场景。
 */

export interface IAutoResizeProps extends IBaseProps {
  /**
   * @description 要传入的文本，用来计算宽度
   */
  text?: string;
  /**
   * @description 最小字号限制， 可以根据业务自行设置
   * @default 30
   */
  minFontSize?: number;
  /**
   * @description 是否禁用
   * @default 36
   */
  maxFontSize?: number;
  /**
   * @description 是否支持换行
   * @default false
   */
  wrap: boolean;
  /**
   * @description 文案宽度比，计算方式为maxFontSize / ratio * 文案长度,
   * 有场景英文字符长但容器宽度足够显示，却缩小了字体，此时可以增大ratio使用maxFontSize字号
   * @default 2
   */
  ratio?: number;
}

export const AutoResizeDefaultProps: Partial<IAutoResizeProps> = {
  text: '',
  minFontSize: 30,
  maxFontSize: 36,
  wrap: false,
  ratio: 2,
};
