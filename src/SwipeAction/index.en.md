---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# SwipeAction

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

## Code example

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
| slotName    | string                      | -      | The name of the slot. You can customize the content of the corresponding button.`${slotName}-confirm`You can customize the content of the button at the time of confirmation |
| bgColor     | string                      | -      | Button background color                                                                        |
| color       | string                      | `#fff` | Button Font Color                                                                        |
| width       | number                      | 150    | Button width                                                                            |
| confirmType | `''` \| `'move'` \| `'tap'` | -      | Secondary confirmation type: do not trigger secondary confirmation | slide beyond the maximum distance to trigger secondary confirmation | click to trigger secondary confirmation    |
| confirmText | string                      | -      | Copy description of the second confirmation; if empty, text is displayed                                             |
