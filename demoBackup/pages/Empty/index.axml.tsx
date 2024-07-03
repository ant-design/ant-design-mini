import { View, Page } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntEmpty from '../../../src/Empty/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <AntContainer title="基础样式">
      <AntEmpty title="这里什么也没有" message="看看其它吧" />
    </AntContainer>

    <AntContainer title="添加操作按钮组">
      <AntEmpty title="这里什么也没有" message="看看其它吧">
        <View slot="extra">
          <AntButton size="small" inline>
            操作1
          </AntButton>
          <AntButton
            type="primary"
            size="small"
            inline
            style="margin-left: 12px"
          >
            操作2
          </AntButton>
        </View>
      </AntEmpty>
    </AntContainer>

    <AntContainer title="自定义图片">
      <AntEmpty
        title="这里什么也没有"
        message="看看其它吧"
        image="https://gw.alipayobjects.com/mdn/rms_7cc883/afts/img/A*PG7NQoXbN38AAAAAAAAAAAAAARQnAQ"
      />
    </AntContainer>
  </Page>
);
