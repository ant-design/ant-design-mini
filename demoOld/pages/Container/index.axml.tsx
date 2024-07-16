import { View, Page } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntIcon from '../../../src/Icon/index.axml';

export default () => (
  <Page>
    <AntContainer title="标题">
      <View class="content"></View>
    </AntContainer>
    <AntContainer headerInBox={false}>
      <View slot="title">
        <View class="icon">
          <AntIcon type="SmileOutline" style="margin-right: 8px" />
          标题
        </View>
      </View>
      <View slot="headerRight">右侧内容</View>
      <View class="content"></View>
    </AntContainer>
    <AntContainer title="标题">
      <View slot="headerRight">右侧内容</View>
      <View class="content">
        <View class="box"></View>
        <View class="box"></View>
        <View class="box"></View>
      </View>
    </AntContainer>
    <AntContainer>
      <View class="content"></View>
      <View slot="headerRight">右侧内容</View>
    </AntContainer>
    <AntContainer>
      <View class="content"></View>
    </AntContainer>
  </Page>
);
