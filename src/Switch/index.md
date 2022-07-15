---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Switch 开关
开关选择器，相比较于原生switch实现了ios跟android端体验一致
## 何时使用
- 需要表示开关状态/两种状态之间的切换时
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合

## 代码示例
### 基本使用
<code src='../../demo/pages/Switch'></code>



## 属性

| 属性 | 类型 | 必填  | 默认值 | 说明 |
| -----|-----|-----|-----|-----|
| checked | boolean| 否|  - | 是否勾选 |
| disabled |  boolean | 否|  false |  是否禁用 |
| loading | boolean  |  否  | false |是否加载状态|
| color |  string |  否 | '#1677ff' |  选中背景色|
| checkedText | string| 否 | - |选中时的内容  |
| uncheckedText | string | 否 | -| 非选中时的内容 |
| size | 'medium' &verbar; 'small' &verbar; 'x-small' | 否 | medium | 组件尺寸 |
| controlled | boolean | 否 | false| 是否受控 |
| mode | 'normal' &verbar;'form' | 否 | 'normal'| 配合From/FormItem组件使用时，需设置为 from |
| className | string | 否 | -| 类名 |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 点击 switch  ，触发此回调 | ( checked: boolean ) => void  |


## 插槽
| 名称 | 说明 |
| ----|----|
| checked | 选中时的内容插槽 |
| unchecked | 非选中时的内容插槽 |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-switch | 整体样式 |
| amd-switch-checked | 选中时的样式 |
| amd-switch-disabled | 禁用时的样式 |