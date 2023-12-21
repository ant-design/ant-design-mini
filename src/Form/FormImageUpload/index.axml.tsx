import { TSXMLProps, Component, View, Slot, InternalData } from 'tsxml';
import FormItem from '../FormItem/index.axml';
import ImageUpload from '../../ImageUpload/index.axml';
import { FormImageUploadProps } from './props'; // Assuming the TSX file lives in the same directory as the 'props' file.

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
    maxCount,
    imageMode,
    sourceType,
    extra,
  }: TSXMLProps<FormImageUploadProps>,
  { formData, item }: InternalData
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
      <ImageUpload
        fileList={formData.value}
        maxCount={maxCount}
        imageMode={imageMode}
        sourceType={sourceType}
        onChange="onChange"
        onUpload="onUpload"
        onRemove="onRemove"
        onPreview="onPreview"
        onBeforeUpload="onBeforeUpload"
        onChooseImageError="onChooseImageError"
      />
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
