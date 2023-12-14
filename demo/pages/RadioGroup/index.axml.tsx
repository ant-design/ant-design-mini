import { Page, View, Text } from 'tsxml';
import RadioGroup from '../../../src/Radio/RadioGroup/index.axml';
import Container from '../../../src/Container/index.axml';

export default ({ item }) => (
  <Page>
    <Container title="基础用法">
      <RadioGroup options="{{options}}" onChange="onChange" />
    </Container>

    <Container title="初始值">
      <RadioGroup
        defaultValue="banana"
        options="{{options}}"
        onChange="onChange"
      />
    </Container>

    <Container title="横向布局">
      <RadioGroup options="{{options}}" position="horizontal" />
    </Container>

    <Container title="禁用模式-所有禁用">
      <RadioGroup options="{{options}}" disabled />
    </Container>

    <Container title="禁用模式-其中有的禁用">
      <RadioGroup options="{{optionsWithDisabled}}" />
    </Container>

    <Container title="控制模式">
      <RadioGroup
        value="{{value}}"
        options="{{options}}"
        onChange="handleChange"
      />
    </Container>

    <Container title="自定义">
      <RadioGroup options="{{options}}" color="red" defaultValue="banana">
        <View slot="label" slot-scope="item">
          <View>
            <Text>{item.index + 1}</Text>
            <Text>{item.value.label}</Text>
          </View>
        </View>
      </RadioGroup>
    </Container>
  </Page>
);
