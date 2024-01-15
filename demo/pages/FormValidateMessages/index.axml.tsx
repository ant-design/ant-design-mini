import { Page, View } from 'tsxml';
import Button from '../../../src/Button/index.axml';
import FormInput from '../../../src/Form/FormInput/index.axml';

export default () => (
  <Page>
    <FormInput label="用户名" name="account" ref="handleRef" />
    <FormInput label="密码" name="password" password ref="handleRef" />
    <FormInput label="IP" name="ip" ref="handleRef" />
    <View class="buttons">
      <Button type="primary" onTap="submit" style="margin-bottom: 12px">
        提交
      </Button>
      <Button onTap="reset" style="margin-bottom: 12px">
        重置
      </Button>
    </View>
  </Page>
);
