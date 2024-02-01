---
toc: false
---

## 常见问题

### 2.x 能否和 1.x, 0.x 一起使用

因为 1.x 升级到 2.x 没有迁移成本，所以你可以直接从 1.x 升级到 2.x
对于 0.x, 你可以使用 antd-mini-v0 这个 npm 包, 产物内容和 antd-mini@0.0.26 一模一样。

```
$ npm install antd-mini-v0 antd-mini
```

在 `package.json` 文件中是这样定义的：

```json
{
  "dependencies": {
    "antd-mini": "^2.25.0",
    "antd-mini-v0": "^0.0.26"
  }
}
```

使用：

```json
{
  "usingComponents": {
    "button": "antd-mini/es/Button/index",
    "button-v0": "antd-mini-v0/es/Button/index"
  }
}
```

```html
<button>这是2.x antd-mini</button>
<antd-mini-v0>这是0.x antd-mini</antd-mini-v0>
```

### 在支付宝小程序 Page 里覆盖 antd-mini 的样式不生效

新版支付宝小程序开发者工具在创建页面时会默认加上 `styleIsolation: 'apply-shared'`, 此时页面的样式无法影响到外部。

可以在 `page.json` 里设置 `styleIsolation: 'shared'`。

```json
{
  "styleIsolation": "shared"
}
```

styleIsolation 配置有两种模式：

`apply-shared`: 表示 app.acss 样式以及其他（设置了 shared 的其他页面和自定义组件）的样式将影响到当前页面，但当前页面 acss 中指定的样式不会影响外部。

`shared`（默认）表示 app.acss 样式以及其他（设置了 shared 的其他页面和自定义组件）的样式将影响到当前页面，当前页面 acss 中指定的样式也会影响到外部。

参考: https://opendocs.alipay.com/mini/framework/page-acss#%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB
