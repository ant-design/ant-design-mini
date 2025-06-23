---
nav:
  path: /components
group:
  title: 数据录入
  order: 13
toc: 'content'
---

# Solution 表单解决方案

通过数据 schema 的形式驱动表单的渲染，提供内置表单组件以及自定义组件的形式，通知支持全局表单 API 获取以及驱动表单数据。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "form-render-mini": "antd-mini/es/SolutionForm/index"
#endif
#if WECHAT
  "form-render-mini": "antd-mini/es/SolutionForm/index"
#endif
}
```

## 代码示例

### 基本使用
```xml
<form-render-mini schema="{{ schema }}" />
<form-render-mini schema="{{ schema }}" className="form" onTapOperation="onTapOperation" />
```

### Demo 代码

<code src='../../demo/pages/FormRenderMini/FormInput/index'></code>

## API

| 属性      | 说明       | 类型   | 默认值       |
|---------|----------|------|-----------|
| className | 类名      | string | -         |
| schema      | 表单渲染的 schema    | object | {} |
| onTapOperation    | 表单 operation 点击的回调      | (item: footerItem) => void | -         |
