---
nav:
  path: /components
group:
  title: 反馈
toc: 'content'
---

# Loading 加载
用于提示局部或页面在加载中。

## 代码示例
### 基本使用
<code src='../../demo/pages/Loading'></code>

## 属性 

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| className | 根节点类名 |  `string` | - | 
| color | 加载时的颜色，当 type 为 'spin' 时，只支持十六进制颜色码 | `string` | `'#999'` | 
| height | 加载图标高度，不传则默认与 size 大小一致，当 type 为 'mini' 时生效, 单位px | `number|string` | `100` | 
| loading | 是否加载中，当 type 为 'spin' 时生效 | `boolean` | `true` | 
| miniSize | 加载图标宽度，当 type 为 'mini' 时生效, 单位px | `string` | `100` | 
| size | 加载图标尺寸，当 type 为 'spin' 时生效 | `number` | 否 | `35` | 
| style | 根节点style | `string` |  - | 
| type | 加载样式类型 | `'spin' \| 'mini'` | 'spin' | 

## 插槽
| 名称 | 说明 |
| ----|----|
| indicator | 自定义加载中的指示器，type 为 'spin' 时生效 |



