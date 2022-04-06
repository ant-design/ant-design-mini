---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---
# Popover

气泡，内部可以配合 PopoverItem 使用。
## 代码示例

### 基础使用
<code src='../../demo/pages/PopoverBase'></code>

### 结合 PopoverItem 组件使用
<code src='../../demo/pages/Popover'></code>

## API

### 属性

#### Popover
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| visible | boolean | 否 | false | 是否可见 |
| mode | 'dark' &verbar; 'light' | 否 | 'dark' | 组件显示模式 |
| placement | 'top' &verbar; 'top-right' &verbar; 'top-left' &verbar; 'bottom' &verbar; 'bottom-left' &verbar; 'bottom-right' &verbar; 'left' &verbar; 'left-top' &verbar; 'left-bottom' &verbar; 'right' &verbar; 'right-top' &verbar; 'right-bottom' | 否 | 'bottom-right' | 方向 |
| className | string | 否 | - | 类名 |
| mask | boolean | 否 | false | 是否展示蒙层 |
| maskClosable | boolean | 否 | true | 是否可点击蒙层关闭 |
| fixMaskFull | boolean | 否 | false | 用以解决遮罩层受到 transform 影响而显示不全的问题 |

#### PopoverItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| icon | string | 否 | - | 图标类型 |
| className | string | 否 | - | 类名 |

### 事件
#### Popover
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onVisibleChange | 组件隐藏/显示切换，触发回调 | ( visible: boolean, mode: 'component' &verbar; 'mask' ) => void |

#### PopoverItem
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击组件，触发回调 | () => void |

### 插槽
#### Popover
| 名称 | 说明 |
| ----|----|
| items | tooltip 提示插槽，可以使用 PopoverItem 渲染列表 |

#### PopoverItem
| 名称 | 说明 |
| -----|-----|
| icon | 图标插槽 |

### 样式类
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

<style>
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 110px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4)  {
    width: 110px
} 
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(2)  {
    width: 200px
} 
.__dumi-default-layout-content article table:nth-of-type(4) th:nth-of-type(2)  {
    width: 200px
} 
</style>