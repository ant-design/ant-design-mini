import { Component, InternalData, TSXMLProps, View } from 'tsxml';
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
  { item, formData, extra }: InternalData
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
          onFormat="onFormat"
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
        <slot name="extra">{extra}</slot>
      </View>

      <View slot="header" slot-scope="item">
        <slot name="header" errors={item.errors} status={item.status}></slot>
      </View>

      <View slot="footer" slot-scope="item">
        <slot name="footer" errors={item.errors} status={item.status}></slot>
      </View>
    </FormItem>
  </Component>
);
