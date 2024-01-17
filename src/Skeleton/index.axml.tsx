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
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <Avatar animate={animate} loading size={avatar.size} />
          </View>
        )}
        <View class="ant-skeleton-content-wrapper">
          {title && <Title animate={animate} loading />}
          {paragraph && (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            <Paragraph animate={animate} rows={paragraph.rows} loading />
          )}
        </View>
      </View>
    ) : (
      <Slot />
    )}
  </Component>
);
