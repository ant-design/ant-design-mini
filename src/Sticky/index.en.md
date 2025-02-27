---
nav:
  path: /components
group:
  title: General
  order: 2
toc: 'content'
---

# Sticky
Used in the case of the need for adsorption in some places in the rolling.

## Precautions

The Sticky component implementation relies on `position: sticky` attribute, which may become invalid due to the influence of the parent element. [This document](https://developer.mozilla.org/en-US/docs/Web/CSS/position) Check the element layout of the page.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-sticky": "antd-mini/es/Sticky/index"
#endif
#if WECHAT
  "ant-sticky": "antd-mini/Sticky/index"
#endif
}
```

## Code Sample

### Basic Usage

```xml
<ant-sticky>
  <view>
    I will ceiling
  </view>
</ant-sticky>
```

### Specified ceiling height

```xml
<ant-sticky top="100px">
  <view>
    I will be at the top 100px from the top of the place
  </view>
</ant-sticky>
```

### Perceive whether the ceiling is absorbed

```xml
<ant-sticky
  top="180px"
  check="{{true}}"
#if ALIPAY
  onStickyChange="handleStickyChange"
#endif
#if WECHAT
  bindstickychange="handleStickyChange"
#endif
>
  <view>
    <view>I will ceiling at 180px from the top</view>
    <view>Whether it has sucked {{stickyStatus}}</view>
  </view>
</ant-sticky>
```

```js
Page({
  data: {
    stickyStatus: false,
  },
  handleStickyChange(status) {
    this.setData({ stickyStatus: status });
  },
});
```

### Transparent head mode

```xml
<ant-sticky transparentTitle="{{true}}">
  <view>
    I will ceiling
  </view>
</ant-sticky>
```

### Demo Code

<code src="../../demo/pages/Sticky/index"></code>

## Property

| Property                            | Type     | Default Value         | Description                                                                 |
| ------------------------------- | -------- | -------------- | -------------------------------------------------------------------- |
| className                       | string   | ""             | Container className                                                       |
| top                             | string   | ""             | Cesting height, need to write units, such as 10px,24rpx                                |
| check                           | bool     | false          | Whether it is necessary to sense whether the ceiling has been absorbed, because the ceiling inspection still has a certain cost.                 |
| sticky                          | bool     | true           | Whether to ceiling, some scenes do not necessarily need                                       |
| transparentTitle                | bool     | false          | Whether it is a transparent head, the transparent head will automatically calculate the titleBar height, and the default adsorption is under the titlebar |
| #if ALIPAY onStickyChange       | Function | (status) => {} | Whether it is in the ceiling state, note that the check function needs to be turned on to have this callback.                  |
| #if ALIPAY onGetHeaderHeight    | Function | (height) => {} | Calculate the height of the head to complete                                                     |
| #if WECHAT bindstickychange    | Function | (status) => {} | Whether it is in the ceiling state, note that the check function needs to be turned on to have this callback.                  |
| #if WECHAT bindgetheaderheight | Function | (height) => {} | Calculate the height of the head to complete                                                     |

## Slot

There is only one default slot for wrapping elements and components that want to be capped.

## Other

It should be noted that the automatic calculation of head height in the transparent page scene is only convenient to suck on the top. If there is an offset, it still needs to be calculated by itself.

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name            | Default Value                                                                                                                      | Dark Mode Default                                                                                                               | Remarks           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
| --sticky-check-bg | <div style="width: 150px; height: 40px; background-color:rgba(238, 238, 238, 0); color: #fff;">rgba(238, 238, 238, 0)</div> | <div style="width: 150px; height: 40px; background-color: rgba(238, 238, 238, 0); color: #fff;">rgba(238, 238, 238, 0)</div> | Selector Background Color |
