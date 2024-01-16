import Icon from '../Icon/index.axml';
import Loading from '../Loading/index.axml';
import { View, Slot, InternalData, TSXMLProps, Image } from 'tsxml';
import { IUploaderProps } from './props';

export default (
  { className, style, imageMode, maxCount }: TSXMLProps<IUploaderProps>,
  { mixin }: InternalData
) => (
  <View class={`ant-image-upload ${className || ''}`} style={style || ''}>
    {/* #if ALIPAY */}
    <Slot fileList={mixin.value}>
      {/* #endif */}
      {mixin.value.map((item) => (
        <View key={item.uid} class="ant-image-upload-show">
          <View data-uid={item.uid} onTap="onRemove">
            {/* #if ALIPAY */}
            <Slot name="removeButton">
              {/* #endif */}
              <View class="ant-image-upload-close" />
              {/* #if ALIPAY */}
            </Slot>
            {/* #endif */}
          </View>
          {/* #if ALIPAY */}
          <Slot name="image" value={item}>
            {/* #endif */}
            {(item.status === 'uploading' || item.status === 'error') && (
              <View class="ant-image-upload-cover">
                {item.status === 'uploading' && (
                  <View class="ant-image-upload-cover-loading">
                    <Loading className="ant-image-upload-cover-loading-icon" />
                    <View class="ant-image-upload-cover-loading-text">
                      上传中...
                    </View>
                  </View>
                )}
                {item.status === 'error' && (
                  <View class="ant-image-upload-cover-error">
                    <Icon
                      className="ant-image-upload-cover-error-icon"
                      type="CloseCircleOutline"
                    />
                    <View class="ant-image-upload-cover-error-text">
                      上传失败
                    </View>
                  </View>
                )}
              </View>
            )}

            <Image
              class="ant-image-upload-image"
              mode={imageMode}
              src={item.url || item.path}
              data-uid={item.uid}
              onTap="onPreview"
            />
            {/* #if ALIPAY */}
          </Slot>
          {/* #endif */}
        </View>
      ))}
      <View onTap="chooseImage">
        {/* #if ALIPAY */}
        <Slot name="uploadButton">
          {/* #endif */}
          {(!maxCount || mixin.value.length < maxCount) && (
            <View class="ant-image-upload-add-image-wrapper">
              <Icon
                type="AddOutline"
                className="ant-image-upload-add-image-icon"
              />
            </View>
          )}
          {/* #if ALIPAY */}
        </Slot>
        {/* #endif */}
      </View>
      {/* #if ALIPAY */}
    </Slot>
    {/* #endif */}
  </View>
);
