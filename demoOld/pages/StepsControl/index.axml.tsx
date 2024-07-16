import { InternalData, Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntSteps from '../../../src/Steps/index.axml';

export default ({ items, current }: InternalData) => (
  <Page>
    <AntContainer title="步骤条控制">
      <AntSteps items={items} current={current} />
      <AntButton onTap="onNextTap" type="primary">
        {current < items.length - 1 ? <View>下一步</View> : <View>完成</View>}
      </AntButton>
      {current > 0 && <AntButton onTap="onPrevTap">上一步</AntButton>}
    </AntContainer>
  </Page>
);
