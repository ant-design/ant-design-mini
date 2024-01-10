import { InternalData, Page, View } from 'tsxml';
import Notice from '../../../src/NoticeBar/index.axml';
import Container from '../../../src/Container/index.axml';
import Icon from '../../../src/Icon/index.axml';

export default ({ typeList }: InternalData) => (
  <Page>
    <Container title="基础用法">
      {typeList.map((item, index) => (
        <Notice key={index} style="margin-bottom: 8px" type={item}>
          {item}
        </Notice>
      ))}
    </Container>

    <Container title="可关闭通告栏">
      <Notice onTap="handleClose" mode="closeable">
        这条通知可以关闭
      </Notice>
    </Container>

    <Container title="可滚动通告栏">
      {typeList.map((item, index) => (
        <Notice
          key={index}
          type={item}
          style="margin-bottom: 8px"
          enableMarquee={true}
          loop={true}
          onTap="handleTapLink"
          mode="link"
        >
          文本溢出时，开启循环滚动。文字不够继续添加文字凑数。
        </Notice>
      ))}
    </Container>

    <Container title="自定义通告栏">
      <Notice style="margin-bottom: 8px">
        不展示图标
        <Icon slot="icon" />
      </Notice>

      <Notice
        type="primary"
        icon="GlobalOutline"
        style="margin-bottom: 8px"
        mode="link"
      >
        自定义左侧图标
      </Notice>

      <Notice
        type="primary"
        icon="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ"
        style="margin-bottom: 8px"
        mode="link"
      >
        自定义左侧图标图片
      </Notice>

      <Notice mode="link" style="margin-bottom: 8px" onTap="handleTapLink">
        自定义右侧按钮
        <View slot="extra" class="extra">
          <View onTap="handleTapAction">不再提示</View>
          <View onTap="handleTapAction">查看详情</View>
        </View>
      </Notice>
    </Container>
  </Page>
);
