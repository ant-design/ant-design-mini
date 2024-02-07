import { InternalData, Page, View } from 'tsxml';
import AntChecklist from '../../../src/Checklist/index.axml';
import AntContainer from '../../../src/Container/index.axml';
import AntIcon from '../../../src/Icon/index.axml';

export default ({
  options_1,
  options_2,
  options_3,
  options_4,
  value,
  props,
}: InternalData) => (
  <Page>
    <AntContainer title="简单布局-单选">
      <AntChecklist
        defaultValue={[1]}
        options={options_1}
        data-options={options_1}
        onChange="onChange"
      />
    </AntContainer>

    <AntContainer title="复杂布局-多选">
      <AntChecklist
        defaultValue={[1, 2]}
        options={options_2}
        multiple
        onChange="onChange"
      />
    </AntContainer>

    <AntContainer title="受控模式">
      <AntChecklist
        value={value}
        options={options_2}
        multiple
        onChange="onChangeControlled"
      />
    </AntContainer>

    <AntContainer title="禁用状态">
      <AntChecklist
        defaultValue={[2]}
        options={options_3}
        multiple
        onChange="onChange"
      />
    </AntContainer>

    <AntContainer title="只读状态">
      <AntChecklist
        defaultValue={[2]}
        options={options_4}
        multiple
        onChange="onChange"
      />
    </AntContainer>

    {/* #if ALIPAY */}
    <AntContainer title="自定义勾选图标&&组件内容">
      <AntChecklist
        defaultValue={[2]}
        options={options_3}
        multiple
        onChange="onChange"
      >
        <View slot="icon">
          <AntIcon
            style="color: red"
            type="LikeOutline"
            className="demo-checklist-checked-icon"
          />
        </View>
        <View slot="content" slot-scope="props">
          title: {props.item.title}
        </View>
      </AntChecklist>
    </AntContainer>
    {/* #endif */}
  </Page>
);
