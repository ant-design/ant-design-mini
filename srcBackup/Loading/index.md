---
nav:
  path: /components
group:
  title: 反馈
toc: 'content'
---

# Loading 加载

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

用于提示局部或页面在加载中。

## 代码示例
<code src='pages/Loading/index' noChangeButton></code>

## API

| 属性       | 说明                                            | 类型   | 默认值   |
| ---------- | ----------------------------------------------- | ------ | -------- |
| className  | 根节点类名                                      | string | -        |
| color      | 加载时的颜色，当 type 为 `spin` 时，只支持十六进制颜色码 | string | `#fff`   |
| size       | 加载图标尺寸，当 type 为 `spin` 时生效。可选 `small`、`medium`、`large`、`x-large` | string | `medium` |
| style      | 根节点 style                                    | string | -        |
| type       | 加载样式类型，可选 `spin`、`mini`              | string | `spin`   |
