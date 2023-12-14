import Container from '../../../src/Container/index.axml';
import Rate from '../../../src/Rate/index.axml';
import Stepper from '../../../src/Stepper/index.axml';
import { View } from 'tsxml';

export default () => (
  <View>
    <Container title="基础用法">
      <Rate defaultValue={3} onChange="onChange" />
    </Container>

    <Container title="半星">
      <Rate defaultValue={3.5} allowHalf onChange="onChange" />
    </Container>

    <Container title="清除">
      <Rate defaultValue={4} onChange="onChange" />
      <View class="description">allowClear: true</View>
      <Rate defaultValue={4} allowClear={false} onChange="onChange" />
      <View class="description">allowClear: false</View>
    </Container>

    <Container title="只读">
      <Rate defaultValue={3.5} readonly />
    </Container>

    <Container title="多个count">
      <Rate defaultValue={5} count={8} />
    </Container>

    <Container title="受控模式">
      <Rate value={{ value }} onChange="handleChange" />
      <View style="margin-top: 8px">
        <Stepper value={{ value }} min={0} max={5} onChange="handleChange" />
      </View>
    </Container>
  </View>
);
