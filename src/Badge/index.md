---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: 'content'
---

# Badge 徽标

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

徽标，显示红点、数字或文字。用于提醒用户，有待处理的事项或者新的更新数量。

## 何时使用
当需要在右上角展示数字、文字或小红点时使用。适合于提示产品化的新消息、功能或服务等内容，通过显眼的视觉形式吸引用户注意，并促使其进行相关操作。

## 代码示例
<code src="pages/Badge/index"></code>

## API

| 属性      | 说明                                 | 类型                 | 默认值       |
| --------- | ------------------------------------ | -------------------- | ------------ |
| bgColor   | 自定义背景色，CSS 色值              | string               | -            |
| className | 组件根节点的类名                     | string               | -            |
| offsetX   | 水平方向偏移量      | string               | '-50%'       |
| offsetY   | 垂直方向的偏移量    | string               | '-50%'       |
| position  | 徽标相对于容器的位置，选项包括：`top-left`、`top-right`、`top-center`、`left`、`right`、`bottom-left`、`bottom-center` 和 `bottom-right` | string | `top-right` |
| stroke    | 徽标是否带有描边                    | boolean              | false        |
| style     | 自定义样式                           | object               | -            |
| text      | 徽标内容，为空代表仅展示红点；可以是数字或文字；若是数字且超过 99，则显示为 `...` | string \| number \| slot     | -            |
| type      | 徽标类型，选项包括：`dot`（红点）、`number`（数字类型，超过 99 会自动转换）、`text`（文字气泡）和 `bubble`（气泡形态，带有箭头） | string | `dot`       |
