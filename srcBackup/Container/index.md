---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Container 容器

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

通用卡片容器。

## 何时使用

当需要承载文字、列表、图片、段落等内容时，使用 Container 容器以方便用户浏览。

## 代码示例

<code src='pages/Container/index'></code>

## API

以下是 `Container` 组件的参数列表：

| 属性        | 说明             | 类型         | 默认值 |
| ----------- | ---------------- | ------------ | ------ |
| className   | 类名             | string       | -      |
| headerRight | 头部右侧内容     | slot         | -      |
| headerInBox | 标题是否在容器中 | boolean      | true   |
| style       | 样式             | string       | -      |
| title       | 标题             | string\|slot | -      |
