import { Component, View, Slot, InternalData, TSXMLProps } from 'tsxml';
import FormItem from '../FormItem/index.axml';
import AntTextarea from '../../Input/Textarea/index.axml';
import { FormTextareaProps } from './props';

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
    allowClear,
    enableNative,
    disabled,
    placeholder,
    placeholderClassName,
    placeholderStyle,
    maxLength,
    autoHeight,
    showCount,
    extra,
  }: TSXMLProps<FormTextareaProps>,
  { formData, item }: InternalData
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
      <AntTextarea
        ref="handleRef"
        allowClear={allowClear}
        enableNative={enableNative}
        disabled={disabled}
        placeholder={placeholder}
        placeholderClassName={placeholderClassName}
        placeholderStyle={placeholderStyle}
        maxLength={maxLength}
        autoHeight={autoHeight}
        showCount={showCount}
        onChange="onChange"
        onBlur="onBlur"
        onFocus="onFocus"
        onConfirm="onConfirm"
      />
      {!tooltip && (
        <View slot="tooltip">
          <Slot name="tooltip" />
        </View>
      )}
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
