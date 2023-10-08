# 移植到微信

## 架构介绍

为了让组件库同时支持微信与支付宝，需要两个平台解决 xml 与 js 的差异。

1. 为了更好的代码提示，ant design mini 选择了 tsx 的子集作为模板语言，采用静态分析的方式，把 tsx 编译到微信的 wxml 以及支付宝的 axml。

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

2. 为了兼容微信与支付宝的 jsapi , ant design mini 选择了条件编译的手段，兼容了微信和支付宝的逻辑。

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

## 如何移植

我们以 Avatar 组件为例，我来讲一下如何把组件迁移到微信。

首先是移植组件， 执行 npm run move src/Avatar 把 Avatar 组件拷贝到 tsxml 文件夹下。 脚本除了把组件拷贝到 tsxml 文件夹下，还会生成一段 prompt 文档写入到剪切板。

如果你有 chatgpt , 可以把剪切板内容粘贴到 chatgpt ，让 gpt 帮我把 axml 转换为 tsx。 如果没有的话，可以手动把 axml 转换为 tsx。

移植完组件后，还需要移植 demo 页面 , 你可以通过 npm run move demo/pages/Avatar 把 Avatar 的 demo 移植到 tsxml 文件夹下。

代码和 demo 都移植完以后，就可以运行 tnpm run dev , 把 tsxml 文件夹下的代码分别编译到支付宝与微信。 支付宝的组件源码在项目根目录下，微信的源码目录在 wechat 目录下。

因为支付宝和微信的差异，代码迁移完以后往往都需要微调一下样式和事件处理的代码。你需要同时用支付宝开发者工具与微信开发者工具打开项目，微调代码，直到两者的表现相同。
