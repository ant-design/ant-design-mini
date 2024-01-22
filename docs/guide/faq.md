---
toc: false
---

## 常见问题

### 能否将 0.x 版本与 1.0 版本一起使用

可以通过使用别名进行安装，例如安装 `antd-mini-v1`：

```shell
$ npm install antd-mini-v1@npm:antd-mini --save
```

然后在 `package.json` 文件中定义两个版本：

```json
{
  "dependencies": {
    "antd-mini": "^0.0.25",
    "antd-mini-v1": "npm:antd-mini"
  }
}
```

使用时，在组件中这样引用：

```json
{
  "usingComponents": {
    "button": "antd-mini/es/Button/index",
    "button-v1": "antd-mini-v1/es/Button/index"
  }
}
```

在页面上这样书写标签：

```html
<button>这是 0.x 版本的 antd-mini</button> 
<button-v1>这是 1.0 版本的 antd-mini</button-v1>
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