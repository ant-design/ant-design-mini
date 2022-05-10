---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---

# Mask 背景蒙层
深色背景层
## 何时使用 
常用于模态窗口的背景层，使视觉焦点突出在模态窗口本身
## 代码示例
### 基本使用
<code src='../../demo/pages/Mask'></code>


## 属性 


| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| maskZindex | 背景层级  | string | - |
| type | | 类型 | 'product' | 'market' | 'product'  |
| show | 是否展示  | boolean| false |
| fixMaskFull | 是否兼容透明头  | false | - |
| className |  类名 | string | - |

## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onMaskTap | 点击蒙层 | (v: Record<string, any>) => void |

## CSS 变量 

| CSS 变量名称 | 说明 |
| -----|----- |
| --am-mask-backgroundColor | - |
| --am-mask-market-backgroundColor | - |

## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-mask | - |
| amd-mask__m | - |
| amd-mask__fix | - |


