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

## 代码示例
<code src='pages/Popup/index'></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| animation | 是否开启过渡动画 | boolean | true |  
| className | 类名 | string | - | 
| destroyOnClose | 不可见时卸载内容 | boolean | true | 
| duration | 过渡动画时长，单位毫秒 | number | 300 | 
| height | 高度, 在 position 为 `top` 或 `bottom` 时使用，单位px | number | - | 
| maskClassName | 蒙层的类名 | string | - | 
| maskStyle | 蒙层的样式 | string | - | 
| position | 弹窗布局，可选`top` `bottom` `left` `right` | string | `bottom` | 
| showMask | 是否展示蒙层 | boolean | true |
| style | 样式 | string | - |
| visible |  是否显示 | boolean | false | 
| width | 宽度, 在 position 为 `left` 或 `right` 时使用，单位px | number | - | 
| zIndex | 弹窗层级 | number | 998 | 
| onClose | 点击蒙层关闭，触发回调 | () => void |





