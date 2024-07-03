import { View, Image, Slot, TSXMLProps, Block } from 'tsxml';
import { IEmptyProps } from './props';

export default ({
  className,
  style,
  image,
  title,
  message,
}: TSXMLProps<IEmptyProps>) => (
  <View class={`ant-empty ${className || ''}`} style={style || ''}>
    <View class="ant-empty">
      <View class="ant-empty-image">
        {/* #if ALIPAY */}
        <Slot name="image">
          {/* #endif */}
          <Image
            class="ant-empty-image-element"
            src={
              image ||
              'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*0AaRRrYlVDkAAAAAAAAAAAAAARQnAQ'
            }
          />
          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
      </View>
      <View class="ant-empty-text">
        <View class="ant-empty-text-main">
          {/* #if WECHAT */}
          {title ? (
            <Block>{title}</Block>
          ) : (
            <Block>
              <Slot name="title">{title}</Slot>
            </Block>
          )}
          {/* #endif */}
          {/* #if ALIPAY */}
          <Slot name="title">{title}</Slot>
          {/* #endif */}
        </View>
        <View class="ant-empty-text-sub">
          {/* #if WECHAT */}
          {message ? (
            <Block>{message}</Block>
          ) : (
            <Block>
              <Slot name="message">{message}</Slot>
            </Block>
          )}
          {/* #endif */}

          {/* #if ALIPAY */}
          <Slot name="message">{message}</Slot>
          {/* #endif */}
        </View>
      </View>
      <View class="ant-empty-extra">
        <Slot name="extra"></Slot>
      </View>
    </View>
  </View>
);
