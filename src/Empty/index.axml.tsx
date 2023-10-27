import { View, Image, Slot, TSXMLProps } from 'tsxml';
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
        <Slot name="image">
          <Image
            class="ant-empty-image-element"
            src={
              image ||
              'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*0AaRRrYlVDkAAAAAAAAAAAAAARQnAQ'
            }
          />
        </Slot>
      </View>
      <View class="ant-empty-text">
        <View class="ant-empty-text-main">
          <Slot name="title">{title}</Slot>
        </View>
        <View class="ant-empty-text-sub">
          <Slot name="message">{message}</Slot>
        </View>
      </View>
      <View class="ant-empty-extra">
        <Slot name="extra"></Slot>
      </View>
    </View>
  </View>
);
