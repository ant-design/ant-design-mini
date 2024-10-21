---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---
# Picker Selector

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

The Picker selector displays a scrollable list of one or more collections of options, providing consistency between the iOS and Android-side experiences compared to native pickers.

## When to use

- One or more sets of association options are provided for the user to select.
- When there are less than 5 options, it is recommended to tile the options directly. Using Radio is a better choice.

## Code example
### Basic use
<code src='../../demo/pages/Picker/index'></code>

### Cascade Picker
<!-- <code src='pages/CascaderPicker/index'></code> -->

## API
### Picker
| Property | Description | Type | Default Value |
| -----|-----|-----|-----|
| animationType | Animation type, optional`transform` `position`, the default is used`transform`Animation performance is better. Due to a bug in the basic library of small programs, the picker-view shadow style in the pop-up window may have style problems under iOS and can be temporarily switched`position`Solve | string | `transform` |  
| className | Class Name| string | - |
| defaultValue | Default Value | string \| number \| Array\<string \| number\> | - | 
| disabled | Disable  | boolean | false | 
| cancelText | Cancel Copy | string | 'Cancel' |  
| content | Custom Content Slots | slot | - |
| indicatorStyle | Check Box Style | string | - |  
| indicatorClassName | Class name of the check box | string |  - |  
| maskClassName | Class name of the layer | string | - | 
| maskClosable |  Click whether the layer can be closed | boolean |true |  | 
| maskStyle | The style of the layer | string | - | 
| okText | Confirm Button Copy | string | 'OK' |  
| emptyText | Empty status button copy | string | 'No data' |  
| options | picker data, configure options for each column | [PickerColumnItem](#pickercolumnitem)[] | [] |
| placeholder | Prompt Copy | string | 'Please Select' |  
| popClassName |  Pop-up Box Class Name | string | - |
| popStyle |  Pop-up Style | string | - |
| prefix |  Prefix | slot | - |
| style | Style| string | - |
| suffix |  Suffix | slot | - |
| title | Pop-up Title | string \| slot | - |  
| value | Selected value | string \| number \| Array\<string \| number\> | - | 
| visible | Whether to display | boolean | false |
| defaultVisible | Display by default | boolean | false |
| onOk | Click the OK button to trigger the callback | (value: [PickerColumnItem](#pickercolumnitem),  column: [PickerColumnItem](#pickercolumnitem), event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onCancel | Click the cancel button/mask to trigger the callback | (event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onChange | The selected item changes, triggering a callback | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onFormat | Text display format of the selected value | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem)) => string | - | 
| onVisibleChange | Pop-up display/hide status change trigger | (visible: boolean, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 

### CascaderPicker
| Property | Description | Type | Default Value |
| -----|-----|-----|-----|
| animationType | Animation type, optional`transform` `position`, the default is used`transform`Animation performance is better. Due to a bug in the basic library of small programs, the picker-view shadow style in the pop-up window may have style problems under iOS and can be temporarily switched`position`Solve | string | `transform` |  
| className | Class Name| string | - |
| defaultValue | Default selected value | string[] | - | 
| disabled | Disable  | boolean | false | 
| cancelText | Cancel Copy | string | 'Cancel' |  
| content | Custom Content Slots | slot | - |
| format | Time format display, the format is the same[dayjs](https://day.js.org/docs/zh-CN/display/format)  | string | 'YYYY/MM/DD' | 
| indicatorStyle | Check Box Style | string | - |  
| indicatorClassName | Class name of the check box | string |  - |  
| maskClassName | Class name of the layer | string | - | 
| maskClosable |  Click whether the layer can be closed | boolean |true |  | 
| maskStyle | The style of the layer | string | - | 
| okText | Confirm Button Copy | string | 'OK' |  
| options | Optional data | [CascaderOption](#cascaderoption)[] | [] |
| placeholder | Prompt Copy | string | 'Please Select' |  
| popClassName |  Pop-up Box Class Name | string | - |
| popStyle |  Pop-up Style | string | - |
| prefix |  Prefix | slot | - |
| style | Style| string | - |
| suffix |  Suffix | slot | - |
| title | Pop-up Title | string \| slot | - |  
| value | Selected value | string[] | - | 
| visible | Whether to display | boolean | false |
| defaultVisible | Display by default | boolean | false |
| onOk | Click the OK button to trigger the callback | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onCancel | Click the cancel button/mask to trigger the callback | (event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onChange | The selected item changes, triggering a callback | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 
| onFormat | The text display format of the selected value. The default display is labels.join(''). | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[]) => string | - | 
| onVisibleChange | Pop-up display/hide status change trigger | (visible: boolean, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - | 

### PickerColumnItem 
| Parameters | Description | Type | Default Value |
| -----|-----|-----|-----|
| label | Text | string | - |
| value | Value | string \| number | - |

### CascaderOption
| Parameters | Description | Type | Default Value |
| -----|-----|-----|-----|
| label | Text | string | - |
| value | Value | string \| number | - |
| children | Sub Level | CascaderOption[] | - |

## FAQ 
### Exhibit exception when dynamically changing the number of picker columns
Due to the limitation of native picker-view, dynamic change of the number of columns is not supported for the time being.

