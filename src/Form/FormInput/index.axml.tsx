import { Component, InternalData, Slot, TSXMLProps, View } from 'tsxml';
import AntInput from '../../Input/index.axml';
import FormItem from '../FormItem/index.axml';
import { FormInputProps } from './props'; // assuming the props file is in the same directory

export default (
  {
    className,
    position,
    label,
    labelWidth,
    tooltip,
    requiredMark,
    validateStatus,
    help,
    inputClassName,
    style: inputStyle,
    disabled,
    type,
    password,
    placeholder,
    alwaysSystem,
    placeholderClassName,
    placeholderStyle,
    maxLength,
    confirmType,
    confirmHold,
    cursor,
    selectionStart,
    selectionEnd,
    randomNumber,
    allowClear,
    enableNative,
  }: TSXMLProps<FormInputProps>,
  { extra, formData, item }: InternalData
) => (
  <Component>
    <FormItem
      className={className}
      position={position}
      label={label}
      labelWidth={labelWidth}
      status={formData.status}
      errors={formData.errors}
      tooltip={tooltip}
      required={formData.required}
      requiredMark={requiredMark}
      validateStatus={validateStatus}
      help={help}
    >
      <AntInput
        ref="handleRef"
        allowClear={allowClear}
        enableNative={enableNative}
        className={inputClassName}
        style={inputStyle}
        disabled={disabled}
        type={type}
        password={password}
        placeholder={placeholder}
        alwaysSystem={alwaysSystem}
        placeholderClassName={placeholderClassName}
        placeholderStyle={placeholderStyle}
        maxLength={maxLength}
        confirmType={confirmType}
        confirmHold={confirmHold}
        cursor={cursor}
        selectionStart={selectionStart}
        selectionEnd={selectionEnd}
        randomNumber={randomNumber}
        onChange="onChange"
        onBlur="onBlur"
        onFocus="onFocus"
        onConfirm="onConfirm"
      >
        <Slot slot="prefix" name="prefix" />
        <Slot slot="suffix" name="suffix" />
      </AntInput>
      <View slot="extra">
        {/* #if ALIPAY */}
        <Slot name="extra">
          {/* #endif */}
          {extra}
          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
      </View>
      <View slot="header" slot-scope="item">
        <Slot name="header" errors={item.errors} status={item.status} />
      </View>
      <View slot="footer" slot-scope="item">
        <Slot name="footer" errors={item.errors} status={item.status} />
      </View>
    </FormItem>
  </Component>
);
