---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---
# Picker 选择器

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

Picker 选择器显示一个或多个选项集合的可滚动列表，相比于原生 picker，实现了 iOS 与 Android 端体验的一致性。

## 何时使用

- 提供一组或多组关联选项供用户选择。
- 当少于 5 个选项时，建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码示例
### 基本使用
<code src='pages/Picker/index'></code>

### 级联Picker
<code src='pages/CascaderPicker/index'></code>

## API
### Picker
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| animationType | 动画类型，可选`transform` `position`，默认使用`transform`动画性能更好。由于小程序基础库bug，弹窗内picker-view阴影样式在 iOS 下可能存在样式问题，可暂切换为`position`解决 | string | `transform` |  
| className | 类名| string | - |
| defaultValue | 默认值 | string \| number \| Array\<string \| number\> | - | 
| disabled | 是否禁用  | boolean | false | 
| cancelText | 取消文案 | string | '取消' |  
| content | 自定义内容插槽 | slot | - |
| indicatorStyle | 选中框样式 | string | - |  
| indicatorClassName | 选中框的类名 | string |  - |  
| maskClassName | 蒙层的类名 | string | - | 
| maskClosable |  点击蒙层是否可以关闭 | boolean |true |  | 
| maskStyle | 蒙层的样式 | string | - | 
| okText | 确认按钮文案 | string | '确定' |  
| emptyText | 空状态按钮文案 | string | '暂无数据' |  
| options | picker 数据，配置每一列的选项 | [PickerColumnItem](#pickercolumnitem)[] | [] |
| placeholder | 提示文案 | string | '请选择' |  
| popClassName |  弹出框类名 | string | - |
| popStyle |  弹出框样式 | string | - |
| prefix |  前缀 | slot | - |
| style | 样式| string | - |
| suffix |  后缀 | slot | - |
| title | 弹出框标题 | string \| slot | - |  
| value | 选中的值 | string \| number \| Array\<string \| number\> | - | 
| onOk | 点击确定按钮，触发回调 | (value: [PickerColumnItem](#pickercolumnitem),  column: [PickerColumnItem](#pickercolumnitem), event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onCancel | 点击取消按钮/蒙层，触发回调 | (event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onChange | 选中项发生变化，触发回调 | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onFormat | 选中值的文本显示格式 | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem)) => string | - | 
| onVisibleChange | 弹出框显示/隐藏状态变化触发 | (visible: boolean, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 

### CascaderPicker
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| animationType | 动画类型，可选`transform` `position`，默认使用`transform`动画性能更好。由于小程序基础库bug，弹窗内picker-view阴影样式在iOS下可能存在样式问题，可暂切换为`position`解决 | string | `transform` |  
| className | 类名| string | - |
| defaultValue | 默认选中的值 | string[] | - | 
| disabled | 是否禁用  | boolean | false | 
| cancelText | 取消文案 | string | '取消' |  
| content | 自定义内容插槽 | slot | - |
| format | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format)  | string | 'YYYY/MM/DD' | 
| indicatorStyle | 选中框样式 | string | - |  
| indicatorClassName | 选中框的类名 | string |  - |  
| maskClassName | 蒙层的类名 | string | - | 
| maskClosable |  点击蒙层是否可以关闭 | boolean |true |  | 
| maskStyle | 蒙层的样式 | string | - | 
| okText | 确认按钮文案 | string | '确定' |  
| options | 可选数据 | [CascaderOption](#cascaderoption)[] | [] |
| placeholder | 提示文案 | string | '请选择' |  
| popClassName |  弹出框类名 | string | - |
| popStyle |  弹出框样式 | string | - |
| prefix |  前缀 | slot | - |
| style | 样式| string | - |
| suffix |  后缀 | slot | - |
| title | 弹出框标题 | string \| slot | - |  
| value | 选中的值 | string[] | - | 
| onOk | 点击确定按钮，触发回调 | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onCancel | 点击取消按钮/蒙层，触发回调 | (event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onChange | 选中项发生变化，触发回调 | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onFormat | 选中值的文本显示格式，默认展示labels.join('') | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[]) => string | - | 
| onVisibleChange | 弹出框显示/隐藏状态变化触发 | (visible: boolean, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 

### PickerColumnItem 
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| label | 文字 | string | - |
| value | 值 | string \| number | - |

### CascaderOption
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| label | 文字 | string | - |
| value | 值 | string \| number | - |
| children | 子级 | CascaderOption[] | - |

## FAQ 
### 动态改变picker列数时展示异常
由于原生picker-view的限制，暂不支持动态改变列数

