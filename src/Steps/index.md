---
title: Steps
group:
  path: /display
  title: 数据展示
---
# Steps
步骤条，分步展示当前进展，配合 `StepItem` 组件使用
## 代码示例
<code src='../../demo/pages/Steps'></code>

## API
### 属性
  
#### Steps
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| index | number | 否 | 0 | 当前步骤, 受控 |
| direction | `'horizontal'` &verbar; `'vertical'` | 否 | "horizontal" | 方向 |
| className | string | 否 | - | 类名 |
    
#### StepItem
    
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| index | number | 是 | - | 小程序必填，用于标记当前是第几步，必须按顺序递增 |
| title | `string` &verbar; `slot` | 是 | - | 标题 |
| desc | `string` &verbar; `slot` | 否 | - | 补充信息 |
| fail | boolean | 否 | false | 是否失败步骤 |
| icon | `string` &verbar; `slot` &verbar; `string` | 否 | - | 图标，横向和纵向都有各自的默认图标 |
| activeIcon | `string` &verbar; `slot` &verbar; `string` | 否 | - | 激活步骤图标，横向和纵向都有各自的默认图标 |
| failIcon | `string` &verbar; `slot` &verbar; `string` | 否 | - | 失败步骤图标，横向和纵向都有各自的默认图标 |
| className | string | 否 | - | 类名 |
  
### 插槽

#### StepItem
| 名称 | 说明 |
| ----|----|
| title | 标题内容插槽 |
| desc | 补充内容插槽 |
| icon | 默认图标插槽 |
| activeIcon | 激活步骤图标插槽 |
| failIcon | 失败步骤图标插槽 |

## 样式类
#### Steps

| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-steps            | 整体样式         |
| amd-steps-horizontal   | 整体样式  |
| amd-steps-vertical  | 整体样式  |

#### StepItem

| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-steps-item            | 整体样式         |
| amd-steps-item-horizontal      | 整体样式  |
| amd-steps-item-vertical  | 整体样式   |
| amd-steps-item-line  | 步骤条样式 |
| amd-steps-item-line-fail  | 错误步骤条样式 |
| amd-steps-item-icon  | 图标样式 |
| amd-steps-item-text  | 文字区域样式 |
| amd-steps-item-title  | 标题样式 |
| amd-steps-item-desc  | 补充说明样式 |

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
</style> 