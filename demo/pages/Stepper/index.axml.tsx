import { InternalData, Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import Stepper from '../../../src/Stepper/index.axml';

export default (_, { value, }: InternalData) => (
  <Page>
    <Container title="基础用法">
      <Stepper
        onChange="onChange"
        onBlur="onBlur"
        onConfirm="onConfirm"
        onFocus="onFocus"
      />
    </Container>
    <Container title="初始值">
      <Stepper defaultValue={0} />
    </Container>
    <Container title="step 0.01">
      <Stepper defaultValue={0} step={0.01} inputStyle="width: 60px" />
    </Container>
    <Container title="precision 1">
      <Stepper defaultValue={0} precision={1} inputStyle="width: 60px" />
    </Container>
    <Container title="限制输入范围 [0, 10]">
      <Stepper defaultValue={0} min={0} max={10} step={1} />
    </Container>
    <Container title="禁用状态">
      <Stepper defaultValue={0} disabled />
    </Container>
    <Container title="输入框只读">
      <Stepper defaultValue={0} inputReadOnly />
    </Container>
    <Container title="受控组件">
      <Stepper
        value={value}
        onChange="handleChange"
        style="margin: 8px 0"
        onBlur="onBlur"
        onConfirm="onConfirm"
        onFocus="onFocus"
      />
      value: {value}
      <View class="list">
        <AntButton inline onTap="add">
          add
        </AntButton>
        <AntButton inline onTap="minus">
          minus
        </AntButton>
        <AntButton inline onTap="clear">
          clear
        </AntButton>
      </View>
    </Container>
  </Page>
);
