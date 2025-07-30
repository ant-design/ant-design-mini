---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Radio

Single selection from a set of options.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-radio": "antd-mini/es/Radio/index",
  "ant-radio-group": "antd-mini/es/Radio/RadioGroup/index"
#endif
#if WECHAT
  "ant-radio": "antd-mini/Radio/index",
  "ant-radio-group": "antd-mini/Radio/RadioGroup/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-radio defaultChecked>Initial value</ant-radio>
<ant-radio disabled>Disable button 1</ant-radio>
<ant-radio color="red" defaultChecked>Custom Colors</ant-radio>
<ant-radio
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
>
  Basic Usage
</ant-radio>
```

```js
Page({
  onChange(value, e) {
    console.log(value, e);
  },
});
```

### Controlled Mode

```xml
<ant-radio
  checked="{{checked}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
>
  Controlled Mode
</ant-radio>
```

```js
Page({
  data: {
    checked: false,
  },
  handleChange(checked) {
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
#if ALIPAY
    this.setData({
      checked,
    });
#endif
  },
});
```

### Radio Group

```xml
<ant-radio-group
  value="{{value}}"
  options="{{options}}"
#if ALIPAY
  onChange="handleRadioGroupChange"
#endif
#if WECHAT
  bindchange="handleRadioGroupChange"
#endif
/>

```

```js
Page({
  data: {
    value: 'banana',
    options: [
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橘子' },
      { value: 'banana', label: '香蕉' },
    ],
  },
  handleRadioGroupChange(value) {
#if WECHAT
    this.setData({
      value: value.detail,
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
  },
});
```

### Demo Code

<code src='../../demo/pages/Radio/index'></code>

## API

| Property                   | Description             | Type                                                                                                  | Default Value |
| ---------------------- | ---------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| checked                | Whether selected         | boolean                                                                                               | -      |
| className              | Class Name             | string                                                                                                | -      |
| disabled               | Disable         | boolean                                                                                               | false  |
| color                  | Icon Color         | string                                                                                                | -      |
| defaultChecked         | Is selected by default     | boolean                                                                                               | false  |
| style                  | Style             | string                                                                                                | -      |
| value                  | value carried  | string                                                                                                | -      |
| #if ALIPAY onChange    | Callback when state changes | `(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -      |
| #if WECHAT bindchange | Callback when state changes | `(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -      |

### RadioGroup

| Property                   | Description               | Type                                                                                               | Default Value     |
| ---------------------- | ------------------ | -------------------------------------------------------------------------------------------------- | ---------- |
| className              | Class Name               | string                                                                                             | -          |
| color                  | Icon Color           | string                                                                                             | -          |
| disabled               | Disable           | boolean                                                                                            | false      |
| defaultValue           | Initial value             | string                                                                                             | -          |
| label                  | slots, receiving values and indexes | slot                                                                                               | -          |
| options                | Optional             | `{label?: string; value?: string; disabled?: boolean;}[]`                                          | -          |
| position               | Layout mode           | string                                                                                             | `vertical` |
| style                  | Style               | string                                                                                             | -          |
| value                  | Selected value           | string                                                                                             | -          |
| #if ALIPAY onChange    | Callback when state changes   | `(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -          |
| #if WECHAT bindchange | Callback when state changes   | `(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -          |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                     | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks             |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --progress-stroke-color    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Progress bar main color     |
| --progress-trail-color     | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | Progress bar track color   |
| --progress-success-color   | <div style="width: 150px; height: 30px; background-color: #22b35e; color: #ffffff;">#22b35e</div> | <div style="width: 150px; height: 30px; background-color: #34b368; color: #ffffff;">#34b368</div> | Progress bar success color   |
| --progress-indicator-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Progress bar indicator color |
| --progress-exception-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div> | Progress bar exception color   |
| --progress-assist-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Progress bar auxiliary color   |
