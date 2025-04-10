---
nav:
  path: /components
group:
  title: Layout
  order: 1
toc: 'content'
---

# Space

Set the spacing between components.

## When to use

Avoid components sticking together and create uniform spacing.

- Suitable for horizontal spacing of inline elements.
- Various horizontal alignment methods can be set.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-space": "antd-mini/es/Space/index"
#endif
#if WECHAT
  "ant-space": "antd-mini/Space/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-space>
  <ant-button type="primary">Button 1</ant-button>
  <ant-button>Button 2</ant-button>
  <ant-button>Button 3</ant-button>
</ant-space>
```

### Vertical Space

```xml
<ant-space direction="vertical">
  <ant-button type="primary">Button 1</ant-button>
  <ant-button>Button 2</ant-button>
  <ant-button>Button 3</ant-button>
</ant-space>
```

### Space Size

```xml
<ant-space size="small">
  <ant-button type="primary">Button 1</ant-button>
  <ant-button>Button 2</ant-button>
  <ant-button>Button 3</ant-button>
</ant-space>
```

### Alignment

```xml
<ant-space align="start">
  <ant-button type="primary">Button 1</ant-button>
  <view class="custom-box">Content with different height</view>
  <ant-button>Button 3</ant-button>
</ant-space>
```

### Auto Wrap

```xml
<ant-space wrap>
  <ant-button type="primary">Button 1</ant-button>
  <ant-button>Button 2</ant-button>
  <ant-button>Button 3</ant-button>
  <ant-button>Button 4</ant-button>
  <ant-button>Button 5</ant-button>
</ant-space>
```

### Demo Code

<code src='../../demo/pages/Space/index'></code>

## API

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| direction | Space direction | `'horizontal'` \| `'vertical'` | `'horizontal'` |
| size | Space size | `'small'` \| `'middle'` \| `'large'` \| `number` | `'middle'` |
| align | Alignment | `'start'` \| `'end'` \| `'center'` \| `'baseline'` | `'center'` |
| justify | Main axis alignment | `'start'` \| `'end'` \| `'center'` \| `'space-around'` \| `'space-between'` | `'start'` |
| wrap | Whether to automatically wrap | `boolean` | `false` |
| className | Custom class name | `string` | - |
| style | Custom style | `string` | - |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name | Default Value | Dark Mode Default | Remarks |
| --- | --- | --- | --- |
| --space-gap | 8px | 8px | Space size |
