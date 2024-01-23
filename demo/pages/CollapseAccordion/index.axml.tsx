import { Page, InternalData } from 'tsxml';
import Collapse from '../../../src/Collapse/index.axml';

export default ({ items }: InternalData) => (
  <Page>
    <Collapse items={items} onChange="onChange" accordion />
  </Page>
);
