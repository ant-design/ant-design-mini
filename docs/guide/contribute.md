---
toc: false
---

## 贡献指南

#### 1. 克隆代码
``` bash
git clone 
```

项目目录如下：

``` bash
├── CHANGELOG.md
├── CONTRIBUTE.md
├── LEGAL.md
├── README.md
├── babel.config.js
├── config                  # umi 配置文件
├── demo                    # antd-mini demo 小程序文件夹
│   ├── Tag
│   │   ├── index.axml      # 组件 axml 文件
│   │   ├── index.less      # 组件 less 文件
│   │   ├── index.ts        # 组件 ts 文件
│   │   └── index.json      # 组件 json 文件
│   └── ...
├── docs                    # umi 静态站点文件
├── mini.project.json       
├── package-lock.json
├── package.json
├── plugin
├── scripts
├── src                     # antd-mini 组件源码
│   ├── Tag
│   │   ├── index.axml      # 组件 axml 文件
│   │   ├── index.less      # 组件 less 文件
│   │   ├── index.ts        # 组件 ts 文件
│   │   ├── index.json      # 组件 json 文件
│   │   ├── index.md        # 组件文档
│   │   ├── props.d.ts      # 组件 props 类型
│   │   ├── props.js        # 组件 props 默认值
│   │   └── variable.less   # 组件 less 变量文件
│   └── ...
├── tsconfig.json
└── typings.d.ts
```
<br>

#### 2. 安装依赖
``` bash
$ npm i
```

<br>

#### 3. 本地开发

``` bash
$ npm run dev
```

- 输入指令后，控制台输出如下所示。其中组件本地开发能力由 [minidev](https://opendocs.alipay.com/mini/02q17h) 提供
- 组件库静态站点及文档开发由 [umi](https://umijs.org) 提供
- src 目录下编写的组件可以直接在 demo 目录中使用、验证
- src 目录下文件夹名称同组件名称
- 在编写 less 文件时，使用 `@rpx` 为像素单位，以便编译成 px 版本与 rpx 版本的产物

<img src="https://gw.alipayobjects.com/mdn/rms_e06820/afts/img/A*B97fQaXZUawAAAAAAAAAAAAAARQnAQ" width="800" alt="dev" />

#### 4. 文档编写
约定每个组件的文档都位于 src 目录下各组件文件夹的中，名称为 index.md。index.md 中包含组件基本信息、demo、API 信息、CSS 变量信息、组件样式类信息。通过下方命令，即可为组件库自动生成文档：

``` bash
$ npm run test:markdown
```

其中，大部分文档信息会分析 AXML/props.d.ts/less 文件自动生成，因此需要遵守如下开发规范：

1. 为每个组件编写类型与默认值，即，在组件中的 props.d.ts 文件中声明类型，props.js 文件中声明组件属性的默认值；
2. 工具只能解析 CSS 变量有哪些，但是变量对应的用途，需要人工补充；
3. 同 CSS 变量，组件的样式类的具体用途也需要人工补充；
4. demo 信息需要人工补充；

<br>

#### 5. Commit 规范
开发过程中，提交 commit 时，需要遵循以下原则：

- 最小化代码变更：保证每个 commit 的逻辑独立、原子化。一个 commit 只做一件事，哪怕这件事只改了 1 行代码，你也应该独立 commit 这次变更；
- 遵循 [Conventional Commits 原则](https://www.conventionalcommits.org/zh-hans/v1.0.0/)：避免没有意义、看不懂的 Commit Message 引入，并且在代码提交的时候会有 Commit Message 格式校验。一般情况下，你会大量的使用到：
  1. 使用 feat(scope): xxx 来描述一个 feature 的 commit；
  2. 使用 fix(scope): xxx 来描述一个 bug fixes 的 commit；
  3. 使用 chore(scope): xxx 来来描述一个无关 feature 和 bug fixes 的小调整；
- issue：如果改动与 issue 相关，请在 Commit Message 中带上 issue 参数，如：fix(scope): [#1] xxxxxx；
