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

```typescript
type IGridItem = {
    /** 标题 */
  title: string;
  /** 图标，支持图片和icon */
  icon: string;
  /** 描述 */
  desc?: string;
  /** 图标类型，优先级高于grid */
  iconStyle?: 'normal' | 'circle';
}
```
<hr />

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| items | IGridItem[] | 是 | - | 内容文字 |
| mode | 'tile' &verbar; 'scroll'  | 否 | 'tile' | 样式类型，平铺/滑动 |
| columns | number | 否 | 5 | 每行展示的元素个数，tile模式生效 |
| gridItemLayout | 'vertical' &verbar; 'horizontal' | 否 | 'vertical' | item布局。垂直/水平，水平仅columns=2生效 |
| PaginationFillColor | string | 否 | #ddd | 分页符背景色，scroll模式生效 |
| PaginationFrontColor | string | 否 | #1677ff | 分页符颜色，scroll模式生效 |
| className | string | 否 | - | 类名 |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击每个元素触发 | (item: IGridItem ) => void |


## 样式类
| 类名 | 说明 |
| ----|----|
| amd-grid | 整体样式 |
| amd-grid-tile | 平铺模式样式 |
| amd-grid-tile | 滑动模式样式 |
| amd-grid-item | 每个元素样式 |
| amd-grid-item-title | 元素标题 |
| amd-grid-item-desc | 元素描述 |
| amd-grid-item-img | 元素图片 |
| amd-grid-item-icon | 元素Icon图标 |
