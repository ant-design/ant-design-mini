---
nav:
  path: /components
group:
  title: 其他
toc: false
---

# Checklist

## 代码示例

### 基本使用
<code src='../../demo/pages/Checklist'></code>

## API 

## 属性 

#### Checklist

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |
| defaultValue | Array<string &verbar; number> | 否 | [] | 默认值 |
| multiple | boolean | 否 | false | 是否支持多选 |
| options | ChecklistItem[] | 是 | - | 可勾选列表数据配置选项内容 |

 #### ChecklistItem

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |
| description | string | 否 | - | 当前选项的描述文案 |
| disabled | boolean | 否 | false | 当前选项是否禁用 |
| image | string | 否 | - | 当前选项的图片 |
| multiple | boolean | 否 | false | 是否支持多选 |
| value | string &verbar; number | 是 | - | 当前选项的选项值 |
| readOnly | boolean | 否 | false | 当前选项是否只读 |

## 事件 

#### Checklist

| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onChange | 可勾选列表值改变时触发 | (v: Array<string &verbar; number>) => void |


## 样式类 

#### Checklist

| 类名 | 说明 |
| -----|----- |
| amd-checklist | 整体样式 |
| amd-checklist-body | 整体样式 |
| amd-checklist-item | 单行样式 |
| amd-checklist-item-content | 单行内容样式 |
| amd-checklist-item-image | 单行图片样式 |
| amd-checklist-item-text | 有图片时单行文案样式 |
| amd-checklist-item-text-no-image | 无图片时单行文案样式 |
| amd-checklist-item-text-title | 单行主标题文案样式 |
| amd-checklist-item-text-description | 单行副文案样式 |
| amd-checklist-item-text-disabled | 单行文案禁用样式 |
| amd-checklist-item-checked-disabled | 单行选中文案禁用样式 |
| amd-checklist-item-check-icon | 单行选中图标禁用样式 |
| amd-checklist-item-line | 单行分割线样式 |


