---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Skeleton


Provide a placeholder graphic combination where you need to wait for content to load

## When to use

- The network is slow, requires a long wait to load, and is only used when loading for the first time.
- On the premise of ensuring the performance of the mobile phone, try to use preloading, preferably without skeleton screen.
- It is suitable for home pages, lists and cards with more graphic information and important information. Do not use small module class components (such as pop-up windows).

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-skeleton": "antd-mini/es/Skeleton/index",
  "skeleton-avatar": "antd-mini/es/Skeleton/Avatar/index",
  "skeleton-title": "antd-mini/es/Skeleton/Title/index",
  "skeleton-button": "antd-mini/es/Skeleton/Button/index",
  "skeleton-paragraph": "antd-mini/es/Skeleton/Paragraph/index",
  "skeleton-input": "antd-mini/es/Skeleton/Input/index",
#endif
#if WECHAT
  "ant-skeleton": "antd-mini/Skeleton/index",
  "skeleton-avatar": "antd-mini/Skeleton/Avatar/index",
  "skeleton-title": "antd-mini/Skeleton/Title/index",
  "skeleton-button": "antd-mini/Skeleton/Button/index",
  "skeleton-paragraph": "antd-mini/Skeleton/Paragraph/index",
  "skeleton-input": "antd-mini/Skeleton/Input/index",
#endif
}
```

## Code Sample

### Basic use
```xml
<skeleton animate="{{ true }}" />
```

### With avatar
```xml
<skeleton avatar="{{ true }}" />
```

### Custom Combinations
```xml
<skeleton-avatar />
<skeleton-paragraph rows="{{ 1 }}" />
<skeleton-input />
<skeleton-input />
<skeleton-input />
<skeleton-button size="small" />
```
### complex combination
```xml
<skeleton
  loading="{{ showLoading }}"
  title="{{ false }}"
  avatar="{{ true }}"
  paragraph="{{ paragraph }}">
  <view class="container">
    <avatar
      src="https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
    <view class="content">
        We supply a series of design principles, practical patterns and high
        quality design resources, to help people create their product prototypes
        beautifully and efficiently.
    </view>
  </view>
</skeleton>
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
| loading   | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean               | true   |
| paragraph | Paragraph                                         | `number \| Paragraph` | true   |
| style     | Style                                         | CSSProperties         | -      |
| title     | Whether to display title bitmap                           | boolean               | true   |

### Avatar

| Property      | Description                                             | Type          | Default Value   |
| --------- | ------------------------------------------------ | ------------- | -------- |
| animate   | Show animation effect                                 | boolean       | false    |
| className | Class Name                                             | string        | -        |
| loading   | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly.     | boolean       | true     |
| shape     | Avatar Shape `circle` or `square`                    | string        | `square` |
| size      | Avatar size `x-small`、`small`、`medium` or `large` | string        | `medium` |
| style     | Style                                             | CSSProperties | -        |

#### Paragraph paragraph

| Property      | Description                                         | Type          | Default Value |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | Show animation effect                             | boolean       | false  |
| className | Class Name                                         | string        | -      |
| loading   | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean       | true   |
| rows      | Number of paragraph lines, greater than 0                        | number        | 3      |
| style     | Style                                         | CSSProperties | -      |

#### Title Title

| Property      | Description                                         | Type          | Default Value |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | Show animation effect                             | boolean       | false  |
| className | Class Name                                         | string        | -      |
| loading   | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean       | true   |
| style     | Style                                         | CSSProperties | -      |

#### Button Button

| Property      | Description                                         | Type          | Default Value   |
| --------- | -------------------------------------------- | ------------- | -------- |
| animate   | Show animation effect                             | boolean       | false    |
| className | Class Name                                         | string        | -        |
| loading   | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean       | true     |
| size      | size,`small`、`medium` or `large`           | string        | `medium` |
| style     | Style                                         | CSSProperties | -        |

#### Input input box

| Property      | Description                                         | Type          | Default Value |
| --------- | -------------------------------------------- | ------------- | ------ |
| animate   | Show animation effect                             | boolean       | false  |
| className | Class Name                                         | string        | -      |
| loading   | When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly. | boolean       | true   |
| style     | Style                                         | CSSProperties | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                  | Default Value                                                                                                                              | Remarks                      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| --skeleton-animation-25 | <div style="width: 150px; height: 40px; background-color: #eeeeee; color: #333333;">#eeeeee</div>                                   | Skeleton animation 25% gradient color |
| --skeleton-animation-37 | <div style="width: 150px; height: 40px; background-color: rgba(204, 204, 204, 0.6); color: #333333;">rgba(204, 204, 204, 0.6)</div> | Skeleton animation 37% gradient color |
| --skeleton-animation-63 | <div style="width: 150px; height: 40px; background-color: #eeeeee; color: #333333;">#eeeeee</div>                                   | Skeleton animation 63% gradient color |
