import Button from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import { Page } from 'tsxml';

export default () => (
  <Page>
    <Container title="按钮类型" className="list">
      <Button type="primary" onTap="handleTap">
        主要按钮
      </Button>

      <Button type="default" onTap="handleTap">
        次要按钮
      </Button>

      <Button type="text" onTap="handleTap">
        文本按钮
      </Button>
    </Container>

    <Container title="带辅助文案按钮" className="list">
      <Button type="primary" subText="副标题" onTap="handleTap">
        主要按钮
      </Button>

      <Button type="default" subText="副标题" onTap="handleTap">
        次要按钮
      </Button>

      <Button type="text" subText="副标题" onTap="handleTap">
        文本按钮
      </Button>
    </Container>

    <Container title="禁用" className="list">
      <Button type="primary" disabled>
        主要按钮
      </Button>

      <Button type="default" disabled>
        次要按钮
      </Button>

      <Button type="text" disabled>
        文本按钮
      </Button>
    </Container>

    <Container title="加载状态" className="list">
      <Button type="primary" loading>
        主要按钮
      </Button>

      <Button type="default" loading>
        次要按钮
      </Button>

      <Button type="text" loading>
        文本
      </Button>
    </Container>

    <Container title="危险" className="list">
      <Button type="primary" danger onTap="handleTap">
        主要按钮
      </Button>

      <Button type="default" danger onTap="handleTap">
        次要按钮
      </Button>

      <Button type="text" danger onTap="handleTap">
        文本按钮
      </Button>
    </Container>
  </Page>
);
