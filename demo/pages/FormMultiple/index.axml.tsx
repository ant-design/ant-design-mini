import { Page, View } from 'tsxml';
import FormInput from '../../../src/Form/FormInput/index.axml';
import Container from '../../../src/Container/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <Container title="表单1">
      <FormInput
        label="用户名"
        name="account"
        allowClear
        required
        message="需要填写用户名"
        ref="handleRef"
      />

      <FormInput label="地址" name="address" allowClear ref="handleRef" />

      <View class="buttons">
        <AntButton type="primary" onTap="submit" style="margin-bottom: 12px">
          提交
        </AntButton>
        <AntButton onTap="reset">重置</AntButton>
      </View>
    </Container>

    <Container title="表单2">
      <FormInput
        label="用户名"
        name="account"
        allowClear
        required
        message="需要填写用户名"
        ref="handleRef2"
      />

      <FormInput label="地址" name="address" allowClear ref="handleRef2" />

      <View class="buttons">
        <AntButton type="primary" onTap="submit2" style="margin-bottom: 12px">
          提交
        </AntButton>
        <AntButton onTap="reset2">重置</AntButton>
      </View>
    </Container>
  </Page>
);
