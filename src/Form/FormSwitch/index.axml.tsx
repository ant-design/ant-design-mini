// 首先，根据 json 的内容对组件进行导入。
import FormItem from '../FormItem/index.axml';
import Switch from '../../Switch/index.axml';

// 导入 props 接口。
import { FormSwitchProps } from './props';
import { InternalData, TSXMLProps } from 'tsxml';
import { View, Slot } from 'tsxml';

// 根据转换规则书写 TSX 组件。
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
    switchClassName,
    checkedText,
    color,
    disabled,
    uncheckedText,
    size,
    switchStyle,
    extra,
  }: TSXMLProps<FormSwitchProps>,
  { formData }: InternalData
) => (
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
      <Switch
        className={switchClassName}
        checked={formData.value}
        checkedText={checkedText}
        color={color}
        disabled={disabled}
        uncheckedText={uncheckedText}
        size={size}
        style={switchStyle}
        onChange="onChange"
      />
    </View>

    {!tooltip && (
      <View slot="tooltip">
        <Slot name="tooltip" />
      </View>
    )}

    <View slot="extra">
      <Slot name="extra">{extra}</Slot>
    </View>

    <View slot="header">
      <Slot name="header" />
    </View>

    <View slot="footer">
      <Slot name="footer" />
    </View>
  </FormItem>
);
