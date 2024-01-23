import { View, Text, InternalData, Page } from 'tsxml';
import NumberKeyboard from '../../../src/NumberKeyboard/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import List from '../../../src/List/index.axml';

export default ({ value, visible }: InternalData) => (
  <Page>
    <List header="数字输入框示例">
      <ListItem>
        <View
          class={`number-content ${value ? '' : 'number-placeholder'}`}
          catchTap="onNumberFocus"
        >
          {value ? (
            <Text>{value}</Text>
          ) : (
            <Text class="number-content-tip">0.00</Text>
          )}
          {visible && (
            <View
              class="number-light"
              style={value ? 'position: static;' : 'position: absolute;'}
            />
          )}
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
