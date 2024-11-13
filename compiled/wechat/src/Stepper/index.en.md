---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Stepper

A two-stage control used to increase, decrease, or modify values.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-progress": "antd-mini/es/Stepper/index"
#endif
#if WECHAT
  "ant-progress": "antd-mini/Stepper/index"
#endif
}
```

## Code Sample

### Basic use
```xml
<stepper
  className="stepper"
  value="{{0}}"
  min="{{0}}"
  max="{{10}}"
  step="{{1}}"
  disabled="{{false}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
/>
```

```js
Page({
  handleChange(value) {
    console.log(value);
  },
});
```

### Custom Styles
```xml
<stepper
  style=""
  className="stepper"
  inputStyle=""	
  inputClassName="stepper-input"
/>
```

### Input box read-only
```xml
<stepper
  className="stepper"
  defaultValue="{{0}}"
  inputReadOnly="{{true}}"
/>
```

### Input box auto focus
```xml
<stepper
  className="stepper"
  defaultValue="{{0}}"
  focus="{{true}}"
/>
```

### Event Binding
```xml
<stepper
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
  onBlur="handleBlur"
  onFocus="handleFocus"
  onConfirm="handleConfirm"
  onDisabledTap="handleDisabledTap"
#endif
#if WECHAT
  bind:change="handleChange"
  bind:blur="handleBlur"
  bind:focus="handleFocus"
  bind:confirm="handleConfirm"
  bind:disabledTap="handleDisabledTap"
#endif
/>
```

### Demo Code

<code src='../../demo/pages/Stepper/index'></code>

## API

| Property           | Description                                                                                | Type                                                                              | Default Value                                                                                 |
| -------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| className      | Class Name                                                                                | string                                                                            | -                                                                                      |
| disabled       | Disable                                                                            | boolean                                                                           | false                                                                                  |
| inputReadOnly  | Whether the input box is read-only                                                                  | boolean                                                                           | false                                                                                  |
| defaultValue   | Initial value                                                                              | number                                                                            | -                                                                                      |
| focus          | Input box check status                                                                      | boolean                                                                           | false                                                                                  |
| inputClassName | Input box type                                                                          | string                                                                            | -                                                                                      |
| inputStyle     | Input box style                                                                          | string                                                                            | -                                                                                      |
| max            | Maximum                                                                              | number                                                                            | -                                                                                      |
| min            | Minimum                                                                              | number                                                                            | -                                                                                      |
| precision      | Calculation accuracy, keep a few decimal places [See details in](https://github.com/ant-design/ant-design/issues/5998) | number                                                                            | -                                                                                      |
| style          | Style                                                                                | string                                                                            | -                                                                                      |
| step           | Step distance, that is, the value of each addition and subtraction                                                                | number                                                                            | 1                                                                                      |
| type           | Input box evokes keyboard type, optional `number` `digit`                                           | string                                                                            | `digit`                                                                                |
| value          | The value of the input box is valid when the form is submitted.                                                      | number                                                                            | -                                                                                      |
| #if ALIPAY onBlur         | Trigger this callback when the input box loses focus                                                        | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onChange       | Trigger this callback after data changes                                                              | ( value: number                                                                   | null, [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void        |
| #if ALIPAY onConfirm      | This callback is triggered when the keyboard is clicked to complete                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onFocus        | This callback is triggered when the input box is focused                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onDisabledTap  | Click departure callback when disabled                                                                  | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:blur         | Trigger this callback when the input box loses focus                                                        | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:change       | Trigger this callback after data changes                                                              | ( value: number                                                                   | null, [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void        |
| #if WECHAT bind:confirm      | This callback is triggered when the keyboard is clicked to complete                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:focus        | This callback is triggered when the input box is focused                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:disabledTap  | Click departure callback when disabled                                                                  | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                         | Default Value                                                                                                                    | Remarks                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --stepper-handler-tap-bg       | <div style="width: 150px; height: 30px; background-color: #ddd; color: #333333;">#ddd</div>                               | Stepper Processor Click Background Color |
| --stepper-handler-border-color | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div>                         | Stepper Processor Border Color     |
| --stepper-border-color         | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div>                         | Step Border Color           |
| --stepper-background-color     | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | Stepper background color           |
| --stepper-hover-bg             | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.92); color: #ffffff;">rgba(0, 0, 0, 0.92)</div> | Stepper hover background color       |