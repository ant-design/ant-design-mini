import { Page } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <AntContainer title="按钮类型" className="list">
      <AntButton type="primary" inline onTap="handleTap">
        主要按钮
      </AntButton>
      <AntButton type="default" inline onTap="handleTap">
        次要按钮
      </AntButton>
      <AntButton type="text" inline onTap="handleTap">
        文本按钮
      </AntButton>
    </AntContainer>
    <AntContainer title="按钮尺寸" className="list">
      <AntButton type="primary" inline size="large" onTap="handleTap">
        主要按钮
      </AntButton>
      <AntButton type="primary" inline size="medium" onTap="handleTap">
        主要按钮
      </AntButton>
      <AntButton type="primary" inline size="small" onTap="handleTap">
        主要按钮
      </AntButton>
    </AntContainer>
    <AntContainer title="危险" className="list">
      <AntButton type="primary" inline danger onTap="handleTap">
        主要按钮
      </AntButton>
      <AntButton type="default" inline danger onTap="handleTap">
        次要按钮
      </AntButton>
      <AntButton type="text" inline danger onTap="handleTap">
        文本按钮
      </AntButton>
    </AntContainer>
    <AntContainer title="禁用" className="list">
      <AntButton type="primary" inline disabled>
        主要按钮
      </AntButton>
      <AntButton type="default" inline disabled>
        次要按钮
      </AntButton>
      <AntButton type="text" inline disabled>
        文本按钮
      </AntButton>
    </AntContainer>
    <AntContainer title="加载状态" className="list">
      <AntButton type="primary" inline loading>
        主要按钮
      </AntButton>
      <AntButton type="default" inline loading>
        次要按钮
      </AntButton>
      <AntButton type="text" inline loading>
        文本
      </AntButton>
    </AntContainer>
  </Page>
);
