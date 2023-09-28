import { Page, Text, View } from 'tsxml';
import Icon from '../../../src/Icon/index.axml';
import Container from '../../../src/Container/index.axml';

export default () => (
  <Page>
    <Container title="基本使用">
      <Icon type="SmileOutline" />
      <Icon type="PayCircleOutline" />
      <Icon type="LocationFill" />
    </Container>

    <Container title="自定义大小">
      <Icon type="SmileOutline" style="font-size: 20px" />
      <Icon type="SmileOutline" style="font-size: 30px" />
      <Icon type="SmileOutline" className="custom-size" />
    </Container>

    <Container title="自定义颜色">
      <Text>11</Text>
      <Icon type="SmileOutline" style="color: red" />
      <Icon type="SmileOutline" className="custom-color" />
    </Container>

    <Container title="更多自定义">
      <View class="custom">
        <Icon type="SmileOutline" />
      </View>
    </Container>

    <Container title="点击事件">
      <View style="display:flex">
        <Icon
          //@ts-ignore
          onTap="handleTap"
          data-id="icon"
          type="SmileOutline"
          style="font-size: 50px;"
        />
      </View>
    </Container>
  </Page>
);
