---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Checklist

The check operation of the list.

- Select one or more in a group of list items.
- To use a checkable list, you need to check at least one item by default to make it easier for users to understand that the list can be checked.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-checklist": "antd-mini/es/Checklist/index",
#endif
#if WECHAT
  "ant-checklist": "antd-mini/Checklist/index",
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-checklist
  defaultValue="{{[1]}}"
  options="{{options}}"
  data-options="{{options}}"
  onChange="onChange" />
```

```js
Page({
  data: {
    options: [
      {
        value: 1,
        title: '可勾选列表项1',
      },
      {
        value: 2,
        title: '可勾选列表项2',
      },
      {
        value: 3,
        title: '可勾选列表项3',
      },
    ],
  },
  onChange(v, items, e) {
    console.log('当前选中的Value为：', v, items, e);
  },
});
```

### Controlled and Multiple Selection

> Incoming `multiple` Property supports multiple selection mode. `value` property and `onChange` Events are used together to achieve state control.

```xml
<ant-checklist
  value="{{value}}"
  options="{{options}}"
  multiple
  onChange="onChangeControlled" />
```

```js
Page({
  data: {
    value: [1, 2],
    options: [
      {
        value: 1,
        title: '可勾选列表项1',
      },
      {
        value: 2,
        title: '可勾选列表项2',
      },
      {
        value: 3,
        title: '可勾选列表项3',
      },
    ],
  },
  onChangeControlled(value) {
#if ALIPAY
    this.setData({ value });
#endif
#if WECHAT
    this.setData({ value: value.detail[0] });
#endif
  },
});
```

### Custom

> You can customize the check icon and style through the slot.

```xml
<ant-checklist
  defaultValue="{{[2]}}"
  options="{{options}}"
  multiple
  onChange="onChange">
  <view slot="icon">
    <ant-icon
      style="color: red"
      type="LikeOutline"
      className="demo-checklist-checked-icon" />
  </view>
  <view
    slot="content"
    slot-scope="props">
    title: {{props.item.title}}
  </view>
</ant-checklist>
```

### Demo Code

<code src='../../demo/pages/Checklist/index'></code>

## API

| Property                   | Description                                                 | Type                                                                                                                                                                                                             | Default Value |
| ---------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| className              | Class Name                                                 | string                                                                                                                                                                                                           | -      |
| content                | CheckListItem a custom content area scope slot that receives the item parameter | slot                                                                                                                                                                                                             | -      |
| defaultValue           | Data selected by default                                         | string \| number \| (string \| number)[]                                                                                                                                                                         | -      |
| icon                   | Customize the selected Icon slot                                 | slot                                                                                                                                                                                                             | -      |
| multiple               | Whether multiple selection is supported                                         | boolean                                                                                                                                                                                                          | false  |
| options                | Configure options for each column                                     | [ChecklistItem](#checklistitem)[]                                                                                                                                                                                | []     |
| style                  | Style                                                 | string                                                                                                                                                                                                           | -      |
| value                  | Selected data                                             | string \| number \| (string \| number)[]                                                                                                                                                                         | -      |
| #if ALIPAY onChange    | Trigger a callback when the selected item changes                           | (value: string \| number \| (string \| number)[], column: [ChecklistItem](#checklistitem) \| [ChecklistItem](#checklistitem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bindchange | Trigger a callback when the selected item changes                           | (value: string \| number \| (string \| number)[], column: [ChecklistItem](#checklistitem) \| [ChecklistItem](#checklistitem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### ChecklistItem

| Parameters        | Description     | Type    | Default Value |
| ----------- | -------- | ------- | ------ |
| description | Description     | string  | -      |
| disabled    | Disable | boolean | false  |
| image       | Picture     | string  | -      |
| readonly    | Read-only | boolean | false  |
| title       | Title     | string  | -      |
| value       | Value       | string  | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                                   | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks               |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --checklist-background-color             | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | List background color       |
| --check-list-item-background-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div> | List Item Background Color     |
| --check-list-item-hover-background-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #fff;">#2b2b2b</div> | List item hover background color |
| --check-list-item-content-color          | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | List Item Content Color     |
| --check-list-item-description-color      | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | List Item Description Color     |
