import { View, ScrollView, Page, InternalData } from 'tsxml';
import Tabs from '../../../src/Tabs/index.axml';

export default ({ items, current, scrollTop }: InternalData) => (
  <Page>
    <View class="intro">
      tabs 吸顶模式， 滑动到最顶部会吸顶， 切换tab content会滚动到最顶部
    </View>

    <Tabs
      items={items}
      current={current}
      onChange="onChange"
      className="tabs"
    />

    <ScrollView
      id="scroll-view"
      scroll-top={scrollTop}
      scroll-y={true}
      scroll-with-animation={true}
      scroll-animation-duration={300}
      class="content"
    >
      {items[current].content}
    </ScrollView>
  </Page>
);
