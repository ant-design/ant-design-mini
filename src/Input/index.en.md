---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: content
supportPlatform: ['alipay', 'wechat']
---

# Input

Enter content through the keyboard, is the most basic form field packaging. Generally used in the form page for information collection.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-input": "antd-mini/es/Input/index",
  "ant-textarea": "antd-mini/es/Input/Textarea/index"
#endif
#if WECHAT
  "ant-input": "antd-mini/Input/index",
  "ant-textarea": "antd-mini/Input/Textarea/index"
#endif
}
```

## Code Sample

### Input basic usage

```xml
<ant-input placeholder="input here" />
<ant-input placeholder="input here" defaultValue="initial value" />
<ant-input placeholder="input here, with clear button" allowClear />
<ant-input placeholder="disabled input" disabled="{{true}}" />
```

### With Prefix and Suffix

```xml
<ant-input placeholder="input here" allowClear>
  <view slot="prefix">￥</view>
  <view slot="suffix">RMB</view>
</ant-input>
```

### Controlled Mode

```xml
<ant-input controlled="{{true}}" value="{{value}}" placeholder="input here" allowClear />
```

### Enter Amount

```xml
<ant-input placeholder="input digit here" type="digit" focusClassName="border" allowClear>
  <view slot="prefix">￥</view>
  <view slot="suffix">RMB</view>
</ant-input>
```

### SearchBar search box

```xml
 <view class="search-line">
    <ant-input
      placeholder="input here"
      onChange="onChange"
      className="search-bar"
      focusClassName="search-bar-focus"
      confirm-type="search"
      allowClear
      focus
    >
      <ant-icon slot="prefix" type="SearchOutline" />
      <ant-icon slot="suffix" type="AudioOutline" />
    </ant-input>
    <view class="cancel">Cancel</view>
  </view>
```

```css
.search-line {
  display: flex;
  align-items: center;
  padding: 16px;
}
.search-bar {
  padding: 4px 0 4px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.4s;
  flex: 1;

  &-focus {
    border-color: #1677ff;
  }
}
.cancel {
  color: #fff;
  margin-left: 8px;
}
```

### Textarea

#### Basic Usage

```xml
 <ant-textarea placeholder="input here" autoHeight />
 <ant-textarea placeholder="input here" defaultValue="initial value" autoHeight />
```

#### Controlled Mode

```xml
 <ant-textarea value="{{value}}" placeholder="input here" allowClear />
```

### Custom

#### With border

```xml
<ant-input className="custom" placeholder="input here" />
```

```css
.custom {
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 12px;
}
```

#### Custom Background Color

```xml
 <ant-input className="custom-color" placeholder="input here" />
