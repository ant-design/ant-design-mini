import { Page, View } from 'tsxml';
import FormInput from '../../../src/Form/FormInput/index.axml';
import FormSwitch from '../../../src/Form/FormSwitch/index.axml';
import FormStepper from '../../../src/Form/FormStepper/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ needFruit }) => (
  <Page>
    <FormSwitch
      label="需要水果"
      name="needFruit"
      onChange="onChange"
      ref="handleRef"
    />

    {needFruit && (
      <View>
        <FormStepper label="数量" name="quantity" ref="handleRef" />
        <FormInput
          label="收货地址"
          name="address"
          required
          message="需要填写收货地址"
          ref="handleRef"
        />
      </View>
    )}

    <View class="buttons">
      <AntButton type="primary" onTap="submit" style="margin-bottom: 12px">
        提交
      </AntButton>
      <AntButton onTap="reset">重置</AntButton>
    </View>
  </Page>
);
