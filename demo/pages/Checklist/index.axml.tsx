import { InternalData, Page, View } from 'tsxml';
import Checklist from '../../../src/Checklist/index.axml';
import Container from '../../../src/Container/index.axml';
import Icon from '../../../src/Icon/index.axml';

export default ({
  options_1,
  options_2,
  options_3,
  options_4,
  value,
  props,
}: InternalData) => (
  <Page>
    <Container title="简单布局-单选">
      <Checklist
        defaultValue={[1]}
        options={options_1}
        data-options={options_1}
        onChange="onChange"
      />
    </Container>

    <Container title="复杂布局-多选">
      <Checklist
        defaultValue={[1, 2]}
        options={options_2}
        multiple
        onChange="onChange"
      />
    </Container>

    <Container title="受控模式">
      <Checklist
        value={value}
        options={options_2}
        multiple
        onChange="onChangeControlled"
      />
    </Container>

    <Container title="禁用状态">
      <Checklist
        defaultValue={[2]}
        options={options_3}
        multiple
        onChange="onChange"
      />
    </Container>

    <Container title="只读状态">
      <Checklist
        defaultValue={[2]}
        options={options_4}
        multiple
        onChange="onChange"
      />
    </Container>

    {/* #if ALIPAY */}
    <Container title="自定义勾选图标&&组件内容">
      <Checklist
        defaultValue={[2]}
        options={options_3}
        multiple
        onChange="onChange"
      >
        <View slot="icon">
          <Icon
            style="color: red"
            type="LikeOutline"
            className="demo-checklist-checked-icon"
          />
        </View>
        <View slot="content" slot-scope="props">
          title: {props.item.title}
        </View>
      </Checklist>
    </Container>
    {/* #endif */}
  </Page>
);
