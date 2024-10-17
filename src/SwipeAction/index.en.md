---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# SwipeAction Sliding Assembly

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

List of functional extensions.

## When to use

Show hidden function menus by sliding.

## Tip

1. The component's parent container must have width and height set.
2. The sum of the widths of the sliding buttons on both sides must be the same.
3. When elasticity is set to false, a smaller damping value provides a better experience.
4. The second confirmation of the sliding on each side will only trigger the first one, the others will not trigger.
5. It is recommended to use it in applets of the basic library 2.0.1.0 versions (such as DingTalk applets) have defects in sliding experience (lack of sliding transition effect after touchend).

## Code Sample

### Basic Usage

<code src='../../demo/pages/SwipeAction/index'></code>

### Button on the left

<!-- <code src='pages/SwipeActionLeft/index'></code> -->

### Change the number of buttons

<!-- <code src='pages/SwipeActionNumber/index'></code> -->

### Disable sliding rebound

<!-- <code src='pages/SwipeActionAnimation/index'></code> -->

### Set button width

<!-- <code src='pages/SwipeActionWidth/index'></code> -->

### Set sliding speed

<!-- <code src='pages/SwipeActionSpeed/index'></code> -->

### Button click twice to confirm

<!-- <code src='pages/SwipeActionTap/index'></code> -->

### Second confirmation of maximum sliding distance of button

<!-- <code src='pages/SwipeActionMove/index'></code> -->

### There are buttons on the left and right sides

<!-- <code src='pages/SwipeActionLeftRight/index'></code> -->

### Custom Button

<!-- <code src='pages/SwipeActionSlot/index'></code> -->

## API

| Property          | Type                          | Default Value                            | Description                                                                                                         |
| ------------- | ----------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| leftButtons   | [SwipeButton](#SwipeButton)   | []                                | Left button                                                                                                     |
| rightButtons  | [SwipeButton](#SwipeButton)   | []                                | Right button                                                                                                     |
| damping       | number                        | 70                                | Sliding speed                                                                                                     |
| elasticity    | boolean                       | `true`                            | sliding elasticity                                                                                                     |
| swiped        | `''` \| `'left'` \| `'right'` | `false`                           | Whether sliding open                                                                                                     |
| defaultSwiped | `''` \| `'left'` \| `'right'` | `false`                           | Default slide open                                                                                                 |
| disabled      | boolean                       | `false`                           | No Sliding                                                                                                     |
| onSwipeStart  | Slide start callback function            | (data: object, e: string) => void | E: data in the data-xxx on the component; Data: direction (whether the sliding button is left or right),swiped (whether to slide open)                     |
| onSwipeEnd    | Slide End Callback Function            | (data: object, e: string) => void | E: data in the data-xxx on the component; Data: direction (whether the sliding button is left or right),swiped (whether to slide open)                     |
| onButtonTap   | Callback function triggered by the button            | (data: object, e: string) => void | E: data in the data-xxx on the component; data: direction (whether the sliding button is left or right),btnIdx (the index of the button, the part near the main body is 0) |

### SwipeButton

| Property        | Type                        | Default Value | Description                                                                                |
| ----------- | --------------------------- | ------ | ----------------------------------------------------------------------------------- |
| text        | string                      | -      | Button Text                                                                            |
| slotName    | string                      | -      | slot 名称,可以自定义对应按钮的内容。`${slotName}-confirm`可以自定义确认时的按钮内容 |
| bgColor     | string                      | -      | Button background color                                                                        |
| color       | string                      | `#fff` | Button Font Color                                                                        |
| width       | number                      | 150    | Button width                                                                            |
| confirmType | `''` \| `'move'` \| `'tap'` | -      | 二次确认Type：不触发二次确认 \| 滑动超出最大距离触发二次确认 \| 点击触发二次确认    |
| confirmText | string                      | -      | Copy description of the second confirmation; if empty, text is displayed                                             |
