---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Popover

Click on the element to pop up the bubble menu. The bubble menu for navigation functions is evoked, usually used to accommodate functions used at low frequencies. This function can only be activated via the icon on the navigation bar.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-popover": "antd-mini/es/Popover/index"
#endif
#if WECHAT
  "ant-popover": "antd-mini/Popover/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<popover
  content="simple tips"
  placement="top-left"
  showCloseIcon="{{true}}"
  style="display: inline-block">
  <ant-button
    size="small"
    inline>
    Point me
  </ant-button>
</popover>
```

### Support for pictures and action point buttons

```xml
<popover
  content="这里是一个提示文案很长的Tips，酌情使用文案。单一Tips最多可容纳2行文案这里是一个提示文案很长的Tips，酌情使用文案。单一Tips最多可容纳2行文案…"
  placement="top"
  actionText="operation"
  imageUrl="https://mdn.alipayobjects.com/huamei_mnxlps/afts/img/A*tLCBTqxataIAAAAAAAAAAAAADkqGAQ/original"
#if ALIPAY
  onVisibleChange="onVisibleChange"
  onTapAction="onTapAction"
#endif
#if WECHAT
  bindvisiblechange="onVisibleChange"
  bindtapaction="onTapAction"
#endif
  >
  <ant-button>Point me</ant-button>
</popover>
```

### Custom

#### Color

```xml
<popover
  content="red"
  color="red">
  <ant-button style="margin-right: 24rpx;" inline type="primary">Custom Colors</ant-button>
</popover>
```

#### Slot

```xml
<popover content="left & right slots">
  <ant-button inline style="margin-right: 24rpx;">Slot</ant-button>
  <icon slot="leftContent" style="font-size: 48rpx; margin-right: 24rpx;" type="FaceRecognitionOutline" />
  <icon slot="rightContent" style="font-size: 48rpx; margin-left: 24rpx;" type="FaceRecognitionOutline" />
</popover>
```

#### Location

Optional `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top`、`right-bottom`

```xml
<popover placement="top-right">
  <ant-button size="small" inline>Point me</ant-button>
  <view slot="content" />
</popover>
```

### Controlled

```xml
<view>
  <popover
    content="prompt"
    placement="right"
    showMask="{{false}}"
    visible="{{visible}}"
    style="display: inline-block">
    <text>Click the button to modify the visible</text>
  </popover>
</view>
<ant-button
  size="small"
  inline
  style="margin-top: 8px"
#if ALIPAY
  onTap="handleVisibleChange"
#endif
#if WECHAT
  bindtap="handleVisibleChange"
#endif
>
  Change visible
</ant-button>
```

```js
Page({
  data: { visible: false },
  handleVisibleChange() {
    this.setData({
      visible: !this.data.visible,
    });
  },
});
```

### Demo Code

<code src='../../demo/pages/Popover/index' noChangeButton></code>

## API

| Property                          | Description                                                                                                                                                                | Type                                                                                                | Default Value |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| autoAdjustOverflow            | Automatically adjust the position when the bubble is blocked                                                                                                                                          | boolean                                                                                             | true   |
| className                     | Class Name                                                                                                                                                                | string                                                                                              | -      |
| color                         | Background Color                                                                                                                                                            | string                                                                                              | -      |
| contentClassName              | content Class Name                                                                                                                                                        | string                                                                                              | -      |
| contentStyle                  | content Style                                                                                                                                                        | string                                                                                              | -      |
| content                       | Content                                                                                                                                                                | string \| slot                                                                                      | -      |
| defaultVisible                | Display by default                                                                                                                                                        | boolean                                                                                             | false  |
| destroyOnClose                | Whether to unload content when invisible                                                                                                                                                | boolean                                                                                             | false  |
| maskClassName                 | Class name of the layer                                                                                                                                                          | string                                                                                              | -      |
| maskStyle                     | The style of the layer                                                                                                                                                          | string                                                                                              | -      |
| placement                     | Bubble box position, optional `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` or `right-bottom` | string                                                                                              | top    |
| showMask                      | Whether to display the mask layer. If true, click the blank to close the Popover.                                                                                                                    | boolean                                                                                             | true   |
| style                         | Style                                                                                                                                                                | string                                                                                              | -      |
| visible                       | Whether to display                                                                                                                                                            | boolean                                                                                             | -      |
| #if ALIPAY onVisibleChange    | Callback at the time of visible change                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if ALIPAY onTapAction        | Operation button click callback                                                                                                                                                    | () => void                                                                                          | -      |
| #if WECHAT bindvisiblechange | Callback at the time of visible change                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindtapaction     | Operation button click callback                                                                                                                                                    | () => void                                                                                          | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                     | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks             |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --popover-color-background | <div style="width: 150px; height: 30px; background-color: #404040; color: #ffffff;">#404040</div> | <div style="width: 150px; height: 30px; background-color: #404040; color: #ffffff;">#404040</div> | Popover default background color |
| --popover-bg               | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Popover background color |
| --popover-inner-color      | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | Popover internal text color |
| --popover-text-color       | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | Popover operation button text color |
