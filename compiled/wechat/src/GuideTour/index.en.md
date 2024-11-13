---
nav:
  path: /components
group:
  title: Information Display
  order: 9
toc: 'content'
---

# GuideTour

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Mask layers with custom card boot components.

## When to use

Applies to the introduction of key features on the page.

## Code example

<code src='../../demo/pages/GuideTour/index'></code>

## API

| Property          | Description           | Type                         | Default Value |
| ------------- | -------------- | ---------------------------- | ------ |
| `className`   | Class Name           | `string`                     | -      |
| `current`     | Current step       | `number`                     | -      |
| `defaultCurrent` | Default Current Step | `number`                     | 0      |
| `items`       | Step Information       | [`GuideTourItem`](#guidetourttem)[] | -      |
| `maskClassName` | Class name of the layer   | `string`                     | -      |
| `maskStyle`   | Layer Style     | `string`                     | -      |
| `style`       | Style           | `string`                     | -      |
| `swiperable`  | Whether sliding mode is on | `boolean`                   | `false`|
| `visible`     | Display       | `boolean`                     | `false`|
| `onCancel`    | Close Callback       | `() => void`                 | -      |
| `onChange`    | Step Change Callback   | `(index: number) => void`    | -      |
| `jumpText`    | Copy of the skip button     | `string`                     | 'Skip' |
| `prevStepText`| Copy of the previous button     | `string`                     | 'One step' |
| `nextStepText`| Copy of the next button     | `string`                     | 'Next step' |
| `gotItText`| Know the copy of the button     | `string`                     | 'Got it' |

### GuideTourItem 

| Parameters       | Description                       | Type     | Default Value |
| ---------- | -------------------------- | -------- | ------ |
| `left`     | Distance from left, in units `px`    | `number` | -      |
| `imageMode` | Image mode, same as image mode | `string` | -      |
| `imageStyle` | Picture Inline Style              | `string` | -      |
| `imageUrl` | Picture Address                  | `string` | -      |
| `top`      | Distance from top, in units `px`    | `number` | -      |
