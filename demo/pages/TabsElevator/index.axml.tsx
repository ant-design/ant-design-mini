import { InternalData, Page, ScrollView, View } from 'tsxml';
import Tabs from '../../../src/Tabs/index.axml';

export default ({ items, current, scrollTop, item }: InternalData) => (
  <Page>
    <Tabs items={items} current={current} onChange="onChange" className="tabs">
      <View slot="title" onTap="onTap" slot-scope="item">
        {item.value.title}
      </View>

      <ScrollView
        id="scroll-view"
        onScroll="onScroll"
        onTouchStart="onTouchStart"
        scrollTop={scrollTop}
        scrollY={true}
        scrollWithAnimation={true}
        scrollAnimationDuration="300"
        class="content"
      >
        {items.map((item, index) => (
          <View class="item" key={index}>
            <View class="title" id={`tab-item-${index}`}>
              {item.title}
            </View>
            {item.content}
          </View>
        ))}
      </ScrollView>
    </Tabs>
  </Page>
);
