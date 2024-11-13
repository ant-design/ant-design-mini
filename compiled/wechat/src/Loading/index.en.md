---
nav:
  path: /components
group:
  title: Feedback
toc: 'content'
---

# Loading

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Used to prompt that a part or page is loading.

## Code example
<code src='../../demo/pages/Loading/index' noChangeButton></code>

## API

| Property       | Description                                            | Type   | Default Value   |
| ---------- | ----------------------------------------------- | ------ | -------- |
| className  | Root node class name                                      | string | -        |
| color      | The color when loading, when type is `spin` Only hexadecimal color codes are supported. | string | `#fff`   |
| size       | Load icon size, when type is `spin` effective. Optional `small`、`medium`、`large`、`x-large` | string | `medium` |
| style      | root node style                                    | string | -        |
| type       | Load style type, optional `spin`、`mini`              | string | `spin`   |
