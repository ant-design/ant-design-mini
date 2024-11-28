---
order: 10
toc: true
---

# 常见问题

### 3.x 能否和 2.x, 1.x, 0.x 一起使用

因为 2.x, 1.x 升级到 3.x 没有迁移成本，所以你可以直接从 2.x, 1.x 升级到 3.x，参考下[升级指南](http://localhost:8000/guide/migration)。

对于 0.x, 你可以使用 npm 别名来安装。

在 `package.json` 文件中是这样定义的：

```json
{
  "dependencies": {
    "antd-mini": "^3.0.0",
    "antd-mini-v0": "npm:antd-mini@^0.0.26"
  }
}
```

```
$ npm install
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
<button>这是3.x antd-mini</button>
<antd-mini-v0>这是0.x antd-mini</antd-mini-v0>
```

### 在支付宝小程序页面中，如何覆盖 antd-mini 的样式并确保其生效

新版支付宝小程序开发者工具默认为创建的页面配置了 `styleIsolation: 'apply-shared'`，这将导致页面样式无法影响到外部组件。

您可以通过修改对应 page.json 的样式隔离配置来解决此问题：

```json
{
  "styleIsolation": "shared"
}
```

`styleIsolation` 配置项有如下两种模式可供选择：

- `apply-shared`：这意味着 app.acss 样式和其它设定了 `shared` 的页面或自定义组件样式会影响当前页面，但当前页面 acss 中的样式不会作用于外部。
- `shared`（默认）：表示 app.acss 样式和其它设定了 `shared` 的页面或自定义组件样式会影响当前页面，同时当前页面 acss 中的样式也会作用于外部。

官方文档参考链接：[页面样式隔离](https://opendocs.alipay.com/mini/framework/page-acss#%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)
