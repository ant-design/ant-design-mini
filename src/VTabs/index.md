---
nav:
  path: /components
group:
  title: 导航
  order: 3
toc: false
---

# VTabs

纵向选项卡，内部配合 VTabItem 使用。

## 注意事项
- 目前仅支持一个页面中使用一次 **VTabs** 组件；

## 代码示例

<code src='../../demo/pages/VTabs'></code>

## API

### 属性

#### VTabs
    
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| index | number | 否 | 0 | 当前激活的索引 |
| className | string | 否 | - | 类名 |

### VTabsItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tab | {title: string; disabled?: boolean, badge?: {type: 'dot' &verbar; 'number' &verbar; 'text', text: number | string }}[] | 是 | - | 每一项 tab 内容 |
| className | string | 否 | - | 类名 |

### 事件

#### VTabs
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 面板切换时候，触发回调 |(index: number) => void|

### 插槽
### VTab
| 名称 | 说明 | 类型 |
| title | 自定义标题内标题样式 | 作用域插槽 |
| icon | 自定义标题内图标样式 | 作用域插槽 |

### 样式类


#### VTabs
| 类名 | 说明 |
| -----|-----|
| amd-vtabs | 整体样式 |
| amd-vtabs-bar | 左侧标题区域样式 |
| amd-vtabs-bar-scroll-view |  左侧标题区域样式 |
| amd-vtabs-bar-item-wrap | 左侧标题样式 |
| amd-vtabs-bar-item | 左侧标题样式 |
| `amd-vtabs-bar-item-active` | `标题激活状态样式` |
| amd-vtabs-bar-item-disabled | 标题禁用状态样式 |
| amd-vtabs-bar-item-title | 标题内 title 的样式 |
| amd-vtabs-bar-item-count | 标题内 badge 的样式 |
| amd-vtabs-bar-item-icon | 标题内 icon 插槽的样式 |
| amd-vtabs-content | 右侧内容区域样式 |
| amd-vtabs-content-slides| 右侧单个内容区域样式 |


#### VTabItem
| 类名 | 说明 |
| -----|-----|
| amd-vtabs-item | 整体样式 |


<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4)  {
    width: 50px
} 
.__dumi-default-layout-content article table:nth-of-type(4) th:nth-of-type(2)  {
    width: 300px
} 
</style> 
