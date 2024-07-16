import { Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntFormInput from '../../../src/Form/FormInput/index.axml';

export default () => (
  <Page>
    <AntFormInput label="用户名" name="account" ref="handleRef" />
    <AntFormInput label="密码" name="password" password ref="handleRef" />
    <AntFormInput label="IP" name="ip" ref="handleRef" />
    <View class="buttons">
      <AntButton type="primary" onTap="submit" style="margin-bottom: 12px">
        提交
      </AntButton>
      <AntButton onTap="reset" style="margin-bottom: 12px">
        重置
      </AntButton>
    </View>
  </Page>
);
