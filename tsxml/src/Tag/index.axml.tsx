import { View, Slot, TSXMLProps } from 'tsxml';
import Icon from '../Icon/index.axml';
import { ITagProps } from './props';

export default ({ type = 'fill', color = 'primary', className, style, icon }: TSXMLProps<ITagProps>) => (
  <View class={`ant-tag ant-tag-${type} ant-tag-${color} ${className || ''}`} style={style || ''}>
    {
      icon && <View class="ant-tag-icon-container">
        {/* #if ALIPAY */}
        <Slot name="icon">
          <Icon type={icon} />
        </Slot>
        {/* #endif */}
        {/* #if WECHAT */}
        <Icon className="icon" type={icon} />
        {/* #endif */}
      </View>
    }
    <View class="ant-tag-content">
      <Slot />
    </View>
  </View>
);
