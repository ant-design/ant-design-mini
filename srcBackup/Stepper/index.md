---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Stepper 步进器

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

一种两段式控制，用于增加、减少或修改数值。

## 何时使用

用于在一定范围内输入、调整当前数值。

## 代码示例

<code src='pages/Stepper/index'></code>

## API

| 属性           | 说明                                                                                | 类型            | 默认值                                                                                 |
| -------------- | ----------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| className      | 类名                                                                                | string          | -                                                                                      |
| disabled       | 是否禁用                                                                            | boolean         | false                                                                                  |
| inputReadOnly  | 输入框是否只读状态                                                                  | boolean         | false                                                                                  |
| defaultValue   | 初始值                                                                              | number          | -                                                                                      |
| focus          | 输入框选中状态                                                                      | boolean         | false                                                                                  |
| inputClassName | 输入框类型                                                                          | string          | -                                                                                      |
| inputStyle     | 输入框样式                                                                          | string          | -                                                                                      |
| max            | 最大值                                                                              | number          | -                                                                                      |
| min            | 最小值                                                                              | number          | -                                                                                      |
| precision      | 计算精度，保留几位小数 [详见](https://github.com/ant-design/ant-design/issues/5998) | number          | -                                                                                      |
| style          | 样式                                                                                | string          | -                                                                                      |
| step           | 步距，即每次加减的值                                                                | number          | 1                                                                                      |
| type           | 输入框唤起键盘类型，可选 `number` `digit`                                           | string          | `digit`                                                                                |
| value          | 输入框的值, 表单提交的时候有效                                                      | number          | -                                                                                      |
| onBlur         | 输入框失去焦点时，触发此回调                                                        | (value: number  | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onChange       | 数据变化后，触发此回调                                                              | ( value: number | null, [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void        |
| onConfirm      | 点击键盘完成时触发此回调                                                            | (value: number  | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFocus        | 输入框聚焦时，触发此回调                                                            | (value: number  | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
