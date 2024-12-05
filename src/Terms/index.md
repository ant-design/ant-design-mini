---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: 'content'
---

# Terms 协议

用于产品开通、签署协议等场景

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-terms": "antd-mini/es/Terms/index"
#endif
#if WECHAT
  "ant-terms": "antd-mini/Terms/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-terms
  termPrefix="请阅读并同意"
  terms="{{terms}}"
  buttons="{{buttons}}"
#if ALIPAY
  onButtonTap="handleButtonTap"
  onTermTap="handleTermTap"
#endif
#if WECHAT
  bind:buttontap="handleButtonTap"
  bind:termtap="handleTermTap"
#endif
/>
```

```js
Page({
  data: {
    buttons: [
      { text: '同意协议 + 行动点描述', type: 'primary' }
      { text: '取消', aide: true, type: 'default' }
    ],
    terms: [
      { name: '《用户协议》', key: 'user' }
    ],
  },
  handleButtonTap(item, index, checked, event) {
#if ALIPAY
    my.showToast({ content: `点击了第 ${index + 1} 个按钮` });
#endif
#if WECHAT
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个按钮` });
#endif
  },
  handleTermTap(item, index, event) {
#if ALIPAY
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
#endif
#if WECHAT
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个协议` });
#endif
  },
});
```

### 勾选型

```xml
<ant-terms
  type="check"
  termPrefix="我已阅读并同意"
  terms="{{terms}}"
  buttons="{{buttons}}"
  checkboxTipsText="请阅读后勾选服务协议"
  checkboxTipsVisible="{{checkboxTipsVisible}}"
#if ALIPAY
  onButtonTap="handleButtonTap"
  onTermTap="handleTermTap"
  onCheckChange="handleCheckChange"
  onTermPrefixTap="handleTermPrefixTap"
#endif
#if WECHAT
  bind:buttontap="handleButtonTap"
  bind:termtap="handleTermTap"
  bind:checkchange="handleCheckChange"
  bind:termprefixtap="handleTermPrefixTap"
#endif
/>
```

```js
Page({
  data: {
    buttons: [
      { text: '行动点描述', type: 'primary' }
    ],
    terms: [
      { name: '《用户协议》', key: 'user' }
    ],
    checkboxTipsVisible: false,
  },
  handleButtonTap(item, checked) {
#if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
#endif
#if WECHAT
    this.setData({ checkboxTipsVisible: !item.detail[2] });
#endif
  },
  handleTermTap(item, index) {
#if ALIPAY
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
#endif
#if WECHAT
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个协议` });
#endif
  },
  handleCheckChange(checked) {
#if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
    if (checked) {
      this.setData({ checkboxTipsVisible: false });
    }
#endif
#if WECHAT
    this.setData({ checkboxTipsVisible: !checked.detail });
    if (checked.detail) {
      this.setData({ checkboxTipsVisible: false });
    }
#endif
  },
  handleTermPrefixTap(checked) {
#if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
    if (checked) {
      this.setData({ checkboxTipsVisible: false });
    }
#endif
#if WECHAT
    this.setData({ checkboxTipsVisible: !checked.detail });
    if (checked.detail) {
      this.setData({ checkboxTipsVisible: false });
    }
#endif
  },
});
```

### Demo 代码

<code src='../../demo/pages/Terms/index'></code>

## API

| 属性                            | 说明                 | 类型                                                              | 默认值       |
| ------------------------------- | -------------------- | ----------------------------------------------------------------- | ------------ |
| type                            | 协议展示类型         | `""` \| `"check"` \| `"read"`                                     | `""`         |
| terms                           | 协议列表             | [Term](#term)`[]`                                                 | `-`          |
| buttons                         | 按钮列表             | [Button](#button)`[]`                                             | `-`          |
| buttonsFixed                    | 按钮区是否吸底       | `boolean`                                                         | `false`      |
| buttonsDirection                | 分割线方向，默认纵向 | `"horizontal"` \| `"vertical"`                                    | `"vertical"` |
| termPrefix                      | 协议前缀             | `string`                                                          | `""`         |
| termSuffix                      | 协议后缀             | `string`                                                          | `""`         |
| checkboxTipsText                | 勾选框引导文案       | `string`                                                          | `""`         |
| checkboxTipsVisible             | 勾选框引导显示状态   | `boolean`                                                         | `false`      |
| readCurrent                     | 阅读的当前序号       | `number`                                                          | `-`          |
| defaultReadCurrent              | 默认阅读的当前序号   | `number`                                                          | `-`          |
| #if ALIPAY onButtonTap          | 行动点按钮点击回调   | `(b?: Button, index?: number, checked?: boolean, event?) => void` | `-`          |
| #if ALIPAY onTermTap            | 协议点击回调         | `(t?: Term, index?: number, event?) => void`                      | `-`          |
| #if ALIPAY onCheckChange        | 勾选回调             | `(c?: boolean) => void`                                           | `-`          |
| #if ALIPAY onTermPrefixTap      | 协议前缀点击回调     | `(c?: boolean) => void`                                           | `-`          |
| #if ALIPAY onCountdownFinish    | 倒计时结束回调       | `(b?: Button, index?: number, event?) => void`                    | `-`          |
| #if ALIPAY onReadChange         | 协议阅读切换         | `(index?: number) => void`                                        | `-`          |
| #if WECHAT bind:buttontap       | 行动点按钮点击回调   | `(b?: Button, index?: number, checked?: boolean, event?) => void` | `-`          |
| #if WECHAT bind:termtap         | 协议点击回调         | `(t?: Term, index?: number, event?) => void`                      | `-`          |
| #if WECHAT bind:checkchange     | 勾选回调             | `(c?: boolean) => void`                                           | `-`          |
| #if WECHAT bind:termprefixtap   | 协议前缀点击回调     | `(c?: boolean) => void`                                           | `-`          |
| #if WECHAT bind:countdownfinish | 倒计时结束回调       | `(b?: Button, index?: number, event?) => void`                    | `-`          |
| #if WECHAT bind:readchange      | 协议阅读切换         | `(index?: number) => void`                                        | `-`          |

### Term

| 属性 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| key  | 唯一标识 | `string` | `-`    |
| name | 协议名称 | `string` | `-`    |

### Button

| 属性                                                  | 说明               | 类型     | 默认值 |
| ----------------------------------------------------- | ------------------ | -------- | ------ |
| key                                                   | 唯一标识           | `string` | `-`    |
| text                                                  | 按钮文案           | `string` | `-`    |
| countdownTime                                         | 计时秒数，单位为秒 | `number` | `-`    |
| 透传 [ant-button](/components/button#button) 所有属性 |
