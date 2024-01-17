import { Component, Slot, TSXMLProps, View } from 'tsxml';
import Avatar from './Avatar/index.axml';
import Paragraph from './Paragraph/index.axml';
import { ISkeletonProps } from './props';
import Title from './Title/index.axml';

export default ({
  loading,
  className,
  animate,
  avatar,
  title,
  paragraph,
}: TSXMLProps<ISkeletonProps>) => (
  <Component>
    {loading ? (
      <View class={`ant-skeleton ${className || ''}`}>
        {avatar && (
          <View class="ant-skeleton-avatar-wrapper">
            <Avatar
              animate={animate}
              loading
              size={avatar === true ? 'medium' : avatar.size}
            />
          </View>
        )}
        <View class="ant-skeleton-content-wrapper">
          {title && <Title animate={animate} loading />}
          {paragraph && (
            <Paragraph
              animate={animate}
              rows={paragraph === true ? 3 : paragraph.rows}
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
