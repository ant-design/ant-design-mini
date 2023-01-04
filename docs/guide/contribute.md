---
toc: false
---

## 贡献指南

#### 1. 克隆代码

#### 2. 安装依赖
```
$ npm i
```

#### 3. 使用IDE打开

#### 4. 文档编辑

```
$ npm run dev
```
#### 4. Commit 规范
开发过程中，提交 commit 时，需要遵循以下原则：

- 最小化代码变更：保证每个 commit 的逻辑独立、原子化。一个 commit 只做一件事，哪怕这件事只改了 1 行代码，你也应该独立 commit 这次变更；
- 遵循 [Conventional Commits 原则](https://www.conventionalcommits.org/zh-hans/v1.0.0/)：避免没有意义、看不懂的 Commit Message 引入，并且在代码提交的时候会有 Commit Message 格式校验。一般情况下，你会大量的使用到：
  1. 使用 feat(scope): xxx 来描述一个 feature 的 commit；
  2. 使用 fix(scope): xxx 来描述一个 bug fixes 的 commit；
  3. 使用 chore(scope): xxx 来来描述一个无关 feature 和 bug fixes 的小调整；
- issue：如果改动与 issue 相关，请在 Commit Message 中带上 issue 参数，如：fix(scope): [#1] xxxxxx；
