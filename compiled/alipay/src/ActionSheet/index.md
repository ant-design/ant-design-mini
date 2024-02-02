---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# ActionSheet 动作面板

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

从底部弹出的动作菜单面板。

## 何时使用

由用户操作触发，提供一组与操作相关的两个或多个选项，让用户在不离场的情况下完成操作。相比于对话框，动作面板的位置更适合于在大屏幕时代单手操作的场景。

## 代码示例

<code src='pages/ActionSheet/index'></code>

## API

| 属性        | 说明                | 类型                   | 默认值 |
| ----------- | ------------------- | ---------------------- | ------ |
| actions     | 面板选项列表        | `[ActionSheetItem](#actionshetitem)`[] | []     |
| cancelText  | 取消按钮文字        | string                 | 取消   |
| className   | 类名                | string                 | -      |
| style       | 样式                | string                 | -      |
| title       | 标题                | string                 | -      |
| visible     | 是否展开            | boolean                | false  |
| onClose     | 关闭时触发          | `(event: [Event](https://opendocs.alipay.com/mini/framework/event-object))` => void | - |
| onAction    | 点击选项时触发，禁用状态下不会触发 | `(item: [ActionSheetItem](#actionsheetitem), index: number, event: [Event](https://opendocs.alipay.com/mini/framework/event-object))` => void | - |


### ActionSheetItem

| 属性        | 说明       | 类型    | 默认值 |
| ----------- | ---------- | ------- | ------ |
| icon        | 图标       | -       | -      |
| danger      | 是否危险模式| boolean | false  |
| description | 描述       | string  | -      |
| disabled    | 是否禁用   | boolean | false  |
