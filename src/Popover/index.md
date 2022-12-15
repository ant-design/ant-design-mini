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
<code src='pages/Popover/index'></code>

### 结合 List 组件使用
<code src='pages/PopoverList/index'></code>



## API
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| autoAdjustOverflow |  气泡被遮挡时自动调整位置 | boolean | true | 
| className | 类名 | string | - | 
| color | 背景颜色 | string | - |
| contentClassName | content类名 | string | - | 
| contentStyle | content样式 | string | - | 
| content | 内容 | string\|slot | - |
| defaultVisible |  默认是否显示 | boolean | false | 
| maskClassName | 蒙层的类名 | string | - | 
| maskClosable | 是否可点击蒙层关闭 | boolean | true |
| maskStyle | 蒙层的样式 | string | - | 
| placement | 方向，可选`top`  `top-right`  `top-left` `bottom` `bottom-left` `bottom-right` `left` `left-top` `left-bottom` `right` `right-top` `right-bottom`  | string | `bottom-right` |
| showMask | 是否展示蒙层 | boolean | false |
| style | 样式 | string | - |
| visible |  是否显示 | boolean | false | 
| onVisibleChange |  visible 变更时回调 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object))=>void | - | 

