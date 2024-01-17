import { Component, Slot, View } from 'tsxml';
import { ISkeletonProps } from './props';
import Avatar from './Avatar/index.axml';
import Paragraph from './Paragraph/index.axml';
import Title from './Title/index.axml';

export default ({
  loading,
  className,
  animate,
  avatar,
  title,
  paragraph,
}: ISkeletonProps) => (
  <Component>
    {loading ? (
      <View class={`ant-skeleton ${className || ''}`}>
        {avatar && (
          <View class="ant-skeleton-avatar-wrapper">
            <Avatar animate={animate} loading size={(avatar as any).size} />
          </View>
        )}
        <View class="ant-skeleton-content-wrapper">
          {title && <Title animate={animate} loading />}
          {paragraph && (
            <Paragraph
              animate={animate}
              rows={(paragraph as any).rows}
              loading
            />
          )}
        </View>
      </View>
    ) : (
      <Slot />
    )}
  </Component>
);
