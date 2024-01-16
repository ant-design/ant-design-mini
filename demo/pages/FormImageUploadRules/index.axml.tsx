import { View, Page, InternalData } from 'tsxml';
import FormInput from '../../../src/Form/FormInput/index.axml';
import FormImageUpload from '../../../src/Form/FormImageUpload/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ onUpload }: InternalData) => (
  <Page>
    <FormInput label="用户名" name="username" ref="handleRef" />
    <FormImageUpload
      label="图片上传"
      name="imageList"
      onUpload={onUpload ? onUpload : 'onUpload'}
      maxCount={3}
      tooltip="需要上传3张图片"
      ref="handleRef"
    />
    <View class="buttons">
      <AntButton type="primary" onTap="submit" style="margin-bottom: 12px">
        提交
      </AntButton>
      <AntButton onTap="reset">重置</AntButton>
    </View>
  </Page>
);
