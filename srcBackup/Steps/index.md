---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Steps 步骤条

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 代码示例

### 基本使用

<code src='pages/Steps/index'></code>

### 受控模式

<code src='pages/StepsControl/index'></code>

## API

| 属性        | 说明                               | 类型        | 默认值           |
| ----------- | ---------------------------------- | ----------- | ---------------- |
| className   | 类名                               | string      | -                |
| current     | 当前步骤                           | number      | -                |
| description | 自定义描述内容渲染，接收 index 和 value | slot        | -                |
| direction   | 方向，可选 `horizontal` 或 `vertical` | string      | `horizontal`     |
| icon        | 自定义图标渲染，接收 index 和 value | slot        | -                |
| items       | 展示项                             | [Item](#item)[] | -                |
| status      | 指定当前步骤的状态，可选 `finish` 或 `error` | string      | `finish`         |
| style       | 样式                               | string      | -                |
| title       | 自定义标题渲染，接收 index 和 value | slot        | -                |

### Item

| 属性        | 说明   | 类型   | 默认值   |
| ----------- | ------ | ------ | -------- |
| description | 内容   | string | -        |
| title       | 标题   | string | -        |
