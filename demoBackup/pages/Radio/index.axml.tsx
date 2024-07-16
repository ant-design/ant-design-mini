import { Component } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Radio from '../../../src/Radio/index.axml';

export default ({ checked }) => (
  <Component>
    <Container title="基础用法">
      <Radio onChange="onChange">Radio</Radio>
    </Container>

    <Container title="初始值">
      <Radio defaultChecked={true}>Radio</Radio>
    </Container>

    <Container title="禁用模式">
      <Radio disabled>Radio1</Radio>
      <Radio defaultChecked disabled>
        Radio2
      </Radio>
    </Container>

    <Container title="自定义颜色">
      <Radio color="red" defaultChecked>
        Radio
      </Radio>
    </Container>

    <Container title="控制模式">
      <Radio checked={checked} onChange="handleChange">
        Radio
      </Radio>
    </Container>
  </Component>
);
