---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---
# Grid 宫格
宫格用于业务中多个子功能的导航，相比于列表的形式，具有更高的屏效。

## 代码示例
### 基本使用
<code src='../../demo/pages/Grid'></code>



## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| columns | 每行展示的元素个数，tile模式生效 | `number` | 5 | 
| gridItemLayout | item布局。垂直/水平，水平仅columns=2生效 | 'vertical' \| 'horizontal' | 'vertical' | 
| items | 内容文字 | [GridItem](#griditem)[] | - | 
| mode | 样式类型，平铺/滑动  | 'tile' \| 'scroll' | 'tile' | 
| paginationFillColor | 分页符背景色，scroll模式生效 | `string` | - | 
| paginationFrontColor | 分页符颜色，scroll模式生效 | `string` | - | 
| style | 样式 | `string` | - |
| onTap | 点击每个元素触发 | (item: [GridItem](#griditem) ) => void |
| onFirstAppear | 当前元素首次可见面积达到50%时触发 | (item: [GridItem](#griditem) ) => void |


#### GridItem
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| description | 文字 | `string` | - |
| icon | 图标，支持图片和[Icon](./Icon)| `string` | - |
| iconStyle | 图标类型，优先级高于grid | 'normal' \| 'circle' | - |
| title | 标题 | `string` | - |
