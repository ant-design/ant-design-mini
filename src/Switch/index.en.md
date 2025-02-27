---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Switch

Switch selector, compared to the native Switch, it achieves a consistent experience on iOS and Android.

- Used when it is necessary to indicate the state of a switch or to switch between two states.
- The difference with Checkbox is that switching Switch will directly trigger a state change, while Checkbox is usually used for state markers and needs to be used in conjunction with commit operations.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-switch": "antd-mini/es/Switch/index"
#endif
#if WECHAT
  "ant-switch": "antd-mini/Switch/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-switch
  defaultChecked="{{true}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
/>
```

```js
Page({
  onChange(checked, e) {
    console.log(checked);
  },
});
```

### Disable mode

> Incoming `disabled` property, disable the collocated gray switch button.

```xml
<ant-switch defaultChecked="{{true}}" disabled="{{true}}" />
```

### Custom Style

> - `checkedText`、`uncheckedText` Property, you can modify the contents when checked/unchecked.
> - `color` property, you can color the overall button atmosphere.
> - ` size` property, the switch can be resized, support `medium`、`small`、`x-small` Three options.
> - `loading` Property to set the loading state.

```xml
<ant-switch checkedText="开" uncheckedText="关" />
#if ALIPAY
<!-- 支付宝模式下，支持插槽定制选中/未Content when selected -->
<ant-switch>
  <ant-icon type="CheckOutline" slot="checkedText" />
  <ant-icon type="CloseOutline" slot="uncheckedText" />
</ant-switch>
#endif

<ant-switch defaultChecked="{{true}}" color="#00b578" />

<ant-switch size="medium" />

<ant-switch size="small" />

<ant-switch size="x-small" />

<ant-switch loading />
```

### Controlled Mode

> `checked` property and `change` Events, used in conjunction with the implementation of controlled mode.

```xml
<ant-switch
  checked="{{checked}}"
  defaultChecked="{{true}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
<ant-button
#if ALIPAY
  onTap="handleChangeByButton"
#endif
#if WECHAT
  bindtap="handleChangeByButton"
#endif
>
  Switch
</ant-button>
```

```js
Page({
  data: {
    checked: true,
  },
  handleChange(checked, e) {
#if ALIPAY
    this.setData({
      checked,
    });
#endif
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
  },
  handleChangeByButton() {
    console.log(this.data.checked);
    this.setData({
      checked: !this.data.checked,
    });
  },
});
```

### Demo Code

<code src='../../demo/pages/Switch/index'></code>

## API

| Property                  | Description                                            | Type                                                                                                | Default Value   |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------- |
| className             | Class Name                                            | string                                                                                              | -        |
| checkedText           | Content when selected                                    | string \| slot                                                                                      | -        |
| checked               | Check                                        | boolean                                                                                             | -        |
| color                 | Selected background color                                      | string                                                                                              | -        |
| defaultChecked        | Checked by default                                    | boolean                                                                                             | `false`  |
| disabled              | Disable                                        | boolean                                                                                             | `false`  |
| readonly              | Read-only                                        | boolean                                                                                             | `false`  |
| loading               | Load status                                    | boolean                                                                                             | `false`  |
| uncheckedText         | Content when not selected                                  | string \| slot                                                                                      | -        |
| size                  | Component size, optional value is `medium`、`small`、`x-small` | string                                                                                              | `medium` |
| style                 | Style                                            | string                                                                                              | -        |
| #if ALIPAY onChange   | Callback triggered when Switch is clicked                        | (checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -        |
| #if WECHAT bindchange | Callback triggered when Switch is clicked                        | (checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -        |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                 | Light Mode Default                                                                                    | Dark Mode Default                                                                                    | Remarks             |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --switch-fill          | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Switch Fill Color     |
| --switch-border-color  | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Switch border color     |
| --switch-loading-color | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Switch loading color     |
| --switch-handle-bg     | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Switch handle background color |
| --switch-inner-color   | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Switch internal color     |
