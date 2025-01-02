---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Badge

A logo that displays a red dot, number, or text. Used to remind the user of pending matters or new updated quantities. Use when you need to display numbers, text, or little red dots in the upper right corner. It is suitable for prompting new messages, functions or services for productization, attracting users' attention through conspicuous visual forms and prompting them to perform related operations.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-badge": "antd-mini/es/Badge/index"
#endif
#if WECHAT
  "ant-badge": "antd-mini/Badge/index"
#endif
}
```

## Code example

### Basic use

```xml
<ant-badge type="dot" position="top-right"><view class="box" /></ant-badge>
<ant-badge type="text" text="new" position="top-right"><view class="box" /></ant-badge>
<ant-badge type="number" text="{{2}}" position="top-right"><view class="box" /></ant-badge>
<ant-badge type="bubble" text="new" position="top-right"><view class="box" /></ant-badge>
```

### with border

```xml
<ant-badge stroke type="dot" position="top-right"><view class="box" /></ant-badge>
```

### Custom background and location

```xml
<ant-badge type="dot" position="bottom-right"><view class="box" /></ant-badge>
<ant-badge type="dot" position="top-center" bgColor="#1677FF"><view class="box" /></ant-badge>
```

### Set Offset

```xml
<ant-badge type="dot" position="bottom-right" offsetX="-20px" offsetY="-14px">
  <view class="box" />
</ant-badge>
```

### Custom Content

```xml
<ant-badge type="text" position="top-right">
  <ant-icon type="GlobalOutline" slot="text" />
  <view class="box" />
</ant-badge>
```

### Demo Code

<code src="../../demo/pages/Badge/index"></code>

## API

| Property      | Description                                                                                                                                     | Type                     | Default Value      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| bgColor   | Custom background color, CSS color values                                                                                                                   | string                   | -           |
| className | Class name of the component root node                                                                                                                         | string                   | -           |
| offsetX   | Horizontal offset                                                                                                                           | string                   | '-50%'      |
| offsetY   | Offset in vertical direction                                                                                                                         | string                   | '-50%'      |
| position  | Position of the logo relative to the container, options include:`top-left`、`top-right`、`top-center`、`left`、`right`、`bottom-left`、`bottom-center` and `bottom-right` | string                   | `top-right` |
| stroke    | Does the logo have a stroke                                                                                                                         | boolean                  | false       |
| style     | Custom Style                                                                                                                               | object                   | -           |
| text      | Logo content. Empty means that only red dots are displayed. It can be numbers or text. If the number exceeds 99, it will be displayed `...`                                                        | string \| number \| slot | -           |
| type      | Logo type, options include:`dot`(red dot),`number`(Number type, more than 99 will be automatically converted),`text`(text bubbles) and `bubble`(Bubble form, with arrow)         | string                   | `dot`       |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                   | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks           |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------- |
| --badge-text-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | Badge Text Color |
| --badge-background-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div> | Badge background color |
