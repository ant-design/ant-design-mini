import { IBaseProps } from '../_util/base';

/**
 * @description 头像，可展示头像以及用户名等简要信息。
 */
export interface IAvatarProps extends IBaseProps {
  /**
   * @description 尺寸，x-small(80*80) small(88*88) medium(104*104) large(120*120)
   * @default "medium"
   */
  size: 'x-small' | 'small' | 'medium' | 'large';
  /**
   * @description 头像地址，默认为灰色的内置图片
   */
  src: string;
}

export const AvatarDefaultProps: Partial<IAvatarProps> = {
  size: 'medium',
  src: '',
};
