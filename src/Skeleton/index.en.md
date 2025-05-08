---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Skeleton

Provide a placeholder graphic combination where you need to wait for content to load.

- The network is slow, requires a long wait to load, and is only used when loading for the first time.
- On the premise of ensuring the performance of the mobile phone, try to use preloading, preferably without skeleton screen.
- It is suitable for home pages, lists and cards with more graphic information and important information. Do not use small module class components (such as pop-up windows).

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-skeleton": "antd-mini/es/Skeleton/index",
  "ant-skeleton-avatar": "antd-mini/es/Skeleton/Avatar/index",
  "ant-skeleton-title": "antd-mini/es/Skeleton/Title/index",
  "ant-skeleton-button": "antd-mini/es/Skeleton/Button/index",
  "ant-skeleton-paragraph": "antd-mini/es/Skeleton/Paragraph/index",
  "ant-skeleton-input": "antd-mini/es/Skeleton/Input/index",
#endif
#if WECHAT
  "ant-skeleton": "antd-mini/Skeleton/index",
  "ant-skeleton-avatar": "antd-mini/Skeleton/Avatar/index",
  "ant-skeleton-title": "antd-mini/Skeleton/Title/index",
  "ant-skeleton-button": "antd-mini/Skeleton/Button/index",
  "ant-skeleton-paragraph": "antd-mini/Skeleton/Paragraph/index",
  "ant-skeleton-input": "antd-mini/Skeleton/Input/index",
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-skeleton animate="{{true}}" />
```

### With avatar

```xml
<ant-skeleton avatar="{{true}}" />
```

### Custom Combinations

```xml
<ant-skeleton-avatar />
<ant-skeleton-paragraph rows="{{1}}" />
<ant-skeleton-input />
<ant-skeleton-input />
<ant-skeleton-input />
<ant-skeleton-button size="small" />
```

### complex combination

```xml
<ant-skeleton
  loading="{{showLoading}}"
  title="{{false}}"
  avatar="{{true}}"
  paragraph="{{paragraph}}">
  <view class="container">
    <ant-avatar
      src="https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
    <view class="content">
        We supply a series of design principles, practical patterns and high
        quality design resources, to help people create their product prototypes
        beautifully and efficiently.
    </view>
  </view>
</ant-skeleton>
```

### Demo Code

<code src='../../demo/pages/Skeleton/index'></code>

## API

### Skeleton

| Property      | Description                                         | Type                  | Default Value |
| --------- | -------------------------------------------- | --------------------- | ------ |
| animate   | Show animation effect                             | boolean               | false  |
| avatar    | Whether to display avatar bitmap                           | `boolean \| Avatar`   | false  |
| className | Class Name                                         | string                | -      |
| loading   | When true, displays the accounting bitmap. On the other hand, it shows the subassembly directly. | boolean               | true   |
| paragraph | Paragraph                                         | `number \| Paragraph` | true   |
| style     | Style                                         | CSSProperties         | -      |
| title     | Whether to display title bitmap                           | boolean               | true   |

### Avatar

| Property      | Description                                             | Type          | Default Value   |
| --------- | ------------------------------------------------ | ------------- | -------- |
| animate   | Show animation effect                                 | boolean       | false    |
| className | Class Name                                             | string        | -        |
| loading   | When true, displays the accounting bitmap. On the other hand, it shows the subassembly directly.     | boolean       | true     |
| shape     | Avatar Shape `circle` or `square`                    | string        | `square` |
| size      | Avatar size `x-small`、`small`、`medium` or `large` | string        | `medium` |
| style     | Style                                             | CSSProperties | -        |

#### Paragraph paragraph

| Property      | Description                                         | Type          | Default Value |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | Show animation effect                             | boolean       | false  |
| className | Class Name                                         | string        | -      |
| loading   | When true, displays the accounting bitmap. On the other hand, it shows the subassembly directly. | boolean       | true   |
| rows      | Number of paragraph lines, greater than 0                        | number        | 3      |
| style     | Style                                         | CSSProperties | -      |

#### Title Title

| Property      | Description                                         | Type          | Default Value |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | Show animation effect                             | boolean       | false  |
| className | Class Name                                         | string        | -      |
| loading   | When true, displays the accounting bitmap. On the other hand, it shows the subassembly directly. | boolean       | true   |
| style     | Style                                         | CSSProperties | -      |

#### Button Button

| Property      | Description                                         | Type          | Default Value   |
| --------- | -------------------------------------------- | ------------- | -------- |
| animate   | Show animation effect                             | boolean       | false    |
| className | Class Name                                         | string        | -        |
| loading   | When true, displays the accounting bitmap. On the other hand, it shows the subassembly directly. | boolean       | true     |
| size      | size,`small`、`medium` or `large`           | string        | `medium` |
| style     | Style                                         | CSSProperties | -        |

#### Input input box

| Property      | Description                                         | Type          | Default Value |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | Show animation effect                             | boolean       | false  |
| className | Class Name                                         | string        | -      |
| loading   | When true, displays the accounting bitmap. On the other hand, it shows the subassembly directly. | boolean       | true   |
| style     | Style                                         | CSSProperties | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                            | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --selector-background-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Selector Background Color       |
| --selector-item-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | Selector item background color     |
| --selector-item-active-background | <div style="width: 150px; height: 30px; background-color: #e7f1ff; color: #333333;">#e7f1ff</div> | <div style="width: 150px; height: 30px; background-color: #0d2543; color: #ffffff;">#0d2543</div> | Selector Activate Item Background Color |
| --selector-item-color             | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Selector item color         |
| --selector-item-sub-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Selector item sub-color       |
