## 架构介绍

为了让 ant design mini 同时支持微信与支付宝, 我们选择了 gulp 作为预编译的工具，把一份源码编译到两个平台。

1.  各个平台的小程序大致相同，但是实际开发时候在 css , json , js 有一些差异，为了解决这个问题，我们借鉴了 c++ , 选择了条件编译的手段。

在编译时候，会根据不同的条件，把代码编译到不同的平台。

```ts
/// #if ALIPAY
my.alert({
  title: '点击按钮',
});
/// #endif

/// #if WECHAT
wx.showToast({
  title: '点击按钮',
});
/// #endif
```

2. 为了提高视图层代码的开发体验，我们选取了 tsx 的子集作为视图层的开发语言，我们使用静态分析的方式，把 tsx 编译到微信的 wxml 以及支付宝的 axml。

编译前的代码

```jsx
import { Text } from 'tsxml';
import { IconProps } from './props';

export default ({ type, className, style, onTap, catchTap }: IconProps) => (
  <Text
    class={`ant-icon ant-icon-${type} ${className ? className : ''}`}
    style={style}
    /// #if ALIPAY
    onTap={onTap ? 'onTap' : ''}
    catchTap={catchTap ? 'catchTap' : ''}
    /// #endif
  ></Text>
);
```

编译后的代码

```
<text
  class="ant-icon ant-icon-{{ type }} {{ className ? className : '' }}"
  style="{{ style }}" />
```

最终的目录结构是这样的

```
tsxml/src # 真正的源码
src/ # 支付宝端的源码
wechat/src # 微信端的源码
```

## 迁移到 tsx

我们以 Avatar 组件为例，我来讲一下如何把组件迁移到 tsx。

### 1. 迁移组件源码

首先需要移植组件， 执行 `npm run move src/Avatar` 把 Avatar 的代码拷贝到 tsxml 文件夹下。 脚本除了把组件拷贝到 tsxml 文件夹下，还会生成一段 prompt 文档写入到剪切板。

如果你有 chatgpt，可以把剪切板内容粘贴到 chatgpt，让 gpt 帮我把 axml 转换为 tsx。

### 2. 迁移 demo 源码

移植完组件后，还需要移植 demo 页面 , 执行 `npm run move demo/pages/Avatar` 把 Avatar 的 demo 移植到 tsxml 文件夹下。

### 3. 调试迁移后的效果

因为支付宝和微信的差异，代码迁移完以后往往都需要微调一下样式和事件处理的代码。我们可以运行 `tnpm run dev` , 把 tsxml 文件夹下的代码分别编译到支付宝与微信。

你需要同时用支付宝开发者工具与微信开发者工具打开项目，就可以看到迁移后的项目。 你需要修复所有出现的报错，直到微信和支付宝的表现相同。
