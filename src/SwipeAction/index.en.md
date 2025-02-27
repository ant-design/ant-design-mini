---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# SwipeAction

List of functional extensions. Show hidden function menus by sliding.

## Precautions

1. The component's parent container must have width and height set.
2. The sum of the widths of the sliding buttons on both sides must be the same.
3. When elasticity is set to false, a smaller damping value provides a better experience.
4. The second confirmation of the sliding on each side will only trigger the first one, the others will not trigger.
5. It is recommended to use it in applets of the basic library 2.0.1.0 versions (such as DingTalk applets) have defects in sliding experience (lack of sliding transition effect after touchend).

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-swipe-action": "antd-mini/es/SwipeAction/index"
#endif

#if WECHAT
  "ant-swipe-action": "antd-mini/SwipeAction/index"
#endif
}
```

## Code Sample

### Basic Usage

```xml
<ant-swipe-action
  rightButtons="{{[[
      {
        text: 'favor',
        bgColor: '#CCCCCC',
        color: '#fff',
        width: 200,
      },
      {
        text: 'rest',
        bgColor: '#1677FF',
        color: '#fff',
        width: 170,
      },
      {
        text: 'delete',
        bgColor: '#FF2B00',
        color: '#fff',
        width: 140,
      },
    ]]}}"
    elasticity="{{true}}"
    swiped="{{swipeIndex === index}}"
    onSwipeEnd="onSwipeEnd"
    onSwipeStart="onSwipeStart"
    onButtonTap="onButtonTap">
  <view>Right-three buttons</view>
</ant-swipe-action>
```

### Button on the left

Setup`leftButtons`Property
<code src='../../demo/pages/SwipeActionLeft/index'></code>

### Change the number of buttons

<code src='../../demo/pages/SwipeActionNumber/index'></code>

### Disable sliding rebound

Setup`elasticity`property is`false`
<code src='../../demo/pages/SwipeActionAnimation/index'></code>

### Set button width

Set the buttons`width`Property
<code src='../../demo/pages/SwipeActionWidth/index'></code>

### Set sliding speed

Setup`damping`Property
<code src='../../demo/pages/SwipeActionSpeed/index'></code>

### Button click twice to confirm

Set buttons Properties`confirmType`For`tap`

<code src='../../demo/pages/SwipeActionTap/index'></code>

### Second confirmation of maximum sliding distance of button

Set buttons Properties`confirmType`For`move`
<code src='../../demo/pages/SwipeActionMove/index'></code>

### There are buttons on the left and right sides

Can be set simultaneously`leftButtons`and`rightButtons`
<code src='../../demo/pages/SwipeActionLeftRight/index'></code>

### Custom Button

<code src='../../demo/pages/SwipeActionSlot/index'></code>

### Demo Code

<code src='../../demo/pages/SwipeAction/index'></code>

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

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name               | Light Mode Default                                                                                    | Dark Mode Default                                                                                    | Remarks         |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --swipe-action-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Slide operation color |
