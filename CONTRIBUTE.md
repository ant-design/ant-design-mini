### 代码克隆

``` bash
git clone git@github.com:ant-design/ant-design-mini.git
```

### 目录结构

首先，初步了解目录结构的组成

``` bash
├── CHANGELOG.md          # 更新日志
├── demo                  # 示例小程序
│   ├── app.acss
│   ├── app.js
│   ├── app.json
│   ├── mini.project.json
│   ├── package.json
│   └── pages
│       ├── Avatar
│       ├── Badge
│       └── ...
├── src                    # 组件源码
│   ├── Avatar
│   │   ├── index.axml     # 组件 axml 文件
│   │   ├── index.json     # 组件 json 文件
│   │   ├── index.less     # 组件 less 文件
│   │   ├── index.ts       # 组件 ts 文件
│   │   └── index.md       # 组件文档
│   ├── Badge
│   │   └── ...
│   └── ...
└── tsconfig.json
```

### 投入开发

*** Tip：请遵循 git flow，正式开发时，新建 feat/xxx 或 fix/xxx 分支进行开发。 ***

```
// 安装依赖
$ npm i
```

### 效果预览

1. 使用IDE打开进行组件开发。

2. 对于文档开发，使用
```
$ npm run dev
```

### Commit 规范

开发过程中，提交 commit 时，需要遵循以下原则：

1. 最小化代码变更：保证每个 commit 的逻辑独立、原子化。一个 commit 只做一件事，哪怕这件事只改了 1 行代码，你也应该独立 commit 这次变更；

2. 遵循 Conventional Commits 原则：避免没有意义、看不懂的 Commit Message 引入，一般情况下，你会大量的使用到：
  a. 使用 feat(scope): xxx 来描述一个 feature 的 commit；
  b. 使用 fix(scope): xxx 来描述一个 bug fixes 的 commit；
  c. 使用 chore(scope): xxx 来来描述一个无关 feature 和 bug fixes 的小调整；

3. issue：如果改动与 issue 相关，请在 Commit Message 中带上 issue 参数，如：fix(scope): [#1] xxxxxx；
