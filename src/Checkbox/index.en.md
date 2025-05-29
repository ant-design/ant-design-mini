---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Checkbox

Make multiple selections in a set of options. When used alone, it can represent a switch between two states, and `switch` Similar. The difference is that switching `switch` will directly trigger a state change, while `checkbox` Generally used for status markers and needs to be coordinated with the submit operation.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-checkbox": "antd-mini/es/Checkbox/index",
  "ant-checkbox-group": "antd-mini/es/Checkbox/CheckboxGroup/index"
#endif
#if WECHAT
  "ant-checkbox": "antd-mini/Checkbox/index",
  "ant-checkbox-group": "antd-mini/Checkbox/CheckboxGroup/index"
#endif
}
```

## Code Sample

### Basic use

> By `checked` Checked state of the binding check box.

```xml
#if ALIPAY
<ant-checkbox checked="{{checked}}" onChange="handleCheckedChange">Basic usage</ant-checkbox>
#endif
#if WECHAT
<ant-checkbox checked="{{checked}}" bindchange="handleCheckedChange">Basic usage</ant-checkbox>
#endif
```

```js
Page({
  data: {
    checked: false,
  },
  handleCheckedChange(checked) {
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
#if ALIPAY
    this.setData({
      checked,
    });
#endif
  },
});
```

### Grouping

```xml
#if ALIPAY
<ant-checkbox-group
  value="{{value}}"
  options="{{options}}"
  onChange="handleValueChange"
/>
#endif
#if WECHAT
<ant-checkbox-group
  value="{{value}}"
  options="{{options}}"
  bindchange="handleValueChange"
/>
#endif
```

```js
Page({
  data:{
    value: ['banana'],
     options: [
      { value: 'apple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  handleValueChange(value) {
#if WECHAT
    this.setData({
      value: value.detail,
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
  },
});
```

### Custom Grouping

> `van-checkbox` Cooperation `list` Use together to support custom grouping selection

```xml
#if ALIPAY
<block
  a:for="{{customOptions}}"
  a:for-index="index"
  a:for-item="option"
>
  <ant-list header="{{option.title}}">
    <block
      a:for="{{option.list}}"
      a:for-index="index"
      a:for-item="item"
    >
      <ant-list-item>
        <ant-checkbox
          data-value="{{item.value}}"
          checked="{{utils.indexOf(customValue, item.value) > -1}}"
          onChange="handleCustomChange"
        >
          {{item.title}}
        </ant-checkbox>
      </ant-list-item>
    </block>
  </ant-list>
</block>
#endif
#if WECHAT
<block
  wx:for="{{customOptions}}"
  wx:for-index="index"
  wx:for-item="option"
>
  <ant-list header="{{option.title}}">
    <block
      wx:for="{{option.list}}"
      wx:for-index="index"
      wx:for-item="item"
    >
      <ant-list-item>
        <ant-checkbox
          data-value="{{item.value}}"
          checked="{{utils.indexOf(customValue, item.value) > -1}}"
          bindchange="handleCustomChange"
        >{{item.title}}</ant-checkbox>
      </ant-list-item>
    </block>
  </ant-list>
</block>
#endif
```

```js
Page({
  data: {
    customOptions: [
      {
        title: 'Group one',
        list: [
          {
            title: 'Option one',
            value: '1',
          },
        ],
      },
      {
        title: 'Group two',
        list: [
          {
            title: 'Option two',
            value: '2',
          },
        ],
      },
    ],
    customValue: [],
  },
  handleCustomChange(checked, e) {
    let value = this.data.customValue;

#if WECHAT
    const event = checked;
    if (event.detail) {
      value = value.concat(event.target.dataset.value);
    } else {
      value = value.filter((v) => v !== event.target.dataset.value);
    }
#endif

#if ALIPAY
    if (checked) {
      value = value.concat(e.target.dataset.value);
    } else {
      value = value.filter((v) => v !== e.target.dataset.value);
    }
#endif

    this.setData({ customValue: value });
    console.log(value);
  },
});
```

### Demo Code

<code src='../../demo/pages/Checkbox/index'></code>

## API

#### Checkbox

| Property                   | Description                    | Type                                                                                                | Default Value |
| ---------------------- | ----------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| checked                | Whether selected                | boolean                                                                                             | -      |
| className              | Class Name                    | string                                                                                              | -      |
| color                  | Selected color, same as CSS color value | string                                                                                              | -      |
| defaultChecked         | Is selected by default            | boolean                                                                                             | -      |
| disabled               | Disable                | boolean                                                                                             | false  |
| style                  | Style                    | string                                                                                              | -      |
| #if ALIPAY onChange    | Trigger callback when selection status changes  | (checked: boolean, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindchange | Trigger callback when selection status changes  | (checked: boolean, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

#### CheckboxGroup

| Property                   | Description                                                         | Type                                                                                                 | Default Value     |
| ---------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------- |
| className              | Class Name                                                         | string                                                                                               | -          |
| color                  | Selected color, same as CSS color value                                      | string                                                                                               | -          |
| defaultValue           | Default selected value                                                 | `string[]`                                                                                           | -          |
| disabled               | Disable                                                     | boolean                                                                                              | false      |
| label                  | Label area slot, receiving value (current item optional item), index (index) | slot                                                                                                 | -          |
| options                | Specify options                                                   | `{label: string; value: string; disabled: boolean}[]`                                                | -          |
| position               | layout, optional `horizontal`、`vertical`                          | string                                                                                               | `vertical` |
| style                  | Style                                                         | string                                                                                               | -          |
| value                  | The value of the CheckboxGroup to determine whether the child element is checked.                       | `string[]`                                                                                           | -          |
| #if ALIPAY onChange    | Check to trigger this function when status changes                                     | (value: `string[]`, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -          |
| #if WECHAT bindchange | Check to trigger this function when status changes                                     | (value: `string[]`, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -          |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                                | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --checkbox-header-color               | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Check Box Title Color       |
| --checkbox-border-color               | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #fff;">#474747</div> | Check Box Border Color       |
| --checkbox-background-color           | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Checkbox Background Color       |
| --checkbox-disabled-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #fff;">#121212</div> | Check box Disable background color   |
| --checkbox-text-color                 | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Check Box Text Color       |
| --checkbox-fake-icon-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div> | Check Box Fake Icon Background Color |
