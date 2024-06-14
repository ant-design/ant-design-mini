---
toc: false
---

## 贡献指南

### 1. 克隆代码

代码仓库: https://github.com/ant-design/ant-design-mini/

```bash
$ git clone git@github.com:ant-design/ant-design-mini.git
```

### 2. 安装依赖

```bash
$ npm i
```

### 3. 启动项目编译

运行 `dev` 命令将源码编译到 `compiled` 目录下。

```bash
$ npm run dev
```

### 4. 使用 IDE 编辑

#### 在微信小程序开发者工具中运行

直接使用微信开发者工具打开项目的根目录。

打开项目后，进入微信目录并安装依赖：

```bash
$ cd compiled/wechat
$ npm i
```

安装好依赖后，点击微信开发者工具中的菜单栏：“工具 --> 构建 npm”。构建完成后，项目就可以正常运行了。

#### 在支付宝小程序开发者工具中运行

直接使用支付宝小程序开发者工具打开项目根目录即可运行。

### 5. 预览文档

```bash
$ npm run dev:doc
```

### 6. Commit 规范

提交 commit 时，需要遵循以下原则：

- 最小化代码变更：保证每个 commit 的逻辑独立且原子化。即使变动只有 1 行代码，也应该独立 commit；
- 遵循 [Conventional Commits 原则](https://www.conventionalcommits.org/zh-hans/v1.0.0/)，避免无意义的 Commit Message。代码提交时会有 Commit Message 格式校验，通常你会大量使用：
  1. `feat(scope): xxx` 来描述一个 feature 的 commit；
  2. `fix(scope): xxx` 来描述一个 bug fixes 的 commit；
  3. `chore(scope): xxx` 来描述与 feature 和 bug fixes 无关的小调整；
- 提及 issue：如果改动与 issue 相关，在 Commit Message 中请注明 issue 号，例如：`fix(scope): [#1] xxxxxx`。

## Ant Design Mini 的工程方案

### 函数式组件

从 v2 版本开始，我们逐步采用“React 函数式组件”开发模式来开发小程序自定义组件，背后依托 [functional-mini](https://github.com/ant-design/functional-mini) 这个 SDK。如日历组件（参见 [Calendar/index.ts](https://github.com/ant-design/ant-design-mini/blob/master/src/Calendar/index.ts)）。

[functional-mini](https://github.com/ant-design/functional-mini) 作为运行时 SDK，接管小程序的逻辑层代码，但并不影响视图层，为我们在项目架构复杂度和编码习惯上带来平衡。借此，函数式组件的基本特性得以运用，提升代码可维护性，如数据加工逻辑组装、hooks 逻辑复用等。

欢迎你一同参与 Ant Design Mini 函数式组件开发，探索更佳的小程序工程形态。

### 使用 tsx 语法编写视图层

我们使用 tsx 语法编写视图层。编译器解析 tsx 语法后，生成小程序视图层代码。这意味着：

- 可以用 import 语法引入其他组件，享有自定义组件类型提示：

```tsx | pure
import AntButton from '../../../src/Button/index.axml';

<AntButton type="primary" onTap="handleTap">
  主要按钮
</AntButton>;
```

- 编写一份代码，同时生成支付宝与微信小程序视图层代码：

```tsx | pure
export default ({ a, b }: TSXMLProps<Props>) => (
  <View>
    {a && <Text>a</Text>}
    {a && b && <Text>a & b</Text>}
    {a ? <Text>a</Text> : <Text>!a</Text>}
    {<Text class={a ? '1' : '2'}></Text>}
    <Text class={`1 ${a ? '1' + '2' : '2'} 2`}></Text>
  </View>
);
```

微信小程序：

```xml
<view>
  <text wx:if="{{a}}">a</text>
  <text wx:if="{{a && b}}">a & b</text>
  <text wx:if="{{a}}">a</text>
  <text wx:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
```

支付宝小程序：

```xml
<view>
  <text a:if="{{a}}">a</text>
  <text a:if="{{a && b}}">a & b</text>
  <text a:if="{{a}}">a</text>
  <text a:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
```
