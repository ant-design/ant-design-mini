import { Component, InternalData, Slot, TSXMLProps, View } from 'tsxml';
import { FormCascaderPickerProps } from './props';
import arrowUtil from '../../_util/arrow.sjs';
import FormItem from '../FormItem/index.axml';
import CascaderPicker from '../../Picker/CascaderPicker/index.axml';
import Icon from '../../Icon/index.axml';

export default (
  {
    className,
    position,
    label,
    labelWidth,

    requiredMark,
    validateStatus,
    help,
    options,
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
    arrow,
    tooltip,
  }: TSXMLProps<FormCascaderPickerProps>,
  { item, formData, extra, handleFormat }: InternalData
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
        <CascaderPicker
          options={options}
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
          onChange="onChange"
          onCancel="onDismissPicker"
          onVisibleChange="onVisibleChange"
          onFormat={handleFormat ? handleFormat : 'handleFormat'}
        >
          <slot name="content" slot="content"></slot>
          <slot name="title" slot="title"></slot>

          {arrowUtil.getArrow(arrow) && (
            <Icon
              className="ant-form-cascader-picker-arrow"
              type={arrowUtil.getArrow(arrow)}
              slot="suffix"
            />
          )}
        </CascaderPicker>
      </View>

      <View slot="extra">
        <Slot name="extra">{extra}</Slot>
      </View>

      <View slot="header" slot-scope="item">
        <Slot name="header" errors={item.errors} status={item.status}></Slot>
      </View>

      <View slot="footer" slot-scope="item">
        <Slot name="footer" errors={item.errors} status={item.status}></Slot>
      </View>
    </FormItem>
  </Component>
);
