---
nav:
  path: /copilot
group:
  title: 通用
  order: 1
toc: 'content'
---

# Copilot Prompts 提示列表

用于让首次接触 AI 产品的用户快速理解 AI 能做什么，可以清晰传达给用户 AI 可实现的意图范围和预期功能。使用合适的欢迎推荐组件，可以有效降低用户学习成本，让用户快速了解并顺利开始。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-prompts": "antd-mini/es/Prompts/index"
#endif
#if WECHAT
  "ant-prompts": "antd-mini/Prompts/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-prompts
  list="{{baseList}}"
  promptsTitle="{{promptsTitle}}"
#if ALIPAY
  onTapPromptsItem="onTapPromptsItem"
#endif
#if WECHAT
  bindtappromptsitem="onTapPromptsItem"
#endif
/>
```

```js
Page({
  data: {
    promptsTitle: '我可以帮您：',
    baseList: [
      {
        title: 'Ant Design X 全新升级了什么？',
      },
      {
        title: 'Ant Design X 组件资产内容',
      },
      {
        title: '快速实现安装和引入组件',
      },
    ],
  },
  onTapPromptsItem(item) {
    let item = i;
#if ALIPAY
    my.alert({
      content: `点击了 ${item.title || ''} ${item.content || ''}`,
    });
#endif
#if WECHAT
    item = i.detail;
    wx.showToast({ title: `点击了 ${item.title || ''} ${item.content || ''}` });
#endif
  },
});
```

### 提示有箭头

```xml
<ant-prompts
  list="{{ arrowList }}"
  promptsTitle="{{ promptsTitle }}"
/>
```

```js
Page({
  data: {
    promptsTitle: '我可以帮您：',
    arrowList: [
      {
        showArrow: true,
        title: '热门话题:',
        image:
          'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*wJ5aRpr2q1wAAAAAAAAAAAAADkx8AQ/original',
        content: 'Ant Design X 全新升级',
      },
      {
        showArrow: true,
        title: '组件查询:',
        image:
          'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*R9L1RLo4x58AAAAAAAAAAAAADkx8AQ/original',
        content: '欢迎组件',
      },
      {
        showArrow: true,
        title: '新手帮助:',
        image:
          'https://mdn.alipayobjects.com/huamei_upibrs/afts/img/A*7eRqQ4JpdccAAAAAAAAAAAAADkx8AQ/original',
        content: '如何实现快速安装和引入',
      },
    ],
  },
});
```

### 自定义样式

```xml
<ant-prompts
  list="{{ styleList }}"
  className="customizeStyle"
  promptsTitle="{{ promptsTitle }}"
/>
```

```css
.customizeStyle .ant-copilot-prompts-list-item-content {
  font-family: PingFangSC-Light;
  font-size: 28rpx;
  color: rgba(0, 0, 0, 0.45);
  line-height: 44rpx;
}
```

### 自定义提示标题

```xml
<ant-prompts list="{{ arrowList }}">
  <view slot="prompts-title" class="customize-prompts-title">
    自定义提示标题:
  </view>
</ant-prompts>
```

### 自定义提示项

```xml
<ant-prompts list="{{ baseList }}">
  <view slot="prompts-item" slot-scope="props" class="customize-prompts-item">
    自定义提示项：{{ props.item.title }}
  </view>
</ant-prompts>
```

### Demo 代码

<code src='../../copilot-demo/pages/Prompts/index'></code>

## API

### Prompts

以下表格介绍了 Prompts 组件的 API 属性：

| 属性                          | 说明         | 类型                                         | 默认值 |
| ----------------------------- | ------------ | -------------------------------------------- | ------ |
| promptsTitle                  | 提示标题     | string                                       | -      |
| className                     | 类名         | string                                       | -      |
| list                          | 提示列表     | [PromptsItem](#promptsitem)[]                | -      |
| #if ALIPAY onTapPromptsItem   | 提示点击回调 | (item: [PromptsItem](#promptsitem)) => void; | -      |
| #if WECHAT bindtappromptsitem | 提示点击回调 | (item: [PromptsItem](#promptsitem)) => void; | -      |

### PromptsItem 属性

| 属性      | 说明         | 类型    | 默认值 |
| --------- | ------------ | ------- | ------ |
| image     | 提示项的图片 | string  | -      |
| title     | 提示项标题   | string  | -      |
| content   | 提示内容     | string  | -      |
| showArrow | 是否展示箭头 | boolean | -      |

### 插槽 slot

| 插槽名称      | 说明           |
| ------------- | -------------- |
| prompts-title | 提示项的标题题 |
| prompts-item  | 提示子项项     |
