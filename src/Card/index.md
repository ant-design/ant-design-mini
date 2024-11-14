---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
---

# Card 基础卡片

## 何时使用

基础的卡片容器。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-card": "antd-mini/es/Card/index"
#endif
#if WECHAT
  "ant-card": "antd-mini/Card/index"
#endif
}
```
## 代码示例

### 基础用法
```xml
<ant-card 
#if ALIPAY
  onOperateClick="handleLinkClick" 
#endif
#if WECHAT
  bind:operateClick="handleLinkClick" 
#endif
  title="标题" 
  operateText="操作"
>
  <view>
    我是卡片内容
  </view>
</ant-card>
```

### 内容分隔线
```xml
<ant-card 
  divider="{{true}}"
  title="标题" 
  operateText="操作"
>
  <view>
    标题内容间带分割线
  </view>
</ant-card>
```

### 标题吸顶
```xml
<ant-card
  title="标题"
  headSticky="{{true}}"
#if ALIPAY
  onTitleSticky="handleTitleSticky" 
#endif
#if WECHAT
  bind:titleSticky="handleLinkClick" 
#endif
>
  <view style="height: 400px">
    模拟一个长卡片内容
  </view>
</ant-card>
```

### 卡片可折叠
```xml
<ant-card
  title="标题"
  needFold="{{true}}"
>
  <view>
    内容区域可展开/收起
  </view>
</ant-card>
```

### 自定义操作按钮
```xml
<ant-card 
  title="标题" 
  operateText="操作"
>
  <view slot="headerRight">
    自定义
  </view>
  <view>
    我是卡片内容
  </view>
</ant-card>
```

### Demo 代码

<code src="../../demo/pages/Card/index"></code>

## 属性

| 属性 | 说明  | 类型 | 默认值                                       |
| --- | ---  | --- |------------------------------------------|
| className | 容器 className| string   | - |
| config | 卡片配置   | [ICardConfig](#ICardConfig) | - |
| title | 卡片标题  | string | - |
| divider | 是否有分割线  | boolean | false |
| needFold | 是否需要可折叠卡片，需要 operateText 为空，否则需要手动进行展开收起 | boolean | false |
| foldStatus | 是否折叠，传 true 会导致收起，不管 needFold 是否为true  | boolean | false |
| headSticky | 标题是否需要吸顶  | boolean | false |
| stickyTransparentTitle | 吸顶是否在透明头页面，是的话会自动算透明头高度  | boolean | false |
| stickyTop | 标题吸顶时要吸在距离顶部多少的位置  | string | - |
| operateText | 默认标题栏右侧操作按钮文本 | string | - |
| #if ALIPAY onOperateClick | 默认标题栏右侧操作按钮点击回调 | () => void | - |
| #if ALIPAY onFoldChange | 默认标题栏右侧折叠展开按钮点击回调 | () => void | - |
| #if ALIPAY onTitleSticky | title 区域是否吸顶变化时的回调 | (status) => void | - |
| #if WECHAT bind:operateClick | 默认标题栏右侧操作按钮点击回调 | () => void | - |
| #if WECHAT bind:foldChange | 默认标题栏右侧折叠展开按钮点击回调 | () => void | - |
| #if WECHAT bind:titleSticky | title 区域是否吸顶变化时的回调 | (status) => void | - |

### ICardConfig

| 配置项 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| foldTapArea | 折叠行为触发区域，可选`btn`、`header` | string | 'btn' |

## 插槽

| 名称        | 说明                 |
| ----------- | -------------------- |
| 默认插槽    | 卡片内容             |
| headerTitle | 自定义标题栏左侧标题 |
| headerRight | 自定义标题栏右侧内容 |
