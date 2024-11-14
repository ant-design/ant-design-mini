---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# ActionSheet

Actions menu panel that pops up from the bottom.

## When to use

Triggered by a user action, providing a set of two or more options related to the action, allowing the user to complete the action without leaving the field. Compared with the dialog box, the position of the action panel is more suitable for the scene of one-handed operation in the era of large screen.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-action-sheet": "antd-mini/es/ActionSheet/index"
#endif
#if WECHAT
  "ant-action-sheet": "antd-mini/ActionSheet/index"
#endif
}
```

## Code Sample

### Basic use

> `ant-action-sheet` Components must pass `visible` Property controls the show/hide state.`actions` property passes in the data to drive the options rendering.

```xml
<ant-action-sheet
  title="请选择你要进行的操作"
  visible="{{ visible }}"
  actions="{{ actions }}"
#if ALIPAY
  onAction="handleAction"
  onClose="handleClose"
#endif
#if WECHAT
  bind:action="handleAction"
  bind:close="handleClose"
#endif
/>

<ant-button
  inline="{{ true }}"
  size="large"
#if ALIPAY
  onTap="handleOpen"
#endif
#if WECHAT
  bind:tap="handleOpen"
#endif
>
  Open Panel
</ant-button>
```

```js
Page({
  data: {
    visible: true,
    actions: [
      {
        text: '复制',
        key: 'copy',
      },
      {
        text: '修改',
        key: 'modify',
      },
    ],
  },
  handleOpen() {
    this.setData({
      visible: true,
    });
  },
  handleClose(e) {
    this.setData({
      visible: false,
    });
  },
  handleAction(item, index, e) {
#if ALIPAY
    if (item.key === 'delete') {
      my.confirm({
        content: '你确定要删除吗?',
      });
      return;
    }
    my.alert({ content: `你点击了${item.key}` });
#endif
#if WECHAT
    const [clickItem, clickIndex] = item.detail;
    wx.showToast({ title: `你点击了${clickItem.key}(${clickIndex})` });
#endif
  },
});
```

### Option Status

> [actions](#actionsheetitem) Each of the items provided `icon` `danger` `description` `disabled` Used to set the option state.

```xml
<ant-action-sheet
  title="请选择你要进行的操作"
  actions="{{ actions }}"
/>
```

```js
Page({
  data: {
    actions: [
      {
        text: '复制',
        key: 'copy',
        description: '请选择复制内容',
      },
      {
        text: '修改',
        key: 'modify',
        disabled: true,
      },
      {
        text: '删除',
        key: 'delete',
        danger: true,
      },
      {
        text: '备份',
        key: 'backup',
        description: '请选择要备份的内容',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*I0oNS4RCQzUAAAAAAAAAAAAAARQnAQ',
      },
      {
        text: '保存',
        key: 'save',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*BNczQ7hmp2gAAAAAAAAAAAAAARQnAQ',
      },
      {
        text: '同步',
        key: 'sync',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*eRaVSrV56dIAAAAAAAAAAAAAARQnAQ',
      },
    ],
  },
});
```

### Demo Code

<code src='../../demo/pages/ActionSheet/index'></code>

## API

| Property                   | Description                               | Type                                                                                                                                        | Default Value |
| ---------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| actions                | Panel Options List                       | [ActionSheetItem](#actionsheetitem)[]                                                                                                       | []     |
| cancelText             | Cancel Button Text                       | string                                                                                                                                      | Cancel   |
| className              | Class Name                               | string                                                                                                                                      | -      |
| style                  | Style                               | string                                                                                                                                      | -      |
| title                  | Title                               | string                                                                                                                                      | -      |
| visible                | Whether to expand                           | boolean                                                                                                                                     | false  |
| zIndex                 | Pop-up Level                           | number                                                                                                                                      | 998    |
| #if ALIPAY onClose     | Trigger on shutdown                         | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                           | -      |
| #if ALIPAY onAction    | Triggered when option is clicked, not triggered when disabled | (item: [ActionSheetItem](#actionsheetitem), index: number, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bind:close  | Trigger on shutdown                         | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                           | -      |
| #if WECHAT bind:action | Triggered when option is clicked, not triggered when disabled | (item: [ActionSheetItem](#actionsheetitem), index: number, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

### ActionSheetItem

| Property        | Description         | Type    | Default Value |
| ----------- | ------------ | ------- | ------ |
| text        | Text         | string  | -      |
| icon        | Icons         | -       | -      |
| danger      | Whether dangerous mode | boolean | false  |
| description | Description         | string  | -      |
| disabled    | Disable     | boolean | false  |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                       | Default Value                                                                                           | Remarks           |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | -------------- |
| --actionsheet-danger-color   | <div style="width: 150px; height: 30px; background-color: #ff3141;">#ff3141</div>                | Hazardous color       |
| --actionsheet-title-color    | <div style="width: 150px; height: 30px; background-color: #999999;">#999999</div>                | Title Color       |
| --actionsheet-item-color     | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff">#333333</div> | Item Color       |
| --actionsheet-item-active-bg | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333">#eeeeee</div> | Entries Activate Background Color |
| --activesheet-item-cancel-bg | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333">#f5f5f5</div> | Entries cancel background color |
