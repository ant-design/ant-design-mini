import AntFormInput from '../../../src/Form/FormInput/index.axml';
import AntFormSwitch from '../../../src/Form/FormSwitch/index.axml';
import AntFormStepper from '../../../src/Form/FormStepper/index.axml';
import AntButton from '../../../src/Button/index.axml';
import { View, Page } from 'tsxml';

export default ({ position }) => (
  <Page>
    <AntFormInput
      label="用户名"
      name="account"
      required
      position={position}
      ref="handleRef"
    />

    <AntFormInput
      label="地址"
      name="address"
      position={position}
      ref="handleRef"
    />

    <AntFormSwitch
      label="选择"
      name="needDelivery"
      position={position}
      ref="handleRef"
    />

    <AntFormStepper
      label="数量"
      name="quantity"
      position={position}
      ref="handleRef"
    />

    <View class="buttons">
      <AntButton type="primary" onTap="submit" className="button">
        提交
      </AntButton>
      <AntButton onTap="reset" className="button">
        重置
      </AntButton>
      <AntButton onTap="toggle" className="button">
        切换表单布局
      </AntButton>
    </View>
  </Page>
);
