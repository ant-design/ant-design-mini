---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
supportPlatform: ['alipay']
---

# Card

## When to use

Base card container.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-card": "antd-mini/es/Card/index"
#endif
#if WECHAT
  "ant-card": "antd-mini/Card/index"
#endif
}
```
## Code Sample

### Basic Usage
```xml
<ant-card 
#if ALIPAY
  onOperateClick="handleLinkClick" 
#endif
#if WECHAT
  bind:operateClick="handleLinkClick" 
#endif
  title="标题" 
  operateText="操作"
>
  <view>
    I am the card content
  </view>
</ant-card>
```

### Content Separator
```xml
<ant-card 
  divider="{{true}}"
  title="标题" 
  operateText="操作"
>
  <view>
    Title Content with Split Line
  </view>
</ant-card>
```

### Title ceiling
```xml
<ant-card
  title="标题"
  headSticky="{{true}}"
#if ALIPAY
  onTitleSticky="handleTitleSticky" 
#endif
#if WECHAT
  bind:titleSticky="handleLinkClick" 
#endif
>
  <view style="height: 400px">
    Simulate a long card content
  </view>
</ant-card>
```

### Card Foldable
```xml
<ant-card
  title="标题"
  needFold="{{true}}"
>
  <view>
    Content area can be expanded/collapsed
  </view>
</ant-card>
```

### Custom Action Buttons
```xml
<ant-card 
  title="标题" 
  operateText="操作"
>
  <view slot="headerRight">
    Custom
  </view>
  <view>
    I am the card content
  </view>
</ant-card>
```

### Demo Code

<code src="../../demo/pages/Card/index"></code>

## Property

| Property | Description  | Type | Default Value                                       |
| --- | ---  | --- |------------------------------------------|
| className | Container className| string   | - |
| config | Card Configuration   | [ICardConfig](#ICardConfig) | - |
| title | Card Title  | string | - |
| divider | Whether there is a dividing line  | boolean | false |
| needFold | Whether a foldable card is required, the operateText needs to be empty, otherwise it needs to be manually unfolded and stowed. | boolean | false |
| foldStatus | Whether it is collapsed or not, passing true will cause it to be collapsed, regardless of whether the needFold is true or not.  | boolean | false |
| headSticky | Does the title need ceiling  | boolean | false |
| stickyTransparentTitle | Whether the ceiling is on the transparent head page, if so, the height of the transparent head will be calculated automatically.  | boolean | false |
| stickyTop | How much distance should the title be from the top when it is sucked  | string | - |
| operateText | Default title bar right action button text | string | - |
| #if ALIPAY onOperateClick | Default title bar right operation button click callback | () => void | - |
| #if ALIPAY onFoldChange | Default title bar right collapse expand button click callback | () => void | - |
| #if ALIPAY onTitleSticky | Whether the title area is the callback when the ceiling changes. | (status) => void | - |
| #if WECHAT bind:operateClick | Default title bar right operation button click callback | () => void | - |
| #if WECHAT bind:foldChange | Default title bar right collapse expand button click callback | () => void | - |
| #if WECHAT bind:titleSticky | Whether the title area is the callback when the ceiling changes. | (status) => void | - |

### ICardConfig

| Configuration Item | Description | Type | Default Value |
| --- | --- | --- | --- |
| foldTapArea | Collapse behavior trigger area, optional`btn`、`header` | string | 'btn' |

## Slot

| Name        | Description                 |
| ----------- | -------------------- |
| Default slot    | Card Content             |
| headerTitle | Custom Title Bar Left Header |
| headerRight | Customize the right content of the title bar |
