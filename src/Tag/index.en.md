---

nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Tag Tag

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Small labels for labeling and classification.

## When to use
- The attributes and dimensions used to label things.
- Classification.

## Code example
<code src='../../demo/pages/Tag/index'></code>



## API
| Property   | Description     | Type            | Default Value    |
| ------ | -------- | --------------- | --------- |
| className | Class Name | string | - |
| color  | Label color, built-in `primary`(blue),`success`(Green),`warning`(yellow),`danger`(Red) | string | `primary` |
| icon   | Icon, support Icon type and slot | string\|slot | - |
| style  | Style | string | - |
| type   | type, optional `outline`、`fill`、`fill-light` | string | `fill` |
