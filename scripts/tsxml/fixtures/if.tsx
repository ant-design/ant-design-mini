import { Text, View, TSXMLProps } from 'tsxml';

interface Props {
  a: boolean;
  b: boolean;
  c: boolean;
}

export default ({ a, b, c }: TSXMLProps<Props>) => (
  <View>
    {/* one */}
    {!!a && <Text>a</Text>}
    {!!a && b && <Text> a & b</Text>}
    {a ? <Text>a</Text> : <Text>!a</Text>}
    {a ? <Text>1</Text> : b ? <Text>2</Text> : <Text>3</Text>}
    {a ? <Text>1</Text> : b ? <Text>2</Text> : c && <Text>3</Text>}
    {<Text class={a ? '1' : '2'}></Text>}
    <Text class={`1 ${a ? '1' + '2' : 2} 2`}></Text>
    <View>{a || b}</View>
  </View>
);
