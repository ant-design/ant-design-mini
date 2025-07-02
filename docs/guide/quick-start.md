---
order: 1
toc: true
---

# 在支付宝小程序中使用

这里介绍如何在原生支付宝小程序中安装使用 Ant Design Mini 组件库。

### 1. 安装依赖

```shell
$ npm i antd-mini --save
```

### 2. 开启 component2

从 v2.11.0 版本起，需要小程序开启 `component2`。开启后，小程序自定义组件会使用新的生命周期运行模式。

开启方法：在 IDE 中的“详情 > 项目配置”中，勾选“启用 component2 编译”。

详情可以参考[升级到 v2](https://2x-mini.ant.design/guide/migration-v2)。

### 3. 在页面 JSON 文件中引入组件

```json
{
  "usingComponents": {
    "ant-button": "antd-mini/es/Button/index"
  }
}
```

### 4. 在 AXML 文件中使用

```xml
<ant-button>我是一个按钮</ant-button>
```
