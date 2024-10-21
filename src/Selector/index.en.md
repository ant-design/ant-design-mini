---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---


# Selector Selector Assembly

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Select one or more in a set of options.
## When to use
Provides multiple options for users to select, typically used in filters and forms.

## Code Sample
### Basic use
<code src="../../demo/pages/Selector/index"></code>

### Use Selector to customize the Filter
<!-- <code src="pages/SelectorFilter/index"></code> -->

## API
| Property                 | Description                  | Type                   | Default Value |
| -------------------- | --------------------- | ---------------------- | ------ |
| activeItemClassName  | Class name of the selected option        | string                 | -      |
| activeItemStyle      | Styles for selected options        | string                 | -      |
| className            | Class Name                  | string                 | -      |
| defaultValue         | The default selection item, when multiple selection type is array | string \| number \| string[] \| number[] | - |
| disabled             | Whether the whole is disabled          | boolean                | false  |
| maxSelectedCount     | Maximum Number of Optional Items    | number                 | -      |
| minSelectedCount     | Number of minimum selectable items    | number                 | -      |
| multiple             | Whether to allow multi-selection, the current radio/multi-selection status will be displayed when the tab bar is displayed. | boolean                | false  |
| options              | Option Data Source            | [SelectorItem](#selectoritem)[] | []     |
| style                | Style                  | string                 | -      |
| value                | Current selection, array type for multiple selection | string \| number \| string[] \| number[] | - |
| onChange             | The selected value changes, triggering a callback | (v: string \| number \| undefined \| string[] \| number[], selectedItem: [SelectorItem](#selectoritem) \| undefined \| [SelectorItem](#selectoritem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onSelectMax          | Maximum Trigger Limit          | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onSelectMin          | Trigger Minimum Limit          | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

### SelectorItem
| Property      | Description          | Type        | Default Value |
| --------- | ------------- | ----------- | ------ |
| disabled  | Disable      | boolean     | -      |
| subText   | Deputy copywriter        | string      | -      |
| text      | Copy          | string      | -      |
| value     | Current item value | string \| number | -      |
