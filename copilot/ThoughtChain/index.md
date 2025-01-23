---
nav:
  path: /copilot
group:
  title: Copilot
  order: 2
toc: 'content'
---

# ThoughtChain 思考链

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

这个示例渲染了一级节点，支持`loading` `fail` `success` 三种节点状态

```xml
 <thought-chain list="{{basicList}}" onContentItemTap="onContentItemTap" />
```

```javascript
Page({
  data: {
    demoList: [
      {
        status: 'success',
        title: '理解问题',
      },
      {
        status: 'fail',
        title: '没有在本地找到结果',
      },
      {
        status: 'loading',
        title: '在互联网上搜索问题',
      },
    ],
  },
  onContentItemTap(e) {
    const { content } = e.target.dataset || {};
    my.alert({
      content: `点击了内容「${content}」`,
    });
  },
});
```

### 二级节点

节点的内容默认支持 3 种形态(contentType)，文字类型：`text`，链接类型：`link`，标签类型：`tag`。
一级节点支持配置 list，设置子节点（二级节点）。

```javascript
Page({
  data: {
    secondLevelList: [
      {
        status: 'success',
        title: '理解问题',
        content: '解析语法结构',
        contentType: 'text',
      },
      {
        status: 'loading',
        title: '搜索问题',
        list: [
          {
            status: 'success',
            title: '理解问题',
          },
          {
            status: 'success',
            title: '联网搜索',
            content: ['当前主流电脑配置', '黑神话悟空所需显卡', '3A游戏'],
            contentType: 'tag',
          },
          {
            status: 'success',
            title: '已根据搜索结果精选3篇资料',
            contentType: 'link',
            content: [
              '1. 黑神话悟空介绍',
              '2. 对于1080p显示器，4060ti和4060该选哪个？',
              '3. 黑神话悟空官方建议配置',
            ],
          },
          {
            status: 'loading',
            title: '联想更多结果',
          },
        ],
      },
    ],
  },
});
```

### 自定义节点内容

支持通过 slot 自定义节点内容

```xml
 <thought-chain list="{{customList}}" onContentItemTap="onContentItemTap">
    <view slot="content" slot-scope="props">
      <view a:if="{{props.contentType === 'customType'}}" style="color: red">
        customType: {{props.content}}
      </view>
    </view>
  </thought-chain>
```

```javascript
Page({
  data: {
    customList: [
      {
        status: 'success',
        title: '理解问题',
        content: '这是自定义样式的内容',
        contentType: 'customType',
      },
      {
        status: 'success',
        title: '搜索问题',
        list: [
          {
            status: 'success',
            title: '搜索中',
            content: '子节点中的自定义内容',
            contentType: 'customType',
          },
        ],
      },
    ],
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
| list      | 提示列表 | IThoughtChainItemProps[] | -      |

IThoughtChainItemProps 属性
| 属性 | 说明 | 类型 | 默认值 |
| --------- | ------------ | ------- | ------ |
| status | 节点状态 | `loading` `success` `fail` | - |
| title | 节点标题 | string | - |
| content | 节点内容 | string \| string[] |
| contentType | 节点内容类型，默认类型有`text` `link` `tag` | string |
| list | 子节点，仅一级节点支持子节点 | IThoughtChainItemProps[] |

插槽 slot

| 插槽名称 | 说明           |
| -------- | -------------- | --- |
| content  | 自定义节点内容 |     |
