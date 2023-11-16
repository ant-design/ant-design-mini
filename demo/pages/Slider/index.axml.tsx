import Slider from '../../../src/Slider/index.axml';
import Icon from '../../../src/Icon/index.axml';
import Stepper from '../../../src/Stepper/index.axml';
import Container from '../../../src/Container/index.axml';
import { View, Component, Slot, InternalData, Text } from 'tsxml';

export default ({ value, props }: InternalData) => (
  <Component>
    <Container title="基本使用">
      <Slider
        defaultValue={80}
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="无节点双滑块">
      <Slider
        defaultValue={[20, 60]}
        range
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="节点单滑块">
      <Slider
        defaultValue={60}
        step={20}
        showTicks
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="有数字节点单滑块">
      <Slider
        defaultValue={80}
        step={20}
        showTicks
        showNumber
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="节点双滑块">
      <Slider
        defaultValue={[10, 50]}
        step={10}
        showTicks
        range
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="有数字节点双滑块">
      <Slider
        defaultValue={[10, 50]}
        step={10}
        showTicks
        showNumber
        range
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="在拖动时显示悬浮提示">
      <Slider
        defaultValue={80}
        showTooltip
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="受控模式">
      <Slider min={0} max={100} value={value} onChange="handleChange" />
      <Stepper min={0} max={100} value={value} onChange="handleChange" />
    </Container>

    <Container title="自定义">
      <Slider
        defaultValue={80}
        step={20}
        showTooltip
        showTicks
        showNumber
        activeLineStyle="background-color: #ff8f1f"
        activeDotStyle="background-color: red"
        onChange="onChange"
        onAfterChange="onAfterChange"
      >
        <Text slot="tick" slot-scope="props">
          {props.value}
        </Text>
        <Text slot="showTooltip" slot-scope="props">
          {props.value}
        </Text>

        <Slot name="showTooltip">{value}°C</Slot>

        <Slot name="slider">
          <View class="custom-slider-handler">
            <Icon type="SmileOutline" style="color: #ff8f1f" />
          </View>
        </Slot>
      </Slider>
    </Container>

    <Container title="禁用状态">
      <Slider defaultValue={80} disabled onChange="onChange" />
    </Container>
  </Component>
);
