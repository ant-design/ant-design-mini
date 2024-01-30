import { InternalData, Page, View } from 'tsxml';
import Button from '../../../src/Button/index.axml';
import Tabs from '../../../src/Tabs/index.axml';

export default ({ items, current }: InternalData) => (
  <Page>
    <Tabs items={items} current={current} onChange="onChange">
      <View class="content">{items[current].content}</View>
    </Tabs>

    <View class="container">
      current: {current} length: {items.length}
    </View>

    <View class="buttons">
      <Button inline onTap="onPrevTap">
        上一个
      </Button>
      <Button inline onTap="onNextTap">
        下一个
      </Button>
      <Button inline onTap="onAddTap">
        添加
      </Button>
      <Button inline onTap="onMinusTap">
        减少
      </Button>
    </View>
  </Page>
);
