import { InternalData, TSXMLProps, View, Text, Slot } from 'tsxml';
import Container from '../../../../src/Container/index.axml';
import { Props } from './collapse-container';

export default (
  _: TSXMLProps<Props>,
  { containerTitle, collapse }: InternalData
) => (
  <Container title={containerTitle}>
    <View slot="headerRight" onTap="handleToggle" data-id="demo1">
      {!collapse ? <Text>收起</Text> : <Text>展示</Text>}
    </View>
    {!collapse ? (
      <View>
        <Slot name="content"></Slot>
      </View>
    ) : (
      <View onTap="handleToggle">
        <Slot name="description"></Slot>
        <View class="placeholder">展示</View>
      </View>
    )}
  </Container>
);
