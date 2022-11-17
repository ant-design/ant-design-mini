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

### 控制
<code src='../../demo/pages/TabsControl'></code>

### 电梯模式
<code src='../../demo/pages/TabsElevator'></code>

### 可滚动
<code src='../../demo/pages/TabsScroll'></code>

### 吸顶
<code src='../../demo/pages/TabsSticky'></code>

### Swiper
<code src='../../demo/pages/TabsSwiper'></code>

### 纵向模式
<code src='../../demo/pages/TabsVertical'></code>

### 纵向电梯模式
<code src='../../demo/pages/TabsVerticalElevator'></code>

## 属性

#### Tabs
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| current | 选中索引 | `number` | - |
| defaultCurrent | 选中索引初始值 | `number` | 0 |
| plus | 右上角操作按钮插槽 | `slot` | - |
| style | 样式| `string` | - |
| type | 类型，basis(基础)，capsule(胶囊)，mixin(混合) | 'basis' \| 'capsule' \| 'mixin' | 'basis' | 
| onChange | 面板切换时候，触发回调 | (index: `number`, e: `Event`) => void| - |
