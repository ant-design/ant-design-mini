import { Page } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import AntInput from '../../../src/Input/index.axml';
import AntTextarea from '../../../src/Input/Textarea/index.axml';

export default () => (
  <Page>
    <Container title="带有border">
      <AntInput
        className="custom"
        placeholder="请输入内容"
        onChange="onChange"
      />

      <AntInput className="custom" placeholder="请输入内容" onChange="onChange">
        <AntIcon type="SearchOutline" slot="prefix" />
        <AntIcon type="AudioOutline" slot="suffix" />
      </AntInput>

      <AntTextarea
        className="custom"
        placeholder="请输入内容"
        onChange="onChange"
      />
    </Container>

    <Container title="自定义背景颜色">
      <AntInput
        className="custom-color"
        placeholder="请输入内容"
        onChange="onChange"
      />

      <AntTextarea
        className="custom-color"
        placeholder="请输入内容"
        onChange="onChange"
      />
    </Container>

    {/* #if ALIPAY */}
    {/* 微信不支持  placeholderClassName */}
    <Container title="自定义 placeholderClassName">
      <AntInput
        placeholderClassName="placeholder"
        placeholder="请输入内容"
        onChange="onChange"
      />
    </Container>
    {/* #endif */}

    <Container title="自定义 placeholderStyle">
      <AntInput
        placeholderStyle="color: red;"
        placeholder="请输入内容"
        onChange="onChange"
      />
    </Container>
  </Page>
);
