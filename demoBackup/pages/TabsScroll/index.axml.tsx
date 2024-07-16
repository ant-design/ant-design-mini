import { InternalData, Page, View } from 'tsxml';
import Tabs from '../../../src/Tabs/index.axml';
import Icon from '../../../src/Icon/index.axml';

export default ({ items }: InternalData) => (
  <Page>
    <View class="container">
      <Tabs items={items} />
    </View>

    <View class="container">
      选择后居中滚动
      <Tabs items={items} scrollMode="center" />
    </View>

    <View class="container">
      <Tabs items={items}>
        {/* #if ALIPAY */}
        <Icon slot="plus" type="AddOutline" />
        {/* #endif */}
      </Tabs>
    </View>

    <View class="container">
      <Tabs items={items} type="capsule" />
    </View>

    <View class="container">
      <Tabs items={items} type="mixin" />
    </View>
  </Page>
);
