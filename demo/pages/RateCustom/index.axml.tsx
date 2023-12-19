import { InternalData, View } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Icon from '../../../src/Icon/index.axml';
import Rate from '../../../src/Rate/index.axml';

export default ({ rate }: InternalData) => (
  <Component>
    <Container title="自定义间距">
      <Rate defaultValue={3} gutter={8} />
      <View class="description">8px</View>

      <Rate defaultValue={4} gutter={16} />
      <View class="description">16px</View>
    </Container>

    <Container title="自定义大小">
      <Rate defaultValue={3} className="rate" />
      <View class="description">30px</View>

      <Rate defaultValue={3} style="font-size: 40px" />
      <View class="description">40px</View>
    </Container>

    <Container title="自定义颜色">
      <Rate
        defaultValue={3}
        characterClassName="star"
        characterActiveClassName="star-active"
      />
      <View class="description">基础</View>

      <Rate
        defaultValue={3}
        characterClassName="star-gradient"
        characterActiveClassName="star-active-gradient"
      />
      <View class="description">渐变</View>
    </Container>

    {/* #if WECHAT */}
    <Container title="自定义图标">
      <Rate defaultValue={3}>
        <Icon slot="character" type="HeartFill" />
      </Rate>
      <View class="description">自定义为HeartFill</View>

      <Rate defaultValue={3.5} allowHalf>
        <Icon slot="character" type="StarOutline" />
      </Rate>
      <View class="description">自定义为StarOutline</View>

      <Rate defaultValue={3.5} allowHalf characterClassName="character">
        <View slot="character">正</View>
      </Rate>
      <View class="description">自定义为正</View>

      <Rate defaultValue={2.5} allowHalf characterClassName="character">
        <View slot="character">A </View>
      </Rate>
      <View class="description">自定义为A</View>

      <Rate
        defaultValue={2.5}
        allowHalf
        gutter={20}
        characterClassName="character"
      >
        <View slot="character" slot-scope="rate">
          {rate.index}
        </View>
      </Rate>
      <View class="description">自定义为索引</View>
    </Container>
    {/* #endif */}
  </Component>
);
