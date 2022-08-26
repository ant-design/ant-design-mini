---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Popup 弹出层
从屏幕滑出或弹出一块自定义内容区
## 何时使用
用于展示弹窗、信息提示、选择输入、切换等内容，支持多个弹出层叠加展示

## 注意事项
- maskClosable 为 false 时，onClose 函数不触发

## 代码示例
### 基本使用
<code src='../../demo/pages/Popup'></code>



## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| visible | boolean | 否 | false | 是否显示 |
| maskClosable | boolean | 否 | false | 点击蒙层是否可以关闭 |
| showCloseIcon | boolean | 否 | false | 是否展示关闭图标 |
| disableScroll | boolean | 否 | true | 弹窗展示时，是否禁止页面滚动 |
| autoHeight | boolean | 否 | false | 是否自适应内容区高度 |
| animation | boolean | 否 | true | 是否开启过渡动画 |
| duration | number | 否 | 300 | 过渡动画时长，单位毫秒 |
| position | 'center' &verbar; 'top' &verbar; 'bottom' &verbar; 'left' &verbar; 'right' | 否 | 'center' | 弹窗布局 |
| zIndex | number | 否 | 998 | 弹窗层级 |
| className | string | 否 | - | 类名 |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onClose | 弹窗关闭时，触发回调 | ( visible: boolean ) => void |

## 样式类

| 类名 | 说明 |
| ----|----|
| amd-popup | 整体样式 |
| amd-popup-mask | 遮罩层样式 |
| amd-popup-disable-scroll | 禁用滚动样式 |
| amd-popup-animation | 开启过渡动画样式 |
| amd-popup-content | 内容样式 |
| amd-popup-top | 内容样式 |
| amd-popup-bottom | 内容样式 |
| amd-popup-left | 内容样式 |
| amd-popup-right | 内容样式 |
| amd-popup-center | 内容样式 |
| amd-popup-close-container | 关闭图标区域样式 |
| amd-popup-close-container | 关闭图标样式 |

