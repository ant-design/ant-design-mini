---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
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

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| visible | 是否显示 | boolean  | false | 
| maskClosable | 点击蒙层是否可以关闭  | boolean | false |
| showCloseIcon | 是否展示关闭图标  | boolean | false | 
| disableScroll | 弹窗展示时，是否禁止页面滚动 | boolean | true |
| animation |  是否开启过渡动画 | boolean | true | 
| duration |  过渡动画时长，单位毫秒 | number | 300 | 
| position |  弹窗布局  | 'center' &verbar; 'top' &verbar; 'bottom' &verbar; 'left' &verbar; 'right' | 'center'|
| zIndex |  弹窗层级 | number | 998 |
| className |  类名 | string | - |

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
| amd-popup-close-content | 关闭图标区域样式 |
| amd-popup-close-container | 关闭图标样式 |