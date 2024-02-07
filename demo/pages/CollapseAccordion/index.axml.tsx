import { Page, InternalData } from 'tsxml';
import AntCollapse from '../../../src/Collapse/index.axml';

export default ({ items }: InternalData) => (
  <Page>
    <AntCollapse items={items} onChange="onChange" accordion />
  </Page>
);
