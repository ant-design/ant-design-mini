import { View } from 'tsxml';

export default ({ item }) => (
  <View>
    <container title="自定义大小" class="container">
      <view class="list">
        <loading style="width: 40px; height: 40px;" />
        <loading style="width: 30px; height: 30px;" />
        <loading className="custom-size" />
        <text
          a="1"
          b="2"
          class={`ant-calendar-cell-top-text ${
            item.top.className ? item.top.className : ''
          }`}
        >
          1111
        </text>
      </view>
    </container>
  </View>
);
