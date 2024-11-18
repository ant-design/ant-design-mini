---
nav:
  path: /components
group:
  title: Information Display
toc: 'content'
---

# Divider

The dividing line that separates the content.

## When to use

- Segmentation of text paragraphs in different sections.
- Split inline text/links, such as the action column of a table.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-divider": "antd-mini/es/Divider/index"
#endif
#if WECHAT
  "ant-divider": "antd-mini/Divider/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-divider />
```

### Split Line with Text

```xml
<ant-divider text="中间内容" />
<ant-divider text="左侧内容" textPosition="left" />
<ant-divider text="右侧内容" textPosition="right" />
```

### Custom Style

```xml
 <ant-divider
    text="Custom Style"
    textStyle="color:#1677ff; fontWeight:600"
    lineHeight="{{ 2 }}"
    lineType="dashed"
    lineColor="#1677ff" />
```

### Vertical Split Line

```xml
 <view class="divider-vertical">
    <view>100m</view>
    <ant-divider direction="vertical" />
    <view>556 Xixi Road, Xihu District, Hangzhou City, Zhejiang Province</view>
  </view>
```

### Demo Code

<code src='../../demo/pages/Divider/index'></code>

## API

| Property          | Description                                                             | Type           | Default Value       |
| ------------- | ---------------------------------------------------------------- | -------------- | ------------ |
| className     | Root node class name                                                       | string         | -            |
| direction     | Split line direction, optional `horizontal` `vertical`                         | string         | `horizontal` |
| lineColor     | Split line color                                                       | string         | -            |
| lineHeight    | Split line height, only if `direction` For `horizontal` Effective at the time, in units `px` | number         | -            |
| lineType      | Split line type, optional `solid` `dashed` `dotted`                       | string         | -            |
| lineWidth     | Split line width, only if `direction` For `vertical` Effective at the time, in units `px`   | number         | -            |
| style         | Style                                                             | string         | -            |
| textClassName | Split line text class name                                                   | string         | -            |
| textPosition  | Split line text position, optional `left` `center` `right`                     | string         | `center`     |
| textStyle     | Split Line Text Style                                                   | string         | -            |
| text          | Split Line Text                                                       | string \| slot | -            |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                 | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks           |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------- |
| --divider-text-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Split line text color |
| --divider-border-color | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div> | <div style="width: 150px; height: 30px; background-color: #444444; color: #333333;">#444444</div> | Split Line Border Color |
