---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# VTabs 纵向Tabs

纵向选项卡，内部配合 VTabItem 使用。

## 注意事项
- 目前仅支持一个页面中使用一次 **VTabs** 组件；

## 代码示例
### 基本使用
<code src='../../demo/pages/VTabs'></code>

### VTab点击切换内容
<code src='../../demo/pages/VTabsNoScroll'></code>

## 属性

#### VTabs
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| activeKey |  当前激活的索引 | `number` |  0  |
| className | 类名| `string` | - |
| style | 样式| `string` | - |
| title | 自定义标题作用域插槽，接收当前tab参数 | `slot` |- |
| onChange | 切换时触发回调 | (index: `number`) => void | - |
    

#### VTabsItem
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| style | 样式| `string` | - |
| tab | 每一项 tab 内容 | [TabItemConfig](#tabitemconfig)[] | - |


#### TabItemConfig
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| badge | 徽标类型，参见 [Badge](./Badge) 组件 | `object` | - |
| count | 数字文案 | `string` | - |
| disabled | 是否禁用 | `boolean` | false |
| title | 标题 | `string` | - |
