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
  { mixin, popoverContentStyle, adjustedPlacement, $id }: InternalData
) => (
  <Component>
    <View
      class={`ant-popover ${
        showMask && mixin.value ? 'ant-popover-children' : ''
      } ${className ? className : ''}`}
      style={style || ''}
    >
      <View
        id={`ant-popover-children${$id ? '-' + $id : ''}`}
        onTap="onVisibleChange"
      >
        {/* #if ALIPAY */}
        <Slot />
        {/* #endif */}
        {/* #if WECHAT*/}
        <View id="ant-popover-children-container">
          <Slot />
        </View>
        {/* #endif */}
      </View>
      {(!destroyOnClose || mixin.value) && (
        <View
          hidden={!mixin.value}
          id={`ant-popover-content${$id ? '-' + $id : ''}`}
          class={`ant-popover-content ant-popover-${adjustedPlacement}`}
          style={`${popoverContentStyle}; ${
            adjustedPlacement ? '' : 'opacity: 0'
          }`}
        >
          <View
            class={`ant-popover-arrow ant-popover-${adjustedPlacement}-arrow`}
            style={color ? 'border-bottom-color:' + color : ''}
          ></View>
          <View
            class={`ant-popover-inner ${contentClassName || ''}`}
            style={`${color ? 'background:' + color : ''};${
              contentStyle || ''
            }`}
          >
            {/* #if ALIPAY */}
            <Slot name="content">{content}</Slot>
            {/* #endif */}
            {/* #if WECHAT*/}
            {!content ? <Slot name="content"></Slot> : content}
            {/* #endif */}
          </View>
        </View>
      )}
    </View>
    <Mask
      show={showMask && mixin.value}
      id={`ant-popover-mask${$id ? '-' + $id : ''}`}
      className={`ant-popover-mask ${maskClassName || ''}`}
      style={maskStyle}
      onMaskTap="onVisibleChange"
    />
  </Component>
);
