import { InternalData, Page, View } from 'tsxml';
import Button from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import Steps from '../../../src/Steps/index.axml';

export default ({ items, current }: InternalData) => (
  <Page>
    <Container title="步骤条控制">
      <Steps items={items} current={current} />
      <Button onTap="onNextTap" type="primary">
        {current < items.length - 1 ? <View>下一步</View> : <View>完成</View>}
      </Button>
      {current > 0 && <Button onTap="onPrevTap">上一步</Button>}
    </Container>
  </Page>
);
