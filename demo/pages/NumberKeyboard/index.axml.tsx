import { Page, View } from 'tsxml';
import AntIcon from '../../../src/Icon/index.axml';
import AntList from '../../../src/List/index.axml';
import AntListItem from '../../../src/List/ListItem/index.axml';
import AntNumberKeyboard from '../../../src/NumberKeyboard/index.axml';

interface InternalData {
  visible: boolean;
  visible1: boolean;
  visible2: boolean;
  visible3: boolean;
  visible4: boolean;
  visible6: boolean;
  visible7: boolean;
}

export default ({
  visible,
  visible1,
  visible2,
  visible3,
  visible4,
  visible6,
  visible7,
}: InternalData) => (
  <Page>
    <AntList header="基础使用">
      <AntListItem onTap="onTap">默认键盘</AntListItem>
      <AntNumberKeyboard visible={visible} onClose="onTap" />

      <AntListItem onTap="onTap1">没有小数点</AntListItem>
      <AntNumberKeyboard point={false} visible={visible1} onClose="onTap1" />

      <AntListItem onTap="onTap2">带确认按钮</AntListItem>
      <AntNumberKeyboard
        confirmText="确认"
        visible={visible2}
        onClose="onTap2"
      />

      <AntListItem onTap="onTap3">带关闭箭头</AntListItem>
      <AntNumberKeyboard closeable={true} visible={visible3} onClose="onTap3" />

      <AntListItem onTap="onTap4">乱序键盘</AntListItem>
      <AntNumberKeyboard random={true} visible={visible4} onClose="onTap4" />
    </AntList>
    {/* #if ALIPAY */}
    <AntList header="自定义按钮">
      <AntListItem onTap="onTap6">自定义标题</AntListItem>
      <AntNumberKeyboard visible={visible6} onClose="onTap6">
        <View slot="header" class="number-keyboard-header">
          支付宝安全键盘
        </View>
      </AntNumberKeyboard>

      <AntListItem onTap="onTap7">自定义确认按钮</AntListItem>
      <AntNumberKeyboard confirmText="确认" visible={visible7} onClose="onTap7">
        <View slot="confirm" class="number-keyboard-confirm">
          <AntIcon type="DownOutline" />
        </View>
      </AntNumberKeyboard>
    </AntList>
    {/* #endif */}
  </Page>
);
