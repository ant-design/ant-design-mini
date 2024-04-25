import { InternalData, Text, View, Component } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import Icon from '../../../src/Icon/index.axml';
import Popover from '../../../src/Popover/index.axml';

export default ({ placements, visible }: InternalData) => (
  <Component>
    <Container title="基础用法">
      <Popover content="prompt" style="display:inline-block;">
        <AntButton size="small" inline>
          点我
        </AntButton>
      </Popover>
    </Container>

    <Container title="基础用法-回调函数">
      <Popover
        content="prompt"
        placement="top"
        onVisibleChange="onVisibleChange"
      >
        <AntButton>点我</AntButton>
      </Popover>
    </Container>

    <Container title="自定义颜色">
      <View class="custom">
        <Popover content="红色" color="red">
          <Text>点我红色</Text>
        </Popover>

        <Popover content="蓝色" color="blue">
          <Text>点我蓝色</Text>
        </Popover>
      </View>
    </Container>

    <Container title="点击icon查看">
      查看说明
      <Popover content="说明" style="display: inline-block">
        <Icon type="QuestionCircleOutline" />
      </Popover>
    </Container>

    <Container title="自定义位置">
      <View class="custom">
        {placements.map((item) => (
          <Popover placement={item}>
            <AntButton size="small" inline className="custom-child">
              <View>点我</View>
              {item}
            </AntButton>

            <View slot="content" class="content">
              {item}
            </View>
          </Popover>
        ))}
      </View>
    </Container>

    <Container title="自定义mask">
      <Popover
        content="prompt"
        maskStyle="background: rgba(0, 0, 0, 0.6);"
        style="display:inline-block;"
      >
        <AntButton size="small" inline>
          点我
        </AntButton>
      </Popover>
    </Container>

    <Container title="受控">
      <View>
        <Popover
          content="prompt"
          placement="right"
          showMask={false}
          visible={visible}
          style="display:inline-block;"
        >
          <Text>点击按钮修改visible</Text>
        </Popover>
      </View>
      <AntButton
        size="small"
        inline
        onTap="handleVisibleChange"
        style="margin-top: 8px"
      >
        change visible
      </AntButton>
    </Container>
  </Component>
);
