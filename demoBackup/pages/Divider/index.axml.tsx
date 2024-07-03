import { Page, View } from 'tsxml';
import AntDivider from '../../../src/Divider/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default () => (
  <Page>
    <AntContainer title="水平分割线" headerInBox={false}>
      <AntDivider />
    </AntContainer>

    <AntContainer title="水平分割线-带文字" headerInBox={false}>
      <AntDivider text="中间内容" />
      <AntDivider text="左侧内容" textPosition="left" />
      <AntDivider text="右侧内容" textPosition="right" />
    </AntContainer>

    <AntContainer title="水平分割线-自定义" headerInBox={false}>
      <AntDivider
        text="自定义样式"
        textStyle="color:#1677ff; fontWeight:600"
        lineHeight={2}
        lineType="dashed"
        lineColor="#1677ff"
      />
    </AntContainer>

    <AntContainer title="垂直分割线" headerInBox={false}>
      <View class="divider-vertical">
        <View>100m</View>
        <AntDivider direction="vertical" />
        <View>浙江省杭州市西湖区西溪路556号</View>
      </View>
    </AntContainer>
  </Page>
);
