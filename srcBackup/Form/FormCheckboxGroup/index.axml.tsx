import { FormCheckboxGroupProps, FormCheckboxGroupDefaultProps } from './props';
import FormItem from '../FormItem/index.axml';
import CheckboxGroup from '../../Checkbox/CheckboxGroup/index.axml';
import { InternalData, View, Slot, TSXMLProps, Component } from 'tsxml';

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
    color,
    disabled,
    checkboxPosition = FormCheckboxGroupDefaultProps.checkboxPosition,
    extra,
  }: TSXMLProps<FormCheckboxGroupProps>,
  { formData, props, item }: InternalData
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
        <CheckboxGroup
          options={options}
          value={formData.value}
          onChange="onChange"
          color={color}
          disabled={disabled}
          position={checkboxPosition}
        >
          <Slot
            name="checkboxLabel"
            slot="label"
            slot-scope="props"
            value={props.value}
            index={props.index}
          />
        </CheckboxGroup>
      </View>
      {!tooltip && (
        <View slot="tooltip">
          <Slot name="tooltip" />
        </View>
      )}
      <View slot="extra">
        <Slot name="extra">{extra}</Slot>
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
