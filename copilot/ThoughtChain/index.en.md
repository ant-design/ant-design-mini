---
nav:
  path: /copilot
group:
  title: Confirm
  order: 4
toc: 'content'
---

# ThoughtChain

Use to visualize the process and status of AI processing requests, generating content, or executing tasks. This is an animation-related component that needs to provide props and API for each node animation to interact with users.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-thought-chain": "antd-mini/es/ThoughtChain/index"
#endif
#if WECHAT
  "ant-thought-chain": "antd-mini/ThoughtChain/index"
#endif
}
```

## Code Sample

### Basic use
This example renders multiple nodes

```xml
  <ant-thought-chain items="{{basicList}}" onContentTap="onContentTap" collapsible="{{true}}">
  </ant-thought-chain>
```

```javascript
Page({
  data: {
    basicList: [
      {
        title: '理解问题',
        content: '3A游戏',
        icon: 'CheckCircleOutline'
      },
      {
        title: '没有In本地找到结果',
        content: '当前主流显卡',
        icon: 'CheckCircleOutline'
      },
      {
        title: 'In互联网上搜索问题',
        content: '黑神话悟空所需显卡',
        icon: 'MoreOutline',
      },
    ],
  },
  onContentTap(e) {
    const { content } = e.currentTarget.dataset || {};
    my.alert({
      content: `点击了内容「${content}」`,
    });
  },
});
```

### Custom Content
content slot supports custom node content. Only Alipay supports custom content, WeChat does not support custom content.
```xml
 <ant-thought-chain items="{{basicList}}" onContentTap="onContentTap" collapsible="{{false}}">
    <view slot="content" slot-scope="module" style="color: red">
      {{module.content}}
    </view>
  </ant-thought-chain>
```

### secondary node
You can customize node content through slots and render secondary nodes through nested thought-chain components. Only Alipay supports custom content, WeChat does not support custom content.

```xml
 <ant-thought-chain items="{{customList}}" onContentTap="onContentTap" collapsible="{{true}}">
    <view slot="content" slot-scope="module">
      <view a:if="{{typeof(module.content) === 'object'}}" class="secondLevel">
        <ant-thought-chain
          className="second-thoughtchain"
          items="{{module.content}}"
          collapsible="{{false}}"
        >
          <view slot="content" slot-scope="secondModule" a:if="{{typeof(secondModule.content) === 'object'}}">
            <view class="second-thoughtchain-content" a:for="{{secondModule.content}}">
              {{item}}
            </view>
          </view>
          <view a:else class="second-thoughtchain-content">
            {{secondModule.content}}
          </view>
        </ant-thought-chain>
      </view>
      <view a:else>{{module.content}}</view>
    </view>
  </ant-thought-chain>
```
```javascript
Page({
  data: {
    customList: [
      {
        title: '理解问题',
        content: '解析语法结构',
      },
      {
        status: 'loading',
        title: '搜索问题',
        content: [
          {
            title: '理解问题',
          },
          {
            title: '联网搜索',
            content: '1. 黑神话悟空介绍',
          },
          {
            title: '已根据搜索结果精选3篇资料',
            content: [
              '1. 黑神话悟空介绍',
              '2. 对于1080p显示器，4060ti和4060该选哪个？',
              '3. 黑神话悟空官方建议配置',
            ],
          },
          {
            title: '联想更多结果',
          },
        ],
      },
    ]
  },
  onContentItemTap(e) {
    const { content } = e.target.dataset || {};
    my.alert({
      content: `点击了内容「${content}」`,
    });
  },
});
```

### Demo Code

<code src='../../copilot-demo/pages/ThoughtChain/index'></code>

## API

### ThoughtChain

The following table describes the API properties for ThoughtChain components:

| Property      | Description     | Type                     | Default Value |
| --------- | -------- | ------------------------ | ------ |
| className | Class Name     | string                   | -      |
| items      | Node List | IThoughtChainItemProps[] | []      |
| collapsible      | Whether to support | boolean\|ICollapsibleOptions | true      |
| style      | Custom Style | string | -      |


IThoughtChainItemProps Properties
| Property        | Description                                                    | Type                                   | Default Value |
| ----------- | ------------------------------------------------------- | -------------------------------------- | ------ |
| icon      | The icon before the title can use the type in ant-icon or pass in https picture link.                                                | string | CheckCircleOutline     |
| title       | Node Title                                                | string                                 | -      |
| content     | Node Content                                                | string                    | - |


Slot

| Slot Name | Description           |
| -------- | -------------- |
| content  | Custom Node Content |  |

ICollapsibleOptions Properties
| Property        | Description                                                    | Type                                   | Default Value |
| ----------- | ------------------------------------------------------- | -------------------------------------- | ------ |
| expandedKeys      | expanded node key list | string[] | []      |


### Event

| Event Name | Description | Type |
| --- | --- | --- |
| onTap | Trigger when a description is clicked | (e) => void |
| onContentTap | Trigger when content is clicked | (e) => void |
| onExpand | Trigger on deploy/stow | (expandedKeys: string[], clickKey: string) => void |

