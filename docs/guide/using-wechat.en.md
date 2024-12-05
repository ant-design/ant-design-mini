---
order: 2
toc: true
---

# Used in WeChat applet

The following takes Button (button component) as an example to explain how to use antd-mini in WeChat applets.

### 1. Install dependencies

```shell
# 安装依赖
npm i antd-mini --save
```

The above commands will help you install the antd-mini dependencies in your project.

### Building npm

After the dependency installation is completed, please select "Tools"-> "Build npm" in the menu bar of WeChat Developer Tools ".

### 3. Reference the component in the project.

Please configure `usingComponents` field, refer to the antd-mini component correctly, as in the following example:

```diff
{
  "usingComponents": {
+   "ant-button": "antd-mini/Button/index",
  }
}
```

Note that the case of the component path must be the same as that of the actual component. Otherwise, an error may be reported.

### 4. Use components in the page.

On the page, you can use the button components provided by the antd-mini as follows:

```diff
+   <ant-button type="primary" bind:tap="handleTap">主要按钮</ant-button>
```

At the same time, don't forget `.js` Add a method to the file that handles the click event:

```diff
Page({
+   handleTap: function (e) {
+      wx.showToast({
+            title: '点击按钮',
+       });
+   },
});
```

## List of adapted components

The following is a list of components that have been adapted to WeChat applets in the antd-mini. You can use these components directly in the project.

<code src="../components/wechat-component.tsx" inline="true"></code>

## Reference Documentation

For more details, please refer to the official documents of WeChat applet on npm support:

[WeChat applet document: npm support](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
