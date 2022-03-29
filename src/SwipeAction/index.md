---
nav:
  path: /components
group:
  title: 反馈
  order: 2
toc: false
---

# SwipeAction

## 代码示例

### 基础示例

<code src='../../demo/pages/SwipeAction'></code>

### 组件实例方法
<code src='../../demo/pages/SwipeActionRef'></code>

## API

### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| autoClose | boolean | 否 | false | 点击按钮是是否会自动收起 |
| disabled | boolean | 否 | false | 是否禁止操作 |
| left | { text: string, type: 'default' &verbar; 'primary' &verbar; 'danger'; className: string } [] | 否 | - | 右滑漏出左侧操作区 |
| right | { text: string, type: 'default' &verbar; 'primary' &verbar; 'danger'; className: string }[] | 否 | - | 左滑漏出右侧操作区 |
| className | string | 否 | - | 类名 |

### 事件
| 事件名 | 说明 | 类型 | 补充 |
| -----|-----|-----|-----|
| onLeftButtonTap | 点击左侧按钮，触发回调 | (v: number) => void | 从左往右起，第 n 个按钮 |
| onRightButtonTap | 点击右侧按钮，触发回调 | (v: number) => void | 从左往右起，第 n 个按钮  |

### 样式类
| 类名 | 说明 |
| ----|----|
| amd-swipe-action| 整体样式 |
| amd-swipe-action-closeSwipe | 整体样式 |
| amd-swipe-action-wrap | 整体内容样式 |
| amd-swipe-action-left | 右侧按钮区域样式 |
| amd-swipe-action-right | 按钮区域样式 |
| amd-swipe-action-btn | 按钮样式 |
| amd-swipe-action-btn-text | 按钮文字样式 |
| amd-swipe-action-content | 表层区域样式 |
| amd-swipe-action-item | 表层区域内容样式 |

<style>
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 260px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 40px
} 
</style>