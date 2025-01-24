---
nav:
  path: /copilot
group:
  title: Wake
  order: 2
toc: 'content'
---

# Prompts

It is used to allow users who are exposed to AI products for the first time to quickly understand what AI can do, and can clearly convey to users the scope of intent and expected functions that AI can achieve. The use of appropriate welcome recommend components can effectively reduce user learning costs, allowing users to quickly understand and start smoothly.

## Introduction

In `index.json` Introducing Components in

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

## Code Sample

### Basic use

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
        title: '快速实现安装和Introduction组件',
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

### Tip with arrow

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
        content: '如何实现快速安装和Introduction',
      },
    ],
  },
});
```

### Custom Style

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

### Custom Prompt Title

```xml
<ant-prompts items="{{ arrowList }}">
  <view slot="prompts-title" class="customize-prompts-title">
    Custom prompt title:
  </view>
</ant-prompts>
```

### Custom Prompt Item

```xml
<ant-prompts items="{{ baseList }}">
  <view slot="prompts-item" slot-scope="props" class="customize-prompts-item">
    Custom prompt items :{{ props.item.title}}
  </view>
</ant-prompts>
```

### Landscape mode

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
  <view slot="prompts-item" slot-scope="props">Custom:{{ props.item.label}}</view>
</ant-prompts>
```

### Demo Code

<code src='../../copilot-demo/pages/Prompts/index'></code>

## API

### Prompts

The following table describes the API properties for Prompts components:

| Property                   | Description                 | Type                                                      | Default Value |
| ---------------------- | -------------------- | --------------------------------------------------------- | ------ |
| className              | Class Name                 | string                                                    | -      |
| items                   | Prompt Items             | [PromptsItem](#promptsitem)[]                             | -      |
| title           | Prompt Title             | string                                                    | -      |
| vertical               | Under horizontal layout, automatic line wrap | boolean                                                   | true   |
| wrap                   | Class Name                 | boolean                                                   | false  |
| #if ALIPAY onItemTap   | Prompt for click callback         | (item: [PromptsItem](#promptsitem),index:number) => void; | -      |
| #if WECHAT binditemtap | Prompt for click callback         | (item: [PromptsItem](#promptsitem),index:number) => void; | -      |

### PromptsItem

| Property        | Description                                     | Type    | Default Value |
| ----------- | ---------------------------------------- | ------- | ------ |
| key         | Unique identification is used to distinguish each prompt item               | string  | -      |
| icon        | The icon image link in front supports incoming antd-icon. | string  | -      |
| label       | The prompt label displays the main content of the prompt               | string  | -      |
| description | Prompt description provides additional information                   | string  | -      |
| showArrow   | Prompt whether to show the right arrow                   | boolean | -      |

### Slot

| Slot Name      | Description           |
| ------------- | -------------- |
| prompts-title | Title of Prompt Item |
| prompts-item  | Prompt Subkey     |
