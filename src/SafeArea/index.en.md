---
nav:
  path: /components
group:
  title: General
  order: 2
toc: 'content'
---

# SafeArea
When the web page is displayed in full screen, the top and bottom of the screen can be adapted by means of a safe zone, such as a bang screen.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-safe-area": "antd-mini/es/SafeArea/index"
#endif
#if WECHAT
  "ant-safe-area": "antd-mini/SafeArea/index"
#endif
}
```

## Code Sample

### Top Safety Area
```xml
<ant-safe-area 
  position="top" 
  className="ant-safe-area-top"
>
  Content Area
</ant-safe-area>
```

### Bottom safety zone
```xml
<ant-safe-area 
  position="bottom" 
  className="ant-safe-area-bottom"
>
  Content Area
</ant-safe-area>
```

### Demo Code

<code src="../../demo/pages/SafeArea/index"></code>

## Property

| Property | Description | Type | Default Value |
|-----|-----|-----|--------|
| className | Container className | string | - |
| position | Location of safety zone, optional`top`、`bottom` | string | - |

## Slot

| Name        | Description                 |
| ----------- | -------------------- |
| Default Slot    | Contents contained in the security zone |
