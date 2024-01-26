import Collapse from '../../../src/Collapse/index.axml';
import { Page, View, InternalData, Text } from 'tsxml';
import _sjs from './index.sjs';

export default ({ items, item }: InternalData) => (
  <Page>
    {/* #if WECHAT */}
    <Text>由于微信小程序平台的限制, Collapse 暂时不支持 Slot</Text>
    {/* #endif */}
    <Collapse items={items}>
      <View slot="title" slot-scope="item">
        {item.value.title} {_sjs.itemContent(item.current, item)}
      </View>

      <View slot="brief" slot-scope="item">
        {item.value.brief}
      </View>

      <View slot="icon" slot-scope="item">
        {_sjs.extraText(item.current, item)}
      </View>
    </Collapse>
  </Page>
);
