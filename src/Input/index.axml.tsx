import { View, Input, TSXMLProps, Slot, InternalData } from 'tsxml';
import { InputProps } from './props';
import Icon from '../../src/Icon/index.axml';
import utils from './index.sjs';

export default (
  {
    className,
    controlled,
    defaultValue,
    style,
    enableNative,
    password,
    placeholder,
    placeholderClassName,
    placeholderStyle,
    maxLength,
    confirmType,
    confirmHold,
    alwaysSystem,
    cursor,
    selectionStart,
    selectionEnd,
    allowClear,
    randomNumber,
    type,
    focusStyle,
    name,
    focus,
    focusClassName,
    disabled,
    prefix,
    suffix,
    cursorSpacing,
    alwaysEmbed,
    cursorColor,
    adjustPosition,
    holdKeyboard,
    value,
  }: TSXMLProps<InputProps>, {
    selfFocus,
    _value,
    _valueModified,
  }: InternalData) => (
  <View
    class={`ant-input ${disabled ? 'ant-input-disabled' : ''} ${
      className ? className : ''
    } ${selfFocus ? (focusClassName ? focusClassName : '') : ''}`}
    style={`${style || ''};${focusStyle || ''}`}
  >
    <View class="ant-input-prefix">
      <Slot name="prefix">{prefix}</Slot>
    </View>
    <View class="ant-input-line">
      <Input
        enableNative={enableNative}
        name={name}
        class="ant-input-content"
        disabled={disabled}
        value={utils.getValue(controlled, value, defaultValue, _value, _valueModified)}
        type={type}
        /// #if WECHAT
        cursor-spacing={cursorSpacing}
        always-embed={alwaysEmbed}
        cursor-color={cursorColor}
        adjust-position={adjustPosition}
        hold-keyboard={holdKeyboard}
        /// #endif
        password={password}
        placeholder={placeholder}
        placeholder-class={`ant-input-placeholder ${
          placeholderClassName ? placeholderClassName : ''
        }`}
        placeholder-style={placeholderStyle ? placeholderStyle : ''}
        maxlength={maxLength}
        focus={focus}
        confirm-type={confirmType}
        confirm-hold={confirmHold}
        always-system={alwaysSystem}
        controlled={utils.isControlled(controlled, value)}
        cursor={cursor}
        selection-start={selectionStart}
        selection-end={selectionEnd}
        random-number={randomNumber}
        onInput="onChange"
        onConfirm="onConfirm"
        onFocus="onFocus"
        onBlur="onBlur"
      />
      {allowClear && (
        <View
          // prettier-ignore
          class={`ant-input-clear ${utils.getValue(controlled, value, defaultValue, _value, _valueModified)
              ? 'ant-input-clear-show'
              : 'ant-input-clear-hidden'}`}
          onTap="onClear"
        >
          <Icon className="ant-input-clear-icon" type="CloseCircleFill"></Icon>
        </View>
      )}
    </View>
    <View class="ant-input-suffix">
      <Slot name="suffix">{suffix}</Slot>
    </View>
  </View>
);
