---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: 'content'
---

# Dialog 对话框

当应用中需要比较明显的对用户当前的操作行为进行警示或提醒时，可以使用对话框。用户需要针对对话框进行操作后方可结束。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

```xml
<ant-dialog
  content="人在天边月上明"
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

### 多行动点

> `footer` 属性支持传入多个行动点，并且可以指定 `layout` 为 `vertical`或`horizontal`，即行动点横向、纵向布局。

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

### Demo 代码

<code src='../../demo/pages/Dialog/index'></code>

## API

| 属性                         | 说明                                              | 类型         | 默认值 |
| ---------------------------- | ------------------------------------------------- | ------------ | ------ |
| bodyClassName                | body 类名                                         | string       | -      |
| bodyStyle                    | body 样式                                         | string       | -      |
| cancelButtonStyle            | 取消按钮样式                                      | string       | -      |
| cancelButtonText             | 取消按钮文本                                      | string       | -      |
| className                    | 类名                                              | string       | -      |
| closable                     | 是否显示右上角的关闭按钮。仅在 type 为 focus 生效 | boolean      | -      |
| content                      | 内容                                              | string\|slot | -      |
| destroyOnClose               | 不可见时是否卸载内容                              | boolean      | false  |
| footer                       | 自定义按钮区                                      | slot         | -      |
| maskClosable                 | 点击蒙层是否触发 onClose                          | boolean      | true   |
| maskClassName                | 蒙层的类名                                        | string       | -      |
| maskStyle                    | 蒙层的样式                                        | string       | -      |
| style                        | 样式                                              | string       | -      |
| title                        | 标题                                              | string\|slot | -      |
| visible                      | 是否显示                                          | boolean      | false  |
| #if ALIPAY onCancelButtonTap | 取消按钮点击事件                                  | ()=>void     | -      |
| #if ALIPAY onClose           | 点击蒙层或强调模式下点击右上角关闭按钮，触发回调  | ()=>void     | -      |
| #if ALIPAY onButtonTap       | 行为按钮点击事件                                  | ()=>void     | -      |
| #if WECHAT bindclose        | 点击蒙层或强调模式下点击右上角关闭按钮，触发回调  | ()=>void     | -      |
| #if WECHAT bindbuttontap    | 行为按钮点击事件                                  | ()=>void     | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                    | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                   |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------- |
| --dialog-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | 模态框背景颜色         |
| --dialog-title-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 模态框标题颜色         |
| --dialog-content-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 模态框内容颜色         |
| --dialog-close-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 模态框关闭按钮文字颜色 |
