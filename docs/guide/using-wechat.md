---
toc: true
---

## 在 微信小程序 中使用

目前 antd-mini 部分组件已经支持在微信小程序中使用，后续会逐步支持更多组件。

这里以按钮组件（Button) 为例，讲解如何在微信小程序中使用 antd-mini。

### 1. 安装依赖

```shell
# 安装依赖
npm i antd-mini --save
```

安装好依赖以后，点击开发者工具中的菜单栏：工具 --> 构建 npm

### 2. 在项目中引用组件

修改页面配置的 usingComponents 字段, 使用 antd-mini 的组件。

配置时需要注意路径大小写和实际组件一致，否则可能引发报错。

```diff
{
  "usingComponents": {
++  "ant-button": "antd-mini/Button/index",
  }
}

```

### 3. 在页面中使用即可

```diff
+   <ant-button type="primary" bind:tap="handleTap"> 主要按钮 </ant-button>
```

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

<code src="../components/wechat-component.tsx" inline="true"></code>

## 参考文档

[微信小程序文档：npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
