import { View } from 'tsxml';

export default () => (
  <View>
    <container title="自定义大小" class="container">
      <view class="list">
        <loading style="width: 40px; height: 40px;" />
        <loading style="width: 30px; height: 30px;" />
        <loading className="custom-size" />
      </view>
    </container>
  </View>
);
