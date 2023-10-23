import { TSXMLProps, View } from 'tsxml';
import helper from './sjs.sjs';

interface Props {
  b: number;
}

export default ({ b }: TSXMLProps<Props>) => (
  <View data-id={helper.format(b)}>text</View>
);
