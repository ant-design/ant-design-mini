---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---
# Filter 筛选卡
向下弹出的菜单面板
## 何时使用
用于筛选、排序并更改当前页面内容展示范围或顺序
## 注意事项
需要配合 `FilterItem` 组件使用;

## 代码示例
### 基本使用
<code src='../../demo/pages/Filter'></code>


## 属性
#### Filter
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| uid | 当页面有多个Filter时需传入，`必须页面唯一`，与内部的 FilterItem 组件的 uid 一致  | string | - |
| className |  类名 | string | - |

#### FilterItem
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| value | 每一项的值，该组件仅支持受控模式| any | - |
| type | 类型 default=单选 multiple=多选 | 'default' &verbar; 'multiple' | 'default' |
| items | type=default type=multiple 有效  | {value: string; text: string; subText: string}[] | - |
| placeholder |  当该项值为空的时候显示文案 | string | - |
| uid | 当页面有多个Filter时需传入，`必须页面唯一`，与外部的 Filter 组件的 uid 一致 | string | - |
| className |  类名 | string | - |

## 事件
#### FilterItem

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中的选项变更后，触发此回调 | ( changedFields: `Record<string, any>`, allFields: `Record<string, any>` ) => void |
| onOpen | 打开选择面板时，触发此回调 | () => void |

## 样式类
#### Filter

| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-filter             | 整体样式         |
| amd-filter-bar      | 标签栏样式  |
| amd-filter-bar-text | 标题栏标题样式   |
| amd-filter-bar-text-icon  | 标题栏 Icon 样式 |
| amd-filter-items  | 选择面板样式 |

#### FilterItem
| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-filter-item              | 整体样式         |
| amd-filter-item-content      | 内容样式  |
| amd-filter-item-content-wrap | 选择面板区域样式   |
| amd-filter-item-btns | 按钮区域样式   |
| amd-filter-item-btns-button  | 重置/确定按钮样式 |