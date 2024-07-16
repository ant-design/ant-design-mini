import { View, Page, InternalData, Text } from 'tsxml';
import AntCollapse from '../../../src/Collapse/index.axml';
import AntCheckbox from '../../../src/Checkbox/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ items, item }: InternalData) => (
  <Page>
    {/* #if WECHAT */}
    <Text>由于微信小程序平台的限制, Collapse 暂时不支持 Slot</Text>
    {/* #endif */}
    <AntCollapse items={items}>
      <View slot="title" slot-scope="item" class="title">
        <View catchTap="true">
          <AntCheckbox data-index={item.index} onChange="onChange" />
        </View>
        <View>{item.value.title}</View>
      </View>

      <View slot="content" slot-scope="item" class="content">
        {item.value.content}
      </View>
    </AntCollapse>

    <AntButton type="primary" onTap="onTap">
      提交
    </AntButton>
  </Page>
);
