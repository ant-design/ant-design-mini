---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Container container

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Universal card container.

## When to use

When you need to host text, lists, pictures, paragraphs and other content, use Container containers to facilitate users to browse.

## Code example

<code src='../../demo/pages/Container/index'></code>

## API

The following is `Container` Parameter list for the component:

| Property        | Description             | Type         | Default Value |
| ----------- | ---------------- | ------------ | ------ |
| className   | Class Name             | string       | -      |
| headerRight | Contents on the right side of the head     | slot         | -      |
| headerInBox | Whether the title is in the container | boolean      | true   |
| style       | Style             | string       | -      |
| title       | Title             | string\|slot | -      |
