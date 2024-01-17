import { Page, View } from 'tsxml';
import Divider from '../../../src/Divider/index.axml';
import Container from '../../../src/Container/index.axml';

export default () => (
  <Page>
    <Container title="水平分割线" headerInBox={false}>
      <Divider />
    </Container>

    <Container title="水平分割线-带文字" headerInBox={false}>
      <Divider text="中间内容" />
      <Divider text="左侧内容" textPosition="left" />
      <Divider text="右侧内容" textPosition="right" />
    </Container>

    <Container title="水平分割线-自定义" headerInBox={false}>
      <Divider
        text="自定义样式"
        textStyle="color:#1677ff; fontWeight:600"
        lineHeight={2}
        lineType="dashed"
        lineColor="#1677ff"
      />
    </Container>

    <Container title="垂直分割线" headerInBox={false}>
      <View class="divider-vertical">
        <View>100m</View>
        <Divider direction="vertical" />
        <View>浙江省杭州市西湖区西溪路556号</View>
      </View>
    </Container>
  </Page>
);
