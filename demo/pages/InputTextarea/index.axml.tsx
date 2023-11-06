import { View, Page, InternalData } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import AntTextarea from '../../../src/Input/Textarea/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default (_, { value }: InternalData) => (
  <Page>
    <Container title="基础用法">
      <AntTextarea placeholder="请输入内容" autoHeight onChange="onChange" />
    </Container>

    <Container title="初始值">
      <AntTextarea
        placeholder="请输入内容"
        defaultValue="这是antd mini小程序组件"
        autoHeight
        onChange="onChange"
      />
    </Container>

    <Container title="带清除按钮">
      <AntTextarea placeholder="请输入内容" autoHeight allowClear />
    </Container>

    <Container title="禁用状态">
      <AntTextarea placeholder="被禁用的输入框" disabled />
    </Container>

    <Container title="受控模式">
      <AntTextarea
        value={value}
        placeholder="请输入内容"
        allowClear
        onChange="handleChange"
      />
      <AntButton onTap="clear" inline size="small">
        clear
      </AntButton>
    </Container>

    <Container title="非受控模式通过ref修改input">
      <AntTextarea
        placeholder="请输入内容"
        allowClear
        onChange="onChange"
        ref="handleRef"
      />
      <View>
        <AntButton inline onTap="clearByInputRef">
          clear
        </AntButton>
      </View>
    </Container>
  </Page>
);
