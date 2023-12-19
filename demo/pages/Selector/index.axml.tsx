import AntSelector from '../../../src/Selector/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntButton from '../../../src/Button/index.axml';
import { Page } from 'tsxml';

export default ({ items1, items2, items3, value }) => (
  <Page>
    <AntContainer title="单选">
      <AntSelector options={items1} />
    </AntContainer>

    <AntContainer title="单选-选项带有副标题">
      <AntSelector defaultValue="2" options={items2} />
    </AntContainer>

    <AntContainer title="多选">
      <AntSelector defaultValue={['1', '2']} options={items1} multiple />
    </AntContainer>

    <AntContainer title="多选 (最少选 2 个 最多选 4 个)">
      <AntSelector
        defaultValue={['1']}
        options={items1}
        multiple
        maxSelectedCount={4}
        minSelectedCount={2}
        onSelectMax="onSelectMax"
      />
    </AntContainer>

    <AntContainer title="全禁用">
      <AntSelector value={['1', '2']} options={items1} disabled multiple />
    </AntContainer>

    <AntContainer title="部分禁用">
      <AntSelector defaultValue={['1', '2']} options={items3} multiple />
    </AntContainer>

    <AntContainer title="受控模式">
      <AntSelector value={value} options={items1} onChange="handleChange" />
      <AntButton size="large" onTap="handleChangeValue">
        改变选中值为选项三
      </AntButton>
    </AntContainer>

    <AntContainer title="单选-不允许清空">
      <AntSelector
        defaultValue="1"
        minSelectedCount={1}
        onSelectMin="onSelectMin"
        options={items1}
      />
    </AntContainer>
  </Page>
);
