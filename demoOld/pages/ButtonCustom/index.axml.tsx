import { Page } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <AntContainer title="自定义大小" className="list">
      <AntButton
        type="primary"
        icon="SmileOutline"
        onTap="handleTap"
        className="btn"
      >
        主要按钮
      </AntButton>
      <AntButton
        type="primary"
        onTap="handleTap"
        icon="SmileOutline"
        className="btn"
        inline
      >
        主要按钮
      </AntButton>
      <AntButton
        type="primary"
        onTap="handleTap"
        icon="ForbidFill"
        className="btn"
        inline
        danger
      >
        主要按钮
      </AntButton>
    </AntContainer>

    <AntContainer title="round" className="list">
      <AntButton
        type="primary"
        icon="SearchOutline"
        onTap="handleTap"
        inline
        className="round"
      >
        主要按钮
      </AntButton>
      <AntButton
        type="primary"
        onTap="handleTap"
        inline
        danger
        className="round"
      >
        主要按钮
      </AntButton>
    </AntContainer>

    <AntContainer title="circle" className="list">
      <AntButton
        type="primary"
        icon="SearchOutline"
        onTap="handleTap"
        inline
        className="circle"
      ></AntButton>
      <AntButton
        icon="SearchOutline"
        onTap="handleTap"
        inline
        className="circle"
      ></AntButton>
      <AntButton type="primary" onTap="handleTap" inline className="circle">
        A
      </AntButton>
      <AntButton onTap="handleTap" inline className="circle">
        A
      </AntButton>
    </AntContainer>
  </Page>
);
