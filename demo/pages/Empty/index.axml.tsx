import { View, Page } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Empty from '../../../src/Empty/index.axml';
import Button from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <Container title="基础样式">
      <Empty title="这里什么也没有" message="看看其它吧" />
    </Container>

    <Container title="添加操作按钮组">
      <Empty title="这里什么也没有" message="看看其它吧">
        <View slot="extra">
          <Button size="small" inline>
            操作1
          </Button>
          <Button type="primary" size="small" inline style="margin-left: 12px">
            操作2
          </Button>
        </View>
      </Empty>
    </Container>

    <Container title="自定义图片">
      <Empty
        title="这里什么也没有"
        message="看看其它吧"
        image="https://gw.alipayobjects.com/mdn/rms_7cc883/afts/img/A*PG7NQoXbN38AAAAAAAAAAAAAARQnAQ"
      />
    </Container>
  </Page>
);
