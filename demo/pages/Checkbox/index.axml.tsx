import { Page, View } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import AntCheckbox from '../../../src/Checkbox/index.axml';
import AntButton from '../../../src/Button/index.axml';

export default ({ checked }) => (
  <Page>
    <Container title="基础用法">
      <AntCheckbox onChange="onChange">Checkbox</AntCheckbox>
    </Container>

    <Container title="初始值">
      <AntCheckbox defaultChecked={true}>Checkbox</AntCheckbox>
    </Container>

    <Container title="禁用模式">
      <AntCheckbox disabled>Checkbox1</AntCheckbox>
      <AntCheckbox defaultChecked disabled>
        Checkbox2
      </AntCheckbox>
    </Container>

    <Container title="自定义颜色">
      <AntCheckbox color="red" defaultChecked>
        Checkbox
      </AntCheckbox>
    </Container>

    <Container title="控制模式">
      <View>
        <AntCheckbox checked={checked} onChange="handleChange">
          Checkbox
        </AntCheckbox>
      </View>

      <AntButton onTap="toggleChange">切换</AntButton>
    </Container>
  </Page>
);
