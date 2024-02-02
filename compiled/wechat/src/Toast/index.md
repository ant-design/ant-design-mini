---
nav:
  path: /components
group:
  title: 反馈
  order: 14
toc: 'content'
---

# Toast 轻提示

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

## 何时使用
对操作结果的轻量级反馈，无需用户操作即可自行消失。最长文案不超过 2 行，最多可以显示 24 个字符，文案过长会被截断。

## 代码示例
<code src='pages/Toast/index'></code>

## API
| 属性   | 说明                   | 类型    | 默认值 |
| ------ | ---------------------- | ------- | ------ |
| className | 组件根节点类名             | string  | -      |
| content   | 文本内容                 | string  | -      |
| duration  | 持续时间，为 0 时不会自动关闭 | number  | 2000   |
| maskCloseable | 点击蒙层是否关闭        | boolean | false  |
| icon      | 图标，支持 Icon 组件所有 type | string  | -      |
| image     | 图片链接                 | string  | -      |
| maskStyle | 蒙层样式                 | string  | -      |
| showMask  | 是否展示蒙层             | boolean | false  |
| style     | 样式                    | string  | -      |
| type      | 内置图标类型，可选 `success` `error` `warning` `loading` | string  | -      |
| visible   | 是否隐藏                 | boolean | false  |
| onClose   | Toast 关闭后的回调        | (e) => void | -      |
