---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Container

Universal card container.

## When to use

When you need to host text, lists, pictures, paragraphs and other content, use Container containers to facilitate users to browse.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-container": "antd-mini/es/Container/index"
#endif
#if WECHAT
  "ant-container": "antd-mini/Container/index"
#endif
}
```

## Code Sample

### Basic use
```xml
<ant-container title="Title">
  <view class="content" />
</ant-container>
```

### Custom Title
```xml
<ant-container headerInBox="{{ false }}">
  <view slot="title">
    <view class="icon">
      <ant-icon
        type="SmileOutline"
        style="margin-right: 8px" />
      Title
    </view>
  </view>
  <view slot="headerRight">Right Content</view>
  <view class="content" />
</ant-container>
```
### 


### Demo Code
<code src='../../demo/pages/Container/index'></code>

## API

The following is `Container` Parameter list for the component:

| Property        | Description             | Type         | Default Value |
| ----------- | ---------------- | ------------ | ------ |
| className   | Class Name             | string       | -      |
| headerRight | Contents on the right side of the head     | slot         | -      |
| headerInBox | Whether the title is in the container | boolean      | true   |
| style       | Style             | string       | -      |
| title       | Title             | string\|slot | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                       | Default Value                                                                                            | Remarks         |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --container-header-color     | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Container head color |
| --color-text-assist          | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | Secondary Text Color |
| --container-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Container background color |