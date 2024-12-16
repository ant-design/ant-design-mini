---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: content
---

# Avatar

When you need to show the characteristics of people or things more intuitively.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-avatar": "antd-mini/es/Avatar/index"
#endif
#if WECHAT
  "ant-avatar": "antd-mini/Avatar/index"
#endif
}
```

## Code Sample

### Basic use
```xml
<ant-avatar src="{{imagesUrl}}" className="avatar" />
<ant-avatar size="large" src="{{imagesUrl}}" className="avatar" />
<ant-avatar size="x-small" src="{{imagesUrl}}" style="width: 100rpx" />
```

### Demo Code

<code src='../../demo/pages/Avatar/index'></code>

## API

| Property      | Description       | Type   | Default Value       |
|---------|----------|------|-----------|
| className | Class Name      | string | -         |
| size     | size, optional `x-small`、`small`、`medium`、`large` | string | `medium` |
| src      | avatar address    | string | Gray built-in picture |
| style    | Style      | string | -         |
