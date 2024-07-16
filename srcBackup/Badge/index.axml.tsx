import { View, Slot, TSXMLProps, Text } from 'tsxml';
import { IBadgeProps } from './props';
import _sjs from './index.sjs';

export default (
  {
    className,
    style,
    type,
    position,
    offsetX,
    offsetY,
    stroke,
    bgColor,
    text,
  }: TSXMLProps<IBadgeProps>) => (
  <View class={`ant-badge ${className || ''}`} style={style}>
    <View class="ant-badge-body">
      <Slot></Slot>
    </View>
    {type === 'dot' ? (
      <View
        class="ant-badge-content"
        style={_sjs.setPositionStyle(position, offsetX, offsetY)}
      >
        <View
          class={`ant-badge-dot ${stroke ? 'ant-badge-dot-stroke' : ''}`}
          style={bgColor ? 'background-color: ' + bgColor + ';' : ''}
        ></View>
      </View>
    ) : (
      <View
        class={`ant-badge-content ant-badge-content-not-dot ${
          type === 'bubble' ? 'ant-badge-content-' + position + '-bubble' : ''
        } ${stroke ? 'ant-badge-content-stroke' : ''}`}
        style={`${
          bgColor ? 'background-color: ' + bgColor + ';' : ''
        } ${_sjs.setBubbleStyle(type, position)};${_sjs.setPositionStyle(
          position,
          offsetX,
          offsetY
        )}`}
      >
        <View class="ant-badge-icon-container"></View>
        <View class="ant-badge-content-text">
          {/* #if WECHAT */}
          {!text && <Slot name="text"></Slot>}
          {/* #endif */}
          {/* #if ALIPAY */}
          <Slot name="text">
            {/* #endif */}
            {type === 'number' && (
              <View class="ant-badge-number">
                {_sjs.getOverCount(text) ? <Text>99+</Text> : <Text>{text}</Text>}
              </View>
            )}
            {type === 'text' && <View class="ant-badge-text">{text}</View>}
            {type === 'bubble' && <View class="ant-badge-bubble">{text}</View>}
            {/* #if ALIPAY */}
          </Slot>
          {/* #endif */}
        </View>
      </View>
    )}
  </View>
);
