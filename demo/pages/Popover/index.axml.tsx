import { InternalData, Text, View } from 'tsxml';
import Button from '../../../src/Button/index.axml';
import Container from '../../../src/Container/index.axml';
import Icon from '../../../src/Icon/index.axml';
import Popover from '../../../src/Popover/index.axml';

export default (_, { placements, visible }: InternalData) => (
  <Component>
    <Container title="基础用法">
      <Popover content="prompt">
        <Button size="small" inline>
          点我
        </Button>
      </Popover>
    </Container>

    <Container title="基础用法-回调函数">
      <Popover
        content="prompt"
        placement="top"
        onVisibleChange="onVisibleChange"
      >
        <Button>点我</Button>
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
          <Popover key={item} placement={item}>
            <Button size="small" inline>
              <View>点我</View>
              {item}
            </Button>

            <View slot="content" class="content">
              {item}
            </View>
          </Popover>
        ))}
      </View>
    </Container>

    <Container title="自定义mask">
      <Popover content="prompt" maskStyle="background: rgba(0, 0, 0, 0.6);">
        <Button size="small" inline>
          点我
        </Button>
      </Popover>
    </Container>

    <Container title="受控">
      <Popover
        content="prompt"
        placement="right"
        showMask={false}
        visible={visible}
      >
        <Text>点击按钮修改visible</Text>
      </Popover>

      <Button
        size="small"
        inline
        onTap="handleVisibleChange"
        style="margin-top: 8px"
      >
        change visible
      </Button>
    </Container>
  </Component>
);
