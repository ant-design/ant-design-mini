---
nav:
  path: /copilot
group:
  title: 唤醒
  order: 2
toc: 'content'
---

# Prompts 提示列表

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
  items="{{baseList}}"
  title="{{promptsTitle}}"
#if ALIPAY
  onItemTap="onItemTap"
#endif
#if WECHAT
  binditemtap="onItemTap"
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
  onItemTap(item) {
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
  items="{{ arrowList }}"
  title="{{ promptsTitle }}"
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
  items="{{ styleList }}"
  className="customizeStyle"
  title="{{ promptsTitle }}"
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
<ant-prompts items="{{ arrowList }}">
  <view slot="prompts-title" class="customize-prompts-title">
    自定义提示标题:
  </view>
</ant-prompts>
```

### 自定义提示项

```xml
<ant-prompts items="{{ baseList }}">
  <view slot="prompts-item" slot-scope="props" class="customize-prompts-item">
    自定义提示项：{{ props.item.title }}
  </view>
</ant-prompts>
```

### 横向模式

```xml
<ant-prompts
  title="超长滑动"
  items="{{ horizontalList }}"
  vertical="{{false}}"
/>
<ant-prompts
  title="超长换行"
  items="{{ horizontalList }}"
  vertical="{{false}}"
  wrap
/>
<ant-prompts
  title="自定义"
  items="{{ horizontalList }}"
  vertical="{{false}}"
  wrap
>
  <view slot="prompts-item" slot-scope="props">自定义：{{ props.item.label }}</view>
</ant-prompts>
```

### Demo 代码

<code src='../../copilot-demo/pages/Prompts/index'></code>

## API

### Prompts

以下表格介绍了 Prompts 组件的 API 属性：

| 属性                   | 说明                 | 类型                                                      | 默认值 |
| ---------------------- | -------------------- | --------------------------------------------------------- | ------ |
| className              | 类名                 | string                                                    | -      |
| items                  | 提示列表             | [PromptsItem](#promptsitem)[]                             | -      |
| title                  | 提示标题             | string                                                    | -      |
| vertical               | 横向布局下，自动换行 | boolean                                                   | true   |
| wrap                   | 类名                 | boolean                                                   | false  |
| #if ALIPAY onItemTap   | 提示点击回调         | (item: [PromptsItem](#promptsitem),index:number) => void; | -      |
| #if WECHAT binditemtap | 提示点击回调         | (item: [PromptsItem](#promptsitem),index:number) => void; | -      |

### PromptsItem

| 属性        | 说明                                     | 类型    | 默认值 |
| ----------- | ---------------------------------------- | ------- | ------ |
| key         | 唯一标识用于区分每个提示项               | string  | -      |
| icon        | 前面的 icon 图片链接，支持传入 antd-icon | string  | -      |
| label       | 提示标签显示提示的主要内容               | string  | -      |
| description | 提示描述提供额外的信息                   | string  | -      |
| showArrow   | 提示是否展示右边的箭头                   | boolean | false  |
| disabled    | 设置为 true 时禁用点击事件               | boolean | false  |

### 插槽 slot

| 插槽名称      | 说明           |
| ------------- | -------------- |
| prompts-title | 提示项的标题题 |
| prompts-item  | 提示子项项     |
