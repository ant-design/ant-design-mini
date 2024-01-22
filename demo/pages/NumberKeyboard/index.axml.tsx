import { Page, View, Slot } from 'tsxml';
import NumberKeyboard from '../../../src/NumberKeyboard/index.axml';
import List from '../../../src/List/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import Icon from '../../../src/Icon/index.axml';

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
    <List header="基础使用">
      <ListItem onTap="onTap">默认键盘</ListItem>
      <NumberKeyboard visible={visible} onClose="onTap" />

      <ListItem onTap="onTap1">没有小数点</ListItem>
      <NumberKeyboard point={false} visible={visible1} onClose="onTap1" />

      <ListItem onTap="onTap2">带确认按钮</ListItem>
      <NumberKeyboard confirmText="确认" visible={visible2} onClose="onTap2" />

      <ListItem onTap="onTap3">带关闭箭头</ListItem>
      <NumberKeyboard closeable={true} visible={visible3} onClose="onTap3" />

      <ListItem onTap="onTap4">乱序键盘</ListItem>
      <NumberKeyboard random={true} visible={visible4} onClose="onTap4" />
    </List>

    <List header="自定义按钮">
      <ListItem onTap="onTap6">自定义标题</ListItem>
      <NumberKeyboard visible={visible6} onClose="onTap6">
        <View slot="header">
          <View class="number-keyboard-header">支付宝安全键盘</View>
        </View>
      </NumberKeyboard>

      <ListItem onTap="onTap7">自定义确认按钮</ListItem>
      <NumberKeyboard confirmText="确认" visible={visible7} onClose="onTap7">
        <View slot="confirm">
          <View class="number-keyboard-confirm">
            <Icon type="DownOutline" />
          </View>
        </View>
      </NumberKeyboard>
    </List>
  </Page>
);
