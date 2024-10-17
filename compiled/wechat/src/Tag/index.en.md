---

nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Tag Tag

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Small labels for labeling and classification.

## When to use
- The attributes and dimensions used to label things.
- Classification.

## Code Sample
<code src='../../demo/pages/Tag/index'></code>



## API
| Property   | Description     | Type            | Default Value    |
| ------ | -------- | --------------- | --------- |
| className | Class Name | string | - |
| color  | 标签颜色，内建 `primary`（蓝色）、`success`（绿色）、`warning`（黄色）、`danger`（红色） | string | `primary` |
| icon   | Icon, support Icon type and slot | string\|slot | - |
| style  | Style | string | - |
| type   | Type，可选 `outline`、`fill`、`fill-light` | string | `fill` |
