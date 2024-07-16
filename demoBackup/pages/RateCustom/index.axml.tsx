import { Component, InternalData, View } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import AntRate from '../../../src/Rate/index.axml';

export default ({ rate }: InternalData) => (
  <Component>
    <AntContainer title="自定义间距">
      <AntRate defaultValue={3} gutter={8} />
      <View class="description">8px</View>

      <AntRate defaultValue={4} gutter={16} />
      <View class="description">16px</View>
    </AntContainer>

    <AntContainer title="自定义大小">
      <AntRate defaultValue={3} className="rate" />
      <View class="description">30px</View>

      <AntRate defaultValue={3} style="font-size: 40px" />
      <View class="description">40px</View>
    </AntContainer>

    <AntContainer title="自定义颜色">
      <AntRate
        defaultValue={3}
        characterClassName="star"
        characterActiveClassName="star-active"
      />
      <View class="description">基础</View>

      <AntRate
        defaultValue={3}
        characterClassName="star-gradient"
        characterActiveClassName="star-active-gradient"
      />
      <View class="description">渐变</View>
    </AntContainer>

    {/* #if ALIPAY */}
    <AntContainer title="自定义图标">
      <AntRate defaultValue={3}>
        <AntIcon slot="character" type="HeartFill" />
      </AntRate>
      <View class="description">自定义为HeartFill</View>

      <AntRate defaultValue={3.5} allowHalf>
        <AntIcon slot="character" type="StarOutline" />
      </AntRate>
      <View class="description">自定义为StarOutline</View>

      <AntRate defaultValue={3.5} allowHalf characterClassName="character">
        <View slot="character">正</View>
      </AntRate>
      <View class="description">自定义为正</View>

      <AntRate defaultValue={2.5} allowHalf characterClassName="character">
        <View slot="character">A </View>
      </AntRate>
      <View class="description">自定义为A</View>

      <AntRate
        defaultValue={2.5}
        allowHalf
        gutter={20}
        characterClassName="character"
      >
        <View slot="character" slot-scope="rate">
          {rate.index}
        </View>
      </AntRate>
      <View class="description">自定义为索引</View>
    </AntContainer>
    {/* #endif */}
  </Component>
);
