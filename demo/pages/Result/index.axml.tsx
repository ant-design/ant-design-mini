import { Page, View } from 'tsxml';
import Button from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import Result from '../../../src/Result/index.axml';

export default () => (
  <Page>
    <Container title="成功状态">
      <Result
        title="操作成功"
        message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        type="success"
      />
    </Container>

    <Container title="等待状态">
      <Result
        title="等待处理"
        message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        type="wait"
      />
    </Container>

    <Container title="提示状态">
      <Result
        title="信息提示"
        message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        type="info"
      />
    </Container>

    <Container title="警告状态">
      <Result
        title="警告提示"
        message="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
        type="warning"
      />
    </Container>

    <Container title="失败状态">
      <Result
        title="无法完成操作"
        message="内容详情可折行，建议不超过两行\n建议不超过两行建议不超过两行"
        type="error"
      />
    </Container>

    {/* #if ALIPAY */}
    <Container title="自定义">
      <Result image="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original">
        <View slot="title">标题插槽</View>
        <View slot="message">描述插槽</View>
        <View slot="extra">
          <Button inline>辅助操作</Button>
          <Button type="primary" inline style={`margin-left: 12px;`}>
            主要操作
          </Button>
        </View>
      </Result>
    </Container>
    {/* #endif */}
  </Page>
);
