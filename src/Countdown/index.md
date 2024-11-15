---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
supportPlatform: ['alipay']
---

# Countdown 倒计时

## 何时使用

需要展示倒计时的场景。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用
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
  <text slot="prefix">剩余时间</text>
  <text slot="suffix">就开始抢购啦</text>
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

### 设置主题色
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
  <text slot="prefix">剩余</text>
</ant-countdown>
```

### 厘秒倒计时
```xml
<ant-countdown 
  countdownEndTime="{{countdownDay}}" 
  themeDisabled="{{true}}"
  decisecond="{{true}}"
>
</ant-countdown>
```

### Demo 代码

<code src='../../demo/pages/Countdown/index'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器 className | string | - |
| countdownEndTime | 结束时间戳 | string丨number | - |
| countdownStartTime | 起始时间戳 | string丨number | 当前时间戳 |
| time | 与 countdownEndTime 二选一，单位为秒 | number | 0 |
| theme | 主题配置 | [Theme](#theme) | - |
| themeDisabled | 禁用主题色 | boolean | false |
| autoShowDay | 小于一天自动不展示天 | boolean | true |
| countdownType | 超长倒计时需要展示天数 | string | - |
| decisecond | 支持厘秒倒计时，仅在禁用主题色时生效 | 否boolean| false |
| #if ALIPAY onCountdownChange | 倒计时变化时的回调 | Function | - |
| #if ALIPAY onCountdownFinish | 倒计时结束回调 | Function | - |  |
| #if WECHAT bind:countdownChange | 倒计时变化时的回调 | Function | - |
| #if WECHAT bind:countdownFinish | 倒计时结束回调 | Function | - |  |

### Theme

| 键名            | 说明         | 类型     |
| --------------- | ------------ | -------- |
| backgroundColor | 时间背景颜色 | `string` |
| timeColor       | 时间文案颜色 | `string` |
| textColor       | 文本颜色     | `string` |

## 插槽

| 名称 | 说明 |
| -------- | -------- |
| - | 默认插槽 |
| prefix | 倒计时头部 |
| suffix | 倒计时尾部 |
