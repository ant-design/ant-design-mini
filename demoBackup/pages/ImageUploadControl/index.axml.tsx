import { InternalData, Page } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntUploader from '../../../src/ImageUpload/index.axml';

export default ({ fileList, onUpload }: InternalData) => (
  <Page>
    <AntContainer title="受控模式">
      <AntUploader
        fileList={fileList}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </AntContainer>
    <AntContainer title="手动触发上传">
      <AntUploader
        ref="handleUploaderRef"
        fileList={fileList}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
      <AntButton size="medium" onTap="upload" type="primary">
        上传
      </AntButton>
    </AntContainer>
  </Page>
);
