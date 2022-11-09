---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Checkbox 复选框
在一组可选项中进行多选
## 何时使用
- 在一组可选项中进行多项选择时
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合



## 代码示例

### 基本使用
<code src='../../demo/pages/Checkbox'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| checked | 是否选中 | `boolean` | false |
| className | 类名| `string` | - |
| disabled | 是否禁用  | `boolean` | false | 
| name |  表单元素name | `string` | - |
| icon | 图标插槽，，接收checked、disabled参数 | `slot` | - |
| id | 表单元素id | `string` | - |
| style | 样式| `string` | - |
| value | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用 | `string` | - |
| onChange | 选中状态改变，触发回调 | (checked: `boolean`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

