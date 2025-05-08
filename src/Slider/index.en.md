---
nav:
  path: /components
group:
  title: Information Entry
toc: 'content'
---

# Slider

You can take values within a range by moving the slider. Used to move the slider within a certain range to obtain a single or interval value.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-slider": "antd-mini/es/Slider/index"
#endif
#if WECHAT
  "ant-slider": "antd-mini/Slider/index"
#endif
}
```

## Code Sample

### Basic use

> By default a slider,`change` event fires when the slider value changes, `afterChange` Events and `touchend` The trigger timing is consistent.

```xml
<ant-slider
  defaultValue="{{80}}"
#if ALIPAY
  onChange="onChange"
  onAfterChange="onAfterChange"
#endif
#if WECHAT
  bindchange="onChange"
  bindafterchange="onAfterChange"
#endif
/>
```

```js
Page({
  onChange(value, e) {
    console.log('slider changed:', value, e);
  },
  onAfterChange(value, e) {
    console.log('Current Value:', value, e);
#if ALIPAY
    my.showToast({ content: 'value: ' + value });
#endif
#if WECHAT
    wx.showToast({ title: `value: ${value.detail}` });
#endif
  },
});
```

### Disable state

```xml
  <ant-slider defaultValue="{{80}}" disabled />
```

### Dual Slider Mode

> Incoming `range` property, the dual slider mode is supported,`value` The status value type will also become an array.

```xml
<ant-slider defaultValue="{{[20, 60]}}" range />
```

### Nodes and scales

> Incoming `showTicks` property display scale, passing in `showNumber` Shows the data on the scale.

```xml
<ant-slider defaultValue="{{80}}" step="{{20}}" showTicks showNumber />
```

### Hover Tip

> Incoming `showTooltip` Property, you can display a hovering prompt when dragging.

```xml
<ant-slider defaultValue="{{80}}" showTooltip />
#if ALIPAY
<!-- 支持使用作用域插槽自定义 -->
<ant-slider defaultValue="{{80}}" showTooltip>
  <view slot="tooltip" slot-scope="prop">Slot Customization:{{prop.value}}</view>
</ant-slider>
#endif
```

### Controlled Mode

> `value` property and `change` Events, cooperation can achieve a controlled mode. Here's the example through `ant-stepper` Component change `value` Status,`ant-slider` Components `value` States can also change together.

```xml
<ant-slider
  min="{{0}}"
  max="{{100}}"
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
<ant-stepper
  min="{{0}}"
  max="{{100}}"
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
```

```js
Page({
  data: {
    value: 80,
  },
  handleChange(value, e) {
    console.log('slider changed:', value, e);
#if ALIPAY
    this.setData({
      value,
    });
#endif
#if WECHAT
    this.setData({
      value: value.detail,
    });
#endif
  },
});
```

### Custom Style

> `activeLineStyle`、`activeDotStyle` Property to customize the style.

```xml
<ant-slider
  defaultValue="{{80}}"
  step="{{20}}"
  showTooltip
  showTicks
  showNumber
  activeLineStyle="background-color: #ff8f1f"
  activeDotStyle="background-color: red"
>
#if WECHAT
  <!-- 微信暂时不支持 slot -->
#endif
#if ALIPAY
  <text
    slot="tick"
    slot-scope="props"
    >{{props.value}}°C</text
  >
  <text
    slot="tooltip"
    slot-scope="props"
    >{{props.value}}°C</text
  >

  <view slot="slider">
    <view class="custom-slider-handler">
      <ant-icon
        type="SmileOutline"
        style="color: #ff8f1f" />
    </view>
  </view>
#endif
</ant-slider>
```

### Demo Code

<code src='../../demo/pages/Slider/index'></code>

## API

| Property                        | Description                                               | Type                                              | Default Value |
| --------------------------- | -------------------------------------------------- | ------------------------------------------------- | ------ |
| activeDotClassName          | Class name of selected dot                                   | string                                            | -      |
| activeLineClassName         | The style of the selected line                                     | string                                            | -      |
| activeDotStyle              | Select the type of dot                                   | string                                            | -      |
| activeLineStyle             | The style of the selected line                                     | string                                            | -      |
| className                   | Class Name                                               | string                                            | -      |
| defaultValue                | Initial value                                             | number \| [number, number]                        | -      |
| disabled                    | Disable                                           | boolean                                           | false  |
| max                         | Maximum                                             | number                                            | 100    |
| min                         | Minimum                                             | number                                            | 0      |
| range                       | Whether it is a double slider                                       | boolean                                           | false  |
| showNumber                  | Show data on scale                               | boolean                                           | false  |
| step                        | Step, the value must be greater than 0 and divisible by (max-min)    | number                                            | 1      |
| style                       | Style                                               | string                                            | -      |
| showTicks                   | Show scale                                       | boolean                                           | false  |
| showTooltip                 | Whether to display the floating prompt when dragging, support the use of scope slot customization | boolean                                           | false  |
| slider                      | Custom Slider                                         | slot                                              | -      |
| tick                        | Custom Scale                                         | slot                                              | -      |
| tooltip                     | Show hover prompt when custom drag                           | slot                                              | -      |
| value                       | Current Value                                             | number \| [number, number]                        | -      |
| #if ALIPAY onChange         | Triggers when the slider value changes                                | (value: number &verbar; [number, number]) => void | -      |
| #if ALIPAY onAfterChange    | Consistent with the touchend trigger timing, the current value is passed in as a parameter.     | (value: number &verbar; [number, number]) => void | -      |
| #if WECHAT bindchange      | Triggers when the slider value changes                                | (value: number &verbar; [number, number]) => void | -      |
| #if WECHAT bindafterchange | Consistent with the touchend trigger timing, the current value is passed in as a parameter.     | (value: number &verbar; [number, number]) => void | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                         | Default Value                                                                                                                    | Dark Mode Default                                                                                                            | Remarks             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| --slide-block-shadow           | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.12); color: #ffffff;">rgba(0, 0, 0, 0.12)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.12); color: #ffffff;">rgba(0, 0, 0, 0.12)</div> | Slider Block Shadow       |
| --slider-default-primary-color | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div>                         | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                         | Slider default main color     |
| --slider-track-bg              | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                         | Slider track background color |
| --slider-fill-bg               | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>                         | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>                         | Slider Fill Background Color |
| --slider-number-color          | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Slider number color     |
| --slide-block-bg               | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | Slider block background color   |
| --slide-back-bg                | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>                         | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>                         | Slider Background Color     |
