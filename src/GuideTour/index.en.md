---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# GuideTour

Layer and custom card boot components. Applies to an introduction to key features on the page.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-guide-tour": "antd-mini/es/GuideTour/index"
#endif
#if WECHAT
  "ant-guide-tour": "antd-mini/GuideTour/index"
#endif
}
```

## Code example

### Basic use

```xml
<ant-guide-tour
  items="{{items}}"
  visible="{{visible}}"
#if ALIPAY
  onCancel="closeTour"
  onChange="onChange"
#endif
#if WECHAT
  bindcancel="closeTour"
  bindchange="onChange"
#endif
/>
```

```js
Page({
  data: {
    visible: true,
    items: [
      { left: 20, top: 80, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/IV3MGP1qL/bianzu%25252013.png', imageMode: 'widthFix' },
      { left: 20, top: 160, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/%26B6d3lBJn/bianzu%25252020.png' },
      { left: 20, top: 220, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/lwVOkCcwb/bianzu%25252021.png' },
    ],
  },
  onChange(index) {
#if ALIPAY
    console.log('index', index);
#endif
  },
  closeTour() {
    this.setData({
      visible: false,
    });
  },
});
```

### Controlled Mode

```xml

<ant-guide-tour
  items="{{items}}"
  current="{{current}}"
  visible="{{visible}}"
#if ALIPAY
  onCancel="closeTour"
  onChange="onChangeControlled"
#endif
#if WECHAT
  bindcancel="closeTour"
  bindchange="onChangeControlled"
#endif
/>

```

```js
Page({
  data: {
    visible: false,
    current: 0,
    items: [
      { left: 20, top: 80, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/IV3MGP1qL/bianzu%25252013.png', imageMode: 'widthFix' },
      { left: 20, top: 160, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/%26B6d3lBJn/bianzu%25252020.png' },
      { left: 20, top: 220, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/lwVOkCcwb/bianzu%25252021.png' },
    ],
  },
  onChangeControlled(value) {
#if ALIPAY
    this.setData({ current: value });
#endif
#if WECHAT
    this.setData({ current: value.detail });
#endif
  },
  closeTour() {
    this.setData({
      visible: false
    });
  },
});


```

### Demo Code

<code src='../../demo/pages/GuideTour/index'></code>

## API

| Property                   | Description             | Type                                | Default Value   |
| ---------------------- | ---------------- | ----------------------------------- | -------- |
| className              | Class Name             | `string`                            | -        |
| current                | Current step         | `number`                            | -        |
| defaultCurrent         | Default Current Step     | `number`                            | 0        |
| items                  | Step Information         | [`GuideTourItem`](#guidetourttem)[] | -        |
| maskClassName          | Class name of the layer       | `string`                            | -        |
| maskStyle              | The style of the layer       | `string`                            | -        |
| style                  | Style             | `string`                            | -        |
| swiperable             | Whether sliding mode is on | `boolean`                           | `false`  |
| visible                | Whether to display         | `boolean`                           | `false`  |
| jumpText               | Copy of skip button   | `string`                            | 'Skip'   |
| prevStepText           | Copy of the previous button | `string`                            | 'One step' |
| nextStepText           | Copy of the next button | `string`                            | 'Next step' |
| gotItText              | I know the copy of the button. | `string`                            | "I know' |
| #if ALIPAY onCancel    | Close Callback         | `() => void`                        | -        |
| #if ALIPAY onChange    | Step Change Callback     | `(index: number) => void`           | -        |
| #if WECHAT bindcancel | Close Callback         | `() => void`                        | -        |
| #if WECHAT bindchange | Step Change Callback     | `(index: number) => void`           | -        |

### GuideTourItem

| Parameters       | Description                       | Type     | Default Value |
| ---------- | -------------------------- | -------- | ------ |
| left       | Distance from left, in units `px`    | `number` | -      |
| imageMode  | Image mode, same as image mode | `string` | -      |
| imageStyle | Picture Inline Style               | `string` | -      |
| imageUrl   | Picture Address                   | `string` | -      |
| top        | Distance from top, in units `px`    | `number` | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                    | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                 |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --guide-tour-text-color   | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Bootstrap Tutorial Text Color     |
| --guide-tour-clear-color  | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Bootstrap Tutorial Clear Button Color |
| --guide-tour-dot-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Guided Tutorial Step Point Color   |
| --guide-tour-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Bootstrap Tutorial Border Color     |
| --guide-tour-btn-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Bootstrap Tutorial Button Color     |
