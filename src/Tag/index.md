---

nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Tag 标签

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

用于标记和分类的小标签。

## 何时使用
- 用来标记事物的属性和维度。
- 进行分类。

## 代码示例
<code src='pages/Tag/index'></code>



## API
| 属性   | 说明     | 类型            | 默认值    |
| ------ | -------- | --------------- | --------- |
| className | 类名 | string | - |
| color  | 标签颜色，内建 `primary`（蓝色）、`success`（绿色）、`warning`（黄色）、`danger`（红色） | string | `primary` |
| icon   | 图标，支持 Icon 类型和插槽 | string\|slot | - |
| style  | 样式 | string | - |
| type   | 类型，可选 `outline`、`fill`、`fill-light` | string | `fill` |
