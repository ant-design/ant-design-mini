---
toc: true
---

## 在微信小程序中使用（beta）

从 Ant Design Mini v2.12 版本开始，我们改造了部分组件的工程实现，以适配微信小程序。目前，这套能力处于 Beta 测试阶段，相关的 API 和组件列表可能会发生变动。

以下以 Button（按钮组件）为例，讲解如何在微信小程序中使用 antd-mini。

### 1. 安装依赖

```shell
# 安装依赖
npm i antd-mini --save
```

上述命令将帮助您在项目中安装 antd-mini 的依赖。

### 2. 构建 npm

依赖安装完成后，请在微信开发者工具菜单栏中选择：“工具” -> “构建 npm”。

### 3. 在项目中引用组件

请在页面配置的 `usingComponents` 字段中，按照以下示例正确引用 antd-mini 的组件：

```diff
{
  "usingComponents": {
+   "ant-button": "antd-mini/Button/index",
  }
}
```

引用时请注意，组件路径的大小写需要与实际组件严格一致，否则可能导致报错。

### 4. 在页面中使用组件

在页面上，您可如下使用 antd-mini 提供的按钮组件：

```diff
+   <ant-button type="primary" bind:tap="handleTap">主要按钮</ant-button>
```

同时，不要忘记在对应页面的 `.js` 文件中添加处理点击事件的方法：

```diff
Page({
+   handleTap: function (e) {
+      wx.showToast({
+            title: '点击按钮',
+       });
+   },
});
```

## 已适配的组件列表

以下是 antd-mini 中已经适配微信小程序的组件列表，您可以直接在项目中使用这些组件。

<code src="../components/wechat-component.tsx" inline="true"></code>

## 参考文档

若需了解更多详情，可参考微信小程序关于 npm 支持的官方文档：

[微信小程序文档：npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)