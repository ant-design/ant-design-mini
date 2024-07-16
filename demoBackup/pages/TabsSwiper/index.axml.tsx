import { Page, Swiper, SwiperItem, View, InternalData } from 'tsxml';
import AntTabs from '../../../src/Tabs/index.axml';

export default ({ items, current }: InternalData) => (
  <Page>
    <AntTabs items={items} current={current} onChange="onChange">
      <Swiper
        current={current}
        autoplay={false}
        vertical={false}
        circular={false}
        onChange="onSwipeChange"
      >
        {items.map((item, index) => (
          <SwiperItem key={index}>
            <View class="content">{item.content}</View>
          </SwiperItem>
        ))}
      </Swiper>
    </AntTabs>
  </Page>
);
