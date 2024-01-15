import FormInput from '../../../src/Form/FormInput/index.axml';
import FormSwitch from '../../../src/Form/FormSwitch/index.axml';
import FormStepper from '../../../src/Form/FormStepper/index.axml';
import Button from '../../../src/Button/index.axml';
import { View, Page } from 'tsxml';

export default ({ position }) => (
  <Page>
    <FormInput
      label="用户名"
      name="account"
      required
      position={position}
      ref="handleRef"
    />

    <FormInput
      label="地址"
      name="address"
      position={position}
      ref="handleRef"
    />

    <FormSwitch
      label="选择"
      name="needDelivery"
      position={position}
      ref="handleRef"
    />

    <FormStepper
      label="数量"
      name="quantity"
      position={position}
      ref="handleRef"
    />

    <View class="buttons">
      <Button type="primary" onTap="submit" class="button">
        提交
      </Button>
      <Button onTap="reset" class="button">
        重置
      </Button>
      <Button onTap="toggle" class="button">
        切换表单布局
      </Button>
    </View>
  </Page>
);
