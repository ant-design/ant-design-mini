---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Rate

A component for showing things ratings and quick scoring.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-rate": "antd-mini/es/Rate/index"
#endif
#if WECHAT
  "ant-radio": "antd-mini/Rate/index"
#endif
}
```

## Code Sample

### Basic use

> `count` property specifies the total number of stars, `allowHalf` Stats allow half a star, `allowClear` Property allows to clear after clicking again.

```xml
<ant-rate
  defaultValue="{{3.5}}"
  count="{{5}}"
  allowHalf
  allowClear
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
  onChange(value) {
    console.log(value);
  },
});
```

### Read Only

```xml
<ant-rate defaultValue="{{3}}" readonly />
```

### Controlled Mode

> `value` property and `change` Events, cooperation can achieve a controlled mode. Here's the example through `ant-stepper` Component change `value` Status,`ant-rate` Components `value` States can also change together.

```xml
<ant-rate
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
<ant-stepper
  value="{{value}}"
  min="{{0}}"
  max="{{5}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
```

```js
Page({
  data: {
    value: 3,
  },
  handleChange(value) {
    console.log(value);
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

### Custom

> Reference below [Demo Code](#demo-代码) implementation in.

### Demo Code

<code src='../../demo/pages/Rate/index'></code>

## Property

| Property                     | Description                   | Type                     | Default Value                     |
| ------------------------ | ---------------------- | ------------------------ | -------------------------- |
| allowHalf                | Whether to allow half a star           | `boolean`                | `false`                    |
| allowClear               | Allow to clear after clicking again | `boolean`                | `true`                     |
| className                | Class Name                   | `string`                 | -                          |
| character                | Custom Characters             | `slot`                   | `<icon type="StarFill" />` |
| characterActiveClassName | Custom Character Checked State Class Name | `string`                 | -                          |
| characterClassName       | Custom Character Class Name         | `string`                 | -                          |
| count                    | total number of stars              | `number`                 | `5`                        |
| defaultValue             | Initial value                 | `number`                 | `0`                        |
| gutter                   | Spacing, unit `px`        | `number`                 | `4`                        |
| readonly                 | Read-only, unable to interact     | `boolean`                | `false`                    |
| style                    | Style                   | `string`                 | -                          |
| value                    | Star rating (controlled)           | `number`                 | -                          |
| #if ALIPAY onChange      | scoring callback function           | `(rate: number) => void` | -                          |
| #if WECHAT bindchange   | scoring callback function           | `(rate: number) => void` | -                          |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name             | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                    |
| ------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| --rate-active-icon | <div style="width: 150px; height: 30px; background-color: #ff9f18; color: #ffffff;">#ff9f18</div> | <div style="width: 150px; height: 30px; background-color: #ffa930; color: #ffffff;">#ffa930</div> | Icon color of Rate activation state |
| --rate-icon-color  | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Rate Default Icon Color       |
