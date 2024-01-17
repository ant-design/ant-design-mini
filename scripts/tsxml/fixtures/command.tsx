import { $toArray, View } from 'tsxml';
import Component from './component';

export default ({ row }: { row: number }) => (
  <Component>
    {$toArray(row).map((_, index) => (
      <View>{index}</View>
    ))}
  </Component>
);
