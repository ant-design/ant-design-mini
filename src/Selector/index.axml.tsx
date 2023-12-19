import { View, InternalData, TSXMLProps } from 'tsxml';
import { ISelectorProps } from './props';
import util from './index.sjs';

export default (
  {
    activeItemClassName,
    activeItemStyle,
    className,
    disabled,
    multiple,
    options,
    style,
  }: TSXMLProps<ISelectorProps>,
  { mixin }: InternalData
) => (
  <View
    class={`ant-selector ${className ? className : ''} ${
      disabled ? 'ant-selector-disabled' : ''
    }`}
    style={style}
  >
    <View class="ant-selector-content-container">
      {options.map((item) => (
        <View
          class={`ant-selector-content ${
            options.length <= 2 ? 'ant-selector-content-item2' : ''
          }`}
        >
          <View
            class={`ant-selector-item ${
              item.disabled ? 'ant-selector-item-disabled' : ''
            } ${
              util.getChecked(item.value, mixin.value, multiple)
                ? 'ant-selector-item-active ' + (activeItemClassName || '')
                : ''
            }`}
            style={
              util.getChecked(item.value, mixin.value, multiple)
                ? activeItemStyle || ''
                : ''
            }
            data-value={item.value}
            data-disabled={item.disabled}
            onTap="onChange"
          >
            {item.text && (
              <View class="ant-selector-item-text">{item.text}</View>
            )}
            {item.subText && (
              <View class="ant-selector-item-subtext">{item.subText}</View>
            )}
            {util.getChecked(item.value, mixin.value, multiple) && (
              <View class="ant-selector-item-badge-active"></View>
            )}
          </View>
        </View>
      ))}
    </View>
  </View>
);
