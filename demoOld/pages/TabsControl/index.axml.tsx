import { InternalData, Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
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
      <AntButton inline onTap="onPrevTap">
        上一个
      </AntButton>
      <AntButton inline onTap="onNextTap">
        下一个
      </AntButton>
      <AntButton inline onTap="onAddTap">
        添加
      </AntButton>
      <AntButton inline onTap="onMinusTap">
        减少
      </AntButton>
    </View>
  </Page>
);
