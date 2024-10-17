---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: 'content'
---

# Badge Logo

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

A logo that displays a red dot, number, or text. Used to remind the user of pending matters or new updated quantities.

## When to use
Use when you need to display numbers, text, or little red dots in the upper right corner. It is suitable for prompting new messages, functions or services for productization, attracting users' attention through conspicuous visual forms and prompting them to perform related operations.

## Code Sample
<code src="../../demo/pages/Badge/index"></code>

## API

| Property      | Description                                 | Type                 | Default Value       |
| --------- | ------------------------------------ | -------------------- | ------------ |
| bgColor   | Custom background color, CSS color values              | string               | -            |
| className | Class name of the component root node                     | string               | -            |
| offsetX   | Horizontal offset      | string               | '-50%'       |
| offsetY   | Offset in vertical direction    | string               | '-50%'       |
| position  | 徽标相对于容器的位置，选项包括：`top-left`、`top-right`、`top-center`、`left`、`right`、`bottom-left`、`bottom-center` 和 `bottom-right` | string | `top-right` |
| stroke    | Does the logo have a stroke                    | boolean              | false        |
| style     | Custom Style                           | object               | -            |
| text      | Logo content. Empty means that only red dots are displayed. It can be numbers or text. If the number exceeds 99, it will be displayed `...` | string \| number \| slot     | -            |
| type      | 徽标Type，选项包括：`dot`（红点）、`number`（数字Type，超过 99 会自动转换）、`text`（文字气泡）和 `bubble`（气泡形态，带有箭头） | string | `dot`       |
