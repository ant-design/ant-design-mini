import { View, Text, InternalData, Page } from 'tsxml';
import NumberKeyboard from '../../../src/NumberKeyboard/index.axml';
import ListItem from '../../../src/List/ListItem/index.axml';
import List from '../../../src/List/index.axml';

interface Props {
  header?: string;
  value?: string;
  visible?: boolean;
  position?: string;
  onChange: () => void;
  onClose: () => void;
  onAmountFocus: () => void;
}

export default ({ header, value, visible }: InternalData) => (
  <Page>
    <List header={header}>
      <ListItem>
        <View
          class={`number-content ${value ? '' : 'number-placeholder'}`}
          catchTap="onAmountFocus"
        >
          {value && <Text>{value}</Text>}
          {!value && <Text class="number-content-tip">0.00</Text>}
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
