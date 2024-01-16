import { InternalData, Page } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Uploader from '../../../src/ImageUpload/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ fileList, onUpload }: InternalData) => (
  <Page>
    <Container title="受控模式">
      <Uploader
        fileList={fileList}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </Container>
    <Container title="手动触发上传">
      <Uploader
        ref="handleUploaderRef"
        fileList={fileList}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
      <AntButton size="medium" onTap="upload" type="primary">
        上传
      </AntButton>
    </Container>
  </Page>
);
