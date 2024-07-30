import { View, Component, Slot, TSXMLProps, InternalData } from 'tsxml';
import utils from './index.sjs';
import { IPopupProps } from './props';

export default (
  {
    className,
    zIndex,
    style,
    destroyOnClose,
    visible,
    showMask,
    maskClassName,
    animation,
    duration,
    maskStyle,
    position,
    animationType,
    width,
    height,
  }: TSXMLProps<IPopupProps>,
  { isOldVersion, closing }: InternalData
) => (
  <Component>
    {(!destroyOnClose || visible || closing) && (
      <View
        class={`ant-popup ${className || ''}`}
        style={`${zIndex ? 'z-index:' + zIndex : ''};${style || ''}`}
        hidden={!destroyOnClose && !visible && !closing}
      >
        {showMask && (
          <View
            class={`ant-popup-mask ${maskClassName || ''} ${
              closing && !visible ? 'ant-popup-mask-closing' : ''
            }`}
            onTap="onTapMask"
            style={`${
              animation
                ? '-webkit-animation-duration:' +
                  duration +
                  'ms; animation-duration:' +
                  duration +
                  'ms;'
                : ''
            } ${maskStyle || ''}`}
          >
            <Slot name="mask" />
          </View>
        )}
        <View
          class={`ant-popup-content ant-popup-${animationType}-${position} ${
            closing
              ? 'ant-popup-' + animationType + '-' + position + '-close'
              : ''
          }`}
          style={utils.getContentStyle(
            position,
            animation,
            duration,
            width,
            height
          )}
          onAnimationEnd="onAnimationEnd"
        >
          <Slot />
          {isOldVersion && <Slot name="content" />}
        </View>
      </View>
    )}
  </Component>
);
