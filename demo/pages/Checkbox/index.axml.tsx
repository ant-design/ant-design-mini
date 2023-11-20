import { Page, View } from 'tsxml';
import AntContainer from '../../../src/Container/index.axml';
import AntCheckbox from '../../../src/Checkbox/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ checked }) => (
  <Page>
    <AntContainer title="基础用法">
      <AntCheckbox onChange="onChange">Checkbox</AntCheckbox>
    </AntContainer>

    <AntContainer title="初始值">
      <AntCheckbox defaultChecked={true}>Checkbox</AntCheckbox>
    </AntContainer>

    <AntContainer title="禁用模式">
      <AntCheckbox disabled>Checkbox1</AntCheckbox>
      <AntCheckbox defaultChecked disabled>
        Checkbox2
      </AntCheckbox>
    </AntContainer>

    <AntContainer title="自定义颜色">
      <AntCheckbox color="red" defaultChecked>
        Checkbox
      </AntCheckbox>
    </AntContainer>

    <AntContainer title="控制模式">
      <View>
        <AntCheckbox checked={checked} onChange="handleChange">
          Checkbox
        </AntCheckbox>
      </View>

      <AntButton onTap="toggleChange">切换</AntButton>
    </AntContainer>
  </Page>
);
