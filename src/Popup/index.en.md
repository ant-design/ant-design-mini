---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Popup

Slides or pops up a custom content area from the screen. It is used to display pop-up windows, information prompts, selection input, switching, and other content. It supports multiple pop-up layers for overlay display.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-popup": "antd-mini/es/Popup/index"
#endif
#if WECHAT
  "ant-popup": "antd-mini/Popup/index"
#endif
}
```

## Code Sample

### Basic use

> - `ant-popup` Components must pass `visible` Property controls the show/hide state.`position` Specifies the direction of occurrence, optional `top` `bottom` `left` `right`. The contents of the pop-up window are filled in the form of slots.
> - `close` The event will be triggered when the icon is closed by clicking the upper right corner or when the layer is closed by clicking the layer.
> - `clickBack` event is triggered when the back button in the upper left corner is clicked.

```xml
<ant-popup
  visible="{{visible}}"
  position="bottom"
  title="title"
  height="{{250}}"
  width="{{250}}"
  showClose="{{true}}"
  showBack="{{true}}"
#if ALIPAY
  onClickBack="onClickBack"
  onClose="handlePopupClose"
#endif
#if WECHAT
  bindclickback="onClickBack"
  bindclose="handlePopupClose"
#endif
>
  <view style="padding: 12px">
    A custom content area slides out or pops up from the screen to display pop-up windows, information prompts, selection input, switching, etc.
  </view>
</ant-popup>
```

```js
Page({
  data: {
    visible: true,
  },
  onClickBack() {
#if ALIPAY
    my.showToast({ content: 'clicked icon', duration: 1000 });
#endif
#if WECHAT
    wx.showToast({ content: 'clicked icon', duration: 1000 });
#endif
  },
  handlePopupClose() {
    this.setData({
      visible: false,
    });
  },
});
```

### Set background map

> `backgroundImage` property, you can set the background for the entire bullet layer.

```xml
<ant-popup
  visible="{{true}}"
  height="{{450}}"
  className="customize-top-image-popup"
  backgroundImage="https://mdn.alipayobjects.com/huamei_ahikbw/afts/img/A*jVxmQq4bhoUAAAAAAAAAAAAADiWwAQ/original"
  position="bottom"
  showClose="{{false}}">
  <view class="customize-content">
    Ea consectetur ipsum consequat exercitation laboris excepteur pariatur
    excepteur labore dolor cillum tempor esse. Ad adipisicing nostrud fugiat eu
    mollit. Proident nisi voluptate sunt ea laboris Lorem ullamco deserunt aute
    incididunt cillum tempor duis est. Elit voluptate laboris laborum anim
  </view>
</ant-popup>
```

### Extra Long Content Scrolling

> If the content in the pop-up window is too long and needs to support scrolling, please use [scroll-view](https://opendocs.alipay.com/mini/component/scroll-view?pathHash=8292073d) component and add the following properties:

```xml
<ant-popup
  visible="{{true}}"
  position="bottom"
  showClose="{{true}}"
>
  <scroll-view
    scroll-y
    style="padding: 12px; height: 300px"
    disable-lower-scroll="out-of-bounds"
    disable-upper-scroll="out-of-bounds">
    Ea consectetur ipsum consequat exercitation laboris excepteur pariatur
    excepteur labore dolor cillum tempor esse. Ad adipisicing nostrud fugiat eu
    mollit. Proident nisi voluptate sunt ea laboris Lorem ullamco deserunt aute
    incididunt cillum tempor duis est. Elit voluptate laboris laborum anim
    exercitation consequat laboris ad. Quis ad enim fugiat.
  </scroll-view>
