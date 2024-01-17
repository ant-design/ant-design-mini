import { Slot, TSXMLProps, View, Component } from 'tsxml';
import divider from './index.sjs';
import { IDividerProps } from './props';

export default ({
  direction,
  className,
  style,
  textPosition,
  text,
  textStyle,
  textClassName,
  lineColor,
  lineHeight,
  lineType,
  lineWidth,
}: TSXMLProps<IDividerProps>) => (
  <Component>
    {direction === 'horizontal' && (
      <View
        class={`ant-divider ant-divider-horizontal ${className || ''}`}
        style={style || ''}
      >
        <View
          class="ant-divider-horizontal-left"
          style={`flex: ${divider.getLineWidthFlex(textPosition, text)[0]};${
            lineHeight ? 'border-bottom-width:' + lineHeight + 'px;' : ''
          }${lineType ? 'border-bottom-style:' + lineType + ';' : ''}${
            lineColor ? 'border-bottom-color:' + lineColor + ';' : ''
          }`}
        />

        {/* #if WECHAT */}
        {text ? (
          <View
            class={`ant-divider-horizontal-text ${textClassName || ''}`}
            style={textStyle || ''}
          >
            {text}
          </View>
        ) : (
          <Slot name="text"></Slot>
        )}
        {/* #endif */}
        {/* #if ALIPAY */}
        <Slot name="text">
          {text && (
            <View
              class={`ant-divider-horizontal-text ${textClassName || ''}`}
              style={textStyle || ''}
            >
              {text}
            </View>
          )}
        </Slot>
        {/* #endif */}
        <View
          class="ant-divider-horizontal-right"
          style={`flex: ${divider.getLineWidthFlex(textPosition, text)[1]};${
            lineHeight ? 'border-bottom-width:' + lineHeight + 'px;' : ''
          }${lineType ? 'border-bottom-style:' + lineType + ';' : ''}${
            lineColor ? 'border-bottom-color:' + lineColor + ';' : ''
          }`}
        />
      </View>
    )}

    {direction === 'vertical' && (
      <View
        class={`ant-divider ant-divider-vertical ${className || ''}`}
        style={`${style || ''};${
          lineWidth ? 'border-right-width:' + lineWidth + 'px;' : ''
        }${lineType ? 'border-right-style:' + lineType + ';' : ''}${
          lineColor ? 'border-right-color:' + lineColor + ';' : ''
        }`}
      />
    )}
  </Component>
);
