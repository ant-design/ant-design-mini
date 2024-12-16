---
nav:
  path: /components
group:
  title: 待废弃
  order: 99
toc: 'content'
---

# Modal 弹窗

不建议使用，此组件即将废弃。推荐使用 [Dialog](/components/dialog) 组件，拥有最新设计规范。

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
| #if WECHAT bindcancelbuttontap    | 取消按钮点击事件                                  | ()=>void     | -         |
| #if WECHAT bindclose              | 点击蒙层或强调模式下点击右上角关闭按钮，触发回调  | ()=>void     | -         |
| #if WECHAT bindprimarybuttontap   | 主按钮点击事件                                    | ()=>void     | -         |
| #if WECHAT bindsecondarybuttontap | 辅助按钮点击事件                                  | ()=>void     | -         |
