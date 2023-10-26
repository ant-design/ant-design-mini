---
toc: false
---

## 常见问题

### 能否 0.x 跟 1.0 一起使用

可以使用别名，比如 `antd-mini-v1` 进行安装：

```
$ npm install antd-mini-v1@npm:antd-mini --save
```

```
"antd-mini": "^0.0.25",
"antd-mini-v1": "npm:antd-mini"
```

使用：

```json
{
  "usingComponents": {
    "button": "antd-mini/es/Button/index",
    "button-v1": "antd-mini-v1/es/Button/index"
  }
}
```

```html
<button>这是0.x antd-mini</button> <button-v1>这是1.0 antd-mini</button-v1>
```

### 在 page 里覆盖 antd-mini 的样式不生效

新版小程序开发者工具在创建页面时会默认加上 `styleIsolation: 'apply-shared'`, 此时页面的样式无法影响到外部。

可以在 `page.json` 里设置 `styleIsolation: 'shared'`。

```json
{
  "styleIsolation": "shared"
}
```

参考: https://opendocs.alipay.com/mini/framework/page-acss#%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB
