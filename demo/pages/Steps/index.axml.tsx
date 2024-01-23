import { Page, InternalData, View, Block } from 'tsxml';
import Steps from '../../../src/Steps/index.axml';
import Icon from '../../../src/Icon/index.axml';
import Container from '../../../src/Container/index.axml';

export default ({ items, item, iconList }: InternalData) => (
  <Page>
    <Container title="横向步骤条">
      <Steps items={items} />
    </Container>

    <Container title="横向步骤条失败">
      <Steps items={items} status="error" current={1} />
    </Container>

    <Container title="纵向步骤条">
      <Steps items={items} direction="vertical" />
    </Container>

    <Container title="纵向步骤条失败">
      <Steps items={items} status="error" current={1} direction="vertical" />
    </Container>

    {/* #if ALIPAY */}
    <Container title="自定义图标">
      <Steps items={items}>
        <Icon slot="icon" type="SmileFill" />
      </Steps>
    </Container>

    <Container title="更多自定义">
      <Steps items={items} current={2}>
        <Block slot="icon" slot-scope="item">
          {iconList[item.index] && <Icon type={iconList[item.index]} />}
        </Block>

        <View slot="title" slot-scope="item">
          {item.index + 1}
        </View>

        <View slot="description" slot-scope="item">
          <View>{item.value.title}</View>
          <View>{item.value.description}</View>
        </View>
      </Steps>
    </Container>
    {/* #endif */}
  </Page>
);
