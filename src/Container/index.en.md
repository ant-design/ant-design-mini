---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Container container

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Universal card container.

## When to use

When you need to host text, lists, pictures, paragraphs and other content, use Container containers to facilitate users to browse.

## Code Sample

<code src='../../demo/pages/Container/index'></code>

## API

以下是 `Container` 组件的参数列表：

| Property        | Description             | Type         | Default Value |
| ----------- | ---------------- | ------------ | ------ |
| className   | Class Name             | string       | -      |
| headerRight | Contents on the right side of the head     | slot         | -      |
| headerInBox | Whether the title is in the container | boolean      | true   |
| style       | Style             | string       | -      |
| title       | Title             | string\|slot | -      |
