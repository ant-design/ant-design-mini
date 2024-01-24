---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Grid 宫格

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

宫格用于业务中多个子功能的导航，相比于列表的形式，具有更高的屏效。

## 代码示例

<code src='pages/Grid/index'></code>

## API

| 属性               | 说明            | 类型                       | 默认值      |
| ------------------|----------------|----------------------------|------------|
| className         | 类名           | string                     | -          |
| columns           | 每行展示的元素个数，`default` 模式生效 | number | 5          |
| description       | 描述插槽，接收 value、index | slot                     | -          |
| gridItemLayout    | item 布局，可选 `vertical`（垂直）`horizontal`（水平） | string | `vertical` |
| icon              | 图标插槽，接收 value、index | slot                     | -          |
| iconSize          | 图标尺寸，单位 px | number                   | -          |
| iconStyle         | 图标样式类型，可选 `normal` `circle` | string | `normal`   |
| items             | 内容文字       | [GridItem](#griditem)[]    | -          |
| mode              | 样式类型，可选 `default`（平铺）`scroll`（滑动）| string | `default`  |
| paginationFillColor | 分页符背景色，`scroll` 模式生效 | string               | -          |
| paginationFrontColor | 分页符颜色，`scroll` 模式生效 | string               | -          |
| showDivider       | 是否展示分割线 | boolean                    | -          |
| style             | 样式           | string                     | -          |
| title             | 标题插槽，接收 value、index | slot                     | -          |
| onTap             | 点击每个元素触发 | (item: [GridItem](#griditem)) => void |           |
| onFirstAppear     | 当前元素首次可见面积达到 50% 时触发 | (item: [GridItem](#griditem)) => void |          |

#### GridItem

| 参数         | 说明       | 类型     | 默认值   |
| ------------|------------|----------|---------|
| description | 描述       | string   | -       |
| icon        | 图标，支持图片和 [Icon](./Icon) | string | -       |
| iconStyle   | 图标样式类型，优先级高于 grid，可选 `normal` `circle` | string | -       |
| title       | 标题       | string   | -       |
