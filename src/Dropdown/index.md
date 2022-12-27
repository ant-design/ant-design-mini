---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---
# Dropdown 下拉菜单
向下弹出的菜单面板。
## 何时使用
适用于筛选、排序并更改当前页面内容展示范围或顺序。
## 代码示例

### 基本使用
<code src='pages/Dropdown/index'></code>

### 结合 Selector 
<code src='pages/DropdownFilter/index'></code>



## API
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名 | string | - | 
| contentClassName | content类名 | string | - | 
| contentStyle | content样式 | string | - | 
| content | 内容区插槽，slot-scope 包括 value(对应 [DropdownItem](#dropdownitem)) index(对应 Item 的索引) active(是否展开) | slot | - |
| current |  当前展开项，传-1为不展开 | number |  -  |
| defaultCurrent |  摩恩展开项，传-1为不展开 | number |  -1  |
| icon | 标题图标插槽，slot-scope 包括 value(对应 [DropdownItem](#dropdownitem)) index(对应 Item 的索引) active(是否展开) | slot | - |
| style | 样式 | string | - |
| title | 标题插槽，slot-scope 包括 value(对应 [DropdownItem](#dropdownitem)) index(对应 Item 的索引) active(是否展开) | slot | - |
| onChange | 展开切换触发回调 |(current: number) => void| - |

### DropdownItem

| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| title | 标题 | string | - |


