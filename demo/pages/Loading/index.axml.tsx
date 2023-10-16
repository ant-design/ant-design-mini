import { View, Page } from '../../../lib';
import Loading from '../../../src/Loading/index.axml';
import Container from '../../../src/Container/index.axml';

export default () => (
  <Page>
    <Container title="基础用法-spin" className="container">
      <View class="list">
        <Loading type="spin" />
      </View>
    </Container>

    <Container title="基础用法-mini" className="container">
      <View class="list">
        <Loading type="mini" />
      </View>
    </Container>

    <Container title="spin大小" className="container">
      <View class="list">
        <Loading type="spin" size="x-large" />
        <Loading type="spin" size="large" />
        <Loading type="spin" size="medium" />
        <Loading type="spin" size="small" />
      </View>
    </Container>

    <Container title="自定义颜色" className="container">
      <View class="list">
        <Loading type="mini" color="#1677ff" />
        <Loading color="#1677ff" />
        <Loading color="#34B368" />
        <Loading color="#ff8f1f" />
        <Loading color="#ff0000" />
      </View>
    </Container>

    <Container title="自定义大小" className="container">
      <View class="list">
        <Loading style="width: 40px; height: 40px;" />
        <Loading style="width: 30px; height: 30px;" />
        <Loading className="custom-size" />
      </View>
    </Container>
  </Page>
);
