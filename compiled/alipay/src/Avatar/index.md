---
nav:
  path: /components
group:
  title: 数据展示
  order: 8
toc: content
---

# Avatar 头像

需要更加直观地展现人物或事物特征时。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用
```xml
<ant-avatar src="{{imagesUrl}}" className="avatar" />
<ant-avatar size="large" src="{{imagesUrl}}" className="avatar" />
<ant-avatar size="x-small" src="{{imagesUrl}}" style="width: 100rpx" />
```

### Demo 代码

<code src='../../demo/pages/Avatar/index'></code>

## API

| 属性      | 说明       | 类型   | 默认值       |
|---------|----------|------|-----------|
| className | 类名      | string | -         |
| size     | 大小，可选 `x-small`、`small`、`medium`、`large` | string | `medium` |
| src      | 头像地址    | string | 灰色内置图片 |
| style    | 样式      | string | -         |
