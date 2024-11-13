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

Masked with the boot component of the custom card.

## When to use

Applies to an introduction to key features on the page.

## Code Sample

<code src='../../demo/pages/GuideTour/index'></code>

## API

| Property             | Description             | Type                                | Default Value   |
| ---------------- | ---------------- | ----------------------------------- | -------- |
| `className`      | Class Name             | `string`                            | -        |
| `current`        | Current step         | `number`                            | -        |
| `defaultCurrent` | Default Current Step     | `number`                            | 0        |
| `items`          | Step Information         | [`GuideTourItem`](#guidetourttem)[] | -        |
| `maskClassName`  | Class name of the layer       | `string`                            | -        |
| `maskStyle`      | Masking Style       | `string`                            | -        |
| `style`          | Style             | `string`                            | -        |
| `swiperable`     | Whether sliding mode is on | `boolean`                           | `false`  |
| `visible`        | Display         | `boolean`                           | `false`  |
| `onCancel`       | Close Callback         | `() => void`                        | -        |
| `onChange`       | Step Change Callback     | `(index: number) => void`           | -        |
| `jumpText`       | Copy of skip button   | `string`                            | 'Skip'   |
| `prevStepText`   | Copy of the previous button | `string`                            | 'One step' |
| `nextStepText`   | Copy of the next button | `string`                            | 'Next step' |
| `gotItText`      | Know the copy of the button | `string`                            | "I know' |

### GuideTourItem

| Parameters         | Description                       | Type     | Default Value |
| ------------ | -------------------------- | -------- | ------ |
| `left`       | Distance from left, unit `px`    | `number` | -      |
| `imageMode`  | Image mode, same as image mode | `string` | -      |
| `imageStyle` | Picture Inline Style               | `string` | -      |
| `imageUrl`   | Picture Address                   | `string` | -      |
| `top`        | Distance from top, in units `px`    | `number` | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                    | Default Value                                                                                            | Remarks                 |
| ------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --guide-tour-text-color   | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Bootstrap Tutorial Text Color     |
| --guide-tour-clear-color  | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | Bootstrap Tutorial Clear Button Color |
| --guide-tour-dot-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | Guided Tutorial Step Point Color   |
| --guide-tour-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | Bootstrap Tutorial Border Color     |
| --guide-tour-btn-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Bootstrap Tutorial Button Color     |
