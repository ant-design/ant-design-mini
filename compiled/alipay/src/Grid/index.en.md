---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Grid

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

The palace is used for navigation of multiple sub-functions in the business and has a higher screen effect than the form of a list.

## Code Sample

<code src='../../demo/pages/Grid/index'></code>

## API

| Property               | Description            | Type                       | Default Value      |
| ------------------|----------------|----------------------------|------------|
| className         | Class Name           | string                     | -          |
| columns           | 每行展示的元素个数，`default` 模式生效 | number | 5          |
| description       | Description slot, receiving value, index | slot                     | -          |
| gridItemLayout    | item 布局，可选 `vertical`（垂直）`horizontal`（水平） | string | `vertical` |
| icon              | Icon slot, receiving value, index | slot                     | -          |
| iconSize          | Icon size in px | number                   | -          |
| iconStyle         | Icon style type, optional `normal` `circle` | string | `normal`   |
| items             | Content Text       | [GridItem](#griditem)[]    | -          |
| mode              | StyleType，可选 `default`（平铺）`scroll`（滑动）| string | `default`  |
| paginationFillColor | 分页符背景色，`scroll` 模式生效 | string               | -          |
| paginationFrontColor | 分页符颜色，`scroll` 模式生效 | string               | -          |
| showDivider       | Show split line | boolean                    | -          |
| style             | Style           | string                     | -          |
| title             | Header slot, receiving value, index | slot                     | -          |
| onTap             | Click on each element to trigger | (item: [GridItem](#griditem)) => void |           |
| onFirstAppear     | Triggered when the first visible area of the current element reaches 50% | (item: [GridItem](#griditem)) => void |          |

#### GridItem

| Parameters         | Description       | Type     | Default Value   |
| ------------|------------|----------|---------|
| description | Description       | string   | -       |
| icon        | icons, supporting images and [Icon](./Icon) | string | -       |
| iconStyle   | Icon style type, with priority higher than grid, optional `normal` `circle` | string | -       |
| title       | Title       | string   | -       |
