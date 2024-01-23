import { Page, InternalData } from 'tsxml';
import Collapse from '../../../src/Collapse/index.axml';
import Button from '../../../src/Button/index.axml';

export default ({ current, items }: InternalData) => (
  <Page>
    <Button onTap="toggle" inline>
      切换
    </Button>
    <Button onTap="changeContent" inline>
      修改content
    </Button>
    <Button onTap="addItems" inline>
      添加items
    </Button>
    {current}
    <Collapse items={items} current={current} onChange="onChange" />
  </Page>
);
