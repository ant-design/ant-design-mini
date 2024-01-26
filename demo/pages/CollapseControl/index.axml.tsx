import { Page, InternalData } from 'tsxml';
import Collapse from '../../../src/Collapse/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ current, items }: InternalData) => (
  <Page>
    <AntButton onTap="toggle" inline>
      切换
    </AntButton>
    <AntButton onTap="changeContent" inline>
      修改content
    </AntButton>
    <AntButton onTap="addItems" inline>
      添加items
    </AntButton>
    {current}
    <Collapse items={items} current={current} onChange="onChange" />
  </Page>
);
