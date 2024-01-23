import { View, Page, InternalData } from 'tsxml';
import Collapse from '../../../src/Collapse/index.axml';
import Checkbox from '../../../src/Checkbox/index.axml';
import Button from '../../../src/Button/index.axml';

export default ({ items, item }: InternalData) => (
  <Page>
    <Collapse items={items}>
      <View slot="title" slot-scope="item" class="title">
        <View catchTap="true">
          <Checkbox data-index={item.index} onChange="onChange" />
        </View>
        <View>{item.value.title}</View>
      </View>

      <View slot="content" slot-scope="item" class="content">
        {item.value.content}
      </View>
    </Collapse>

    <Button type="primary" onTap="onTap">
      提交
    </Button>
  </Page>
);
