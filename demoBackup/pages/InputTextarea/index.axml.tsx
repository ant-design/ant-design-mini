import { View, Page, InternalData } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntTextarea from '../../../src/Input/Textarea/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default (_, { value }: InternalData) => (
  <Page>
    <AntContainer title="基础用法">
      <AntTextarea placeholder="请输入内容" autoHeight onChange="onChange" />
    </AntContainer>

    <AntContainer title="初始值">
      <AntTextarea
        placeholder="请输入内容"
        defaultValue="这是antd mini小程序组件"
        autoHeight
        onChange="onChange"
      />
    </AntContainer>

    <AntContainer title="带清除按钮">
      <AntTextarea placeholder="请输入内容" autoHeight allowClear />
    </AntContainer>

    <AntContainer title="禁用状态">
      <AntTextarea placeholder="被禁用的输入框" disabled />
    </AntContainer>

    <AntContainer title="受控模式">
      <AntTextarea
        value={value}
        placeholder="请输入内容"
        allowClear
        onChange="handleChange"
      />
      <AntButton onTap="clear" inline size="small">
        clear
      </AntButton>
    </AntContainer>

    <AntContainer title="非受控模式通过ref修改input">
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
    </AntContainer>
  </Page>
);
