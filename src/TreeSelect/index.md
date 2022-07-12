---
nav:
  path: /components
group:
  title: 信息输入
toc: false
---

# TreeSelect 树形选择

蒙层式两级或三级树形选择器

## 何时使用

当需要进行多级联动数据选择选择时使用，如地址选择、经营类目选择等

## 代码示例

### 基本使用

<code src='../../demo/pages/TreeSelect'></code>

## 属性 

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| options | TreeSelectOption[] | 是 | [] | 树形选择的数据源，目前只支持两级或三级树形选择 |
| value | TreeSelectValue[] | 否 | - | 当前选项的值 |
| visible | boolean | 是 | false | 当前组件是否以蒙层的形式出现 |
| className | string | 否 | - | 类名 |

## 事件 

| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onChange | 当组件的值变化时触发 | (value: TreeSelectValue[], selectedList: TreeSelectOption[] }[]) => void |

## 类型
| 类型名 | 值 |
| -----|-----|
| TreeSelectValue | string \| number |
| TreeSelectOption | {label: string;value: string;disabled?: boolean;children?: TreeSelectOption[]} |

## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-tree-select | 整体样式 |
| amd-tree-select-level | 树形选择层样式 |
| amd-tree-select-level-1 | 树形选择第一层样式 |
| amd-tree-select-level-2 | 树形选择第二层样式 |
| amd-tree-select-level-3 | 树形选择第三层样式 |
| amd-tree-select-level-item-text | 树形选择文案样式 |
| amd-tree-select-level-item-flag | 树形选择第一层选中标志样式 |
