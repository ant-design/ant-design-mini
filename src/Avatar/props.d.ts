import { IBaseProps } from '../_base';

/**
 * @description 头像，可展示头像以及用户名等简要信息。
 */
export interface IAvatarProps extends IBaseProps {
  /**
   * @description 尺寸，x-small(80*80) small(88*88) medium(104*104) large(120*120)
   * @default "medium"
   */
  size?: 'x-small' | 'small' | 'medium' | 'large';
  /**
   * @description 头像地址，默认为灰色的内置图片
   */
  src?: string;
  /**
   * @description 第一行信息
   */
  name?: string;
  /**
   * @description 第二行补充信息，当 name 不存在时，不显示；当 size=x-small，不显示
   */
  desc?: string;
}
export declare const AvatarDefaultProps: Partial<IAvatarProps>;
