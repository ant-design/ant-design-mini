import { Text, View, TSXMLProps } from 'tsxml';

interface Props {
  a: boolean;
  b: boolean;
}

export default ({ a }: TSXMLProps<Props>) => (
  <View>
    <Text onTap="a" catchTap="b">
      {a}
    </Text>
  </View>
);
