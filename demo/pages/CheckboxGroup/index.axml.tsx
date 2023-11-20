import { InternalData, View, Component } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import AntCheckboxGroup from '../../../src/Checkbox/CheckboxGroup/index.axml';

export default ({ options, value, item }: InternalData) => (
  <Component>
    <Container title="基础用法">
      <AntCheckboxGroup options={options} onChange="onChange" />
    </Container>
    <Container title="初始值">
      <AntCheckboxGroup
        defaultValue={['banana']}
        options={options}
        onChange="onChange"
      />
    </Container>
    <Container title="横向布局">
      <AntCheckboxGroup options={options} position="horizontal" />
    </Container>
    <Container title="禁用模式">
      <AntCheckboxGroup options={options} disabled />
    </Container>
    <Container title="受控模式">
      <AntCheckboxGroup
        value={value}
        options={options}
        onChange="handleChange"
      />
    </Container>
    <Container title="自定义颜色">
      <AntCheckboxGroup
        options={options}
        defaultValue={['apple', 'banana']}
        color="red"
      />
    </Container>
    {/* #if ALIPAY */}
    <Container title="自定义 Label">
      <AntCheckboxGroup options={options}>
        <View slot="label" slot-scope="item">
          {item.index + 1} {item.value.label}
        </View>
      </AntCheckboxGroup>
    </Container>
    {/* #endif */}
  </Component>
);
