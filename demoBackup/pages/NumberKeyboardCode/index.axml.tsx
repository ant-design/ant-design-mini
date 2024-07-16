import { Page, View, InternalData, $toArray } from 'tsxml';
import ListItem from '../../../src/List/ListItem/index.axml';
import List from '../../../src/List/index.axml';
import NumberKeyboard from '../../../src/NumberKeyboard/index.axml';

export default ({ visible, value }: InternalData) => (
  <Page>
    <List header="数字键盘示例：验证码">
      <ListItem>
        <View class="number-code" catchTap="onCodeFocus">
          {$toArray(4).map((item, index) => (
            <View
              class={`number-code-view ${
                visible && value.length === index ? 'number-code-border' : ''
              }`}
            >
              {value[index] || ''}
              {visible && value.length === index && (
                <View class="number-code-tip" />
              )}
            </View>
          ))}
        </View>
      </ListItem>
      <NumberKeyboard
        visible={visible}
        point={false}
        closeable={true}
        value={value}
        onChange="onChange"
        onClose="onClose"
      />
    </List>
  </Page>
);
