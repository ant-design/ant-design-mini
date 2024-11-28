---
order: 9
toc: true
---

# 贡献指南

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

> 如果发现不能正常运行，可能是微信开发工具构建 npm ，将依赖打包成功一个文件，导致微信中引用依赖找不到而报错。

> 如：`import duration from 'dayjs/plugin/duration'`，构建 npm 之后，`dayjs/plugin`目录 在 `miniprogram_npm` 中丢失。需要将 `dayjs/plugin` 目录手动拷贝到 `miniprogram_npm` 中，可解决。

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

### 使用支付宝 axml 语法编写视图层，并能支持编译成微信版本

- 编写一份代码（支持条件编译），同时生成支付宝与微信小程序视图层代码：

源代码：

```xml
<view>
  <!-- #comments if ALIPAY -->
  <text a:if="{{a}}">a</text>
  <text a:if="{{a && b}}">a & b</text>
  <!-- #comments endif -->
  <text a:if="{{a}}">a</text>
  <text a:else>!a</text>
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

微信小程序：

```xml
<view>
  <text wx:if="{{a}}">a</text>
  <text wx:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
```
