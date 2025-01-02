---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: 'content'
---

# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

- 网络较慢，需要长时间等待加载，并且只在第一次加载的时候使用。
- 在确保手机性能的前提下，尽量使用预加载，最好不用骨架屏。
- 适用于图文信息较多且重要的首页、列表、卡片中。小的模块类组件（例如弹窗）不要使用。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-skeleton": "antd-mini/es/Skeleton/index",
  "ant-skeleton-avatar": "antd-mini/es/Skeleton/Avatar/index",
  "ant-skeleton-title": "antd-mini/es/Skeleton/Title/index",
  "ant-skeleton-button": "antd-mini/es/Skeleton/Button/index",
  "ant-skeleton-paragraph": "antd-mini/es/Skeleton/Paragraph/index",
  "ant-skeleton-input": "antd-mini/es/Skeleton/Input/index",
#endif
#if WECHAT
  "ant-skeleton": "antd-mini/Skeleton/index",
  "ant-skeleton-avatar": "antd-mini/Skeleton/Avatar/index",
  "ant-skeleton-title": "antd-mini/Skeleton/Title/index",
  "ant-skeleton-button": "antd-mini/Skeleton/Button/index",
  "ant-skeleton-paragraph": "antd-mini/Skeleton/Paragraph/index",
  "ant-skeleton-input": "antd-mini/Skeleton/Input/index",
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-skeleton animate="{{true}}" />
```

### 带头像

```xml
<ant-skeleton avatar="{{true}}" />
```

### 自定义组合

```xml
<ant-skeleton-avatar />
<ant-skeleton-paragraph rows="{{1}}" />
<ant-skeleton-input />
<ant-skeleton-input />
<ant-skeleton-input />
<ant-skeleton-button size="small" />
```

### 复杂组合

```xml
<ant-skeleton
  loading="{{showLoading}}"
  title="{{false}}"
  avatar="{{true}}"
  paragraph="{{paragraph}}">
  <view class="container">
    <ant-avatar
      src="https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
    <view class="content">
        We supply a series of design principles, practical patterns and high
        quality design resources, to help people create their product prototypes
        beautifully and efficiently.
    </view>
  </view>
</ant-skeleton>
```

### Demo 代码

<code src='../../demo/pages/Skeleton/index'></code>

## API

### Skeleton

| 属性      | 说明                                         | 类型                  | 默认值 |
| --------- | -------------------------------------------- | --------------------- | ------ |
| animate   | 是否展示动画效果                             | boolean               | false  |
| avatar    | 是否显示头像占位图                           | `boolean \| Avatar`   | false  |
| className | 类名                                         | string                | -      |
| loading   | 为 true 时，显示占位图。反之则直接展示子组件 | boolean               | true   |
| paragraph | 段落                                         | `number \| Paragraph` | true   |
| style     | 样式                                         | CSSProperties         | -      |
| title     | 是否显示标题占位图                           | boolean               | true   |

### Avatar

| 属性      | 说明                                             | 类型          | 默认值   |
| --------- | ------------------------------------------------ | ------------- | -------- |
| animate   | 是否展示动画效果                                 | boolean       | false    |
| className | 类名                                             | string        | -        |
| loading   | 为 true 时，显示占位图。反之则直接展示子组件     | boolean       | true     |
| shape     | 头像形状 `circle` 或 `square`                    | string        | `square` |
| size      | 头像大小 `x-small`、`small`、`medium` 或 `large` | string        | `medium` |
| style     | 样式                                             | CSSProperties | -        |

#### Paragraph 段落

| 属性      | 说明                                         | 类型          | 默认值 |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | 是否展示动画效果                             | boolean       | false  |
| className | 类名                                         | string        | -      |
| loading   | 为 true 时，显示占位图。反之则直接展示子组件 | boolean       | true   |
| rows      | 段落行数，大于 0 展示                        | number        | 3      |
| style     | 样式                                         | CSSProperties | -      |

#### Title 标题

| 属性      | 说明                                         | 类型          | 默认值 |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | 是否展示动画效果                             | boolean       | false  |
| className | 类名                                         | string        | -      |
| loading   | 为 true 时，显示占位图。反之则直接展示子组件 | boolean       | true   |
| style     | 样式                                         | CSSProperties | -      |

#### Button 按钮

| 属性      | 说明                                         | 类型          | 默认值   |
| --------- | -------------------------------------------- | ------------- | -------- |
| animate   | 是否展示动画效果                             | boolean       | false    |
| className | 类名                                         | string        | -        |
| loading   | 为 true 时，显示占位图。反之则直接展示子组件 | boolean       | true     |
| size      | 大小，`small`、`medium` 或 `large`           | string        | `medium` |
| style     | 样式                                         | CSSProperties | -        |

#### Input 输入框

| 属性      | 说明                                         | 类型          | 默认值 |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | 是否展示动画效果                             | boolean       | false  |
| className | 类名                                         | string        | -      |
| loading   | 为 true 时，显示占位图。反之则直接展示子组件 | boolean       | true   |
| style     | 样式                                         | CSSProperties | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                            | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --selector-background-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 选择器背景颜色       |
| --selector-item-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | 选择器项背景颜色     |
| --selector-item-active-background | <div style="width: 150px; height: 30px; background-color: #e7f1ff; color: #333333;">#e7f1ff</div> | <div style="width: 150px; height: 30px; background-color: #0d2543; color: #ffffff;">#0d2543</div> | 选择器激活项背景颜色 |
| --selector-item-color             | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 选择器项颜色         |
| --selector-item-sub-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 选择器项子颜色       |
