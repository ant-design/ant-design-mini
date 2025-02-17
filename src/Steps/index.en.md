---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# Steps

A navigation bar that guides the user through the process. When the task is complex or there is a sequential relationship, it is broken down into a series of steps to simplify the task.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-steps": "antd-mini/es/Steps/index"
#endif
#if WECHAT
  "ant-steps": "antd-mini/Steps/index"
#endif
}
```

## Code Sample

### Basic use

> [items](#item) Data-driven step bar rendering.`current` Specifies the current step,`status` Specifies the status of the current step, optional `finish` or `error`。

```xml
<ant-steps
  items="{{items}}"
  current="{{1}}"
  status="error"
/>
```

```js
Page({
  data: {
    items: [
      {
        title: 'Step1',
        description: 'description',
      },
      {
        title: 'Step2',
        description: 'description',
      },
      {
        title: 'Step3',
        description: 'description',
      },
    ],
  },
});
```

### Vertical step bar

```xml
<ant-steps
  items="{{items}}"
  direction="vertical"
/>
```

### Controlled Mode

```xml
<ant-steps
  items="{{items}}"
  current="{{current}}"
/>
<ant-button
  type="primary"
#if ALIPAY
  onTap="onNextTap"
#endif
#if WECHAT
  bindtap="onNextTap"
#endif
>
  <view a:if="{{current < items.length - 1}}">Next step</view>
  <view a:else>Complete</view>
</ant-button>
<ant-button
  a:if="{{current > 0}}"
#if ALIPAY
  onTap="onPrevTap"
#endif
#if WECHAT
  bindtap="onPrevTap"
#endif
  >
  Previous Step
</ant-button>
```

```js
Page({
  data: {
    current: 0,
    items: [
      {
        title: 'Step1',
        description: 'description',
      },
      {
        title: 'Step2',
        description: 'description',
      },
      {
        title: 'Step3',
        description: 'description',
      },
    ],
  },
  onNextTap() {
    if (this.data.current === this.data.items.length - 1) {
#if ALIPAY
      my.showToast({ content: 'Finish' })
#endif
#if WECHAT
      wx.showToast({ title: 'Finish' })
#endif
      return;
    }
    this.setData({
      current: this.data.current + 1,
    });
  },
  onPrevTap() {
    if (this.data.current === 0) {
      return;
    }
    this.setData({
      current: this.data.current - 1,
    });
  },
});
```

### Demo Code

<code src='../../demo/pages/Steps/index'></code>

## API

| Property        | Description                                         | Type            | Default Value       |
| ----------- | -------------------------------------------- | --------------- | ------------ |
| className   | Class Name                                         | string          | -            |
| current     | Current step                                     | number          | -            |
| description | Custom description content rendering, receiving index and value      | slot            | -            |
| direction   | direction, optional `horizontal` or `vertical`        | string          | `horizontal` |
| icon        | Custom icon rendering, receiving index and value          | slot            | -            |
| items       | Show Item                                       | [Item](#item)[] | -            |
| status      | Specifies the status of the current step, optional `finish` or `error` | string          | `finish`     |
| style       | Style                                         | string          | -            |
| title       | Custom title rendering, receiving index and value          | slot            | -            |

### Item

| Property        | Description | Type   | Default Value |
| ----------- | ---- | ------ | ------ |
| description | Content | string | -      |
| title       | Title | string | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks               |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --steps-non-active-bg | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div> | <div style="width: 150px; height: 30px; background-color: #444444; color: #ffffff;">#444444</div> | Inactive Step Background Color |
| --steps-title-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Step Title Color       |
| --steps-desc-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Step Description Color       |
| --steps-default-bg    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Default Step Background Color   |
| --steps-finish-bg     | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div> | Complete Steps Background Color   |
