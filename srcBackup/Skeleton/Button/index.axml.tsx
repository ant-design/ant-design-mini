import { View, Slot, TSXMLProps, Component } from 'tsxml';
import utils from './index.sjs';
import { SkeletonButtonProps } from './props';

export default ({
  loading,
  animate,
  size,
  className,
  style,
}: TSXMLProps<SkeletonButtonProps>) => (
  <Component>
    {loading ? (
      <View
        class={`ant-skeleton-button ${
          animate ? 'ant-skeleton-button-animate' : ''
        } ${utils.getClass(size)} ${className || ''}`}
        style={style}
      />
    ) : (
      <Slot />
    )}
  </Component>
);
