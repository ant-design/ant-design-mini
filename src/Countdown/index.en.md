---
nav:
  path: /components
group:
  title: Bizness Components
  order: 15
toc: content
---

# Countdown

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
  bindcountdownchange="handleCountdownChange"
  bindcountdownfinish="handleCountdownEnd"
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

### Demo Code

<code src='../../demo/pages/Countdown/index'></code>

## Property

| Property                            | Description                                 | Type                | Default Value     |
| ------------------------------- | ------------------------------------ | ------------------- | ---------- |
| className                       | Container className                       | `string`            | -          |
| countdownEndTime                | End timestamp                           | `string`\| `number` | -          |
| countdownStartTime              | Start timestamp                           | `string`\| `number` | Current timestamp |
| time                            | Choose one from the countdownEndTime, in seconds | `number`            | 0          |
| autoShowDay                     | Less than one day automatically does not show days                 | `boolean`           | true       |
| countdownType                   | Extra-long countdown requires display days               | `string`            | -          |
| #if ALIPAY onCountdownChange    | Callback when the countdown changes                   | `Function`          | -          |
| #if ALIPAY onCountdownFinish    | Countdown End Callback                       | `Function`          | -          |
| #if WECHAT bindcountdownchange | Callback when the countdown changes                   | `Function`          | -          |
| #if WECHAT bindcountdownfinish | Countdown End Callback                       | `Function`          | -          |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                       | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks               |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --ant-countdown-color        | <div style="width: 150px; height: 30px; background-color: #666666; color: #ffffff;">#666666</div> | <div style="width: 150px; height: 30px; background-color: #808080; color: #ffffff;">#808080</div> | Countdown Color         |
| --ant-countdown-number-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #666666;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | Countdown Digital Color     |
| --ant-countdown-number-bg    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Countdown digital background color |

## Slot

| Name   | Description       |
| ------ | ---------- |
| -      | Default Slot   |
| prefix | Countdown Head |
| suffix | Countdown Tail |
