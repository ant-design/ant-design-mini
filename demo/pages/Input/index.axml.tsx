import { InternalData, Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import AntInput from '../../../src/Input/index.axml';

export default (_, { value, money }: InternalData) => (
  <Page>
    <Container title="基础用法">
      <AntInput placeholder="请输入内容" onChange="onChange" />
    </Container>

    <Container title="初始值">
      <AntInput
        placeholder="请输入内容"
        defaultValue="这是antd mini小程序组件"
        onChange="onChange"
      />
    </Container>

    <Container title="带清除按钮">
      <AntInput placeholder="请输入内容" allowClear></AntInput>
    </Container>

    <Container title="带有前缀后缀">
      <AntInput placeholder="请输入内容" onChange="onChange" allowClear>
        <View slot="prefix">￥</View>
        <View slot="suffix">RMB</View>
      </AntInput>
    </Container>

    <Container title="禁用状态">
      <AntInput placeholder="被禁用的输入框" disabled={true} />
    </Container>

    <Container title="受控模式">
      <AntInput
        value={value}
        placeholder="请输入内容"
        allowClear
        onChange="handleChange"
      />
      <AntButton onTap="clear" inline size="small">
        clear
      </AntButton>
    </Container>

    <Container title="受控模式-输入金额">
      <AntInput
        placeholder="请输入金额"
        value={money}
        onChange="handleMoney"
        type="digit"
        className="input money"
        focusClassName="border"
        allowClear
      >
        <View slot="prefix">￥</View>
        <View slot="suffix">RMB</View>
      </AntInput>
    </Container>

    <Container title="非受控模式通过ref修改input">
      <AntInput placeholder="请输入内容" onChange="onChange" ref="handleRef" />

      <View>
        <AntButton inline onTap="clearByInputRef">
          clear
        </AntButton>
      </View>
    </Container>
  </Page>
);
