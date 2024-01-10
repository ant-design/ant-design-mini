import { View, Page } from 'tsxml';
import FormInput from '../../../src/Form/FormInput/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <FormInput
      label="用户名"
      name="account"
      required
      message="需要输入用户名"
      ref="handleRef"
    />

    <FormInput label="密码" name="password" password ref="handleRef" />

    <FormInput
      label="重复密码"
      name="confirm"
      password
      dependencies={['password']}
      ref="handleRef"
    />

    <View class="buttons">
      <AntButton type="primary" onTap="submit" style="margin-bottom: 12px">
        提交
      </AntButton>
      <AntButton onTap="reset" style="margin-bottom: 12px">
        重置
      </AntButton>
      <AntButton onTap="fill">Fill表单</AntButton>
    </View>
  </Page>
);
