import { View, Page, Slot } from 'tsxml';
import FormItem from '../../../../src/Form/FormItem/index.axml';
import Checklist from '../../../../src/Checklist/index.axml';
import Icon from '../../../../src/Icon/index.axml';
import Popup from '../../../../src/Popup/index.axml';
import utils from './index.sjs';

export default ({
  className,
  position,
  label,
  formData,
  tooltip,
  requiredMark,
  validateStatus,
  help,
  visible,
  options,
  extra,
  name,
  required,
  message,
  ref,
}: any) => (
  <Page>
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
        <View class="input-items">
          {formData.value.map((item) => (
            <View class="input-item">{utils.getTitle(options, item)}</View>
          ))}
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

    <Popup
      visible={visible}
      height={250}
      width={250}
      position="right"
      onClose="handlePopupClose"
    >
      <View style="padding: 12px">
        <Checklist
          options={options}
          multiple
          value={formData.value}
          onChange="onChange"
        />
      </View>
    </Popup>
  </Page>
);
