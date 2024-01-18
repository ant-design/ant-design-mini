import { Slot, TSXMLProps, View, Component } from 'tsxml';
import Icon from '../Icon/index.axml';
import ImageIcon from '../ImageIcon/index.axml';
import { INoticeBarProps } from './props';

export default ({
  className,
  style,
  type,
  icon,
  mode,
  enableMarquee,
  show,
  marqueeStyle,
  $id,
}: TSXMLProps<INoticeBarProps>) => (
  <Component>
    {show && (
      <View
        class={`ant-notice-bar ${className || ''} ${
          type ? 'ant-notice-bar-' + type : ''
        }`}
        style={style}
      >
        <Slot name="icon">
          <View class="ant-notice-bar-icon">
            {icon ? (
              <ImageIcon image={icon} className="ant-notice-bar-icon-image" />
            ) : type === 'error' ? (
              <Icon type="InformationCircleOutline" />
            ) : (
              <Icon type="SoundOutline" />
            )}
          </View>
        </Slot>
        <View class={`ant-notice-bar-content ant-notice-bar-content-${$id}`}>
          <View
            class={`ant-notice-bar-marquee ant-notice-bar-marquee-${$id}`}
            style={`${marqueeStyle} display: ${
              enableMarquee ? 'inline-block' : 'block'
            }`}
            onTransitionEnd="onTransitionEnd"
          >
            <Slot />
          </View>
        </View>
        <View class="ant-notice-bar-operation">
          <Slot name="extra" />
          {mode === 'link' && (
            <Icon
              className="ant-notice-bar-operation-icon"
              type="RightOutline"
              onTap="onTap"
            />
          )}
          {mode === 'closeable' && (
            <Icon
              className="ant-notice-bar-operation-icon"
              type="CloseOutline"
              onTap="onTap"
            />
          )}
        </View>
      </View>
    )}
  </Component>
);
