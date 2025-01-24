---
nav:
  path: /copilot
group:
  title: Wake
  order: 2
toc: 'content'
---

# Welcome

This is a welcome prompt component based on the Ant Design design system to show users the product identity and core value proposition.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-welcome": "antd-mini/es/Welcome/index"
#endif
#if WECHAT
  "ant-welcome": "antd-mini/Welcome/index"
#endif
}
```

## Code Sample

### Basic use
```xml
  <ant-welcome title="👋🏻 你好，我是 Ant Design X" description="基于 Ant Design 的 AGI 产品界面解决方案，创造更美好的智能视界～" />
```

### Demo Code

<code src='../../copilot-demo/pages/Welcome/index'></code>

## API

### Welcome

The following table describes the API properties for Welcome components:

| Property      | Description     | Type                     | Default Value |
| --------- | -------- | ------------------------ | ------ |
| className | Class Name     | string                   | -      |
| styles      | Custom Style | string | -      |
| title      | Title | string | -      |
| description      | Description Introduction | string | -      |


### Event

| Event Name | Description | Type |
| --- | --- | --- |
| onTap | Trigger when a description is clicked | (e) => void |
