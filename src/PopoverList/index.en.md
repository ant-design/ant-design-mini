---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# PopoverList

Click on the element to pop up the bubble menu. The bubble menu for navigation functions is evoked, usually used to accommodate functions used at low frequencies. This function can only be activated via the icon on the navigation bar.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-popover-list": "antd-mini/es/PopoverList/index"
#endif
#if WECHAT
  "ant-popover-list": "antd-mini/PopoverList/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-popover-list
  visible="{{visible}}"
  list="{{list}}"
  placement="bottom-right"
#if ALIPAY
  onTapItem="handleTapItem"
  onVisibleChange="handleVisibleChange"
#endif
#if WECHAT
  bindtapitem="handleTapItem"
  bindvisiblechange="handleVisibleChange"
#endif
>
  <ant-button inline>Point me</ant-button>
</ant-popover-list>
```

```js
Page({
  data: {
    visible: true,
    list: [
      { text: '扫一扫', icon: 'ScanningOutline', showBadge: true, id: 'scan', },
      { text: '付钱/收钱', icon: 'ReceivePaymentOutline', showBadge: false, id: 'pay', },
      { text: '乘车码', icon: 'TransportQRcodeOutline', showBadge: false, id: 'code', },
      { text: '图片', iconImage: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ', showBadge: false, id: 'image', },
    ],
  },
  handleVisibleChange(visible, e) {
    console.log(visible, e);
#if ALIPAY
    this.setData({ visible });
#endif
#if WECHAT
    this.setData({ visible: visible.detail });
#endif
  },
  handleTapItem(e, item) {
    console.log(e, item);
    this.setData({ visible: false });
#if ALIPAY
    my.showToast({ content: '点击列表', duration: 1000 });
#endif
#if WECHAT
    wx.showToast({ title: '点击列表' });
#endif
  },
});
```

### bubble position adaptive

> `autoAdjustOverflow` Property to automatically adjust the position of the bubble when it is occluded

```xml
<ant-popover-list
  visible="{{true}}"
  list="{{list}}"
  autoAdjustOverflow="{{true}}"
>
  <ant-button inline style="margin-top: 500px;">bubble position adaptive</ant-button>
</ant-popover-list>
```

### Demo Code

<code src='../../demo/pages/PopoverList/index'></code>

## API

| Property                          | Description                                                                                                                                                                | Type                                                                                                                         | Default Value |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ |
| autoAdjustOverflow            | Automatically adjust the position when the bubble is blocked                                                                                                                                          | boolean                                                                                                                      | true   |
| className                     | Class Name                                                                                                                                                                | string                                                                                                                       | -      |
| color                         | Background Color                                                                                                                                                            | string                                                                                                                       | -      |
| contentClassName              | content Class Name                                                                                                                                                        | string                                                                                                                       | -      |
| contentStyle                  | content Style                                                                                                                                                        | string                                                                                                                       | -      |
| content                       | Content                                                                                                                                                                | string \| slot                                                                                                               | -      |
| defaultVisible                | Display by default                                                                                                                                                        | boolean                                                                                                                      | false  |
| destroyOnClose                | Whether to unload content when invisible                                                                                                                                                | boolean                                                                                                                      | false  |
| maskClassName                 | Class name of the layer                                                                                                                                                          | string                                                                                                                       | -      |
| maskStyle                     | The style of the layer                                                                                                                                                          | string                                                                                                                       | -      |
| placement                     | Bubble box position, optional `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` or `right-bottom` | string                                                                                                                       | top    |
| showMask                      | Whether to show the layer, if true, click the blank to close the Popover.                                                                                                                    | boolean                                                                                                                      | true   |
| style                         | Style                                                                                                                                                                | string                                                                                                                       | -      |
| visible                       | Display                                                                                                                                                            | boolean                                                                                                                      | -      |
| #if ALIPAY onVisibleChange    | Callback at the time of visible change                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                          | -      |
| #if ALIPAY onTapItem          | Callback at the time of visible change                                                                                                                                                | (item: [PopoverListItem](#popoverlistitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindvisiblechange | Callback at the time of visible change                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                          | -      |
| #if WECHAT bindtapitem       | Callback at the time of visible change                                                                                                                                                | (item: [PopoverListItem](#popoverlistitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

### PopoverListItem

| Property      | Description                                                    | Type    | Default Value |
| --------- | ------------------------------------------------------- | ------- | ------ |
| icon      | The icon of the menu                                             | string  | -      |
| iconImage | The icon picture of the menu is taken first iconImage the icon field is not taken again. | string  | -      |
| text      | Class Name                                                    | string  | -      |
| showBadge | Disable                                                | boolean | false  |
| id        | Extra right                                            | string  | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                       | Default Value                                                                                                                    | Dark Mode Default                                                                                                            | Remarks                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --popover-list-content-bg    | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | Popover List Content Background Color |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Popover List Content Color     |
| --popover-list-badge-color   | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | Popover List Badge Color     |
|  --popover-list-item-bg      | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div>                         | <div style="width: 150px; height: 30px; background-color: #444444; color: #ffffff;">#444444</div>                         | Popover list content text color |
