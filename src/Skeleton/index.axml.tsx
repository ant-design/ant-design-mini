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
            <Avatar
              animate={animate}
              loading
              size={
                // 这里和之前先保持一致
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                avatar.size
              }
            />
          </View>
        )}
        <View class="ant-skeleton-content-wrapper">
          {title && <Title animate={animate} loading />}
          {paragraph && (
            <Paragraph
              animate={animate}
              rows={
                // 这里和之前先保持一致
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                paragraph.rows
              }
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
