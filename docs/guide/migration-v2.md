---
toc: false
---

## 升级到 v2

Ant Design Mini v1 的最后一个版本是 v1.10.6，v2 的第一个版本是 v2.11.0。

v2 版本的代码组成情况如下：
* 完全沿用了 v1 版本所有组件代码，组件的行为表现和 v1 一致
* v2 版本强制要求应用开启 component2 特性，否则将无法运行。未开启时开发者将收到错误提示 "项目未开启 component2，无法使用 Ant Design Mini 组件库"

对于开发者而言，可以按如下方法评估升级 v2 版本的影响：
* 如果您的项目之前已经开启了 component2 ，则 v1 到 v2 是完全兼容的
* 如果您的项目之前没有开启 component2，此次升级需要您打开这个特性，并测试小程序内各个自定义组件的行为表现

> component2 为支付宝小程序提供了更丰富、更稳定的生命周期方法。具体可参考文档：[自定义组件介绍](https://opendocs.alipay.com/mini/framework/custom-component-overview)

### 如何开启支付宝小程序 component2

您可以通过项目根目录的 `mini.project.json` 文件来判断项目是否打开了 component2 特性。

1. 如果文件内有 `"format": 2` 字段 ， 可以把 compileOptions.component2 配置为 true：

```json
{
  "format": 2,
  "compileOptions": {
    "component2": true
  }
}
```

2. 如果没有 format 字段，可以直接添加如下配置：

```json
{
  "component2": true
}
```

### 参考文档

- [小程序全局配置](https://opendocs.alipay.com/mini/03dbc3)
- [自定义组件介绍](https://opendocs.alipay.com/mini/framework/custom-component-overview)
