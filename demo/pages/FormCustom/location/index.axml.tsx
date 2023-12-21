import { Component, View, Slot } from 'tsxml';
import FormItem from '../../../../src/Form/FormItem/index.axml';
import Icon from '../../../../src/Icon/index.axml';

export default ({
  className,
  position,
  label,
  formData,
  tooltip,
  requiredMark,
  validateStatus,
  help,
  extra,
  name,
  required,
  message,
  ref,
}: any) => (
  <Component>
    <FormItem
      className={className}
      position={position}
      label={label}
      status={formData.status}
      errors={formData.errors}
      tooltip={tooltip}
      required={formData.required}
      requiredMark={requiredMark}
      validateStatus={validateStatus}
      help={help}
    >
      <View class="input" onTap="showPopup">
        <View class="input-location">
          {formData.value && <View>{formData.value.name}</View>}
          {formData.value && <View>{formData.value.address}</View>}
        </View>

        <View class="choose">
          请选择
          <Icon type="RightOutline" />
        </View>
      </View>
      <View slot="extra">
        {/* #if ALIPAY */}
        <Slot name="extra">
          {/* #endif */}
          {extra}
          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
      </View>
    </FormItem>
  </Component>
);
