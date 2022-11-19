---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---
# Popover 气泡菜单
点击元素，弹出气泡式的菜单
## 何时使用
用于功能的导航，只可由导航栏上图标唤起，通常用于收纳低频使用的功能
## 代码示例

### 基本使用
<code src='pages/PopoverBase/index'></code>

### 结合 PopoverItem 组件使用
<code src='pages/Popover/index'></code>



## 属性

#### Popover
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| visible | boolean | 否 | false | 是否可见 |
| mode | 'dark' &verbar; 'light' | 否 | 'dark' | 组件显示模式 |
| placement | 'top' &verbar; 'top-right' &verbar; 'top-left' &verbar; 'bottom' &verbar; 'bottom-left' &verbar; 'bottom-right' &verbar; 'left' &verbar; 'left-top' &verbar; 'left-bottom' &verbar; 'right' &verbar; 'right-top' &verbar; 'right-bottom' | 否 | 'bottom-right' | 方向 |
| className | string | 否 | - | 组件根节点类名 |
| style | string | 否 | - | 组件根节点style |
| mask | boolean | 否 | false | 是否展示蒙层 |
| maskClosable | boolean | 否 | true | 是否可点击蒙层关闭 |
| fixMaskFull | boolean | 否 | false | 用以解决遮罩层受到 transform 影响而显示不全的问题 |

#### PopoverItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| icon | string | 否 | - | 图标类型 |
| className | string | 否 | - | 类名 |

## 事件
#### Popover
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onVisibleChange | 组件隐藏/显示切换，触发回调 | ( visible: boolean, mode: 'component' &verbar; 'mask' ) => void |

#### PopoverItem
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击组件，触发回调 | () => void |

## 插槽
#### Popover
| 名称 | 说明 |
| ----|----|
| content | tooltip 提示插槽，可以使用 PopoverItem 渲染列表 |

#### PopoverItem
| 名称 | 说明 |
| -----|-----|
| icon | 图标插槽 |
