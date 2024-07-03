import { View, Slot, Text, TSXMLProps } from 'tsxml';
import { IContainerProps } from './props';

export default ({
  style,
  headerInBox,
  className,
  title,
}: TSXMLProps<IContainerProps>) => (
  <View
    class={`ant-container ${
      headerInBox ? 'ant-container-headerInBox' : 'ant-container-headerNotInBox'
    } ${className ? className : ''}`}
    style={style}
  >
    <View class="ant-container-header">
      <View class="ant-container-header-title">
        {/* #if WECHAT*/}
        {title ? <Text>{title}</Text> : <Slot name="title"></Slot>}
        {/* #endif */}
        {/* #if ALIPAY */}
        <Slot name="title">{title}</Slot>
        {/* #endif */}
      </View>
      <View class="ant-container-header-right">
        <Slot name="headerRight" />
      </View>
    </View>
    <View class="ant-container-content">
      <Slot />
    </View>
  </View>
);
