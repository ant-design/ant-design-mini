import { InternalData, Page, View } from 'tsxml';
import FormInput from '../../../src/Form/FormInput/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ changedValuesText, allValuesText }: InternalData) => (
  <Page>
    <FormInput
      label="用户名"
      name="account"
      placeholder="请输入用户名"
      required
      ref="handleRef"
    />

    <FormInput
      label="地址"
      name="address"
      placeholder="请输入地址"
      ref="handleRef"
    />

    <View style="margin: 12px">
      onValuesChange:
      <View style="margin: 12px">
        <View>修改：{changedValuesText}</View>

        <View>表单：{allValuesText}</View>
      </View>
    </View>

    <View class="buttons">
      <AntButton type="primary" onTap="submit" className="button">
        提交
      </AntButton>
      <AntButton onTap="reset" className="button">
        重置
      </AntButton>
    </View>
  </Page>
);
