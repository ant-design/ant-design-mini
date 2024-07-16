import { Page, View, ScrollView, InternalData } from 'tsxml';
import AntTabs from '../../../src/Tabs/index.axml';

export default ({ items, current, scrollTop }: InternalData) => (
  <Page>
    <AntTabs
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
        scroll-top={scrollTop}
        scroll-y={true}
        scroll-with-animation={true}
        scroll-animation-duration={300}
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
    </AntTabs>

    <View class="footer"></View>
  </Page>
);
