import { Page, View } from 'tsxml';
import AntRadioGroup from '../../../src/Radio/RadioGroup/index.axml';
import AntContainer from '../../../src/Container/index.axml';

export default ({ item, options, optionsWithDisabled, value }) => (
  <Page>
    <AntContainer title="基础用法">
      <AntRadioGroup options={options} onChange="onChange" />
    </AntContainer>

    <AntContainer title="初始值">
      <AntRadioGroup
        defaultValue="banana"
        options={options}
        onChange="onChange"
      />
    </AntContainer>

    <AntContainer title="横向布局">
      <AntRadioGroup options={options} position="horizontal" />
    </AntContainer>

    <AntContainer title="禁用模式-所有禁用">
      <AntRadioGroup options={options} disabled />
    </AntContainer>

    <AntContainer title="禁用模式-其中有的禁用">
      <AntRadioGroup options={optionsWithDisabled} />
    </AntContainer>

    <AntContainer title="控制模式">
      <AntRadioGroup value={value} options={options} onChange="handleChange" />
    </AntContainer>

    {/* #if ALIPAY */}
    <AntContainer title="自定义">
      <AntRadioGroup options={options} color="red" defaultValue="banana">
        <View slot="label" slot-scope="item">
          {item.index + 1}
          {item.value.label}
        </View>
      </AntRadioGroup>
    </AntContainer>
    {/* #endif */}
  </Page>
);
