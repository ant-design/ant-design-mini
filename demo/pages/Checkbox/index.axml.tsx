import { Page } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Checkbox from '../../../src/Checkbox/index.axml';

export default ({ checked }) => (
  <Page>
    <Container title="基础用法">
      <Checkbox onChange="onChange">Checkbox</Checkbox>
    </Container>

    <Container title="初始值">
      <Checkbox defaultChecked={true}>Checkbox</Checkbox>
    </Container>

    <Container title="禁用模式">
      <Checkbox disabled>Checkbox1</Checkbox>
      <Checkbox defaultChecked disabled>
        Checkbox2
      </Checkbox>
    </Container>

    <Container title="自定义颜色">
      <Checkbox color="red" defaultChecked>
        Checkbox
      </Checkbox>
    </Container>

    <Container title="控制模式">
      <Checkbox checked={checked} onChange="handleChange">
        Checkbox
      </Checkbox>
    </Container>
  </Page>
);
