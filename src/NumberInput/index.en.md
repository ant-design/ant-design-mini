---
nav:
  path: /components
group:
  title: Bizness Components
  order: 15
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# NumberInput

Use when you need to enter an amount and provide a quick amount selection. Supports automatic conversion of units, maximum limit and other functions.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-number-input": "antd-mini/es/NumberInput/index"
#endif
#if WECHAT
  "ant-number-input": "antd-mini/NumberInput/index"
#endif
}
```

## Code Sample

### Basic use

<code src='../../demo/pages/NumberInput/index'></code>

## API

### Property

| Property                   | Description                 | Type                    | Default Value       |
| ---------------------- | -------------------- | ----------------------- | ------------ |
| className              | Class Name                 | string                  | -            |
| style                  | Style                 | string                  | -            |
| value                  | Value of the input box           | string                  | -            |
| title                  | Title                 | string                  | -            |
| linkText               | Top right link copy       | string                  | -            |
| quickAmounts           | Quick Amount Options         | number[]                | -            |
| placeholder            | Placeholder text           | string                  | 'Please enter amount' |
| prefix                 | Amount prefix             | string                  | '¥'          |
| maxValue               | Maximum amount that can be entered       | number                  | -            |
| #if ALIPAY onChange    | Callback when content changes     | (value: string) => void | -            |
| #if ALIPAY onLinkTap   | Click on the callback link in the upper right corner | () => void              | -            |
| #if WECHAT bindchange  | Callback when content changes     | (value: string) => void | -            |
| #if WECHAT bindlinktap | Click on the callback link in the upper right corner | () => void              | -            |

### Slot

Currently only one footer slot is provided for inserting custom content below the input box. More content may be opened later on demand.

Example of use:

```xml
<ant-number-input>
  <view slot="footer">
    <text>This is a piece of custom content</text>
  </view>
</ant-number-input>
```

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                            | Light Mode Default                                                                                    | Dark Mode Default                                                                                    | Remarks               |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --number-input-background-color   | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Background Color           |
| --number-input-title-color        | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Title Color           |
| --number-input-link-color         | <div style="width: 150px; height: 30px; background-color: #4b6b99; color: #ffffff;">#4b6b99</div> | <div style="width: 150px; height: 30px; background-color: #3f5980; color: #ffffff;">#3f5980</div> | Top Right Link Color     |
| --number-input-unit-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Unit color above input box |
| --number-input-border-color       | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Split line color         |
| --number-input-prefix-color       | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Claw Color         |
| --number-input-caret-color        | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Cursor Color           |
| --number-input-quick-text-color   | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Quick input text color   |
| --number-input-quick-border-color | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Quick input border color   |
