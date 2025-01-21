---
nav:
  path: /copilot
group:
  title: 通用
  order: 1
toc: 'content'
---

# Conversations 管理会话

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-prompts": "antd-mini/es/Conversations/index"
#endif
#if WECHAT
  "ant-prompts": "antd-mini/Conversations/index"
#endif
}
```

## 代码示例

### 基本使用

```xml

```

```js

```

### Demo 代码

<code src='../../copilot-demo/pages/Conversations/index'></code>

## API

### Conversations

以下表格介绍了 Conversations 组件的 API 属性：

| 属性                   | 说明                 | 类型                                                      | 默认值 |
| ---------------------- | -------------------- | --------------------------------------------------------- | ------ |
| className              | 类名                 | string                                                    | -      |
| list                   | 提示列表             | [PromptsItem](#promptsitem)[]                             | -      |
| promptsTitle           | 提示标题             | string                                                    | -      |
| vertical               | 横向布局下，自动换行 | boolean                                                   | true   |
| wrap                   | 类名                 | boolean                                                   | false  |
| #if ALIPAY onItemTap   | 提示点击回调         | (item: [PromptsItem](#promptsitem),index:number) => void; | -      |
| #if WECHAT binditemtap | 提示点击回调         | (item: [PromptsItem](#promptsitem),index:number) => void; | -      |

### PromptsItem 属性

| 属性        | 说明                                     | 类型    | 默认值 |
| ----------- | ---------------------------------------- | ------- | ------ |
| key         | 唯一标识用于区分每个提示项               | string  | -      |
| icon        | 前面的 icon 图片链接，支持传入 antd-icon | string  | -      |
| label       | 提示标签显示提示的主要内容               | string  | -      |
| description | 提示描述提供额外的信息                   | string  | -      |
| showArrow   | 提示是否展示右边的箭头                   | boolean | -      |

### 插槽 slot

| 插槽名称      | 说明           |
| ------------- | -------------- |
| prompts-title | 提示项的标题题 |
| prompts-item  | 提示子项项     |
