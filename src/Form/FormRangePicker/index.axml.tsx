import { View, Slot, TSXMLProps, InternalData, Component } from 'tsxml';
import FormItem from '../FormItem/index.axml';
import AntRangePicker from '../../DatePicker/RangePicker/index.axml';
import AntIcon from '../../Icon/index.axml';
import { FormRangePickerProps } from './props';
import arrowUtil from '../../_util/arrow.sjs';

export default (
  {
    className,
    position,
    label,
    labelWidth,
    tooltip,
    requiredMark,
    style,
    endPlaceholder,
    startPlaceholder,
    splitCharacter,
    min,
    max,
    format,
    precision,
    animationType,
    cancelText,
    okText,
    placeholder,
    maskClosable,
    maskStyle,
    popClassName,
    popStyle,
    disabled,
    title,
    maskClassName,
    indicatorStyle,
    indicatorClassName,
    extra,
    arrow,
    validateStatus,
    help,
  }: TSXMLProps<FormRangePickerProps>,
  { formData, item, handleFormatLabel, handleFormat }: InternalData
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
        <AntRangePicker
          endPlaceholder={endPlaceholder}
          startPlaceholder={startPlaceholder}
          splitCharacter={splitCharacter}
          min={min}
          max={max}
          format={format}
          precision={precision}
          animationType={animationType}
          cancelText={cancelText}
          okText={okText}
          placeholder={placeholder}
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
            <AntIcon
              className="ant-form-range-picker-arrow"
              type={arrowUtil.getArrow(arrow)}
              slot="suffix"
            />
          )}
        </AntRangePicker>
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
