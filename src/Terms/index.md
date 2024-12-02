---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: 'content'
---

# Terms

用于产品开通、签署协议等场景

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-tag": "antd-mini/es/Terms/index"
#endif
#if WECHAT
  "ant-tag": "antd-mini/Terms/index"
#endif
}
```

## 代码示例

### 基本使用

```xml

```

### Demo 代码

<code src='../../demo/pages/Terms/index'></code>

## API

| 属性      | 说明             | 类型    | 默认值 |
| --------- | ---------------- | ------- | ------ |
| animation | 是否开启过渡动画 | boolean | true   |
