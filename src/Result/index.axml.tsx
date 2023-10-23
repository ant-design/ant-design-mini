import { IResultProps } from './props';
import { View, Slot, Text, Block, TSXMLProps } from 'tsxml';
import result from './index.sjs';
import Icon from '../Icon/index.axml';
import ImageIcon from '../ImageIcon/index.axml';

export default ({
  className,
  style,
  type,
  image,
  title,
  message,
}: TSXMLProps<IResultProps>) => (
  <View class={`ant-result ${className ? className : ''}`} style={style || ''}>
    <View class="ant-result-main">
      <Slot name="image">
        {type ? (
          <View class="ant-result-image">
            <Icon
              type={result.iconType(type)}
              className={`ant-result-image-${type}`}
              style="font-size: 64px"
            />
          </View>
        ) : image ? (
          <ImageIcon className="ant-result-image" image={image} />
        ) : (
          <Block></Block>
        )}
      </Slot>
      <View class="ant-result-title">
        <Slot name="title">{title}</Slot>
      </View>
      <View class="ant-result-message">
        <Slot name="message">
          <Text>{message}</Text>
        </Slot>
      </View>
    </View>
    <Slot name="extra"></Slot>
  </View>
);
