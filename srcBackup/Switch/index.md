---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Switch 开关

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

Switch 开关选择器，比起原生 Switch，它实现了在 iOS 和 Android 端一致的体验。

## 何时使用

- 当需要表示开关状态或两种状态之间切换时使用。
- 与 Checkbox 的区别在于，切换 Switch 会直接触发状态改变，而 Checkbox 通常用于状态标记，需要与提交操作配合使用。

## 代码示例

<code src='pages/Switch/index'></code>

## API

| 属性           | 说明                                      | 类型                                                                                                | 默认值   |
| -------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------- | -------- |
| className      | 类名                                      | string                                                                                              | -        |
| checkedText    | 选中时的内容                              | string \| slot                                                                                      | -        |
| checked        | 是否勾选                                  | boolean                                                                                             | -        |
| color          | 选中背景色                                | string                                                                                              | -        |
| defaultChecked | 默认是否勾选                              | boolean                                                                                             | `false`  |
| disabled       | 是否禁用                                  | boolean                                                                                             | `false`  |
| loading        | 是否加载状态                              | boolean                                                                                             | `false`  |
| uncheckedText  | 非选中时的内容                            | string \| slot                                                                                      | -        |
| size           | 组件尺寸，可选值为 `medium`、`small`、`x-small` | string                                                                                              | `medium` |
| style          | 样式                                      | string                                                                                              | -        |
| onChange       | 点击 Switch 时触发的回调                   | (checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -        |
