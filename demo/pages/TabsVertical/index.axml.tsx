import { ScrollView, View, Page, InternalData } from 'tsxml';
import Tabs from '../../../src/Tabs/index.axml';

export default ({ items, current, scrollTop }: InternalData) => (
  <Page>
    <Tabs
      items={items}
      current={current}
      onChange="onChange"
      className="tabs"
      direction="vertical"
    >
      <ScrollView
        scrollTop={scrollTop}
        scrollY={true}
        onScroll="onScroll"
        scrollWithAnimation={true}
        scrollAnimationDuration={300}
        class="content"
      >
        {items[current].content}
      </ScrollView>
    </Tabs>

    <View class="footer"></View>
  </Page>
);
