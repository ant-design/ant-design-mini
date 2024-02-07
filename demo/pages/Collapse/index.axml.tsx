import { Page, InternalData } from 'tsxml';
import AntCollapse from '../../../src/Collapse/index.axml';

export default ({ items }: InternalData) => (
  <Page>
    <AntCollapse defaultCurrent={[0]} items={items} onChange="onChange" />
  </Page>
);
