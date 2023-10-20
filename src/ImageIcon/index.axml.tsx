import { View, Image } from 'tsxml';
import helper from './index.sjs';
import Icon from '../Icon/index.axml';
import { ImageIconProps } from './props';

export default ({ image, className, style }: ImageIconProps) => (
  <View class={`ant-imageIcon ${className ? className : ''}`}>
    {helper.isIcon(image) ? (
      <Icon
        type={image}
        className={`${className ? className + '-icon' : ''}`}
        style={style}
      />
    ) : (
      <Image
        src={image}
        class={`${className ? className + '-image' : ''}`}
        style={style || ''}
        mode="aspectFit"
      />
    )}
  </View>
);
