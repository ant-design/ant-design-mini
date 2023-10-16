import { View, InternalData, Button } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import Switch from '../../../src/Switch/index.axml';
import AntIcon from '../../../src/Icon/index.axml';

export default (_, { checked }: InternalData) => (
  <View>
    <Container title="基础用法">
      <Switch />
    </Container>
    <Container title="有默认值">
      <Switch defaultChecked={true} onChange="onChange" />
    </Container>
    <Container title="文字和图标">
      <Switch checkedText="开" uncheckedText="关" onChange="onChange" />
      {/* #if ALIPAY */}
      <Switch>
        <AntIcon type="CheckOutline" slot="checkedText" />
        <AntIcon type="CloseOutline" slot="uncheckedText" />
      </Switch>
      {/* #endif */}
    </Container>
    <Container title="自定义颜色">
      <Switch defaultChecked={true} color="#00b578" />
    </Container>
    <Container title="禁用状态">
      <Switch defaultChecked={true} disabled={true} />
      <Switch disabled={true} />
    </Container>
    <Container title="加载状态">
      <Switch loading />
    </Container>
    <Container title="不同尺寸">
      <View class="line">
        <View>medium：</View>
        <Switch size="medium" />
      </View>
      <View class="line">
        <View>small：</View>
        <Switch size="small" />
      </View>
      <View class="line">
        <View>x-small：</View>
        <Switch size="x-small" />
      </View>
    </Container>
    <Container title="受控模式">
      <Switch checked={checked} onChange="handleChange" defaultChecked={true} />

      <Button style="margin-top:10px;" onTap="handleChangeByButton">
        切换
      </Button>
    </Container>
  </View>
);
