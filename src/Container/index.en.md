---
nav:
  path: /components
group:
  title: To Discard
  order: 99
toc: 'content'
---

# Container

Not recommended, this component will be obsolete. recommend use [Card](/components/card) Components with the latest design specifications and richer functionality.

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
<ant-container headerInBox="{{false}}">
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

| Variable name                        | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks         |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --container-header-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Container head color |
| --container-color-text-assist | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Secondary Text Color |
| --container-background-color  | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div> | Container background color |
