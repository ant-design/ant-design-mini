import { View, Slot, TSXMLProps, Component } from 'tsxml';
import { SkeletonAvatarProps } from './props';
import utils from './index.sjs';

export default ({
  loading,
  style,
  shape,
  size,
  animate,
  className,
}: TSXMLProps<SkeletonAvatarProps>) => (
  <Component>
    {loading ? (
      <View
        style={style}
        class={`ant-skeleton-avatar ant-skeleton-avatar-${shape} ${
          animate ? 'ant-skeleton-avatar-animate' : ''
        } ${utils.getClass(size)} ${className || ''}`}
      />
    ) : (
      <Slot />
    )}
  </Component>
);
