---
nav:
  path: /components
group:
  title: 信息展示
  order: 9
toc: 'content'
---

# Empty 空状态

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

使用场景插画来作为空状态场景的反馈提示。

## 何时使用

需要展示空状态页面或者局部空状态区块时使用。

## 代码示例

<code src='pages/Empty/index'></code>

## API

| 属性       | 说明              | 类型           | 默认值 |
| ---------- | ----------------- | -------------- | ------ |
| className  | 根节点类名        | string         | -      |
| title      | 标题文案          | string \| slot | -      |
| image      | 图片，可传入字符串作为图片地址 | string \| slot | -      |
| message    | 描述文案          | string \| slot | -      |
| style      | 样式              | string         | -      |
