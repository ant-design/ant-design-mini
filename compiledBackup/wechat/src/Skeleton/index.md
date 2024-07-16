---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Skeleton 骨架屏

<code src="../../docs/components/compatibility.tsx" inline="true"></code>
在需要等待加载内容的位置提供一个占位图形组合
## 何时使用
- 网络较慢，需要长时间等待加载，并且只在第一次加载的时候使用。
- 在确保手机性能的前提下，尽量使用预加载，最好不用骨架屏。
- 适用于图文信息较多且重要的首页、列表、卡片中。小的模块类组件（例如弹窗）不要使用。

## 代码示例

<code src='pages/Skeleton/index'></code>

## API

### Skeleton

| 属性     | 说明                           | 类型                       | 默认值  |
| -------- | ------------------------------ | -------------------------- | ------- |
| animate  | 是否展示动画效果               | boolean                    | false   |
| avatar   | 是否显示头像占位图             | `boolean \| Avatar`        | false   |
| className| 类名                           | string                     | -       |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | boolean            | true    |
| paragraph| 段落                           | `number \| Paragraph`      | true    |
| style    | 样式                           | CSSProperties              | -       |
| title    | 是否显示标题占位图             | boolean                    | true    |

### Avatar

| 属性     | 说明                             | 类型         | 默认值   |
| -------- | -------------------------------- | ------------ | -------- |
| animate  | 是否展示动画效果                 | boolean      | false    |
| className| 类名                             | string       | -        |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | boolean    | true     |
| shape    | 头像形状 `circle` 或 `square`   | string       | `square` |
| size     | 头像大小 `x-small`、`small`、`medium` 或 `large` | string  | `medium` |
| style    | 样式                             | CSSProperties| -        |

#### Paragraph 段落

| 属性     | 说明                            | 类型         | 默认值  |
| -------- | ------------------------------- | ------------ | ------- |
| animate  | 是否展示动画效果                | boolean      | false    |
| className| 类名                            | string       | -       |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | boolean  | true    |
| rows     | 段落行数，大于 0 展示          | number       | 3       |
| style    | 样式                            | CSSProperties| -       |

#### Title 标题

| 属性     | 说明                            | 类型         | 默认值  |
| -------- | ------------------------------- | ------------ | ------- |
| animate  | 是否展示动画效果                | boolean      | false    |
| className| 类名                            | string       | -       |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | boolean  | true    |
| style    | 样式                            | CSSProperties| -       |

#### Button 按钮

| 属性     | 说明                            | 类型         | 默认值  |
| -------- | ------------------------------- | ------------ | ------- |
| animate  | 是否展示动画效果                | boolean      | false    |
| className| 类名                            | string       | -       |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | boolean  | true    |
| size     | 大小，`small`、`medium` 或 `large` | string       | `medium`|
| style    | 样式                            | CSSProperties| -       |

#### Input 输入框

| 属性     | 说明                            | 类型         | 默认值  |
| -------- | ------------------------------- | ------------ | ------- |
| animate  | 是否展示动画效果                | boolean      | false    |
| className| 类名                            | string       | -       |
| loading  | 为 true 时，显示占位图。反之则直接展示子组件 | boolean  | true    |
| style    | 样式                            | CSSProperties| -       |
