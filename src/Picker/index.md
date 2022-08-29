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
<code src='../../demo/pages/Picker'></code>

### 级联Picker
<code src='../../demo/pages/CascaderPicker'></code>

## 属性

#### Picker

```typescript
type PickerColumnItem = string | number | {
  label: string
  value: string|number
}
```

<hr />

| 属性 |  类型  | 必填 |  说明  | 默认值|
| -----|-----|-----|-----|-----|
| value | PickerColumnItem  &#124;  (PickerColumnItem)[] | 否|选中数据 | - |
| data |  PickerColumnItem数组 | 是 |picker 数据，配置每一列的选项 | [] |
| placeholder |string |否| 提示文案  | '请选择' |
| disabled | boolean |否| 是否禁用 | false |
| title |  string | 否  | 弹出框标题 | - |
| okText |string | 否| 确认按钮文案 | '确定' |
| dismissText | string| 否| 取消文案  | '取消' |
| maskClosable | boolean | 否 | false | 点击蒙层是否可以关闭 |
| maskStyle | string  | 否| 蒙层的样式  | -|
| maskClass | string | 否| 蒙层的类名| - |
| indicatorStyle | string | 否  | 选中框样式 | - |
| indicatorClass | string | 否   | 选中框的类名 | - |
| className |  string | 否| 类名 | - |

#### CascaderPicker

```typescript
interface ICascaderOption {
  label: string;
  value: any;
  children?: ICascaderOption[];
}
```

<hr />

| 属性 |  类型  | 必填 |  说明  | 默认值|
| -----|-----|-----|-----|-----|
| value | any[] | 否 | 选中数据 | - |
| options |  ICascaderOption[] | 是 | picker 数据 | [] |
| placeholder |string |否| 提示文案  | '请选择' |
| disabled | boolean |否| 是否禁用 | false |
| title |  string | 否  | 弹出框标题 | - |
| okText |string | 否| 确认按钮文案 | '确定' |
| dismissText | string| 否| 取消文案  | '取消' |
| maskClosable | boolean | 否 | false | 点击蒙层是否可以关闭 |
| maskStyle | string  | 否| 蒙层的样式  | -|
| maskClass | string | 否| 蒙层的类名| - |
| indicatorStyle | string | 否  | 选中框样式 | - |
| indicatorClass | string | 否   | 选中框的类名 | - |
| className |  string | 否| 类名 | - |

## 事件

#### Picker
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onOk | 点击确定按钮，触发回调 | (value: PickerColumnItem,  column: PickerColumnItem, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onDismiss | 点击取消按钮/蒙层，触发回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onChange | 选中项发生变化，触发回调 | (value: PickerColumnItem, column: PickerColumnItem, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFormat | 选中值的文本显示格式 | (value: PickerColumnItem, column: PickerColumnItem) => string |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible:boolean, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onBeforeOk | 点击确认按钮之前，触发回调，返回false时阻止默认确定流程 | (value: PickerColumnItem,  column: PickerColumnItem, event: [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => boolean 

#### CascaderPicker
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onOk | 点击确定按钮，触发回调 | (value: any[], selectedOptions: ICascaderOption[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onDismiss | 点击取消按钮/蒙层，触发回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onChange | 选中项发生变化，触发回调 | (value: any[], selectedOptions: ICascaderOption[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFormat | 选中值的文本显示格式，默认展示labels.join('') | (value: any[], selectedOptions: ICascaderOption[]) => string |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible:boolean, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onBeforeOk | 点击确认按钮之前，触发回调，返回false时阻止默认确定流程 | (value: any[], selectedOptions: ICascaderOption[], event: [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => boolean 

## 插槽
| 名称 | 说明 | 类型 |
| -----|-----|-----|
| default | 文本区域标签名称 | 作用域插槽，接收选中的value参数 |
| title | 弹窗窗体标题名称 |  - |


## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-picker | 文本展示区域样式 |
| amd-picker-placeholder | placeholder样式 |
| amd-picker-popup | 弹窗整体样式 |
| amd-picker-header | 弹窗头部区域样式 |
| amd-picker-header-item | 弹窗头部区域文本样式 |
| amd-picker-content | 选择区域样式 |
| amd-picker-content-item | 选择区域单个选项样式 |
| amd-cascader | 级联整体区域样式 |