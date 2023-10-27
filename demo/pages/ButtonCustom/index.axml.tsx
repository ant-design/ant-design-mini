import { Page } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Button from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <Container title="自定义大小" className="list">
      <Button
        type="primary"
        icon="SmileOutline"
        onTap="handleTap"
        className="btn"
      >
        主要按钮
      </Button>
      <Button
        type="primary"
        onTap="handleTap"
        icon="SmileOutline"
        className="btn"
        inline
      >
        主要按钮
      </Button>
      <Button
        type="primary"
        onTap="handleTap"
        icon="ForbidFill"
        className="btn"
        inline
        danger
      >
        主要按钮
      </Button>
    </Container>

    <Container title="round" className="list">
      <Button
        type="primary"
        icon="SearchOutline"
        onTap="handleTap"
        inline
        className="round"
      >
        主要按钮
      </Button>
      <Button type="primary" onTap="handleTap" inline danger className="round">
        主要按钮
      </Button>
    </Container>

    <Container title="circle" className="list">
      <Button
        type="primary"
        icon="SearchOutline"
        onTap="handleTap"
        inline
        className="circle"
      ></Button>
      <Button
        icon="SearchOutline"
        onTap="handleTap"
        inline
        className="circle"
      ></Button>
      <Button type="primary" onTap="handleTap" inline className="circle">
        A
      </Button>
      <Button onTap="handleTap" inline className="circle">
        A
      </Button>
    </Container>
  </Page>
);
