---
nav:
  path: /components
group:
  title: General
  order: 2
toc: 'content'
---

# Icon

Semantic vector graphics. Icon icons can be used when graphics are needed to metaphorically present basic operating functions and give users correct, friendly and clear operating guidelines.

## Introduction

Introducing components in index.json

```json
"usingComponents": {
#if ALIPAY
  "ant-icon": "antd-mini/es/Icon/index"
#endif
#if WECHAT
  "ant-icon": "antd-mini/Icon/index"
#endif
}
```

## Icon List

Search and view the icon, click the icon to copy.

<Icon></Icon>

## Code Sample

### Basic use

```xml
<ant-icon type="SmileOutline" />
```

### Custom size and color

```xml
<ant-icon type="SmileOutline" style="font-size: 20px" />
<ant-icon type="SmileOutline" style="color: red" />
```

### Demo Code

<code src='../../demo/pages/Icon/index'></code>

## API

| Property                 | Description                     | Type               | Default Value |
| :------------------- | :----------------------- | :----------------- | :----- |
| className            | Class Name                     | string             | -      |
| style                | Style                     | string             | -      |
| type                 | Types of icons               | string             | -      |
| #if ALIPAY catchTap  | Callback function triggered when icon is clicked | (e: Event) => void | -      |
| #if ALIPAY onTap     | Callback function triggered when icon is clicked | (e: Event) => void | -      |
| #if WECHAT catchtap | Callback function triggered when icon is clicked | (e: Event) => void | -      |
| #if WECHAT bindtap  | Callback function triggered when icon is clicked | (e: Event) => void | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name       | Default Value                                                                                           | Dark Mode Default                                                                                   | Remarks     |
| ------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | -------- |
| --icon-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff">#c5cad1</div> | Icon Color |
