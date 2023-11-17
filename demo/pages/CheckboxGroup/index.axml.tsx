import { InternalData, View } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import CheckboxGroup from '../../../src/Checkbox/CheckboxGroup/index.axml';

export default ({ options, value, item }: InternalData) => (
  <View>
    <Container title="基础用法">
      <CheckboxGroup options={options} onChange="onChange" />
    </Container>
    <Container title="初始值">
      <CheckboxGroup
        defaultValue={['banana']}
        options={options}
        onChange="onChange"
      />
    </Container>
    <Container title="横向布局">
      <CheckboxGroup options={options} position="horizontal" />
    </Container>
    <Container title="禁用模式">
      <CheckboxGroup options={options} disabled />
    </Container>
    <Container title="受控模式">
      <CheckboxGroup value={value} options={options} onChange="handleChange" />
    </Container>
    <Container title="自定义颜色">
      <CheckboxGroup
        options={options}
        defaultValue={['apple', 'banana']}
        color="red"
      />
    </Container>
    <Container title="自定义">
      <CheckboxGroup options={options}>
        <View slot="label" slot-scope="item">
          ${item.index + 1} ${item.value.label}
        </View>
      </CheckboxGroup>
    </Container>
  </View>
);
