import { Image, TSXMLProps, View } from 'tsxml';
import utils from './index.sjs';
import { IAvatarProps } from './props';

export default ({ className, style, size, src }: TSXMLProps<IAvatarProps>) => (
  <View class={`ant-avatar ${className ? className : ''}`} style={style}>
    {(
      <Image class={`ant-avatar-image ${utils.getClass(size)}`} src={src || utils.defaultSrc} />
    )}
  </View>
);
