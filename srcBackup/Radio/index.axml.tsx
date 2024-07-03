import {
  Component,
  View,
  Slot,
  TSXMLProps,
  InternalData,
  Label,
  Radio,
} from 'tsxml';
import { IRadioProps } from './props';
import componentUtils from './index.sjs';
import AntIcon from '../Icon/index.axml';

export default (
  { className, style, disabled, value, color }: TSXMLProps<IRadioProps>,
  { mixin }: InternalData
) => (
  <Component>
    <Label
      class={`ant-radio-item ${className || ''}`}
      style={style}
      /// #if WECHAT
      onTap="handleTap"
      /// #endif
    >
      <View class="ant-radio-item-container">
        <View class="ant-radio-item-wrap">
          <Radio
            value={value}
            class="ant-radio-item-base"
            /// #if ALIPAY
            onChange="onChange"
            /// #endif
            checked={mixin.value}
            disabled={disabled}
          />
          <View class="ant-radio-item-fake">
            <View
              class={`ant-radio-item-fake-${componentUtils.getClassName(
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
                  className={`ant-radio-item-fake-${componentUtils.getClassName(
                    mixin.value,
                    disabled
                  )}-icon`}
                />
              )}
            </View>
          </View>
        </View>
        <View
          class={`ant-radio-item-content ${
            disabled ? 'ant-radio-item-disabled' : ''
          }`}
        >
          <Slot />
        </View>
      </View>
    </Label>
  </Component>
);
