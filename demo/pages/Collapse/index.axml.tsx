import { Page, InternalData } from 'tsxml';
import Collapse from '../../../src/Collapse/index.axml';

export default ({ items }: InternalData) => (
  <Page>
    <Collapse defaultCurrent={[0]} items={items} onChange="onChange" />
  </Page>
);
