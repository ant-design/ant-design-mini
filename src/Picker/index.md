---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---
# Picker 选择器
Picker 选择器	显示一个或多个选项集合的的可滚动列表，相比较于原生picker实现了ios跟android端体验一致
## 何时使用
- 提供一组或多组关联选项供用户选择
- 当少于5个选项时，建议直接将选项平铺，使用 Radio 是更好的选择

## 注意事项 
- Picker、CascaderPicker暂不支持动态改变Column列数

## 代码示例
### 基本使用
<code src='pages/Picker/index'></code>

### 级联Picker
<code src='pages/CascaderPicker/index'></code>

## 属性

#### Picker

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| string | - |
| defaultValue | 默认值 | string \| number \| [PickerColumnItem](#pickercolumnitem) \| Array\<string \| number \| [PickerColumnItem](#pickercolumnitem)\> | - | 
| disabled | 是否禁用  | boolean | false | 
| cancelText | 取消文案 | string | '取消' |  
| format | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format)  | string | 'YYYY/MM/DD' | 
| indicatorStyle | 选中框样式 | string | - |  
| indicatorClass | 选中框的类名 | string |  - |  
| maskClassName | 蒙层的类名 | string | - | 
| maskClosable |  点击蒙层是否可以关闭 | boolean |false |  | 
| maskStyle | 蒙层的样式 | string | - | 
| okText | 确认按钮文案 | string | '确定' |  
| options | picker 数据，配置每一列的选项 | [PickerColumnItem](#pickercolumnitem)[] | [] |
| placeholder | 提示文案 | string | '请选择' |  
| popClassName |  弹出框类名 | string | - |
| popStyle |  弹出框样式 | string | - |
| style | 样式| string | - |
| title | 弹出框标题 | string \| slot | - |  
| value | 选中的值 | string \| number \| [PickerColumnItem](#pickercolumnitem) \| Array\<string \| number \| [PickerColumnItem](#pickercolumnitem)\> | - | 
| onOk | 点击确定按钮，触发回调 | (value: [PickerColumnItem](#pickercolumnitem),  column: [PickerColumnItem](#pickercolumnitem), event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onCancel | 点击取消按钮/蒙层，触发回调 | (event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onChange | 选中项发生变化，触发回调 | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onFormat | 选中值的文本显示格式 | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem)) => string | - | 
| onVisibleChange | 弹出框显示/隐藏状态变化触发 | (visible: boolean, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 

#### CascaderPicker

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| string | - |
| defaultValue | 默认选中的值 | string[] | - | 
| disabled | 是否禁用  | boolean | false | 
| cancelText | 取消文案 | string | '取消' |  
| format | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format)  | string | 'YYYY/MM/DD' | 
| indicatorStyle | 选中框样式 | string | - |  
| indicatorClass | 选中框的类名 | string |  - |  
| maskClassName | 蒙层的类名 | string | - | 
| maskClosable |  点击蒙层是否可以关闭 | boolean |false |  | 
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

#### PickerColumnItem 
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| label | 文字 | string | - |
| value | 值 | string \| number | - |

#### CascaderOption
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| label | 文字 | string | - |
| value | 值 | string \| number | - |
| children | 子级 | CascaderOption[] | - |

