import { TSXMLProps, Slot, InternalData, Component } from 'tsxml';
import { ICascaderProps } from './props'; // 假设原始的 props 文件路径是 './props'
import AntPicker from '../index.axml'; // 从 index.json 知道 picker 组件路径是 '../index'

export default (
  {
    className,
    style,
    animationType,
    popClassName,
    popStyle,
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
  }: TSXMLProps<ICascaderProps>,
  { columns, currentValue, formattedValueText }: InternalData
) => (
  <Component>
    <AntPicker
      className={`ant-cascader-picker ${className || ''}`}
      style={style}
      animationType={animationType}
      popClassName={`ant-cascader-picker-popup ${popClassName || ''}`}
      popStyle={popStyle}
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
      formattedValueText={formattedValueText}
      onVisibleChange="onVisibleChange"
      maskClosable={maskClosable}
    >
      <Slot name="content" slot="content" />
      <Slot name="title" slot="title" />
      <Slot name="prefix" slot="prefix" />
      <Slot name="suffix" slot="suffix" />
    </AntPicker>
  </Component>
);
