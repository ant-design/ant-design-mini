import { Page, View } from 'tsxml';
import AntFormInput from '../../../src/Form/FormInput/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <AntFormInput
      label="用户名"
      name="account"
      validateStatus="error"
      help="需要填写用户名"
      ref="handleRef"
    />

    <AntFormInput
      label="地址"
      name="address"
      help="需要填写地址"
      ref="handleRef"
    />

    <AntFormInput label="水果" name="fruit" ref="handleRef" />

    <View class="buttons">
      <AntButton type="primary" onTap="submit" style="margin-bottom: 12px">
        提交
      </AntButton>
      <AntButton onTap="reset">重置</AntButton>
    </View>
  </Page>
);
