import { InternalData, Slot, TSXMLProps } from 'tsxml';
import { IDatePickerProps } from './props';
import Picker from '../Picker/index.axml';

export default (
  {
    style,
    popStyle,
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
    popClassName,
  }: TSXMLProps<IDatePickerProps>,
  { columns, currentValue }: InternalData
) => (
  <Picker
    className="ant-date-picker"
    popClassName={`ant-date-picker-popup ${popClassName || ''}`}
    style={style}
    popStyle={popStyle}
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
    onFormat="onFormat"
  >
    <Slot name="content" slot="content" />
    <Slot name="title" slot="title" />
    <Slot name="prefix" slot="prefix" />
    <Slot name="suffix" slot="suffix" />
  </Picker>
);
