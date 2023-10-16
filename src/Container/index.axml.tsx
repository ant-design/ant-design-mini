import { View, Slot } from 'tsxml';
import { IContainerProps } from './props';

export default ({ style, headerInBox, className, title }: IContainerProps) => (
  <View
    class={`ant-container ${
      headerInBox ? 'ant-container-headerInBox' : 'ant-container-headerNotInBox'
    } ${className ? className : ''}`}
    style={style}
  >
    <View class="ant-container-header">
      <View class="ant-container-header-title">
        {/* #if WECHAT*/}
        <View class="title-slot">
          <Slot name="title"></Slot>
        </View>
        <View class="title-slot-default">{title}</View>
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
