---
order: 9
toc: true
---

# Contribution Guide

### 1. Clone code

Code Repository: https://github.com/ant-design/ant-design-mini/

```bash
$ git clone git@github.com:ant-design/ant-design-mini.git
```

### 2. Install dependencies

```bash
$ npm i
```

### 3. Start project compilation

Run `dev` command to compile the source code `compiled` directory.

```bash
$ npm run dev
```

### 4. Edit with IDE

#### Run in WeChat applet developer tool

Directly use WeChat developer tools to open the root directory of the project.

After opening the project, enter the WeChat directory and install dependencies:

```bash
$ cd compiled/wechat
$ npm i
```

After installing the dependency, click the menu bar in WeChat Developer Tool: "Tools --> Build npm". After the build is complete, the project is ready to run normally.

> If it is found that it cannot run normally, it may be that WeChat development tools build npm and package the dependency into a file, resulting in an error due to the failure to find the reference dependency in WeChat.

> Such:`import duration from 'dayjs/plugin/duration'`After building npm,`dayjs/plugin`directory in `miniprogram_npm` lost in. need to be `dayjs/plugin` Manually copy directories `miniprogram_npm` In, can be solved.

#### Run in the Alipay applet developer tool.

Directly use the Alipay applet developer tool to open the root directory of the project to run.

### 5. Preview the document

```bash
$ npm run dev:doc
```

### 6. Commit specification

When submitting a commit, you need to follow the following principles:

- Minimize code changes: Ensure that the logic of each commit is independent and atomized. Even if the change is only 1 line of code, it should be committed independently;
- Follow [Conventional Commits principle](https://www.conventionalcommits.org/zh-hans/v1.0.0/)to avoid meaningless Commit Message. When the code is submitted, there will be a Commit Message format check, which you usually use extensively:
  1. `feat(scope): xxx` to describe a feature commit;
  2. `fix(scope): xxx` to describe the commit of a bug fix;
  3. `chore(scope): xxx` to describe small tweaks unrelated to feature and bug fixes;
- Mention issue: If the change is related to issue, please indicate the issue number in the Commit Message, for example:`fix(scope): [#1] xxxxxx`。

## Ant Design Mini Engineering Solutions

### Use Alipay axml syntax to write view layer, and can support compilation into WeChat version

- Write a code (supports conditional compilation) and generate Alipay and WeChat applet view layer code at the same time:

Source code:

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

Alipay applet:

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

micro letter small program:

```xml
<view>
  <text wx:if="{{a}}">a</text>
  <text wx:else>!a</text>
  <text class="{{a ? '1' : '2'}}"></text>
  <text class="1 {{a ? '1' + '2' : '2'}} 2"></text>
</view>
```
