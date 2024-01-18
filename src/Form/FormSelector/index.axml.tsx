import { View, Slot, TSXMLProps, InternalData, Component } from 'tsxml';
import { FormSelectorProps } from './props';
import FormItem from '../FormItem/index.axml';
import Selector from '../../Selector/index.axml';

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
    options,
    multiple,
    disabled,
    minSelectedCount,
    maxSelectedCount,
    activeItemClassName,
    activeItemStyle,
  }: TSXMLProps<FormSelectorProps>,
  { formData, extra, item }: InternalData
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
        <Selector
          value={formData.value}
          options={options}
          multiple={multiple}
          disabled={disabled}
          minSelectedCount={minSelectedCount}
          maxSelectedCount={maxSelectedCount}
          activeItemClassName={activeItemClassName}
          activeItemStyle={activeItemStyle}
          onSelectMax="onSelectMax"
          onSelectMin="onSelectMin"
          onChange="onChange"
        />
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
