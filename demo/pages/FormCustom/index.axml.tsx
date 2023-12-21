import { Page, View } from 'tsxml';
import FormInput from '../../../src/Form/FormInput/index.axml';
import FormChecklist from './checklist/index.axml';
import FormLocation from './location/index.axml';
import Button from '../../../src/Button/index.axml';

export default ({ likeOptions, handleRef }) => (
  <Page>
    <FormInput
      label="用户名"
      name="account"
      required
      placeholder="请输入用户名"
      position="vertical"
      inputClassName="input"
      ref="handleRef"
    />

    <FormChecklist
      label="喜欢"
      name="like"
      required
      message="需要选择"
      options={likeOptions}
      position="vertical"
      ref="handleRef"
    />

    <FormLocation
      label="位置"
      name="location"
      required
      message="需要选择位置"
      position="vertical"
      ref={handleRef}
    />

    <View class="buttons">
      <Button type="primary" onTap="submit" className="button">
        提交
      </Button>
      <Button onTap="reset" className="button">
        重置
      </Button>
    </View>
  </Page>
);
