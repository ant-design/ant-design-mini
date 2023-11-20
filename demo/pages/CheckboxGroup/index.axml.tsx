import { InternalData, View, Component } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntCheckboxGroup from '../../../src/Checkbox/CheckboxGroup/index.axml';

export default ({ options, value, item }: InternalData) => (
  <Component>
    <AntContainer title="基础用法">
      <AntCheckboxGroup options={options} onChange="onChange" />
    </AntContainer>
    <AntContainer title="初始值">
      <AntCheckboxGroup
        defaultValue={['banana']}
        options={options}
        onChange="onChange"
      />
    </AntContainer>
    <AntContainer title="横向布局">
      <AntCheckboxGroup options={options} position="horizontal" />
    </AntContainer>
    <AntContainer title="禁用模式">
      <AntCheckboxGroup options={options} disabled />
    </AntContainer>
    <AntContainer title="受控模式">
      <AntCheckboxGroup
        value={value}
        options={options}
        onChange="handleChange"
      />
    </AntContainer>
    <AntContainer title="自定义颜色">
      <AntCheckboxGroup
        options={options}
        defaultValue={['apple', 'banana']}
        color="red"
      />
    </AntContainer>
    {/* #if ALIPAY */}
    <AntContainer title="自定义 Label">
      <AntCheckboxGroup options={options}>
        <View slot="label" slot-scope="item">
          {item.index + 1} {item.value.label}
        </View>
      </AntCheckboxGroup>
    </AntContainer>
    {/* #endif */}
  </Component>
);
