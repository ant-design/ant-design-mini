---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# Footer 页脚

出现在页面底部，为用户提供页面内容外的额外说明或辅助操作

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

> 如果不需要分割线，传入 `noLabelDivider` 属性。

```xml
<ant-footer label="没有更多了" />

<ant-footer label="没有更多了" noLabelDivider />

#if ALIPAY
<!-- 支持插槽自定义 label。 -->
<ant-footer label="placeholder">
  <view slot="label">
    蚂蚁财富
  </view>
</ant-footer>
#endif
```

### 带内容页脚

```xml
<ant-footer content="@ 2004-2020 Alipay.com All rights reserved" />

#if ALIPAY
<!-- 支持插槽自定义 label。 -->
<ant-footer content="placeholder">
  <view slot="content">
    © 蚂蚁科技集团股份有限公司
  </view>
</ant-footer>
#endif
```

### 带链接页脚

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

### 带标签页脚

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

### Demo 代码

<code src='../../demo/pages/Footer/index'></code>

## API

| 属性                    | 说明                 | 类型                                                 | 默认值  |
| ----------------------- | -------------------- | ---------------------------------------------------- | ------- |
| label                   | 带分割线的顶部内容   | `string`                                             | -       |
| content                 | 普通的内容部分       | `string`                                             | -       |
| links                   | 链接                 | `Array<`[ActionItem](#actionitem)`>`                 | -       |
| chips                   | 底部标签             | `Array<`[ActionItem](#actionitem)`>`                 | -       |
| noLabelDivider          | 没有 label 的分割线  | `boolean`                                            | `false` |
| #if ALIPAY onLinkTap    | 链接点击后的回调     | `(actionItem?: `[ActionItem](#actionitem)`) => void` | -       |
| #if ALIPAY onChipTap    | 底部标签点击后的回调 | `(actionItem?: `[ActionItem](#actionitem)`) => void` | -       |
| #if WECHAT bindlinktap | 链接点击后的回调     | `(actionItem?: `[ActionItem](#actionitem)`) => void` | -       |
| #if WECHAT bindchiptap | 底部标签点击后的回调 | `(actionItem?: `[ActionItem](#actionitem)`) => void` | -       |

### ActionItem

| 属性 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| text | 展示文案 | string | -      |
| key  | 唯一标识 | string | -      |
