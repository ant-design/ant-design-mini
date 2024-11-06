---
order: 3
toc: true
---

# Use in uni-app

Here is a button component (Button) as an example to explain how to use antd-mini in uni-app projects.

### Create Project Path

#### Referenced in Alipay applet

Create a new directory under the project path `mycomponents`(must be this name and cannot be modified), and install antd-mini dependencies in this directory.

Reference command:

```shell
mkdir mycomponents
cd mycomponents

# 安装依赖
npm init -y
npm i antd-mini --save
```

After the operation is completed, the project structure should be as follows:

```diff
 .
  ├── App.vue
  ├── index.html
  ├── main.js
  ├── manifest.json
+ ├── mycomponents
+ │   ├── node_modules
+ │   │   ├── antd-mini
+ │   │   │   ├── es
+ │   │   │   │   ├── Button
+ │   │   │   │   ├── Calendar
+ │   │   │   ├── package.json
  ├── pages
  ├── pages.json
  ├── static
  └── unpackage
```

After the dependency is installed, you can modify pages.json in `page.style` Add under Configuration `usingComponents`。
配置时需要注意路径大小写和实际组件一致，否则可能引发报错。

```diff
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
+       // #ifdef MP-ALIPAY
+       "usingComponents": {
+         "ant-button": "/mycomponents/node_modules/antd-mini/es/Button/index"
+       }
+       // #endif
        "navigationBarTitleText": "uni-app"
      }
    }
  ],
  ...
}
```

### Cited in WeChat applet

Create a new directory under the project path `wxcomponents`(must be this name and cannot be modified), and install antd-mini dependencies in this directory.

Reference command:

```shell
mkdir wxcomponents
cd wxcomponents

# 安装依赖
npm init -y
npm i antd-mini --save
```

After the operation is completed, the project structure should be as follows:

```diff
 .
  ├── App.vue
  ├── index.html
  ├── main.js
  ├── manifest.json
  ├── pages
  ├── pages.json
  ├── static
  └── unpackage
+ ├── wxcomponents
+ │   ├── node_modules
+ │   │   ├── antd-mini
+ │   │   │   ├── es
+ │   │   │   │   ├── Button
+ │   │   │   │   ├── Calendar
+ │   │   │   ├── package.json
```

After the dependency installation is completed, click "run"> "run to applet simulator"> "wechat applet developer tool" in the uni-app to compile the project into wechat applet.

Use the WeChat applet developer tool to open the uni-app compiled WeChat applet. After that, in the WeChat applet developer tool, click "Tools"> "Build npm".

At this point the project structure should be as follows:

```diff
.
  ├── mp-weixin
+ │   ├── wxcomponents
+ │   │   ├── node_modules
+ │   │   │   ├── antd-mini
+ │   │   │   miniprogram_npm
+ │   │   │   │   ├── antd-mini
+ │   │   │   │   │   ├── Button
```

Modify pages.json, in `page.style` Add under Configuration `usingComponents`. When referencing components under the wxcomponents/miniprogram_npm, the configuration should also be aware that the case of the path is consistent with that of the actual component.

```diff
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
+       // #ifdef MP-WEIXIN
+       "usingComponents": {
+         "ant-button": "/wxcomponents/miniprogram_npm/antd-mini/Button/index"
+       }
+       // #endif
        "navigationBarTitleText": "uni-app"
      }
    }
  ],
  ...
}
```

## Use in page

Can be used directly in the page.

```diff
+ <ant-button type="default" @tap="handleTap">次要按钮</ant-button>
```

```diff
<script>
export default {
  methods: {
+   handleTap: function () {
+     console.log('this is handle tap');
+   }
  }
}
</script>
```

## Reference Documentation

- [uni-app official website: applet custom component support](https://zh.uniapp.dcloud.io/tutorial/miniprogram-subject.html)
- [Example of using uniapp antd-mini](https://github.com/DiamondYuan/antd-mini-uniapp)
