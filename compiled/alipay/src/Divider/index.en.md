---
nav:
  path: /components
group:
  title: 信息展示
toc: 'content'
---

# Divider dividing line

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

The dividing line that separates the content.

## When to use

- Segmentation of text paragraphs in different sections.
- Split inline text/links, such as the action column of a table.

## Code Sample
<code src='../../demo/pages/Divider/index'></code>

## API

| Property       | Description                    | Type         | Default Value        |
| ---------- | ----------------------- | ------------ | ------------- |
| className  | Root node class name              | string       | -             |
| direction  | Split line direction, optional `horizontal` `vertical` | string | `horizontal` |
| lineColor  | Split line color              | string       | -             |
| lineHeight | 分割线高度，仅当 `direction` 为 `horizontal` 时生效，单位为 `px` | number  | - |
| lineType   | Split line type, optional `solid` `dashed` `dotted`   | string | - |
| lineWidth  | 分割线宽度，仅当 `direction` 为 `vertical` 时生效，单位为 `px`  | number | - |
| style      | Style                    | string       | -             |
| textClassName | Split Line Text Class Name      | string       | -             |
| textPosition | Split line text position, optional `left` `center` `right` | string | `center` |
| textStyle    | Split Line Text Style      | string       | -             |
| text         | Split Line Text          | string \| slot | -           |
