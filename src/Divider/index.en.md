---
nav:
  path: /components
group:
  title: Information Display
toc: 'content'
---

# Divider dividing line

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

The dividing line that separates the content.

## When to use

- Segmentation of text paragraphs in different sections.
- Split inline text/links, such as the action column of a table.

## Code example
<code src='../../demo/pages/Divider/index'></code>

## API

| Property       | Description                    | Type         | Default Value        |
| ---------- | ----------------------- | ------------ | ------------- |
| className  | Root node class name              | string       | -             |
| direction  | Split line direction, optional `horizontal` `vertical` | string | `horizontal` |
| lineColor  | Split line color              | string       | -             |
| lineHeight | Split line height, only if `direction` For `horizontal` Effective at the time, in units `px` | number  | - |
| lineType   | Split line type, optional `solid` `dashed` `dotted`   | string | - |
| lineWidth  | Split line width, only if `direction` For `vertical` Effective at the time, in units `px`  | number | - |
| style      | Style                    | string       | -             |
| textClassName | Split Line Text Class Name      | string       | -             |
| textPosition | Split line text position, optional `left` `center` `right` | string | `center` |
| textStyle    | Split Line Text Style      | string       | -             |
| text         | Split Line Text          | string \| slot | -           |
