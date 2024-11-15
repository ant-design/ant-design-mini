---
nav:
  path: /components
group:
  title: Information Display
  order: 9
toc: 'content'
---

# Empty

Use the scene illustration as a feedback prompt for the empty state scene, when you need to display the empty state page or local empty state block.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-empty": "antd-mini/es/Empty/index"
#endif
#if WECHAT
  "ant-empty": "antd-mini/Empty/index"
#endif
}
```

## Code Sample

### Basic use
```xml
<ant-empty 
  size="small"
  title="这里什么也没有" 
  message="看看其它吧" 
/>
```

### Custom Picture
```xml
<ant-empty
  title="这里什么也没有"
  message="看看其它吧"
  image="{{imageUrl}}"
/>
```

### Add Action Point
```xml
<ant-empty
  title="这里什么也没有"
  buttonInfo="{{horizontalButtonInfo}}"
  message="看看其它吧"
#if ALIPAY
  onClickButton="onClickButton"
#endif
#if WECHAT
  bind:clickButton="onClickButton"
#endif
/>
```

```js
const BUTTON_LIST = [
  {
    type: 'primary',
    text: '刷新重试'
  },
  {
    type: 'default',
    text: '网络诊断'
  },
];

Page({
  data: {
    // 水平按钮布局
    horizontalButtonInfo: {
      layout: 'horizontal',
      list: BUTTON_LIST,
    },
    // 垂直按钮布局
    verticalButtonInfo: {
      layout: 'vertical',
      list: BUTTON_LIST,
    },
}
})
```

### Use Slot
```xml
<ant-empty
  title="这里什么也没有"
  message="看看其它吧"
>
  <view slot="extra">
    <ant-button
      size="small"
      inline
    >
      Custom Action Buttons
    </ant-button>
  </view>
</ant-empty>
```

### Demo Code

<code src='../../demo/pages/Empty/index'></code>

## API

| Property       | Description              | Type           | Default Value |
| ---------- | ----------------- | -------------- | ------ |
| className  | Root node class name        | string         | -      |
| title      | Title Copy          | string \| slot | -      |
| image      | Picture. You can pass in a string as the picture address. | string \| slot |
| message    | Description Copy          | string \| slot | -      |
| style      | Style              | string         | -      |
| size       | Empty status size, optional `normal` `small`  | string         | `normal`      |
| buttonInfo | Custom Button  | [ButtonInfo](#buttoninfo)         | `normal`      |
| #if ALIPAY onClickButton | Click button callback  | (item: [ButtonInfoItem](#buttoninfoitem)) => void       | -      |
| #if WECHAT bind:ClickButton | Click button callback  | (item: [ButtonInfoItem](#buttoninfoitem)) => void       | -      |

### ButtonInfo
| Property       | Description              | Type           | Default Value |
| ---------- | ----------------- | -------------- | ------ |
| layout     | Layout mode, optional `horizontal` `vertical`| string    | `horizontal`      |
| list       | Layout button configuration  | [ButtonInfoItem](#buttoninfoitem)[] | - | 

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                    | Default Value                                                                                            | Remarks               |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --empty-text-color        | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Empty status text color     |
| --empty-asisst-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | Empty state secondary text color |