```

```css
.custom-color {
  margin-bottom: 12px;
  input,
  textarea {
    padding: 4px;
    background: #f5f5f5;
    border-radius: 4px;
  }
}
```

### Demo Code

<code src='../../demo/pages/Input/index'></code>

## API

### Input, Textarea the same property

| Property                   | Description                                                                             | Type                                  | Default Value |
| ---------------------- | -------------------------------------------------------------------------------- | ------------------------------------- | ------ |
| className              | Class Name                                                                             | string                                | -      |
| controlled             | There are keyboard input problems, you can use `controlled="{{false}}"`                                  | boolean                               | -      |
| defaultValue           | Initial value                                                                           | string                                | -      |
| disabled               | Disable                                                                         | boolean                               | false  |
| maxLength              | Maximum length                                                                         | number                                | 140    |
| placeholder            | Placeholder                                                                           | string                                | -      |
| style                  | Style                                                                             | string                                | -      |
| max                    | The maximum value, which takes effect only when type is number, digit, numberpad, or digitpad, and a valid number is entered. | number                                | -      |
| min                    | The minimum value, which takes effect only when type is number, digit, numberpad, or digitpad, and a valid number is entered. | number                                | -      |
| precision              | Calculation accuracy, keep a few decimal places, enter a valid number to take effect                                       | number                                | -1     |
| value                  | The value of the input box. Controlled mode.                                                           | string                                | -      |
| #if ALIPAY onConfirm   | This callback is triggered when the keyboard is clicked to complete                                                         | (value: string, event: Event) => void | -      |
| #if ALIPAY onFocus     | Trigger this callback when focused                                                                 | (value: string, event: Event) => void | -      |
| #if ALIPAY onBlur      | Trigger this callback when out of focus                                                                 | (value: string, event: Event) => void | -      |
| #if ALIPAY onChange    | This callback is triggered when input                                                                 | (value: string, event: Event) => void | -      |
| #if WECHAT bindconfirm | This callback is triggered when the keyboard is clicked to complete                                                         | (value: string, event: Event) => void | -      |
| #if WECHAT bindfocus   | Trigger this callback when focused                                                                 | (value: string, event: Event) => void | -      |
| #if WECHAT bindblur    | Trigger this callback when out of focus                                                                 | (value: string, event: Event) => void | -      |
| #if WECHAT bindchange  | This callback is triggered when input                                                                 | (value: string, event: Event) => void | -      |

### Input property

| Property         | Description                               | Type    | Default Value |
| ------------ | ---------------------------------- | ------- | ------ |
| allowClear   | You can click the clear icon to delete content           | boolean | false  |
| enableNative | Whether to use native                    | boolean | -      |
| focus        | Focus, View[Detailed Description](#input-focus) | boolean | -      |
| password     | Whether it is password type                     | boolean | false  |
| prefix       | input prefix                         | slot    | -      |
| suffix       | input suffix                         | slot    | -      |

### Textarea Properties

| Property         | Description             | Type    | Default Value |
| ------------ | ---------------- | ------- | ------ |
| autoHeight   | Whether to increase automatically.   | boolean | false  |
| enableNative | Whether to use native  | boolean | -      |
| showCount    | Show word count | boolean | true   |

### Input, Textarea More Same Properties

- confirm-type
- name
- placeholder-class
- placeholder-style
- type

[Input](https://opendocs.alipay.com/mini/component/input)  
[Textarea](https://opendocs.alipay.com/mini/component/textarea)

### Input focus

To use the focus attribute, you need to add it to the app.json window. `"enableInPageRenderInput": "YES"`Otherwise, the keyboard cannot be opened in iOS.

### Input, Textarea instance methods

Instance methods require small programs `component2` Can be used.

| Property     | Description   | Type                    |
| -------- | ------ | ----------------------- |
| update   | Update Value | (value: string) => void |
| getValue | get value | () => string            |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                         | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks               |
| ------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --input-item-color             | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Input Text Color     |
| --input-item-placeholder-color | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | Input item placeholder color   |
| --input-item-clear-color       | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Input Clear Button Color |
| --input-background-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Input Background Color     |

## FAQ

### Input focus does not open the keyboard

You need to add it to the app.json window. `"enableInPageRenderInput": "YES"`。

### Cursor problem with Input

Can be viewed [This document](https://opendocs.alipay.com/mini/component/input#FAQ) Use `enableNative` property to resolve.

### Keyboard problems using value controlled mode

This is due [A known issue with input boxes](https://opendocs.alipay.com/mini/component/input#Bug%20%26%20Tip)。

The solution is to call the input update method in ref mode without using value controlled mode.

```xml
<input defaultValue="{{defaultValue}}" ref="handleRef" />
<button
#if ALIPAY
  onTap="clear"
#endif
#if WECHAT
  bindtap="clear"
#endif
>clear</button>
```

```js
Page({
  handleRef(input) {
#if ALIPAY
    this.input = input;
#endif
#if WECHAT
    this.input = input.detail;
#endif
  },
  clear() {
    this.input.update('');
  },
});
```

Starting with v2.15.0, updating values via the update method is not supported in controlled mode.

### Instance method not available

need to use `component2`, for details see[ref Get Component Instance](https://opendocs.alipay.com/mini/framework/component-ref)。

### The input font style is overwritten by css and cannot take effect on ios.

Need to pass in `always-system="{{true}}"`
