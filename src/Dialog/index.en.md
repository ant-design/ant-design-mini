---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Dialog

When the application needs to alert or remind the current operation behavior of the user, the dialog box may be used. The user needs to operate on the dialog box before ending.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-dialog": "antd-mini/es/Dialog/index"
#endif
#if WECHAT
  "ant-dialog": "antd-mini/Dialog/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-dialog
  content="人In天边月上明"
  visible="{{visible}}"
  closable="{{false}}"
  footer="{{footer}}"
  primaryButtonText="我知道了"
#if ALIPAY
  onButtonTap="onButtonTap"
  onClose="handleClose"
#endif
#if WECHAT
  bindbuttontap="onButtonTap"
  bindclose="handleClose"
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
#if ALIPAY
    my.showToast({ content: `点击了${buttonItem.text}`, duration: 1000 });
#endif
#if WECHAT
    wx.showToast({ title: `点击了${buttonItem.text}` });
#endif
    this.handleClose();
  },
  handleClose() {
    this.setData({
      visible: false,
    });
  },
});
```

### Multiple Action Points

> `footer` property supports the passing in of multiple action points, and you can specify `layout` For `vertical`or`horizontal`That is, the horizontal and vertical layout of the action point.

```xml
<ant-dialog
  title="确定删除吗？"
  content="删除后无法恢复"
  visible="{{true}}"
  footer="{{horizontalFooter}}"
/>
```

```js
Page({
  data: {
    // 横向布局
    horizontalFooter: {
      buttons: [
        { text: '取消', type: 'default' },
        { text: '确定', type: 'primary' },
      ],
      layout: 'horizontal',
    },
    // 纵向布局
    verticalFooter: {
      buttons: [
        { text: '主按钮', type: 'primary' },
        { text: '更多', type: 'default' },
        { text: '取消', type: 'text' },
      ],
    },
  },
});
```

### Demo Code

<code src='../../demo/pages/Dialog/index'></code>

## API

| Property                         | Description                                              | Type         | Default Value |
| ---------------------------- | ------------------------------------------------- | ------------ | ------ |
| bodyClassName                | body class name                                         | string       | -      |
| bodyStyle                    | body style                                         | string       | -      |
| cancelButtonStyle            | Cancel Button Style                                      | string       | -      |
| cancelButtonText             | Cancel Button Text                                      | string       | -      |
| className                    | Class Name                                              | string       | -      |
| closable                     | Whether to display the close button in the upper right corner. Effective only when type is focus | boolean      | -      |
| content                      | Content                                              | string\|slot | -      |
| destroyOnClose               | Whether to unload content when invisible                              | boolean      | false  |
| footer                       | Custom Button Area                                      | slot         | -      |
| maskClosable                 | Click whether the mask triggers onClose                          | boolean      | true   |
| maskClassName                | Class name of the layer                                        | string       | -      |
| maskStyle                    | Mask Style                                        | string       | -      |
| style                        | Style                                              | string       | -      |
| title                        | Title                                              | string\|slot | -      |
| visible                      | Whether to display                                          | boolean      | false  |
| #if ALIPAY onCancelButtonTap | Cancel button click event                                  | ()=>void     | -      |
| #if ALIPAY onClose           | Click the close button in the upper right corner in the layer or emphasis mode to trigger the callback  | ()=>void     | -      |
| #if ALIPAY onButtonTap       | Behavior button click event                                  | ()=>void     | -      |
| #if WECHAT bindclose        | Click the close button in the upper right corner in the layer or emphasis mode to trigger the callback  | ()=>void     | -      |
| #if WECHAT bindbuttontap    | Behavior button click event                                  | ()=>void     | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                    | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                   |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------- |
| --dialog-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Modal Box Background Color         |
| --dialog-title-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Modal Box Title Color         |
| --dialog-content-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Modal Box Content Color         |
| --dialog-close-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Modal Box Close Button Text Color |
