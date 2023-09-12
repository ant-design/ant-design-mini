---
toc: false
---

## 快速开始

### 1. 安装依赖

```
$ npm i antd-mini --save
```

<br>

### 2.开启 component2

从 2.11.0 版本开始，需要宿主应用开启 component2，开启后小程序组件会使用新的生命周期运行模式。

开启方法：在 IDE 中的 详情 > 项目配置 中，勾选 启用 component2 编译 。

详细可以看 [升级到 v2](./migration-v2.md)

### 3.在 json 文件中配置

```json
{
  "usingComponents": {
    "button": "antd-mini/es/Button/index"
  }
}
```

<br>

### 4. 在 axml 文件中使用

```html
<button>antd-mini</button>
```

## 查看示例

<code src='pages/Button/index'></code>
