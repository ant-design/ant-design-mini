import { Page, View } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntIcon from '../../../src/Icon/index.axml';

export default () => (
  <Page>
    <AntContainer title="基本使用">
      <AntIcon type="SmileOutline" />
      <AntIcon type="PayCircleOutline" />
      <AntIcon type="LocationFill" />
    </AntContainer>

    <AntContainer title="自定义大小">
      <AntIcon type="SmileOutline" style="font-size: 20px" />
      <AntIcon type="SmileOutline" style="font-size: 30px" />
      <AntIcon type="SmileOutline" className="custom-size" />
    </AntContainer>

    <AntContainer title="自定义颜色">
      <AntIcon type="SmileOutline" style="color: red" />
      <AntIcon type="SmileOutline" className="custom-color" />
    </AntContainer>

    <AntContainer title="更多自定义">
      <View class="custom">
        <AntIcon type="SmileOutline" />
      </View>
    </AntContainer>

    <AntContainer title="点击事件">
      <View style="display:flex">
        <AntIcon
          //@ts-ignore
          onTap="handleTap"
          data-id="icon"
          type="SmileOutline"
          style="font-size: 50px;"
        />
      </View>
    </AntContainer>
  </Page>
);
