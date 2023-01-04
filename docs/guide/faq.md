---
toc: false
---

## 常见问题

### 能否0.x跟1.0一起使用

可以使用别名，比如 `antd-mini-v1` 进行安装：

```
$ npm install antd-mini-v1@npm: antd-mini@beta --save
```

```diff
"antd-mini": "^0.0.25",
"antd-mini-v1": "npm:antd-mini@beta"
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
<button>这是0.x antd-mini</button>
<button-v1>这是1.0 antd-mini</button-v1>
```
