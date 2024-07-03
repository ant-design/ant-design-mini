import { InternalData, Page, Text, View } from 'tsxml';
import List from '../../../src/List/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import NumberKeyboard from '../../../src/NumberKeyboard/index.axml';

export default ({ value, visible }: InternalData) => (
  <Page>
    <List header="数字键盘示例: 金额输入">
      <ListItem>
        <View
          class={`number-content ${value ? '' : 'number-placeholder'}`}
          catchTap="onAmountFocus"
        >
          {value ? (
            <Text>{value}</Text>
          ) : (
            <Text class="number-content-tip">0.00</Text>
          )}
          {visible && (
            <View
              class="number-light"
              style={`position: ${value ? 'static' : 'absolute'}`}
            />
          )}
        </View>
      </ListItem>
      <NumberKeyboard
        visible={visible}
        closeable={true}
        value={value}
        onChange="onChange"
        onClose="onClose"
      />
    </List>
  </Page>
);
