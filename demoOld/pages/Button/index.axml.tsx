import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import { Page } from 'tsxml';

export default () => (
  <Page>
    <AntContainer title="按钮类型" className="list">
      <AntButton type="primary" onTap="handleTap">
        主要按钮
      </AntButton>

      <AntButton type="default" onTap="handleTap">
        次要按钮
      </AntButton>

      <AntButton type="text" onTap="handleTap">
        文本按钮
      </AntButton>
    </AntContainer>

    <AntContainer title="带辅助文案按钮" className="list">
      <AntButton type="primary" subText="副标题" onTap="handleTap">
        主要按钮
      </AntButton>

      <AntButton type="default" subText="副标题" onTap="handleTap">
        次要按钮
      </AntButton>

      <AntButton type="text" subText="副标题" onTap="handleTap">
        文本按钮
      </AntButton>
    </AntContainer>

    <AntContainer title="禁用" className="list">
      <AntButton type="primary" disabled>
        主要按钮
      </AntButton>

      <AntButton type="default" disabled>
        次要按钮
      </AntButton>

      <AntButton type="text" disabled>
        文本按钮
      </AntButton>
    </AntContainer>

    <AntContainer title="加载状态" className="list">
      <AntButton type="primary" loading>
        主要按钮
      </AntButton>

      <AntButton type="default" loading>
        次要按钮
      </AntButton>

      <AntButton type="text" loading>
        文本
      </AntButton>
    </AntContainer>

    <AntContainer title="危险" className="list">
      <AntButton type="primary" danger onTap="handleTap">
        主要按钮
      </AntButton>

      <AntButton type="default" danger onTap="handleTap">
        次要按钮
      </AntButton>

      <AntButton type="text" danger onTap="handleTap">
        文本按钮
      </AntButton>
    </AntContainer>
  </Page>
);
