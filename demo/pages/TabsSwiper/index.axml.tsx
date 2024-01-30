import { Page, Swiper, SwiperItem, View, InternalData } from 'tsxml';
import Tabs from '../../../src/Tabs/index.axml';

export default ({ items, current }: InternalData) => (
  <Page>
    <Tabs items={items} current={current} onChange="onChange">
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
    </Tabs>
  </Page>
);
