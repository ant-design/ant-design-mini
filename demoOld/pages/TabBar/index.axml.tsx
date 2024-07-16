import { Page, InternalData } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import TabBar from '../../../src/TabBar/index.axml';

export default ({ tabs, current, tabsBadge }: InternalData) => (
  <Page>
    <Container title="基础用法">
      <TabBar items={tabs} />
    </Container>
    <Container title="受控模式">
      <TabBar items={tabs} current={current} onChange="handleChange" />
    </Container>

    <Container title="红点用法">
      <TabBar items={tabsBadge} />
    </Container>

    <Container title="自定义高亮颜色">
      <TabBar items={tabs} activeStyle="color:red;" />
    </Container>
  </Page>
);