</ant-popup>
```

### Demo Code

<code src='../../demo/pages/Popup/index'></code>

## API

| Property                         | Description                                                                                                                                                              | Type       | Default Value      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| animation                    | Whether to turn on transition animation                                                                                                                                                  | boolean    | true        |
| animationType                | Animation type, optional`transform` `position`, the default is used`transform`Animation performance is better. However, when there is a fixed positioning or picker-view element inside the pop-up window, there may be a style problem, which can be switched`position`Solve | string     | `transform` |
| className                    | Class Name                                                                                                                                                              | string     | -           |
| title                        | Title                                                                                                                                                              | string     | ''          |
| destroyOnClose               | Unload content when invisible                                                                                                                                                  | boolean    | false       |
| duration                     | Transition animation duration, in milliseconds                                                                                                                                            | number     | 300         |
| height                       | height, in position `top` or `bottom` When used, the unit is px. Optional, when not transmitted, it is highly adaptive according to the content area.                                                                        | number     | -           |
| maskClassName                | Class name of the layer                                                                                                                                                        | string     | -           |
| maskStyle                    | The style of the layer                                                                                                                                                        | string     | -           |
| position                     | Pop-up window layout, optional`top` `bottom` `left` `right`                                                                                                                       | string     | `bottom`    |
| showMask                     | Whether to show the layer                                                                                                                                                      | boolean    | true        |
| style                        | Style                                                                                                                                                              | string     | -           |
| visible                      | Whether to display                                                                                                                                                          | boolean    | false       |
| width                        | The width, in position, is `left` or `right` unit px                                                                                                            | number     | -           |
| zIndex                       | Pop-up Level                                                                                                                                                          | number     | 998         |
| backgroundImage              | Background map of the bullet box                                                                                                                                                      | string     | -           |
| showClose                    | Show icon with bullet box closed                                                                                                                                               | boolean    | false       |
| showBack                     | Show the icon returned by the bullet box                                                                                                                                               | boolean    | false       |
| #if ALIPAY onClose           | Click the mask to close and trigger the callback.                                                                                                                                            | () => void | -           |
| #if ALIPAY onClickBack       | Click the back button to trigger the callback                                                                                                                                            | () => void | -           |
| #if ALIPAY onAfterShow       | Trigger after full display                                                                                                                                                    | () => void | -           |
| #if ALIPAY onAfterClose      | Trigger after full shutdown                                                                                                                                                    | () => void | -           |
| #if WECHAT bindclose         | Click the mask to close and trigger the callback.                                                                                                                                            | () => void | -           |
| #if WECHAT bindclickbackicon | Click the back button to trigger the callback                                                                                                                                            | () => void | -           |
| #if WECHAT bindaftershow     | Trigger after full display                                                                                                                                                    | () => void | -           |
| #if WECHAT bindafterclose    | Trigger after full shutdown                                                                                                                                                    | () => void | -           |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                       | Default Value                                                                                                                    | Dark Mode Default                                                                                                            | Remarks                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --popover-list-content-bg    | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | Popover List Content Background Color |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Popover List Content Color     |
| --popover-list-badge-color   | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | Popover List Badge Color     |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Popover list content text color |

## FAQ

### After Popup is opened, what if the page behind the layer can scroll?

Preventing page scrolling after the layer is currently not effective in IDE and emulator, please debug on real machine.

### Popup internal elements need to support scrolling how to deal?

If you need to scroll in the pop-up window, use the scroll-view component and add the following attributes:

```html
<popup height="{{250}}" visible="{{visible}}">
  <scroll-view
    scroll-y
    disable-lower-scroll="out-of-bounds"
    disable-upper-scroll="out-of-bounds"
  >
    ...你的内容...
  </scroll-view>
</popup>
```

### How to solve the abnormal display of picker-view inside Popup?

Popup is passed by default. `display:none` Hidden, and picker-view cannot be placed in `display:none` in the components. There are two solutions:

1. Add attribute on picker-view `a:if="{{popupVisible}}"`, the picker-view is displayed when the Popup is displayed.
2. Set on Popup `destroyOnClose="{{true}}"`to unload content when the Popup is not visible.
