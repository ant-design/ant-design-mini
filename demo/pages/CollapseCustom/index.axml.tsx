import Collapse from '../../../src/Collapse/index.axml';
import { Page, View, InternalData } from 'tsxml';
import _sjs from './index.sjs';

export default ({ items, current, item }: InternalData) => (
  <Page>
    <Collapse items={items}>
      <View slot="title" slot-scope="item">
        ${item.value.title} ${_sjs.itemContent(current, item)}
      </View>

      <View slot="brief" slot-scope="item">
        {item.value.brief}
      </View>

      <View slot="icon" slot-scope="item">
        {_sjs.extraText(current, item)}
      </View>
    </Collapse>
  </Page>
);
