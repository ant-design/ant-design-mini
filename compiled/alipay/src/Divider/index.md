---
nav:
  path: /components
group:
  title: 信息展示
toc: 'content'
---

# Divider 分割线

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 代码示例
<code src='pages/Divider/index'></code>

## API

| 属性       | 说明                    | 类型         | 默认值        |
| ---------- | ----------------------- | ------------ | ------------- |
| className  | 根节点类名              | string       | -             |
| direction  | 分割线方向，可选 `horizontal` `vertical` | string | `horizontal` |
| lineColor  | 分割线颜色              | string       | -             |
| lineHeight | 分割线高度，仅当 `direction` 为 `horizontal` 时生效，单位为 `px` | number  | - |
| lineType   | 分割线类型，可选 `solid` `dashed` `dotted`   | string | - |
| lineWidth  | 分割线宽度，仅当 `direction` 为 `vertical` 时生效，单位为 `px`  | number | - |
| style      | 样式                    | string       | -             |
| textClassName | 分割线文字类名      | string       | -             |
| textPosition | 分割线文字位置，可选 `left` `center` `right` | string | `center` |
| textStyle    | 分割线文字样式      | string       | -             |
| text         | 分割线文字          | string \| slot | -           |
