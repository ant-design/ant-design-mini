import { Text, View } from 'tsxml';

interface Props {
  a: boolean;
  b: boolean;
}

export default ({ a }: Props) => (
  <View>
    <Text onTap="a" catchTap="b">
      {a}
    </Text>
  </View>
);
