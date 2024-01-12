import { TSXMLProps, Component, View, Slot, InternalData } from 'tsxml';
import FormItem from '../FormItem/index.axml';
import DatePicker from '../../DatePicker/index.axml';
import Icon from '../../Icon/index.axml';
import arrowUtil from '../../_util/arrow.sjs';
import { FormDatePickerProps } from './props'; // Assuming that './props' is the correct path for importing FormDatePickerProps

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
    min,
    max,
    format,
    precision,
    cancelText,
    okText,
    placeholder,
    animationType,
    maskClosable,
    maskStyle,
    popClassName,
    style,
    popStyle,
    disabled,
    title,
    maskClassName,
    indicatorStyle,
    indicatorClassName,
    extra,
  }: TSXMLProps<FormDatePickerProps>,
  { arrow, formData, item, handleFormatLabel, handleFormat }: InternalData
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
        <DatePicker
          min={min}
          max={max}
          format={format}
          precision={precision}
          cancelText={cancelText}
          okText={okText}
          placeholder={placeholder}
          animationType={animationType}
          maskClosable={maskClosable}
          maskStyle={maskStyle}
          popClassName={popClassName}
          style={style}
          popStyle={popStyle}
          disabled={disabled}
          title={title}
          maskClassName={maskClassName}
          indicatorStyle={indicatorStyle}
          indicatorClassName={indicatorClassName}
          value={formData.value}
          onOk="onOk"
          onPickerChange="onPickerChange"
          onCancel="onDismissPicker"
          onVisibleChange="onVisibleChange"
          onFormatLabel={
            handleFormatLabel ? handleFormatLabel : 'handleFormatLabel'
          }
          onFormat={handleFormat ? handleFormat : 'handleFormat'}
        >
          <Slot name="content" slot="content" />
          <Slot name="title" slot="title" />
          {arrowUtil.getArrow(arrow) && (
            <Icon
              className="ant-form-date-picker-arrow"
              type={arrowUtil.getArrow(arrow)}
              slot="suffix"
            />
          )}
        </DatePicker>
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
