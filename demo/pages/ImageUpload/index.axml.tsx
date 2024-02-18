import { InternalData, TSXMLProps, Page } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntUploader from '../../../src/ImageUpload/index.axml';

export default ({
  defaultFileList,
  onUpload,
  onBeforeUpload,
  onRemove,
}: TSXMLProps<InternalData>) => (
  <Page>
    <AntContainer title="基本用法">
      <AntUploader
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </AntContainer>
    <AntContainer title="初始值">
      <AntUploader
        defaultFileList={defaultFileList}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
        onPreview="onPreview"
      />
    </AntContainer>
    <AntContainer title="上传最大限制">
      限制只能上传1个
      <AntUploader
        maxCount={1}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </AntContainer>
    <AntContainer title="自定义移除">
      <AntUploader
        defaultFileList={defaultFileList}
        onRemove={onRemove ? onRemove : 'onRemove'}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </AntContainer>
    <AntContainer title="自定义上传前">
      <AntUploader
        defaultFileList={defaultFileList}
        onBeforeUpload={onBeforeUpload ? onBeforeUpload : 'onBeforeUpload'}
        onChange="onChange"
        onUpload={onUpload ? onUpload : 'onUpload'}
      />
    </AntContainer>
  </Page>
);
