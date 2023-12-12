import { TSXMLProps, View, Template, Slot, InternalData } from 'tsxml';
import Icon from '../../Icon/index.axml';
import Picker from '../../Picker/index.axml';
import { IDateRangePickerProps } from './props';

export default (
  {
    className,
    popClassName,
    style,
    animationType,

    disabled,
    title,
    placeholder,
    okText,
    cancelText,
    maskStyle,
    maskClassName,
    indicatorStyle,
    indicatorClassName,

    maskClosable,
    onFormat,
    startPlaceholder,
    endPlaceholder,
    splitCharacter,
    precision,
  }: TSXMLProps<IDateRangePickerProps>,
  {
    realValue,
    columns,
    currentValue,
    currentStartDate,
    currentEndDate,
    active,
    type,
    value,
    pickerType,
    currentEndValueStr,
    currentStartValueStr,
  }: InternalData
) => (
  <Component>
    <Template name="selector">
      <View
        class={`ant-range-picker-selector-item ${
          active ? 'ant-range-picker-selector-item-active' : ''
        }`}
        onTap="onChangeCurrentPickerType"
        data-type={type}
      >
        {value ? (
          <View class="ant-range-picker-selector-item-value">{value}</View>
        ) : (
          <View class="ant-range-picker-selector-item-placeholder">
            {placeholder}
          </View>
        )}
        {(precision === 'year' ||
          precision === 'month' ||
          precision === 'day' ||
          precision === 'hour') && (
          <Icon
            type="CalendarOutline"
            className="ant-range-picker-selector-item-icon"
          />
        )}
      </View>
    </Template>
    <Picker
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      realValue={realValue}
      className={`ant-range-picker ${className || ''}`}
      popClassName={`${
        !currentStartDate || !currentEndDate
          ? 'ant-range-picker-confirm-disabled'
          : ''
      } ${popClassName || ''}`}
      style={style}
      animationType={animationType}
      options={columns}
      value={currentValue}
      disabled={disabled}
      title={title}
      placeholder={placeholder}
      okText={okText}
      cancelText={cancelText}
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      indicatorStyle={indicatorStyle}
      indicatorClassName={indicatorClassName}
      onChange="onChange"
      onCancel="onCancel"
      onOk="onOk"
      onVisibleChange="onVisibleChange"
      maskClosable={maskClosable}
      onFormat={onFormat}
    >
      <View class="ant-range-picker-selector" slot="content-header">
        <Template
          is="selector"
          data={{
            placeholder: startPlaceholder,
            active: pickerType === 'start',
            type: 'start',
            value: currentStartValueStr,
            precision: precision,
          }}
        />
        <View class="ant-range-picker-selector-split">{splitCharacter}</View>
        <Template
          is="selector"
          data={{
            placeholder: endPlaceholder,
            active: pickerType === 'end',
            type: 'end',
            value: currentEndValueStr,
            precision: precision,
          }}
        />
      </View>
      <Slot name="content" slot="content" />
      <Slot name="title" slot="title" />
      <Slot name="prefix" slot="prefix" />
      <Slot name="suffix" slot="suffix" />
    </Picker>
  </Component>
);
