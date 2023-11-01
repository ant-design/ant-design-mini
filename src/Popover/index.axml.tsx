import { Component, TSXMLProps, View, Slot, InternalData } from 'tsxml';
import { IPopoverProps } from './props';
import Mask from '../Mask/index.axml';

export default (
  {
    className,
    style,
    destroyOnClose,
    color,
    contentClassName,
    contentStyle,
    content,
    showMask,
    maskClassName,
    maskStyle,
  }: TSXMLProps<IPopoverProps>,
  { mixin, popoverContentStyle, $id, adjustedPlacement }: InternalData
) => (
  <Component>
    <View
      class={`ant-popover ${
        showMask && mixin.value ? 'ant-popover-children' : ''
      } ${className ? className : ''}`}
      style={style || ''}
    >
      <View id={`ant-popover-children-${$id}`} onTap="onVisibleChange">
        <Slot />
      </View>
      {(!destroyOnClose || mixin.value) && (
        <View
          hidden={!mixin.value}
          id={`ant-popover-content-${$id}`}
          class={`ant-popover-content ant-popover-${adjustedPlacement}`}
          style={`${popoverContentStyle}; ${
            adjustedPlacement ? '' : 'opacity: 0'
          }`}
        >
          <View
            class={`ant-popover-arrow ant-popover-${adjustedPlacement}-arrow`}
            style={color ? `border-bottom-color:${color}` : ''}
          ></View>
          <View
            class={`ant-popover-inner ${contentClassName || ''}`}
            style={`${color ? `background:${color}` : ''};${
              contentStyle || ''
            }`}
          >
            <Slot name="content">{content}</Slot>
          </View>
        </View>
      )}
    </View>
    <Mask
      show={showMask && mixin.value}
      id={`ant-popover-mask-${$id}`}
      className={`ant-popover-mask ${maskClassName || ''}`}
      style={maskStyle}
      onMaskTap="onVisibleChange"
    />
  </Component>
);
