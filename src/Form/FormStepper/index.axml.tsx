import { Component, Slot, TSXMLProps, InternalData, View } from 'tsxml';
import FormItem from '../FormItem/index.axml';
import Stepper from '../../Stepper/index.axml';
import { FormStepperProps } from './props';

export default (
  {
    className,
    style,
    position,
    label,
    labelWidth,
    tooltip,
    requiredMark,
    validateStatus,
    help,
    stepperClassName,
    stepperStyle,
    min,
    max,
    type,
    disabled,
    focus,
    inputClassName,
    inputStyle,
    precision,
    extra,
  }: TSXMLProps<FormStepperProps>,
  { formData, item }: InternalData
) => (
  <Component>
    <FormItem
      className={className}
      style={style}
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
      <View>
        <Stepper
          value={formData.value}
          onChange="onChange"
          className={stepperClassName}
          style={stepperStyle}
          min={min}
          max={max}
          type={type}
          disabled={disabled}
          focus={focus}
          inputClassName={inputClassName}
          inputStyle={inputStyle}
          precision={precision}
          onBlur="onBlur"
          onConfirm="onConfirm"
          onFocus="onFocus"
        />
      </View>
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
