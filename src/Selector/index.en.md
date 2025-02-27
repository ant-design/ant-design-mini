---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Selector

Select one or more in a set of options. Provides multiple options for users to select, typically used in filters and forms.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-selector": "antd-mini/es/Selector/index"
#endif
#if WECHAT
  "ant-selector": "antd-mini/Selector/index"
#endif
}
```

## Code Sample

### Basic use

> [options](#selectoritem) property is an object that contains `text`(main copy), `subText`(Deputy Copywriter), `value`(option value), `disabled`(disabled or not).

```xml
  <ant-selector defaultValue="2" options="{{options}}" />
```

### multiple choice

> Incoming `multiple` Properties can support multiple selection.

```xml
  <ant-selector defaultValue="{{['1', '2']}}" options="{{options}}" multiple />
```

### Limit the number of selections

> `maxSelectedCount`、`minSelectedCount` property can limit the number of selections,`selectMax`、`selectMin` Event is triggered when the limit is exceeded.

```xml
<ant-selector
  options="{{options}}"
  multiple
  maxSelectedCount="{{4}}"
  minSelectedCount="{{2}}"
#if ALIPAY
  onSelectMax="onSelectMax"
  onSelectMin="onSelectMin"
#endif
#if WECHAT
  bindselectmax="onSelectMax"
  bindselectmin="onSelectMin"
#endif
/>
```

```js
Page({
  data: {
    items: [
      { text: '选项一', value: '1' },
      { text: '选项二', value: '2' },
      { text: '选项三', value: '3' },
    ],
  },
  onSelectMin(value, item) {
    console.log(value, item);
#if WECHAT
    wx.showModal({ content: 'Emptying not allowed' });
#endif
#if ALIPAY
    my.alert({ content: 'Emptying not allowed' });
#endif
  },
  onSelectMax() {
    console.log(value, item);
#if WECHAT
    wx.showModal({ content: '选择已达上限' });
#endif
#if ALIPAY
    my.alert({ content: '选择已达上限' });
#endif
  },
});
```

### Emptying not allowed

> To achieve that emptying is not allowed, use `minSelectedCount` Property Set Minimum Limit Number of Digits `1` , can.

```xml
<ant-selector defaultValue="1" options="{{options}}" minSelectedCount="{{1}}" />
```

### Controlled Mode

```xml
<ant-selector
  value="{{value}}"
  options="{{items}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
<ant-button
  size="large"
#if ALIPAY
  onTap="handleChangeValue"
#endif
#if WECHAT
  bindtap="handleChangeValue"
#endif
>
  Change the selected value to option three
</ant-button>
```

```js
Page({
  data: {
    items: [
      { text: '选项一', value: '1' },
      { text: '选项二', value: '2' },
      { text: '选项三', value: '3' },
    ],
    value: '1',
  },
  handleChangeValue() {
    this.setData({
      value: '3',
    });
  },
  handleChange(value, items, e) {
#if WECHAT
    this.setData({
      value: value.detail[0],
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
    console.log(value, items, e);
  },
});
```

### Use Selector to customize the Filter

> Reference below [Demo Code](#demo-代码) implementation in.

### Demo Code

<code src="../../demo/pages/Selector/index"></code>

## API

| Property                      | Description                                                    | Type                                                                                                                                                                                                                                     | Default Value |
| ------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| activeItemClassName       | Class name of the selected option                                          | string                                                                                                                                                                                                                                   | -      |
| activeItemStyle           | Styles for selected options                                          | string                                                                                                                                                                                                                                   | -      |
| className                 | Class Name                                                    | string                                                                                                                                                                                                                                   | -      |
| defaultValue              | The default selection item, when multiple selection type is array                            | string \| number \| string[] \| number[]                                                                                                                                                                                                 | -      |
| disabled                  | Whether the whole is disabled                                            | boolean                                                                                                                                                                                                                                  | false  |
| maxSelectedCount          | Maximum Number of Optional Items                                      | number                                                                                                                                                                                                                                   | -      |
| minSelectedCount          | Number of minimum selectable items                                      | number                                                                                                                                                                                                                                   | -      |
| multiple                  | Whether to allow multi-selection, the current radio/multi-selection status will be displayed when the tab bar is displayed. | boolean                                                                                                                                                                                                                                  | false  |
| options                   | Option Data Source                                              | [SelectorItem](#selectoritem)[]                                                                                                                                                                                                          | []     |
| style                     | Style                                                    | string                                                                                                                                                                                                                                   | -      |
| value                     | Current selection, array type for multiple selection                            | string \| number \| string[] \| number[]                                                                                                                                                                                                 | -      |
| #if ALIPAY onChange       | The selected value changes, triggering a callback                                | (v: string \| number \| undefined \| string[] \| number[], selectedItem: [SelectorItem](#selectoritem) \| undefined \| [SelectorItem](#selectoritem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if ALIPAY onSelectMax    | Maximum Trigger Limit                                            | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                          | -      |
| #if ALIPAY onSelectMin    | Trigger Minimum Limit                                            | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                          | -      |
| #if WECHAT bindchange    | The selected value changes, triggering a callback                                | (v: string \| number \| undefined \| string[] \| number[], selectedItem: [SelectorItem](#selectoritem) \| undefined \| [SelectorItem](#selectoritem)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindselectmax | Maximum Trigger Limit                                            | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                          | -      |
| #if WECHAT bindselectmin | Trigger Minimum Limit                                            | (value: string \| number, item: [SelectorItem](#selectoritem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                          | -      |

### SelectorItem

| Property     | Description         | Type             | Default Value |
| -------- | ------------ | ---------------- | ------ |
| disabled | Disable     | boolean          | -      |
| subText  | Deputy Copywriter       | string           | -      |
| text     | Copywriting         | string           | -      |
| value    | Current item value | string \| number | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                            | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --selector-background-color       | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Selector Background Color       |
| --selector-item-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | Selector item background color     |
| --selector-item-active-background | <div style="width: 150px; height: 30px; background-color: #e7f1ff; color: #333333;">#e7f1ff</div> | <div style="width: 150px; height: 30px; background-color: #0d2543; color: #ffffff;">#0d2543</div> | Selector Activate Item Background Color |
| --selector-item-color             | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Selector item color         |
| --selector-item-sub-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Selector item sub-color       |
