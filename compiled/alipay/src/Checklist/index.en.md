---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Checklist

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

The check operation of the list.

## When to use
- Select one or more in a group of list items.
- To use a checkable list, you need to check at least one item by default to make it easier for users to understand that the list can be checked.

## Code example
<code src='../../demo/pages/Checklist/index'></code>

## API
| Property       | Description                                                             | Type                        | Default Value |
| ---------- | ---------------------------------------------------------------- | --------------------------- | ------ |
| className  | Class Name                                                             | string                      | -      |
| content    | CheckListItem a custom content area scope slot that receives the item parameter              | slot                        | -      |
| defaultValue | Data selected by default                                                    | string \| number \| (string \| number)[] | - |
| icon       | Customize the selected Icon slot                                             | slot                        | -      |
| multiple   | Whether multiple selection is supported                                                     | boolean                     | false  |
| options    | Configure options for each column                                                 | [ChecklistItem](#checklistitem)[] | []     |
| style      | Style                                                             | string                      | -      |
| value      | Selected data                                                         | string \| number \| (string \| number)[] | - |
| onChange   | Trigger a callback when the selected item changes                                       | (value: string \| number \| (string \| number)[], column: [ChecklistItem](#checklistitem) \| [ChecklistItem](#checklistitem)[], event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### ChecklistItem

| Parameters        | Description     | Type    | Default Value |
| ----------- | -------- | ------- | ------ |
| description | Description     | string  | -      |
| disabled    | Disable | boolean | false  |
| image       | Picture     | string  | -      |
| readonly    | Read-only | boolean | false  |
| title       | Title     | string  | -      |
| value       | Value       | string  | -      |
