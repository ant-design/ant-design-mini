import { Component, Slot, View } from 'tsxml';
import AntPopup from '../Popup/index.axml';
import AntButton from '../Button/index.axml';
import AntIcon from '../Icon/index.axml';
import { IModalProps } from './props';
import { TSXMLProps, InternalData } from 'tsxml';
import utils from './index.sjs';

export default (
  {
    className,
    style,
    maskClassName,
    maskStyle,
    visible,
    duration,
    destroyOnClose,
    bodyClassName,
    bodyStyle,
    title,
    content,
    type,
    primaryButtonText,
    primaryButtonStyle,
    secondaryButtonText,
    secondaryButtonStyle,
    cancelButtonText,
    cancelButtonStyle,
    closable,
  }: TSXMLProps<IModalProps>,

  { animation, zIndex }: InternalData
) => (
  <Component>
    <AntPopup
      className={`ant-modal ${className || ''}`}
      style={style || ''}
      maskClassName={maskClassName}
      maskStyle={maskStyle}
      visible={visible}
      duration={duration}
      position="center"
      animation={animation}
      zIndex={zIndex}
      destroyOnClose={destroyOnClose}
      onClose="onMaskClose"
    >
      <Slot slot="content">
        <View
          class={`ant-modal-body ${bodyClassName || ''}`}
          style={bodyStyle || ''}
        >
          <Slot name="header" />
          {title && (
            <Slot name="title">
              <View class="ant-modal-body-title">{title}</View>
            </Slot>
          )}
          {content && (
            <Slot name="content">
              <View class="ant-modal-body-content">{content}</View>
            </Slot>
          )}
          <Slot name="footer">
            {type === 'focus' && (
              <View class="ant-modal-body-footer-focus">
                <AntButton
                  type="primary"
                  className="ant-modal-body-footer-focus-primary"
                  style={primaryButtonStyle || ''}
                  onTap="onPrimaryButtonTap"
                >
                  {primaryButtonText}
                </AntButton>
                {secondaryButtonText && (
                  <View
                    class="ant-modal-body-footer-focus-secondary"
                    style={secondaryButtonStyle || ''}
                    onTap="onSecondaryButtonTap"
                  >
                    {secondaryButtonText}
                  </View>
                )}
                {cancelButtonText && (
                  <View
                    class="ant-modal-body-footer-focus-cancel"
                    style={cancelButtonStyle || ''}
                    onTap="onCancelButtonTap"
                  >
                    {cancelButtonText}
                  </View>
                )}
              </View>
            )}
            {utils.getDirection(
              primaryButtonText,
              secondaryButtonText,
              cancelButtonText,
              type
            ) === 'horizontal' && (
              <View class="ant-modal-body-footer-horizontal">
                {cancelButtonText && (
                  <View
                    class="ant-modal-body-footer-horizontal-cancel"
                    style={cancelButtonStyle || ''}
                    onTap="onCancelButtonTap"
                  >
                    {cancelButtonText}
                  </View>
                )}
                {secondaryButtonText && (
                  <View
                    class="ant-modal-body-footer-horizontal-secondary"
                    style={secondaryButtonStyle || ''}
                    onTap="onSecondaryButtonTap"
                  >
                    {secondaryButtonText}
                  </View>
                )}
                {primaryButtonText && (
                  <View
                    class="ant-modal-body-footer-horizontal-primary"
                    style={primaryButtonStyle || ''}
                    onTap="onPrimaryButtonTap"
                  >
                    {primaryButtonText}
                  </View>
                )}
              </View>
            )}
            {utils.getDirection(
              primaryButtonText,
              secondaryButtonText,
              cancelButtonText,
              type
            ) === 'vertical' && (
              <View class="ant-modal-body-footer-vertical">
                {primaryButtonText && (
                  <View
                    class="ant-modal-body-footer-vertical-primary"
                    style={primaryButtonStyle || ''}
                    onTap="onPrimaryButtonTap"
                  >
                    {primaryButtonText}
                  </View>
                )}
                {secondaryButtonText && (
                  <View
                    class="ant-modal-body-footer-vertical-secondary"
                    style={secondaryButtonStyle || ''}
                    onTap="onSecondaryButtonTap"
                  >
                    {secondaryButtonText}
                  </View>
                )}
                {cancelButtonText && (
                  <View
                    class="ant-modal-body-footer-vertical-cancel"
                    style={cancelButtonStyle || ''}
                    onTap="onCancelButtonTap"
                  >
                    {cancelButtonText}
                  </View>
                )}
              </View>
            )}
          </Slot>
        </View>
      </Slot>
      {type === 'focus' && closable && (
        <AntIcon
          type="CloseOutline"
          onTap="onClose"
          className="ant-modal-close"
        />
      )}
    </AntPopup>
  </Component>
);
