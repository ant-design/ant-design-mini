import { View, Slot, TSXMLProps } from 'tsxml';
import { SkeletonParagraphProps } from './props';

export default ({
  loading,
  rows,
  animate,
  className,
  style,
}: TSXMLProps<SkeletonParagraphProps>) => (
  <Component>
    {loading && rows > 0 ? (
      <View
        class={`ant-skeleton-paragraph ${
          animate ? 'ant-skeleton-paragraph-animate' : ''
        } ${className || ''}`}
        style={style}
      >
        {Array.from({ length: rows }).map((_, index) => (
          <View key={index} class="ant-skeleton-paragraph-row"></View>
        ))}
      </View>
    ) : (
      <Slot></Slot>
    )}
  </Component>
);
