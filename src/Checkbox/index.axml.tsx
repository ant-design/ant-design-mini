import { View, Label, Checkbox, Slot, TSXMLProps, CheckboxGroup } from 'tsxml';
import { ICheckboxProps } from './props';
import componentUtils from './index.sjs';
import AntIcon from '../Icon/index.axml';

export default (
  { className, style, disabled, color, value }: TSXMLProps<ICheckboxProps>,
  { mixin }
) => (
  <Label class={`ant-checkbox-item ${className || ''}`} style={style || ''}>
    <View class="ant-checkbox-item-container">
      <View class="ant-checkbox-item-wrap">
        {/* #if WECHAT */}
        <CheckboxGroup onChange="onChange">
          <Checkbox
            class="ant-checkbox-item-base"
            value={value}
            checked={mixin.value}
            disabled={disabled}
          />
        </CheckboxGroup>
        {/* #endif */}
        {/* #if ALIPAY */}
        <Checkbox
          class="ant-checkbox-item-base"
          value={value}
          onChange="onChange"
          checked={mixin.value}
          disabled={disabled}
        />
        {/* #endif */}
        <View class="ant-checkbox-item-fake">
          <View
            class={`ant-checkbox-item-fake-${componentUtils.getClassName(
              mixin.value,
              disabled
            )}`}
            style={
              mixin.value && !disabled && color ? 'background:' + color : ''
            }
          >
            {mixin.value && (
              <AntIcon
                type="CheckOutline"
                className={`ant-checkbox-item-fake-${componentUtils.getClassName(
                  mixin.value,
                  disabled
                )}-icon`}
              />
            )}
          </View>
        </View>
      </View>
      <View
        class={`ant-checkbox-item-content ${
          disabled ? 'ant-checkbox-item-disabled' : ''
        }`}
      >
        <Slot></Slot>
      </View>
    </View>
  </Label>
);
