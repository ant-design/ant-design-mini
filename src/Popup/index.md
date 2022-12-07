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
<code src='pages/Popup/index'></code>



## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| animation | 是否开启过渡动画 | `boolean` | true |  
| className | 类名 | `string` | - | 
| closeable | 是否展示关闭图标 | `boolean` | false |
| duration | 过渡动画时长，单位毫秒 | `number` | 300 | 
| maskClassName | 蒙层的类名 | `string` | - | 
| maskClosable | 是否可点击蒙层关闭 | `boolean` | true |
| maskStyle | 蒙层的样式 | `string` | - | 
| position | 弹窗布局 | 'top' \| 'bottom' \| 'left' \| 'right' | 'bottom' | 
| style | 样式 | `string` | - |
| visible |  是否显示 | `boolean` | false | 
| zIndex | 弹窗层级 | `number` | 998 | 
| onClose | 弹窗关闭时，触发回调 | ( visible: `boolean` ) => void |


