import { View, Page, InternalData, Text } from 'tsxml';
import AntFormInput from '../../../src/Form/FormInput/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ item }: InternalData) => (
  <Page>
    {/* #if WECHAT */}
    <Text>
      由于微信小程序不支持 slot-scope="item", 所以暂时不支持自定义 Error
    </Text>
    {/* #endif */}
    <AntFormInput
      label="用户名"
      name="account"
      required
      placeholder="请输入用户名"
      message="需要输入用户名"
      validateStatus="success"
      ref="handleRef"
    >
      <View slot="footer" slot-scope="item">
        {item.status === 'error' && (
          <View class="errors">
            <AntIcon type="CloseCircleOutline" style="margin-right: 4px" />
            {item.errors}
          </View>
        )}
      </View>
    </AntFormInput>

    <AntFormInput
      label="地址"
      name="address"
      required
      placeholder="请输入地址"
      message="需要输入地址"
      validateStatus="success"
      ref="handleRef"
    >
      <View slot="footer" slot-scope="item">
        {item.status === 'error' && (
          <View class="errors">
            <AntIcon type="CloseCircleOutline" style="margin-right: 4px" />
            {item.errors}
          </View>
        )}
      </View>
    </AntFormInput>

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
