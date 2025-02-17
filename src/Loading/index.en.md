---
nav:
  path: /components
group:
  title: Feedback
toc: 'content'
---

# Loading

Used to prompt that a part or page is loading.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-loading": "antd-mini/es/Loading/index"
#endif
#if WECHAT
  "ant-loading": "antd-mini/Loading/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-loading type="mini" />
```

### Spin size

```xml
<ant-loading type="spin" size="x-large" />
<ant-loading type="spin" size="large" />
<ant-loading type="spin" size="medium" />
<ant-loading type="spin" size="small" />
```

### Custom Colors

```xml
<ant-loading type="mini" color="#1677ff" />
<ant-loading color="#34B368" />
```

### Custom Size

```xml
<ant-loading style="width: 40px; height: 40px" />
<ant-loading className="custom-size" />
```

### Demo Code

<code src='../../demo/pages/Loading/index' noChangeButton></code>

## API

| Property      | Description                                                                               | Type   | Default Value   |
| --------- | ---------------------------------------------------------------------------------- | ------ | -------- |
| className | Root node class name                                                                         | string | -        |
| color     | The color when loading, when type is `spin` Only hexadecimal color codes are supported.                           | string | `#fff`   |
| size      | Load icon size, when type is `spin` effective. Optional `small`、`medium`、`large`、`x-large` | string | `medium` |
| style     | root node style                                                                       | string | -        |
| type      | Load style type, optional `spin`、`mini`                                                  | string | `spin`   |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                     | Default Value                                                                                                                              | Dark Mode Default                                                                                                                      | Remarks                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --loading-text-color       | <div style="width: 150px; height: 40px; background-color: #d8d8d8; color: #333333;">#d8d8d8</div>                                   | <div style="width: 150px; height: 40px; background-color: #454955; color: #ffffff;">#454955</div>                                   | Load Text Color (Iron Black) |
| --loading-icon-light-color | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.6); color: #333333;">rgba(255, 255, 255, 0.6)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.6); color: #333333;">rgba(255, 255, 255, 0.6)</div> | Load icon light         |
