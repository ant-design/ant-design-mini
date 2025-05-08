---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# Footer

appears at the bottom of the page and provides the user with additional instructions or assistance beyond the content of the page

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-footer": "antd-mini/es/Footer/index"
#endif
#if WECHAT
  "ant-footer": "antd-mini/Footer/index"
#endif
}
```

## Code Sample

### Basic use

> If no split line is needed, pass in `noLabelDivider` property.

```xml
<ant-footer label="没有更多了" />

<ant-footer label="没有更多了" noLabelDivider />

#if ALIPAY
<!-- 支持插槽自定义 label。 -->
<ant-footer label="placeholder">
  <view slot="label">
    Ant Wealth
  </view>
</ant-footer>
#endif
```

### Footer with Content

```xml
<ant-footer content="@ 2004-2020 Alipay.com All rights reserved" />

#if ALIPAY
<!-- 支持插槽自定义 label。 -->
<ant-footer content="placeholder">
  <view slot="content">
    ©Ant Technology Group Co., Ltd.
  </view>
</ant-footer>
#endif
```

### with link footer

```xml
<ant-footer
  links="{{links}}"
#if ALIPAY
  onLinkTap="handleLinkTap"
#endif
#if WECHAT
  bindlinktap="handleLinkTap"
#endif
/>
```

```js
Page({
  data: {
    links: [
      { key: 'alicloud', text: '阿里云' },
      { key: 'alipay', text: '支付宝' }
    ],
  },
  handleLinkTap(item) {
#if ALIPAY
    if (item.disabled) return;
    my.showToast({ content: item.key });
#endif
#if WECHAT
    if (item.detail.disabled) return;
    wx.showToast({
      title: item.detail.key,
    });
#endif
  },
});
```

### Tagged Footer

```xml
<ant-footer
  chips="{{chips}}"
#if ALIPAY
  onChipTap="handleChipTap"
#endif
#if WECHAT
  bindchiptap="handleLinkTap"
#endif
/>
```

```js
Page({
  data: {
    chips: [
      { key: 'jiebei', text: '蚂蚁借呗' },
      { key: 'beiyongjin', text: '备用金' },
      { key: 'huabei', text: '花呗收钱', disabled: true }
    ],
  },
  handleChipTap(item) {
#if ALIPAY
    if (item.disabled) return;
    my.showToast({ content: item.key });
#endif
#if WECHAT
    if (item.detail.disabled) return;
    wx.showToast({
      title: item.detail.key,
    });
#endif
  },
});
```

### Demo Code

<code src='../../demo/pages/Footer/index'></code>

## API

| Property                    | Description                 | Type                                                 | Default Value  |
| ----------------------- | -------------------- | ---------------------------------------------------- | ------- |
| label                   | Top content with dividing line   | `string`                                             | -       |
| content                 | Common Content Section       | `string`                                             | -       |
| links                   | Link                 | `Array<`[ActionItem](#actionitem)`>`                 | -       |
| chips                   | Bottom Label             | `Array<`[ActionItem](#actionitem)`>`                 | -       |
| noLabelDivider          | No dividing line with label  | `boolean`                                            | `false` |
| #if ALIPAY onLinkTap    | Callback after link click     | `(actionItem?: `[ActionItem](#actionitem)`) => void` | -       |
| #if ALIPAY onChipTap    | Callback after bottom tab click | `(actionItem?: `[ActionItem](#actionitem)`) => void` | -       |
| #if WECHAT bindlinktap | Callback after link click     | `(actionItem?: `[ActionItem](#actionitem)`) => void` | -       |
| #if WECHAT bindchiptap | Callback after bottom tab click | `(actionItem?: `[ActionItem](#actionitem)`) => void` | -       |

### ActionItem

| Property | Description     | Type   | Default Value |
| ---- | -------- | ------ | ------ |
| text | Show copy | string | -      |
| key  | Unique identification | string | -      |
