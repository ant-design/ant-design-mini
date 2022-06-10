---
nav:
  path: /components
group:
  title: 反馈
  order: 2
toc: false
---

# ActionSheet 动作面板
从底部弹出的动作菜单面板。
## 何时使用 
由用户操作触发，提供一组与操作相关的两个或多个选项，让用户在不离场的情况下完成操作。相比于对话框，动作面板的位置更适合于在大屏幕时代的单手操作
## 代码示例
### 基本使用
<code src='../../demo/pages/ActionSheet'></code>

## 属性 


| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| maskZindex | string | - | - |  |
| type | 'product' &verbar; 'market' | 'product' | - |  |
| show | boolean | - | - |  |
| fixMaskFull | false | - | - |  |
| className | string | - | - | 类名 |

## 事件 


| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onMaskTap |  | (v: Record<string, any>) => void |

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


