---
nav:
  path: /components
group:
  title: 信息展示
  order: 9
toc: 'content'
---

# GuideTour novice guide

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Layer and custom card boot components.

## When to use

Applies to an introduction to key features on the page.

## Code Sample

<code src='../../demo/pages/GuideTour/index'></code>

## API

| Property          | Description           | Type                         | Default Value |
| ------------- | -------------- | ---------------------------- | ------ |
| `className`   | Class Name           | `string`                     | -      |
| `current`     | Current step       | `number`                     | -      |
| `defaultCurrent` | Default Current Step | `number`                     | 0      |
| `items`       | Step Information       | [`GuideTourItem`](#guidetourttem)[] | -      |
| `maskClassName` | Class name of the layer   | `string`                     | -      |
| `maskStyle`   | The style of the layer     | `string`                     | -      |
| `style`       | Style           | `string`                     | -      |
| `swiperable`  | Whether sliding mode is on | `boolean`                   | `false`|
| `visible`     | Whether to display       | `boolean`                     | `false`|
| `onCancel`    | Close Callback       | `() => void`                 | -      |
| `onChange`    | Step Change Callback   | `(index: number) => void`    | -      |
| `jumpText`    | Copy of skip button     | `string`                     | 'Skip' |
| `prevStepText`| Copy of the previous button     | `string`                     | 'One step' |
| `nextStepText`| Copy of the next button     | `string`                     | 'Next step' |
| `gotItText`| Know the copy of the button     | `string`                     | "I know' |

### GuideTourItem 

| Parameters       | Description                       | Type     | Default Value |
| ---------- | -------------------------- | -------- | ------ |
| `left`     | Distance from left, in units `px`    | `number` | -      |
| `imageMode` | Image mode, same as image mode | `string` | -      |
| `imageStyle` | Picture Inline Style              | `string` | -      |
| `imageUrl` | Picture Address                  | `string` | -      |
| `top`      | Distance from top, in units `px`    | `number` | -      |
