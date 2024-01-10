import { View, Slot, TSXMLProps, Component } from 'tsxml';
import { SkeletonTitleProps, SkeletonTitleDefaultProps } from './props';

export default ({
  loading,
  animate,
  className,
  style,
}: TSXMLProps<SkeletonTitleProps> = SkeletonTitleDefaultProps) => (
  <Component>
    {loading ? (
      <View
        class={`ant-skeleton-title ${
          animate ? 'ant-skeleton-title-animate' : ''
        } ${className || ''}`}
        style={style}
      ></View>
    ) : (
      <Slot />
    )}
  </Component>
);
