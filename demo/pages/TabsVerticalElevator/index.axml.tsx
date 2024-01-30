import { Page, View, ScrollView, InternalData } from 'tsxml';
import Tabs from '../../../src/Tabs/index.axml';

export default ({ items, current, scrollTop }: InternalData) => (
  <Page>
    <Tabs
      items={items}
      current={current}
      onChange="onChange"
      direction="vertical"
      className="tabs"
      tabsBarClassName="tabs-bar"
      tabActiveClassName="tab-active"
    >
      <ScrollView
        id="scroll-view"
        onScroll="onScroll"
        onTouchStart="onTouchStart"
        scrollTop={scrollTop}
        scrollY={true}
        scrollWithAnimation={true}
        scrollAnimationDuration={300}
        class="content"
      >
        {items.map((item, index) => (
          <View key={index} class="item">
            <View class="title" id={`tab-item-${index}`}>
              {item.title}
            </View>
            <View>{item.content}</View>
          </View>
        ))}
      </ScrollView>
    </Tabs>

    <View class="footer"></View>
  </Page>
);
