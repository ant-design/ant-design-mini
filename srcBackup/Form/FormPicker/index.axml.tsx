import { Component, View, Slot, TSXMLProps, InternalData } from 'tsxml';
import { FormPickerProps } from './props';
import FormItem from '../FormItem/index.axml';
import AntPicker from '../../Picker/index.axml';
import AntIcon from '../../Icon/index.axml';
import arrowUtil from '../../_util/arrow.sjs';

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
    cancelText,
    okText,
    placeholder,
    maskClosable,
    maskStyle,
    popClassName,
    style,
    popStyle,
    animationType,
    disabled,
    title,
    maskClassName,
    indicatorStyle,
    indicatorClassName,
    options,
    arrow,
    extra,
  }: TSXMLProps<FormPickerProps>,
  { formData, item, handleFormat }: InternalData
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
      <View>
        <AntPicker
          cancelText={cancelText}
          okText={okText}
          placeholder={placeholder}
          maskClosable={maskClosable}
          maskStyle={maskStyle}
          popClassName={popClassName}
          style={style}
          popStyle={popStyle}
          animationType={animationType}
          disabled={disabled}
          title={title}
          maskClassName={maskClassName}
          indicatorStyle={indicatorStyle}
          indicatorClassName={indicatorClassName}
          options={options}
          value={formData.value}
          onOk="onOk"
          onChange="onChange"
          onCancel="onDismissPicker"
          onVisibleChange="onVisibleChange"
          onFormat={handleFormat ? handleFormat : 'handleFormat'}
        >
          <Slot name="title" slot="title" />
          <Slot name="content" slot="content" />
          {arrowUtil.getArrow(arrow) && (
            <AntIcon
              className="ant-form-picker-arrow"
              type={arrowUtil.getArrow(arrow)}
              slot="suffix"
            />
          )}
        </AntPicker>
      </View>
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
