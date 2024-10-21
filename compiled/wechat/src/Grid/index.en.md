---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Grid

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

The palace is used for navigation of multiple sub-functions in the business and has a higher screen effect than the form of a list.

## Code example

<code src='../../demo/pages/Grid/index'></code>

## API

| Property               | Description            | Type                       | Default Value      |
| ------------------|----------------|----------------------------|------------|
| className         | Class Name           | string                     | -          |
| columns           | The number of elements shown in each row,`default` Mode effective | number | 5          |
| description       | Description slot, receiving value, index | slot                     | -          |
| gridItemLayout    | item layout, optional `vertical`(Vertical)`horizontal`(Horizontal) | string | `vertical` |
| icon              | Icon slot, receiving value, index | slot                     | -          |
| iconSize          | Icon size in px | number                   | -          |
| iconStyle         | Icon style type, optional `normal` `circle` | string | `normal`   |
| items             | Content Text       | [GridItem](#griditem)[]    | -          |
| mode              | Style type, optional `default`(Tile)`scroll`(Sliding)| string | `default`  |
| paginationFillColor | Page break background color,`scroll` Mode effective | string               | -          |
| paginationFrontColor | Page break color,`scroll` Mode effective | string               | -          |
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
