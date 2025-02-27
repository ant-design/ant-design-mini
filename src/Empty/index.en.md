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
  title="Nothing Here"
  message="See Others"
/>
```

### Custom Picture

```xml
<ant-empty
  title="Nothing Here"
  message="See Others"
  image="{{imageUrl}}"
/>
```

### Add Action Point

```xml
<ant-empty
  title="Nothing Here"
  message="See Others"
  buttonInfo="{{horizontalButtonInfo}}"
#if ALIPAY
  onClickButton="onClickButton"
#endif
#if WECHAT
  bindclickbutton="onClickButton"
#endif
/>
```

```js
const BUTTON_LIST = [
  {
    type: 'primary',
    text: 'refresh',
  },
  {
    type: 'default',
    text: 'checkout internet',
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
  },
});
```

### Use Slot

```xml
<ant-empty
  title="Nothing Here"
  message="See Others"
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

| Property                        | Description                              | Type                                              | Default Value   |
| --------------------------- | --------------------------------- | ------------------------------------------------- | -------- |
| className                   | Root node class name                        | string                                            | -        |
| title                       | Title Copy                          | string \| slot                                    | -        |
| image                       | Picture, string can be passed in as picture address    | string \| slot                                    |
| message                     | Description Copy                          | string \| slot                                    | -        |
| style                       | Style                              | string                                            | -        |
| size                        | Empty status size, optional `normal` `small` | string                                            | `normal` |
| buttonInfo                  | Custom Button                        | [ButtonInfo](#buttoninfo)                         | `normal` |
| #if ALIPAY onClickButton    | Click button callback                      | (item: [ButtonInfoItem](#buttoninfoitem)) => void | -        |
| #if WECHAT bindclickbutton | Click button callback                      | (item: [ButtonInfoItem](#buttoninfoitem)) => void | -        |

### ButtonInfo

| Property   | Description                                   | Type                                | Default Value       |
| ------ | -------------------------------------- | ----------------------------------- | ------------ |
| layout | Layout mode, optional `horizontal` `vertical` | string                              | `horizontal` |
| list   | Layout button configuration                           | [ButtonInfoItem](#buttoninfoitem)[] | -            |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                    | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks               |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --empty-text-color        | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Empty status text color     |
| --empty-asisst-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Empty state secondary text color |
