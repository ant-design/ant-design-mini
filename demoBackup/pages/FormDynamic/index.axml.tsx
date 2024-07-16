import { Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntFormInput from '../../../src/Form/FormInput/index.axml';
import AntIcon from '../../../src/Icon/index.axml';

export default ({ list }) => (
  <Page>
    {list.map((item, index) => (
      <AntFormInput
        key={"id"}
        label={list[index].id}
        name={`account${list[index].id}`}
        required
        message="需要输入用户名"
        ref="handleRef"
      >
        <View slot="extra" onTap="minus" data-index={index}>
          <AntIcon type="MinusCircleOutline" />
        </View>
      </AntFormInput>
    ))}
    <View class="buttons">
      <AntButton onTap="add" className="button">
        添加用户
        <AntIcon type="AddCircleOutline" />
      </AntButton>
      <AntButton type="primary" onTap="submit" className="button">
        提交
      </AntButton>
      <AntButton onTap="reset" className="button">
        重置
      </AntButton>
    </View>
  </Page>
);
