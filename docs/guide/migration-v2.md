---
toc: false
---

## 升级到 v2

在 Ant Design Mini v2 中，我们引入了一项重要的变化：所有的组件都依赖小程序 component2 特性。相比于之前的模式，component2 提供了更丰富、更稳定的生命周期方法，提升了组件的可维护性。

如果您的项目之前已经开启了 component2 ，则 v1 到 v2 没有任何不兼容的改动。

您可以通过项目根目录的 mini.project.json 来判断项目是否是 component2。

1. 如果 format 为 2 ， 可以看 compileOptions.component2 是否为 true

```json
{
  "format": 2,
  "compileOptions": {
    "typescript": true,
    "less": true,
    "component2": true,
    "enableNodeModuleBabelTransform": true
  },
  "uploadExclude": ["dist/**/*"],
  "miniprogramRoot": "demo"
}
```

2. 如果没有 format 字段，可以看 component2 是否为 true

```json
{
  "component2": true
}
```

### 参考文档

- [小程序全局配置](https://opendocs.alipay.com/mini/03dbc3)
- [自定义组件介绍](https://opendocs.alipay.com/mini/framework/custom-component-overview)
