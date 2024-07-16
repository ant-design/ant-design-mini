import { View, Slot, InternalData, Component } from 'tsxml';
import { TSXMLProps } from 'tsxml';
import { FormRadioGroupProps } from './props';
import FormItem from '../FormItem/index.axml';
import AntRadioGroup from '../../Radio/RadioGroup/index.axml';

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
    radioPosition,
    extra,
  }: TSXMLProps<FormRadioGroupProps>,
  { formData }: InternalData
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
        <AntRadioGroup
          options={options}
          value={formData.value}
          onChange="onChange"
          color={color}
          disabled={disabled}
          position={radioPosition}
        >
          <Slot
            name="radioLabel"
            slot="label"
            slot-scope="props"
            value="{{props.value}}"
            index="{{props.index}}"
          />
        </AntRadioGroup>
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
        <Slot name="header" errors="{{item.errors}}" status="{{item.status}}" />
      </View>

      <View slot="footer" slot-scope="item">
        <Slot name="footer" errors="{{item.errors}}" status="{{item.status}}" />
      </View>
    </FormItem>
  </Component>
);
