import { View, Page } from 'tsxml';
import AntLoading from '../../../src/Loading/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default () => (
  <Page>
    <AntContainer title="基础用法-spin" className="container">
      <View class="list">
        <AntLoading type="spin" />
      </View>
    </AntContainer>

    <AntContainer title="基础用法-mini" className="container">
      <View class="list">
        <AntLoading type="mini" />
      </View>
    </AntContainer>

    <AntContainer title="spin大小" className="container">
      <View class="list">
        <AntLoading type="spin" size="x-large" />
        <AntLoading type="spin" size="large" />
        <AntLoading type="spin" size="medium" />
        <AntLoading type="spin" size="small" />
      </View>
    </AntContainer>

    <AntContainer title="自定义颜色" className="container">
      <View class="list">
        <AntLoading type="mini" color="#1677ff" />
        <AntLoading color="#1677ff" />
        <AntLoading color="#34B368" />
        <AntLoading color="#ff8f1f" />
        <AntLoading color="#ff0000" />
      </View>
    </AntContainer>

    <AntContainer title="自定义大小" className="container">
      <View class="list">
        <AntLoading style="width: 40px; height: 40px;" />
        <AntLoading style="width: 30px; height: 30px;" />
        <AntLoading className="custom-size" />
      </View>
    </AntContainer>
  </Page>
);
