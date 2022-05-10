---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# Selector 选择组
在一组选项中选择一个或多个
## 何时使用
提供多个选项供用户选择，一般在筛选和表单中使用

## 代码示例
### 基本使用
<code src='../../demo/pages/Selector'></code>



## 属性
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| value | 已选择项, items 每一项的 value, multiple=true时传value的数组 |  string &verbar; string[] | - |
| items | 可选项  | {text:string; value:string; subText: string; disabled: boolean}[] | - |
| multiple | 是否允许多选，标签栏显示的时候会显示当前单选/多选的状态  | boolean | false |
| disabled |  是否禁用 | boolean | false |
| activeItemClassName | 每一项激活时新加类名 | string| - |
| title |   标签栏标题 | string | - |
| desc |  标签栏说明 | string | - |
| className | 类名 | string | - |


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中值发生变化，触发回调 | (v: string &#124; string[]) => void |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-selector | 整体样式 |
| amd-selector-disabled | 禁用状态下的整体样式 |
| amd-selector-content | 单个选项样式 |
| amd-selector-item | 单个选项样式 |
| amd-selector-item-active | 激活状态下单个样式 |
| amd-selector-item-disabled | 禁用状态下单个选项样式 |
| amd-selector-item-text | 文本样式 |
| amd-selector-item-subtext | 副文本样式 |
| amd-selector-item-badge-active | 激活状态下徽标样式 |