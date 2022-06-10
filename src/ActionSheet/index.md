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

```typescript
type IActionItem = {
  text: string
  key: string
  icon: string;
  description?: string;
  danger?: boolean;
  disabled?: boolean;
}
```
<hr />

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| visible | boolean | 否 | false | 是否可见 |
| actions | IActionItem[] | 否 | [] | 面板选项列表 |
| title | string | 否 | - | 标题 |
| cancelText | string | 否 | 取消 | 取消按钮文字 |
| className | string | - | - | 类名 |

## 事件 

| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onAction | 点击选项时触发，禁用状态下不会触发 | (item: IActionItem, index, event) => void |
| onClose | 关闭时触发| (event) => void |


## CSS 变量 

| CSS 变量名称 | 说明 |
| -----|----- |
| --am-actionsheet-danger-color | 危险状态字体颜色 |
| --am-actionsheet-icon-width | icon宽度 |
| --am-actionsheet-icon-height | icon高度 |

