---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---
# Checklist 可勾选列表
列表的勾选操作
## 何时使用
- 在一组列表项中选择一个或多个
- 可勾选列表的使用需要默认至少勾选一项，方便用户了解列表是可以勾选的

## 代码示例
### 基本使用
<code src='../../demo/pages/Checklist'></code>

## 属性

| 属性 |  说明  | 类型 | 必填 |默认值|
| -----|-----|-----|-----|-----|
| value | 选中数据 | string  &#124; number (string  &#124; )[] |  否 | - |
| options | ChecklistItem 数据，配置每一列的选项 | ChecklistItem[] |否| [] |
| multiple |  是否支持多选  | boolean | 否 | false|
| className |  类名  | string| 否 | - |

## ChecklistItem
| 属性 |  说明  | 类型 |  必填  |默认值  |
| -----|-----|-----|-----|-----|
| title | 标题 | string|是| - |
| value |  值 | string &#124; value |是 | - |
| image |  图片 | string | 否 | -|
| description |  描述 | string | 否 | -|
| disabled |  是否禁用 | boolean| 类名 | false |
| readOnly |  是否只读 | boolean| 类名 | false |


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中项发生变化，触发回调 | (value: string&#124; number&#124; [], column: ChecklistItem) => void |

## 插槽
| 名称 | 说明 | 类型 |
| -----|-----|-----|
| content | CheckListItem自定义样式 | 作用域插槽，接收选中的item参数 |
| icon | 自定义选中Icon |  - |


## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-checklist | 可勾选列表样式 |
| amd-checklist-item-content| 可勾选列表内容样式 |
| amd-checklist-item-text | 可勾选列表内容标题样式 |
| amd-checklist-item-image | 可勾选列表内容图片样式 |
| amd-checklist-item-text-description | 可勾选列表内容描述样式 |
| amd-checklist-item-check-icon | 可勾选列表内容选中Icon样式 |
