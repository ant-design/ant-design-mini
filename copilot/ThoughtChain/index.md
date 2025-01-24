---
nav:
  path: /copilot
group:
  title: 确认
  order: 4
toc: 'content'
---

# ThoughtChain 思维链

用于可视化展示 AI 处理请求、生成内容或执行任务的进程与状态。这是一个与动画相关的组件，需要提供各节点动画的 props 和 API 和使用方进行交互。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用
这个示例渲染了多个节点

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
        title: '没有在本地找到结果',
        content: '当前主流显卡',
        icon: 'CheckCircleOutline'
      },
      {
        title: '在互联网上搜索问题',
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

### 自定义内容
content slot支持自定义节点内容。仅支付宝端支持自定义内容，微信端不支持自定义内容。
```xml
 <ant-thought-chain items="{{basicList}}" onContentTap="onContentTap" collapsible="{{false}}">
    <view slot="content" slot-scope="module" style="color: red">
      {{module.content}}
    </view>
  </ant-thought-chain>
```

### 二级节点
支持通过slot自定义节点内容，通过嵌套thought-chain组件进行二级节点的渲染。仅支付宝端支持自定义内容，微信端不支持自定义内容。

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

### Demo 代码

<code src='../../copilot-demo/pages/ThoughtChain/index'></code>

## API

### ThoughtChain

以下表格介绍了 ThoughtChain 组件的 API 属性：

| 属性      | 说明     | 类型                     | 默认值 |
| --------- | -------- | ------------------------ | ------ |
| className | 类名     | string                   | -      |
| items      | 节点列表 | IThoughtChainItemProps[] | []      |
| collapsible      | 是否支持 | boolean\|ICollapsibleOptions | true      |
| style      | 自定义样式 | string | -      |


IThoughtChainItemProps 属性
| 属性        | 说明                                                    | 类型                                   | 默认值 |
| ----------- | ------------------------------------------------------- | -------------------------------------- | ------ |
| icon      | 标题前图标，可以使用ant-icon里的类型，也可以传入https图片链接                                                | string | CheckCircleOutline     |
| title       | 节点标题                                                | string                                 | -      |
| content     | 节点内容                                                | string                    | - |


插槽 slot

| 插槽名称 | 说明           |
| -------- | -------------- |
| content  | 自定义节点内容 |  |

ICollapsibleOptions 属性
| 属性        | 说明                                                    | 类型                                   | 默认值 |
| ----------- | ------------------------------------------------------- | -------------------------------------- | ------ |
| expandedKeys      | 展开的节点key列表 | string[] | []      |


### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| onContentTap | 点击内容时触发 | (e) => void |
| onExpand | 展开/收起时触发 | (expandedKeys: string[], clickKey: string) => void |

