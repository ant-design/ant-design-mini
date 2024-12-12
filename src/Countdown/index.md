---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
---

# Countdown 倒计时

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
  bindcountdownchange="handleCountdownChange"
  bindcountdownfinish="handleCountdownEnd"
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

### Demo 代码

<code src='../../demo/pages/Countdown/index'></code>

## 属性

| 属性                            | 说明                                 | 类型                | 默认值     |
| ------------------------------- | ------------------------------------ | ------------------- | ---------- |
| className                       | 容器 className                       | `string`            | -          |
| countdownEndTime                | 结束时间戳                           | `string`\| `number` | -          |
| countdownStartTime              | 起始时间戳                           | `string`\| `number` | 当前时间戳 |
| time                            | 与 countdownEndTime 二选一，单位为秒 | `number`            | 0          |
| autoShowDay                     | 小于一天自动不展示天                 | `boolean`           | true       |
| countdownType                   | 超长倒计时需要展示天数               | `string`            | -          |
| #if ALIPAY onCountdownChange    | 倒计时变化时的回调                   | `Function`          | -          |
| #if ALIPAY onCountdownFinish    | 倒计时结束回调                       | `Function`          | -          |
| #if WECHAT bindcountdownchange | 倒计时变化时的回调                   | `Function`          | -          |
| #if WECHAT bindcountdownfinish | 倒计时结束回调                       | `Function`          | -          |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                       | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注               |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --ant-countdown-color        | <div style="width: 150px; height: 30px; background-color: #666666; color: #ffffff;">#666666</div> | <div style="width: 150px; height: 30px; background-color: #808080; color: #ffffff;">#808080</div> | 倒计时颜色         |
| --ant-countdown-number-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #666666;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | 倒计时数字颜色     |
| --ant-countdown-number-bg    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 倒计时数字背景颜色 |

## 插槽

| 名称   | 说明       |
| ------ | ---------- |
| -      | 默认插槽   |
| prefix | 倒计时头部 |
| suffix | 倒计时尾部 |
