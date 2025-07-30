---
nav:
  path: /components
group:
  title: 数据录入
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Slider 滑块

可以通过移动滑块在某一范围内取值。用于在一定范围内移动滑块获取单个或者区间数值。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

> 默认情况下一个滑块，`change` 事件在 slider 值改变时触发， `afterChange` 事件与 `touchend` 触发时机一致。

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
    console.log('当前值:', value, e);
#if ALIPAY
    my.showToast({ content: 'value: ' + value });
#endif
#if WECHAT
    wx.showToast({ title: `value: ${value.detail}` });
#endif
  },
});
```

### 禁用状态

```xml
  <ant-slider defaultValue="{{80}}" disabled />
```

### 双滑块模式

> 传入 `range` 属性之后，将支持双滑块模式，`value` 状态值类型也将变成数组。

```xml
<ant-slider defaultValue="{{[20, 60]}}" range />
```

### 节点和刻度

> 传入 `showTicks` 属性显示刻度，传入 `showNumber` 展示刻度上的数据。

```xml
<ant-slider defaultValue="{{80}}" step="{{20}}" showTicks showNumber />
```

### 悬浮提示

> 传入 `showTooltip` 属性，可以在拖动时显示悬浮提示。

```xml
<ant-slider defaultValue="{{80}}" showTooltip />
#if ALIPAY
<!-- 支持使用作用域插槽自定义 -->
<ant-slider defaultValue="{{80}}" showTooltip>
  <view slot="tooltip" slot-scope="prop">插槽自定义:{{prop.value}}</view>
</ant-slider>
#endif
```

### 受控模式

> `value` 属性和 `change` 事件，配合可以实现受控模式。这里的例子中通过 `ant-stepper` 组件改变 `value` 状态，`ant-slider` 组件 `value` 状态也能一起变化。

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

### 自定义样式

> `activeLineStyle`、`activeDotStyle` 属性来自定义样式。

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

### Demo 代码

<code src='../../demo/pages/Slider/index'></code>

## API

| 属性                        | 说明                                               | 类型                                              | 默认值 |
| --------------------------- | -------------------------------------------------- | ------------------------------------------------- | ------ |
| activeDotClassName          | 选中小圆点的类名                                   | string                                            | -      |
| activeLineClassName         | 选中线条的样式                                     | string                                            | -      |
| activeDotStyle              | 选中小圆点的类型                                   | string                                            | -      |
| activeLineStyle             | 选中线条的样式                                     | string                                            | -      |
| className                   | 类名                                               | string                                            | -      |
| defaultValue                | 初始值                                             | number \| [number, number]                        | -      |
| disabled                    | 是否禁用                                           | boolean                                           | false  |
| max                         | 最大值                                             | number                                            | 100    |
| min                         | 最小值                                             | number                                            | 0      |
| range                       | 是否是双滑块                                       | boolean                                           | false  |
| showNumber                  | 是否展示刻度上的数据                               | boolean                                           | false  |
| step                        | 步距，取值必须大于 0，并且可被 (max - min) 整除    | number                                            | 1      |
| style                       | 样式                                               | string                                            | -      |
| showTicks                   | 是否显示刻度                                       | boolean                                           | false  |
| showTooltip                 | 是否在拖动时显示悬浮提示，支持使用作用域插槽自定义 | boolean                                           | false  |
| slider                      | 自定义滑块                                         | slot                                              | -      |
| tick                        | 自定义刻度                                         | slot                                              | -      |
| tooltip                     | 自定义拖动时显示悬浮提示                           | slot                                              | -      |
| value                       | 当前值                                             | number \| [number, number]                        | -      |
| #if ALIPAY onChange         | slider 值改变时触发                                | (value: number &verbar; [number, number]) => void | -      |
| #if ALIPAY onAfterChange    | 与 touchend 触发时机一致，把当前值作为参数传入     | (value: number &verbar; [number, number]) => void | -      |
| #if WECHAT bindchange      | slider 值改变时触发                                | (value: number &verbar; [number, number]) => void | -      |
| #if WECHAT bindafterchange | 与 touchend 触发时机一致，把当前值作为参数传入     | (value: number &verbar; [number, number]) => void | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                         | 默认值                                                                                                                    | 深色模式默认值                                                                                                            | 备注             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| --slide-block-shadow           | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.12); color: #ffffff;">rgba(0, 0, 0, 0.12)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.12); color: #ffffff;">rgba(0, 0, 0, 0.12)</div> | 滑块块阴影       |
| --slider-default-primary-color | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div>                         | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                         | 滑块默认主色     |
| --slider-track-bg              | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                         | 滑块轨道背景颜色 |
| --slider-fill-bg               | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>                         | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>                         | 滑块填充背景颜色 |
| --slider-number-color          | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | 滑块数字颜色     |
| --slide-block-bg               | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | 滑块块背景颜色   |
| --slide-back-bg                | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>                         | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>                         | 滑块背景颜色     |
