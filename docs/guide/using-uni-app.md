---
toc: true
---

## 在 uni-app 中使用

这里以按钮组件（Button) 为例，讲解如何在 uni-app 项目中使用 antd-mini

注意：在 uni-app 中使用的 antd-mini 组件只能编译到支付宝客户端。

### 1. 建立项目路径

在项目路径下新建路径 `mycomponents`（必须是这个名称，不可修改），并在此目录下安装 antd-mini 依赖

参考命令：
```shell
mkdir mycomponents
cd mycomponents

# 安装依赖
npm init -y
npm i antd-mini --save
```

操作完成后，项目结构应该是类似这样的：

```diff
 .
  ├── App.vue
  ├── index.html
  ├── main.js
  ├── manifest.json
+ ├── mycomponents
+ │   ├── node_modules
+ │   │   ├── antd-mini
+ │   │   │   ├── es
+ │   │   │   │   ├── Button
+ │   │   │   │   ├── Calendar
+ │   │   │   ├── package.json
  ├── pages
  ├── pages.json
  ├── static
  └── unpackage
```

### 2. 在项目中引用组件

修改 page.json，在 page.style 配置下新增 usingComponents。
配置时需要注意路径大小写和实际组件一致，否则可能引发报错。

```diff
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "uni-app",
+        "usingComponents": {
+          "ant-button": "/mycomponents/node_modules/antd-mini/es/Button"
+        }
      }
    }
  ],
  ...
}
```

在页面中使用即可

```diff
+ <ant-button type="default" @tap="handleTap">次要按钮</ant-button>
```

```diff
<script>
	export default {
		methods: {
+			handleTap: function () {
+				console.log('this is handle tap');
+			}
		}
	}
</script>
```


## 参考文档
[uni-app官网：小程序自定义组件支持](https://zh.uniapp.dcloud.io/tutorial/miniprogram-subject.html)