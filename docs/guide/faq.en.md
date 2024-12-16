---
order: 10
toc: true
---

# FAQ

### 3. Can x be used with 2.x, 1.x, 0.x

Because there is no migration cost to upgrade from 2.x, 1.x to 3.x, you can do it directly from 2.x, 1.x. upgrade to 3.x, under reference[Upgrade Guide](http://localhost:8000/guide/migration)。

For 0.x, you can use the npm alias to install.

In `package.json` This is defined in the file:

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

Use:

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

### In the Alipay applet page, how to override the antd-mini style and ensure that it takes effect

The new Alipay applet developer tool is configured for the created page by default `styleIsolation: 'apply-shared'`This will result in the page style not being able to affect external components.

You can solve this problem by modifying the style isolation configuration of the corresponding page.json:

```json
{
  "styleIsolation": "shared"
}
```

`styleIsolation` Configuration items are available in the following two modes:

- `apply-shared`: This means that the app.acss style and other settings have `shared` page or custom component styles affect the current page, but styles in the current page acss are not applied externally.
- `shared`(default): indicates that the app.acss style and other settings are `shared` the page or custom component styles will affect the current page, and the styles in the acss of the current page will also be applied externally.

Official documentation reference link:[Page Style Isolation](https://opendocs.alipay.com/mini/framework/page-acss#%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)
