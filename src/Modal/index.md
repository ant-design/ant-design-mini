---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Modal 弹窗

## 何时使用

当应用中需要比较明显的对用户当前的操作行为进行警示或提醒时，可以使用对话框。用户需要针对对话框进行操作后方可结束。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

```xml
<ant-modal
  content="人在天边月上明"
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
    /// #if ALIPAY
    my.showToast({ content: `点击了${buttonItem.text}`, duration: 1000 });
    /// #endif
    /// #if WECHAT
    wx.showToast({ title: `点击了${buttonItem.text}` });
    /// #endif
    this.handleClose();
  },
  handleClose() {
    this.setData({
      visible: false,
    });
  },
});
```

### Demo 代码

<code src='../../demo/pages/Modal/index'></code>

## API

| 属性                               | 说明                                              | 类型         | 默认值    |
| ---------------------------------- | ------------------------------------------------- | ------------ | --------- |
| bodyClassName                      | body 类名                                         | string       | -         |
| bodyStyle                          | body 样式                                         | string       | -         |
| cancelButtonStyle                  | 取消按钮样式                                      | string       | -         |
| cancelButtonText                   | 取消按钮文本                                      | string       | -         |
| className                          | 类名                                              | string       | -         |
| closable                           | 是否显示右上角的关闭按钮。仅在 type 为 focus 生效 | boolean      | -         |
| content                            | 内容                                              | string\|slot | -         |
| destroyOnClose                     | 不可见时是否卸载内容                              | boolean      | false     |
| footer                             | 自定义按钮区                                      | slot         | -         |
| maskClosable                       | 点击蒙层是否触发 onClose                          | boolean      | true      |
| maskClassName                      | 蒙层的类名                                        | string       | -         |
| maskStyle                          | 蒙层的样式                                        | string       | -         |
| primaryButtonStyle                 | 主按钮样式                                        | string       | -         |
| primaryButtonText                  | 主按钮文本                                        | string       | -         |
| secondaryButtonStyle               | 辅助按钮样式                                      | string       | -         |
| secondaryButtonText                | 辅助按钮文本                                      | string       | -         |
| style                              | 样式                                              | string       | -         |
| title                              | 标题                                              | string\|slot | -         |
| type                               | 类型，可选 `default`(默认)、`focus`(强调模式)     | string       | `default` |
| visible                            | 是否显示                                          | boolean      | false     |
| #if ALIPAY onCancelButtonTap       | 取消按钮点击事件                                  | ()=>void     | -         |
| #if ALIPAY onClose                 | 点击蒙层或强调模式下点击右上角关闭按钮，触发回调  | ()=>void     | -         |
| #if ALIPAY onPrimaryButtonTap      | 主按钮点击事件                                    | ()=>void     | -         |
| #if ALIPAY onSecondaryButtonTap    | 辅助按钮点击事件                                  | ()=>void     | -         |
| #if WECHAT bind:cancelbuttontap    | 取消按钮点击事件                                  | ()=>void     | -         |
| #if WECHAT bind:close              | 点击蒙层或强调模式下点击右上角关闭按钮，触发回调  | ()=>void     | -         |
| #if WECHAT bind:primarybuttontap   | 主按钮点击事件                                    | ()=>void     | -         |
| #if WECHAT bind:secondarybuttontap | 辅助按钮点击事件                                  | ()=>void     | -         |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                   | 默认值                                                                                            | 备注                   |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ---------------------- |
| --modal-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 模态框背景颜色         |
| --modal-title-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | 模态框标题颜色         |
| --modal-content-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | 模态框内容颜色         |
| --modal-close-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 模态框关闭按钮文字颜色 |
