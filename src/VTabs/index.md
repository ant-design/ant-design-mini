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
    
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| activekey | number | 否 | 0 | 当前激活的索引 |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |

#### VTabsItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tab | {title: string; disabled?: boolean, badge?: {type: 'dot' &verbar; 'number' &verbar; 'text', text: number  &verbar;  string }}[] | 是 | - | 每一项 tab 内容 |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |

## 事件

#### VTabs
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 面板切换时候，触发回调 |(index: number) => void|

## 插槽
#### VTabs
| 名称 | 说明 | 作用域参数 |
| -----|-----|-----|
| default | 内容区渲染 | - |
| title | 自定义标题内标题 | tab |
