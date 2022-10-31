---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---
# Tabs 标签页
内容组之间进行导航切换
## 何时使用
- 内容组之间进行导航切换
- 当前内容需要分成同层级结构的组，进行内容切换展示，用在表单或者标准列表界面的顶部


## 代码示例
### 基本使用
<code src='../../demo/pages/Tabs'></code>

## 属性

#### Tabs
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| plus | 右上角操作按钮插槽 | `slot` | - |
| style | 样式| `string` | - |
| type | 类型，basis(基础)，capsule(胶囊)，mixin(混合) | 'basis' \| 'capsule' \| 'mixin' | 'basis' | 
| onChange | 面板切换时候，触发回调 | (index: `number`, e: `Event`) => void| - |
