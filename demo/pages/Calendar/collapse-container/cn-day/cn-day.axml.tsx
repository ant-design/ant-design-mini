import { InternalData, View } from 'tsxml';

export default ({ cnday, festival, unset }: InternalData) => (
  <View class={`cn-day ${festival ? 'festival' : ''} ${unset ? 'unset' : ''}`}>
    {cnday}
  </View>
);
