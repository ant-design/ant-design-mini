import { InternalData, TSXMLProps, Page } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Uploader from '../../../src/ImageUpload/index.axml';

export default ({
  defaultFileList,
  onUpload,
  onBeforeUpload,
  onRemove,
}: TSXMLProps<InternalData>) => (
  <Page>
    <Container title="基本用法">
      <Uploader
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </Container>
    <Container title="初始值">
      <Uploader
        defaultFileList={defaultFileList}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
        onPreview="onPreview"
      />
    </Container>
    <Container title="上传最大限制">
      限制只能上传1个
      <Uploader
        maxCount={1}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </Container>
    <Container title="自定义移除">
      <Uploader
        defaultFileList={defaultFileList}
        onRemove={onRemove ? onRemove : 'onRemove'}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </Container>
    <Container title="自定义上传前">
      <Uploader
        defaultFileList={defaultFileList}
        onBeforeUpload={onBeforeUpload ? onBeforeUpload : 'onBeforeUpload'}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </Container>
  </Page>
);
