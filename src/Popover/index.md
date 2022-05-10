---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---
# Popover 气泡菜单
点击元素，弹出气泡式的菜单
## 何时使用
用于功能的导航，只可由导航栏上图标唤起，通常用于收纳低频使用的功能
## 代码示例

### 基本使用
<code src='../../demo/pages/PopoverBase'></code>

### 结合 PopoverItem 组件使用
<code src='../../demo/pages/Popover'></code>



## 属性

#### Popover
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| visible |  是否可见  | boolean | false |
| mode | 组件显示模式 | 'dark' &verbar; 'light' | 'dark' |
| placement | 方向 | 'top' &verbar; 'top-right' &verbar; 'top-left' &verbar; 'bottom' &verbar; 'bottom-left' &verbar; 'bottom-right' &verbar; 'left' &verbar; 'left-top' &verbar; 'left-bottom' &verbar; 'right' &verbar; 'right-top' &verbar; 'right-bottom' | 'bottom-right' |
| mask |  是否展示蒙层 | boolean | false |
| transparentMask |  蒙层是否透明 | boolean | false | 
| maskClosable |  是否可点击蒙层关闭 | boolean | true | 
| fixMaskFull |  用以解决遮罩层受到 transform 影响而显示不全的问题 | boolean | false |
| className |  类名 | string | - |


#### PopoverItem
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| icon |  图标类型  | string | - |
| className | 类名  | string | - |

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
| items | tooltip 提示插槽，可以使用 PopoverItem 渲染列表 |

#### PopoverItem
| 名称 | 说明 |
| -----|-----|
| icon | 图标插槽 |

## 样式类
#### Popover
| 类名 | 说明 |
| ----|----|
| amd-popover | 整体样式 |
| amd-popover-container | 主体内容样式 |
| amd-popover-content | 内容样式 |
| amd-popover-arrow | 箭头样式 |
| amd-popover-inner | 内部内容样式 |
| amd-popover-inner-pseudo | tootip 内容整体样式 |

#### PopoverItem
| 类名 | 说明 |
| ----|----|
| amd-popover-item | 整体样式|
| amd-popover-item-icon | 图标样式|
| amd-popover-item-icon-item | 图标样式|
| amd-popover-item-text | 文字样式|