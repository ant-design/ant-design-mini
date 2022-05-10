---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# SwipeAction 滑动操作
列表的功能扩展
## 何时使用
通过滑动操作来展示隐藏的功能菜单

## 代码示例

### 基本使用
<code src='../../demo/pages/SwipeAction'></code>

### 组件实例方法
<code src='../../demo/pages/SwipeActionRef'></code>



## 属性
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| left | 右滑漏出左侧操作区 | { text: string, type: 'default' &verbar; 'primary' &verbar; 'danger'; className: string } [] | - |
| right | 左滑漏出右侧操作区 | { text: string, type: 'default' &verbar; 'primary' &verbar; 'danger'; className: string }[] | - |
| autoClose | 点击按钮是是否会自动收起 | boolean | false |
| disabled | 是否禁止操作 | boolean | false |
| className |  类名 | string | - |

## 事件
| 事件名 | 说明 | 类型 | 补充 |
| -----|-----|-----|-----|
| onLeftButtonTap | 点击左侧按钮，触发回调 | (index: number, text: string, type: string, extraInfo?: unknown, dateSet: Record<string, any>) => void | 从左往右起，第 n 个按钮 |
| onRightButtonTap | 点击右侧按钮，触发回调 | (index: number, text: string, type: string, extraInfo?: unknown, dateSet: Record<string, any>) => void | 从左往右起，第 n 个按钮  |

## 样式类
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
.__dumi-default-mobile-previewer:nth-of-type(2)::after {
    border-bottom: none!important;
}
</style>
