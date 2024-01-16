import { Page, View } from 'tsxml';
import FormInput from '../../../src/Form/FormInput/index.axml';
import FormSwitch from '../../../src/Form/FormSwitch/index.axml';
import FormStepper from '../../../src/Form/FormStepper/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default () => (
  <Page>
    <FormInput
      label="用户名"
      name="account"
      tooltip="用户账户对应名称"
      allowClear
      required
      message="需要填写用户名"
      ref="handleRef"
    />

    <FormInput label="地址" name="address" allowClear ref="handleRef" />

    <FormSwitch label="选择" name="needDelivery" ref="handleRef" />

    <FormStepper label="数量" name="quantity" ref="handleRef" />

    <View class="buttons">
      <AntButton type="primary" onTap="submit" style="margin-bottom: 12px;">
        提交
      </AntButton>
      <AntButton onTap="reset">重置</AntButton>
    </View>
  </Page>
);
