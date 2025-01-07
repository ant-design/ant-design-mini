---
nav:
  path: /copilot
group:
  title: 通用
  order: 1
toc: 'content'
---

# Copilot Suggestion 快捷指令

一些预设文案的发送。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-suggestion": "antd-mini/es/Suggestion/index"
#endif
#if WECHAT
  "ant-suggestion": "antd-mini/Suggestion/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-suggestion
  items="{{items}}"
#if ALIPAY
  onSelect="handleSelect"
#endif
#if WECHAT
  bindselect="handleSelect"
#endif
/>
```

```js
Page({
  data: {
    items: [
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*AdC9RZfDwicAAAAAAAAAAAAADtF8AQ/original',
        label: '我的日程',
        value: 'schedule',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*Mbi1R5eGTecAAAAAAAAAAAAADtF8AQ/original',
        label: '快捷功能',
        value: 'suggestion',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*WqBJSZEpPbwAAAAAAAAAAAAADtF8AQ/original',
        label: '诊断分析',
        value: 'analyze',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_2jrq4g/afts/img/A*fVpIQZbRi4IAAAAAAAAAAAAADtF8AQ/original',
        label: '更多',
        value: 'more',
      },
    ],
  },
 handleSelect(i) {
    let item = i;
#if ALIPAY
    my.showToast({ content: item.value });
#endif
#if WECHAT
    item = i.detail[0];
    wx.showToast({ title: item.value });
#endif
  },
});
```

### Demo 代码

<code src='../../copilot-demo/pages/Suggestion/index'></code>

## API

| 属性                  | 说明           | 类型                                                              | 默认值 |
| --------------------- | -------------- | ----------------------------------------------------------------- | ------ |
| className             | 类名           | string                                                            | -      |
| items                 | 快捷指令列表   | [SuggestionItem](#suggestionitem)[]                               | -      |
| #if ALIPAY onSelect   | 选择之后的回调 | (item: [SuggestionItem](#suggestionitem), index: number) => void; | -      |
| #if WECHAT bindselect | 选择之后的回调 | (item: [SuggestionItem](#suggestionitem), index: number) => void; | -      |

### SuggestionItem

| 属性  | 说明                            | 类型   | 默认值 |
| ----- | ------------------------------- | ------ | ------ |
| icon  | 图标，支持 ant-icon 和 图片链接 | string | -      |
| label | 文案                            | string | -      |
| value | 选项值                          | string | -      |
