---
toc: false
---

## 升级到 v2

Ant Design Mini v1 的最后一个版本是 v1.10.6，v2 的第一个版本是 v2.11.0。

v2 版本的代码组成情况如下：
* 完全继承了 v1 版本的所有组件代码，组件的行为表现与 v1 一致。
* v2 版本要求启用 `component2` 特性，否则将无法运行。如果未开启此特性，开发者将收到错误提示“项目未开启 component2，无法使用 Ant Design Mini 组件库”。

对于开发者而言，可以用下列方法评估升级到 v2 版本的影响：
* 如果你的项目之前已经启用了 `component2`，那么从 v1 升级到 v2 是完全兼容的。
* 如果你的项目以前未启用 `component2`，那么本次升级需要你开启这一特性，并测试小程序的各个自定义组件行为。

> `component2` 为支付宝小程序提供了更多更稳定的生命周期方法。具体信息请参考：[自定义组件介绍](https://opendocs.alipay.com/mini/framework/custom-component-overview)

### 如何开启支付宝小程序的 `component2`

可通过项目根目录下的 mini.project.json 文件来判断项目是否已开启了 `component2` 特性。

1. 如果文件包含 `"format": 2` 字段，将 `compileOptions.component2` 设置为 `true`：

```json
{
  "format": 2,
  "compileOptions": {
    "component2": true
  }
}
```

2. 如果没有 `format` 字段，则直接添加以下配置：

```json
{
  "component2": true
}
```

你还可以使用小程序开发者工具（IDE）的详情面板来完成配置，配置路径：在 IDE 的“详情 > 项目配置”中勾选“启用 component2 编译”。

![](https://mdn.alipayobjects.com/huamei_384ylk/afts/img/A*MvGAQoOLfUQAAAAAAAAAAAAADk97AQ/original)

### 参考文档

- [小程序全局配置](https://opendocs.alipay.com/mini/03dbc3)
- [自定义组件介绍](https://opendocs.alipay.com/mini/framework/custom-component-overview)