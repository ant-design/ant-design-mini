---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
---

# Icon 图标

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

语义化的矢量图形。

## 何时使用

当需要使用图形来对基础操作功能进行隐喻呈现，并给予用户正确、友好且清晰的操作指引时，可以使用 Icon 图标。

## 图标列表

搜索并查看图标，点击图标可进行复制。

<Icon />

## 代码示例

<code src='pages/Icon/index' noChangeButton></code>


## API

| 属性       | 说明                       | 类型                       | 默认值 |
| :--------- | :------------------------- | :------------------------- | :----- |
| className  | 类名                       | string                     | -      |
| style      | 样式                       | string                     | -      |
| type       | 图标的类型                 | string                     | -      |
| catchTap   | 点击图标时触发的回调函数   | (e: Event) => void         | -      |
| onTap      | 点击图标时触发的回调函数   | (e: Event) => void         | -      |
