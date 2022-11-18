---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# SearchBar 搜索框
搜索场景的输入框组件
## 何时使用
搜索场景的输入框组件    在信息池中缩小范围，快速而轻松地获取目标信息

## 注意事项

- SearchBar 输入框在个别情况下会出现闪动的情况，需要使用 enableNative 进行处理，具体可参考 [input 输入框的使用限制](https://opendocs.alipay.com/mini/component/input#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6) 以及 [FAQ](https://opendocs.alipay.com/mini/component/input#FAQ) 部分的说明。

- SearchBar 输入框在手写输入情况下，部分安卓手机会出现连续输入现象，只需要将 controlled 属性设置为 false 即可。
## 代码示例
### 基本使用
<code src='../../demo/pages/SearchBar'></code>

## 属性 
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| autoFocus | 自动聚焦，ios 可能会失效 | `boolean` | false | 
| className | 类名| `string` | - |
| clear | 显示清除图标 | `boolean` | true |  
| controlled | 是否受控模式 | `boolean` | false | 
| disabled | 是否禁用 | `boolean` | false | 
| enableNative | 是否启用 Native 渲染 | `boolean` | - |
| id | 表单元素 id | `string` | - | 
| maxLength | 最大长度 | `number` | 140 | 
| name | 表单元素 name | `string` | - | 
| placeholder | 占位符 | `string` | - |
| style | 样式| `string` | - |
| type | 输入框的类型 | 'text' &verbar; 'number' &verbar; 'idcard' &verbar; 'digit' &verbar; 'numberpad' &verbar; 'digitpad' &verbar; 'idcardpad' | 'text'|
| value | 输入框的值 | `string` | - | 
| onBlur | 失焦时触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onConfirm | 	点击键盘完成时触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onClear | 清除输入内容时触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onFocus | 聚焦时触发触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onInput | input 输入回调 | (value: string, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onSubmit | submit 回调 | (value: string, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
