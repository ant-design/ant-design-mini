---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
supportPlatform: ['alipay']
---

# Countdown

## When to use

Need to show the countdown scene.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-countdown": "antd-mini/es/Countdown/index"
#endif
#if WECHAT
  "ant-countdown": "antd-mini/Countdown/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-countdown
  countdownEndTime="{{countdownDay}}"
  countdownType="day"
#if ALIPAY
  onCountdownChange="handleCountdownChange"
  onCountdownFinish="handleCountdownEnd"
#endif
#if WECHAT
  bind:countdownChange="handleCountdownChange"
  bind:countdownFinish="handleCountdownEnd"
#endif
>
  <text slot="prefix">Remaining Time</text>
  <text slot="suffix">I started buying it.</text>
</ant-countdown>
```

```js
Page({
  data: {
    countdownDay: +new Date() + 500000000,
  },
  handleCountdownChange(e) {
    console.log('倒计时变化', JSON.stringify(e));
  },
  handleCountdownEnd() {
    console.log('倒计时结束');
  },
});
```

### Set Theme Color

```xml
<ant-countdown
  theme="{{{
    backgroundColor:'#ffffff',
    timeColor:'#ff3141',
    textColor:'#ff3141'
  }}}"
  countdownEndTime="{{countdownDay}}"
  countdownType="day"
>
  <text slot="prefix">Residual</text>
</ant-countdown>
```

### centisecond countdown

```xml
<ant-countdown
  countdownEndTime="{{countdownDay}}"
  themeDisabled="{{true}}"
  decisecond="{{true}}"
>
</ant-countdown>
```

### Demo Code

<code src='../../demo/pages/Countdown/index'></code>

## Property

| Property                            | Description                                 | Type             | 默认值     |
| ------------------------------- | ------------------------------------ | ---------------- | ---------- | --- |
| className                       | 容器 className                       | string           | -          |
| countdownEndTime                | 结束时间戳                           | string 丨 number | -          |
| countdownStartTime              | 起始时间戳                           | string 丨 number | 当前时间戳 |
| time                            | 与 countdownEndTime 二选一，单位为秒 | number           | 0          |
| theme                           | 主题配置                             | [Theme](#theme)  | -          |
| themeDisabled                   | 禁用主题色                           | boolean          | false      |
| autoShowDay                     | 小于一天自动不展示天                 | boolean          | true       |
| countdownType                   | 超长倒计时需要展示天数               | string           | -          |
| decisecond                      | 支持centisecond countdown，仅In禁用主题色时生效 | 否 boolean       | false      |
| #if ALIPAY onCountdownChange    | 倒计时变化时的回调                   | Function         | -          |
| #if ALIPAY onCountdownFinish    | 倒计时结束回调                       | Function         | -          |     |
| #if WECHAT bind:countdownChange | 倒计时变化时的回调                   | Function         | -          |
| #if WECHAT bind:countdownFinish | 倒计时结束回调                       | Function         | -          |     |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Key Name            | Description         | Type     |
| --------------- | ------------ | -------- |
| backgroundColor | Time background color | `string` |
| timeColor       | Time Copy Color | `string` |
| textColor       | Text Color     | `string` |

## Slot

| Name   | Description       |
| ------ | ---------- |
| -      | Default Slot   |
| prefix | Countdown Head |
| suffix | Countdown Tail |
