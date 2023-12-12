import { TSXMLProps, View } from 'tsxml';
import helper from './sjs.sjs';

interface Props {
  b: number;
  c: string;
}

export default ({ b, c }: TSXMLProps<Props>) => (
  <View data-id={helper.format(b)}>text {helper.format(c)}</View>
);
