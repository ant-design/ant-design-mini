import { TSXMLProps, View, Block, InternalData } from 'tsxml';
import { ISwitchProps } from './props';
import AntIcon from '../../src/Icon/index.axml';

export default (
  {
    className,
    size,
    disabled,
    loading,
    color,
    style,
    checkedText,
    uncheckedText,
  }: TSXMLProps<ISwitchProps>,
  { mixin }: InternalData
) => (
  <View
    class={`ant-switch ${className ? className : ''} ant-switch-${size} ${
      mixin.value ? 'ant-switch-checked' : ''
    } ${disabled ? 'ant-switch-disabled' : ''} ${
      loading ? 'ant-switch-loading' : ''
    }`}
    style={`${
      mixin.value && color
        ? 'background:' + color + '; border-color:' + color
        : ''
    };${style || ''}`}
    onTap="onChange"
  >
    <View class="ant-switch-handle">
      {loading && (
        <AntIcon type="UndoOutline" className="ant-switch-loading-icon" />
      )}
    </View>
    <View class="ant-switch-inner">
      {mixin.value ? (
        <Block>
          {/* #if ALIPAY */}
          <slot name="checkedText">{checkedText}</slot>
          {/* #endif */}
          {/* #if WECHAT */}
          {checkedText}
          {/* #endif */}
        </Block>
      ) : (
        <Block>
          {/* #if ALIPAY */}
          <slot name="uncheckedText">{uncheckedText}</slot>
          {/* #endif */}
          {/* #if WECHAT */}
          {uncheckedText}
          {/* #endif */}
        </Block>
      )}
    </View>
  </View>
);
