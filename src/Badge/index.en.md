---
nav:
  path: /components
group:
  title: Guide & Hint
  order: 14
toc: 'content'
---

# Badge

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

A logo that displays a red dot, number, or text. Used to remind the user of pending matters or new updated quantities.

## When to use
Use when you need to display numbers, text, or little red dots in the upper right corner. It is suitable for prompting new messages, functions or services for productization, attracting users' attention through conspicuous visual forms and prompting them to perform related operations.

## Code example
<code src="../../demo/pages/Badge/index"></code>

## API

| Property      | Description                                 | Type                 | Default Value       |
| --------- | ------------------------------------ | -------------------- | ------------ |
| bgColor   | Custom background color, CSS color value              | string               | -            |
| className | Class name of the component root node                     | string               | -            |
| offsetX   | Horizontal offset      | string               | '-50%'       |
| offsetY   | Offset in vertical direction    | string               | '-50%'       |
| position  | Position of the logo relative to the container, options include:`top-left`、`top-right`、`top-center`、`left`、`right`、`bottom-left`、`bottom-center` and `bottom-right` | string | `top-right` |
| stroke    | Does the logo have a stroke                    | boolean              | false        |
| style     | Custom Style                           | object               | -            |
| text      | Logo content. Empty means that only red dots are displayed. It can be numbers or text. If the number exceeds 99, it will be displayed `...` | string \| number \| slot     | -            |
| type      | Logo type, options include:`dot`(red dot),`number`(Number type, more than 99 will be automatically converted),`text`(text bubbles) and `bubble`(Bubble form, with arrow) | string | `dot`       |
