---
nav:
  path: /components
group:
  title: 反馈
toc: 'content'
---

# Loading loading

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Used to prompt that a part or page is loading.

## Code Sample
<code src='../../demo/pages/Loading/index' noChangeButton></code>

## API

| Property       | Description                                            | Type   | Default Value   |
| ---------- | ----------------------------------------------- | ------ | -------- |
| className  | Root node class name                                      | string | -        |
| color      | 加载时的颜色，当 type 为 `spin` 时，只支持十六进制颜色码 | string | `#fff`   |
| size       | 加载图标尺寸，当 type 为 `spin` 时生效。可选 `small`、`medium`、`large`、`x-large` | string | `medium` |
| style      | root node style                                    | string | -        |
| type       | 加载样式Type，可选 `spin`、`mini`              | string | `spin`   |
