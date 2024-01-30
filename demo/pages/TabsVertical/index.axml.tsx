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
        scroll-top={scrollTop}
        scroll-y={true}
        onScroll="onScroll"
        scroll-with-animation={true}
        scroll-animation-duration={300}
        class="content"
      >
        {items[current].content}
      </ScrollView>
    </Tabs>

    <View class="footer"></View>
  </Page>
);
