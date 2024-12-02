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

| 属性              | 说明               | 类型                         | 默认值       |
| ----------------- | ------------------ | ---------------------------- | ------------ |
| className         | 自定义外部容器类名 | `string`                     | `""`         |
| type              | 协议类型           | `"" \| "check" \| "read"`    | `""`         |
| terms             | 协议列表           | `Array<Term>`                | `-`          |
| buttons           | 按钮列表           | `Array<Button>`              | `-`          |
| buttonsFixed      | 按钮区是否吸底     | `boolean`                    | `false`      |
| buttonsDirection  | 分割线方向，可选   | `"horizontal" \| "vertical"` | `"vertical"` |
| protocolPrefix    | 协议前缀           | `string`                     | `""`         |
| protocolSuffix    | 协议后缀           | `string`                     | `""`         |
| onButtonTap       | 行动点按钮点击回调 | `(b: Button) => void`        | `-`          |
| onTermTap         | 协议点击回调       | `(t: Term) => void`          | `-`          |
| onCheckChange     | 勾选回调           | `(c: boolean) => void`       | `-`          |
| onReadChange      | 协议阅读切换       | `(t: Term) => void`          | `-`          |
| onScrollToLower   | 协议阅读触底时回调 | `() => void`                 | `-`          |
| onCountdownFinish | 倒计时结束回调     | `(b: Button) => void`        | `-`          |

### Button


