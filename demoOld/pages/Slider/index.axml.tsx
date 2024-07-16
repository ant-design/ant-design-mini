import { Component, InternalData, Text, View } from 'tsxml';
import Container from '../../../src/Container/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import AntSlider from '../../../src/Slider/index.axml';
import AntStepper from '../../../src/Stepper/index.axml';

export default ({ value, props }: InternalData) => (
  <Component>
    <Container title="基本使用">
      <AntSlider
        defaultValue={80}
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="无节点双滑块">
      <AntSlider
        defaultValue={[20, 60]}
        range
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="节点单滑块">
      <AntSlider
        defaultValue={60}
        step={20}
        showTicks
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="有数字节点单滑块">
      <AntSlider
        defaultValue={80}
        step={20}
        showTicks
        showNumber
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="节点双滑块">
      <AntSlider
        defaultValue={[10, 50]}
        step={10}
        showTicks
        range
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="有数字节点双滑块">
      <AntSlider
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
      <AntSlider
        defaultValue={80}
        showTooltip
        onChange="onChange"
        onAfterChange="onAfterChange"
      />
    </Container>

    <Container title="受控模式">
      <AntSlider min={0} max={100} value={value} onChange="handleChange" />
      <AntStepper min={0} max={100} value={value} onChange="handleChange" />
    </Container>

    <Container title="自定义">
      <AntSlider
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
        {/* #if ALIPAY */}
        {/* 微信暂时不支持 slot */}
        <Text slot="tick" slot-scope="props">
          {props.value}°C
        </Text>
        <Text slot="tooltip" slot-scope="props">
          {props.value}°C
        </Text>

        <View slot="slider">
          <View class="custom-slider-handler">
            <AntIcon type="SmileOutline" style="color: #ff8f1f" />
          </View>
        </View>
        {/* #endif */}
      </AntSlider>
    </Container>

    <Container title="禁用状态">
      <AntSlider defaultValue={80} disabled onChange="onChange" />
    </Container>
  </Component>
);
