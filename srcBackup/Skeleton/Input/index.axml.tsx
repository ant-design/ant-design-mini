import { View, TSXMLProps, Slot, Component } from 'tsxml';
import { SkeletonInputProps } from './props';

export default ({
  loading,
  animate,
  className,
  style,
}: TSXMLProps<SkeletonInputProps>) => (
  <Component>
    {loading ? (
      <View
        class={`ant-skeleton-input ${
          animate ? 'ant-skeleton-input-animate' : ''
        } ${className || ''}`}
        style={style}
      ></View>
    ) : (
      <Slot />
    )}
  </Component>
);
