import { InternalData, Page, View } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import AntInput from '../../../src/Input/index.axml';
import List from '../../../src/List/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import RareWordsKeyboard from '../../../src/RareWordsKeyboard/index.axml';

export default ({ value, visible, visible2, visible3 }: InternalData) => (
  <Page>
    <List header="基础使用">
      <Container title="姓名">
        <AntInput
          placeholder="请输入姓名"
          value={value}
          onChange="onInputChange"
        >
          <View slot="suffix" class="tips" onTap="onTap">
            生僻字？
          </View>
        </AntInput>
      </Container>

      <ListItem onTap="onTap">默认键盘</ListItem>

      <RareWordsKeyboard
        visible={visible}
        onClose="onClose"
        onChange="onChange"
      />

      <ListItem onTap="onTap2">不带蒙层</ListItem>

      <RareWordsKeyboard
        visible={visible2}
        showMask={false}
        onClose="onClose2"
        onChange="onChange"
      />

      <ListItem onTap="onTap3">监听输入完成、出错的回调</ListItem>

      <RareWordsKeyboard
        visible={visible3}
        onClose="onClose3"
        onChange="onChange"
        onError="onKeyBoardError"
      />
    </List>
  </Page>
);
