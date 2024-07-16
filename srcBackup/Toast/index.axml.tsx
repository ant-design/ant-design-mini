import { TSXMLProps, View, Component, InternalData } from 'tsxml';
import AmIcon from '../Icon/index.axml';
import Loading from '../Loading/index.axml';
import Mask from '../Mask/index.axml';
import { IToastProps } from './props';

export default (
  {
    className,
    content,
    icon,
    image,
    type,
    showMask,
    maskStyle,
    style,
  }: TSXMLProps<IToastProps>,
  { show, displayContent }: InternalData
) => (
  <Component>
    {show && (
      <View
        class={`ant-toast ${className || ''} ${
          icon || image || type ? 'ant-toast-icon-wrapper' : ''
        }`}
        style={style || ''}
      >
        {type ? (
          <View class="ant-toast-normal">
            {type === 'loading' ? (
              <Loading type="mini" />
            ) : type === 'warning' ? (
              <AmIcon type="ExclamationOutline" className="ant-toast-icon" />
            ) : type === 'error' ? (
              <AmIcon type="CloseOutline" className="ant-toast-icon" />
            ) : (
              type === 'success' && (
                <AmIcon type="CheckOutline" className="ant-toast-icon" />
              )
            )}
          </View>
        ) : icon ? (
          <AmIcon type={icon} className="ant-toast-icon" />
        ) : (
          image && (
            <View
              style={`background-image: url(${image})`}
              class="ant-toast-image"
            />
          )
        )}
        <View class="ant-toast-text-body">
          <View class="ant-toast-text-box">
            {/* #if ALIPAY */}
            <View class="ant-toast-text-content">
              {content.substring(0, 24)}
            </View>
            {/* #endif */}
            {/* #if WECHAT */}
            <View class="ant-toast-text-content">{displayContent}</View>
            {/* #endif */}
          </View>
        </View>
      </View>
    )}

    {show && showMask && (
      <Mask
        className="ant-toast-mask"
        show={true}
        onMaskTap="handleClickMask"
        style={maskStyle}
      />
    )}
  </Component>
);
