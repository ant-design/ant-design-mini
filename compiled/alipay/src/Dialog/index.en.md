---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Modal

## When to use

When the application needs to alert or remind the current operation behavior of the user, the dialog box may be used. The user needs to operate on the dialog box before ending.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-modal": "antd-mini/es/Modal/index"
#endif
#if WECHAT
  "ant-modal": "antd-mini/Modal/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-modal
  content="人In天边月上明"
  visible="{{ visible }}"
  closable="{{ false }}"
  footer="{{ footer }}"
  primaryButtonText="我知道了"
#if ALIPAY
  onButtonTap="onButtonTap"
  onClose="handleClose"
#endif
#if WECHAT
  bind:buttontap="onButtonTap"
  bind:close="handleClose"
#endif
  />
```

```js
Page({
  data: {
    visible: false,
    footer: {
      buttons: [{ text: '我知道了' }],
    },
  },
  onButtonTap(buttonItem) {
    console.log('点击的按钮: ', buttonItem);
    my.showToast({ content: `点击了${buttonItem.text}`, duration: 1000 });
    this.handleClose();
  },
  handleClose() {
    this.setData({
      visible: false,
    });
  },
});
```

### Demo Code

<code src='../../demo/pages/Modal/index'></code>

## API

| Property                               | Description                                              | Type         | Default Value    |
| ---------------------------------- | ------------------------------------------------- | ------------ | --------- |
| bodyClassName                      | body class name                                         | string       | -         |
| bodyStyle                          | body style                                         | string       | -         |
| cancelButtonStyle                  | Cancel Button Style                                      | string       | -         |
| cancelButtonText                   | Cancel Button Text                                      | string       | -         |
| className                          | Class Name                                              | string       | -         |
| closable                           | Whether to display the close button in the upper right corner. Valid only when type is focus | boolean      | -         |
| content                            | Content                                              | string\|slot | -         |
| destroyOnClose                     | Whether to unload content when invisible                              | boolean      | false     |
| footer                             | Custom Button Area                                      | slot         | -         |
| maskClosable                       | Click whether the layer triggers the onClose.                          | boolean      | true      |
| maskClassName                      | Class name of the layer                                        | string       | -         |
| maskStyle                          | Mask Style                                        | string       | -         |
| primaryButtonStyle                 | Main Button Style                                        | string       | -         |
| primaryButtonText                  | Main button text                                        | string       | -         |
| secondaryButtonStyle               | Auxiliary Button Style                                      | string       | -         |
| secondaryButtonText                | Secondary Button Text                                      | string       | -         |
| style                              | Style                                              | string       | -         |
| title                              | Title                                              | string\|slot | -         |
| type                               | type, optional `default`(default),`focus`(emphasis mode)     | string       | `default` |
| visible                            | Display                                          | boolean      | false     |
| #if ALIPAY onCancelButtonTap       | Cancel button click event                                  | ()=>void     | -         |
| #if ALIPAY onClose                 | Click the close button in the upper right corner of the mask or emphasis mode to trigger the callback  | ()=>void     | -         |
| #if ALIPAY onPrimaryButtonTap      | Main button click event                                    | ()=>void     | -         |
| #if ALIPAY onSecondaryButtonTap    | Secondary button click event                                  | ()=>void     | -         |
| #if WECHAT bind:cancelbuttontap    | Cancel button click event                                  | ()=>void     | -         |
| #if WECHAT bind:close              | Click the close button in the upper right corner of the mask or emphasis mode to trigger the callback  | ()=>void     | -         |
| #if WECHAT bind:primarybuttontap   | Main button click event                                    | ()=>void     | -         |
| #if WECHAT bind:secondarybuttontap | Secondary button click event                                  | ()=>void     | -         |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                   | Default Value                                                                                            | Remarks                   |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ---------------------- |
| --modal-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Modal Box Background Color         |
| --modal-title-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Modal Box Title Color         |
| --modal-content-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Modal Box Content Color         |
| --modal-close-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | Modal Box Close Button Text Color |
