---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---
# Steps 步骤条
引导用户按照流程完成任务的导航条
## 何时使用
当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务
## 代码示例
### 基本使用
<code src='../../demo/pages/Steps'></code>


## 属性
  
#### Steps
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| index |   当前步骤, 受控 | number | 0 | 
| direction | 方向 | 'horizontal' &verbar; 'vertical' | 'horizontal' |
| uid | 当页面有多个Steps时需传入，`必须页面唯一`，与内部的 StepItem 组件的 uid 一致 | string | - |
| className | 类名 | string | - |
    
#### StepItem
    
| 属性 |   说明 | 类型  | 默认值 |
| -----|-----|-----|-----|
| index |  标记当前是第几步，必须按顺序递增`必填` | number | - |
| title | 标题`必填` |  string &verbar; slot | - |
| desc | 补充信息 | string &verbar; slot | - |
| fail | 是否失败步骤 | boolean | false |
| icon | 图标，横向和纵向都有各自的默认图标 | string &verbar; slot  | - |
| activeIcon | 激活步骤图标，横向和纵向都有各自的默认图标  | string &verbar; slot | - |
| failIcon | 失败步骤图标，横向和纵向都有各自的默认图标  | string &verbar; slot | - |
| uid |  当页面有多个Steps时需传入，`必须页面唯一`，与外部的 Steps 组件的 uid 一致  | string | - |
| className |  类名  | string | - |
  
## 插槽

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