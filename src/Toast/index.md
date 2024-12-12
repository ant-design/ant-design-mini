---
nav:
  path: /components
group:
  title: 反馈引导
  order: 14
toc: 'content'
---

# Toast 轻提示

对操作结果的轻量级反馈，无需用户操作即可自行消失。最长文案不超过 2 行，最多可以显示 24 个字符，文案过长会被截断。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-toast": "antd-mini/es/Toast/index"
#endif
#if WECHAT
  "ant-toast": "antd-mini/Toast/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-toast
  content="toast content"
  visible="{{toastShow}}"
  duration="{{0}}"
  showMask="{{true}}"
  maskCloseable="{{true}}"
#if ALIPAY
  onClose="handleCloseToast"
#endif
#if WECHAT
  bindclose="handleCloseToast"
#endif
/>
```

```js
Page({
  data: {
    toastShow: true,
  },
  handleCloseToast(e) {
    this.setData({
      toastShow: false,
    });
  },
});
```

### 图标类型

> 传入 `type` 属性，可以使用内置图标，可选 `success`、`error`、`warning`、`loading`。支持 `icon` 属性指定 [ant-icon](/components/icon) 类型，还支持 `image` 属性自定义图片。

```xml
<ant-toast content="success" type="success" visible="{{true}}" />
<ant-toast content="error" type="error" visible="{{true}}" />
<ant-toast content="warning" type="warning" visible="{{true}}" />
<ant-toast content="loading" type="loading" visible="{{true}}" />
<ant-toast content="icon" icon="LikeOutline" visible="{{true}}" />
<ant-toast content="custom image" image="https://gw.alipayobjects.com/mdn/rms_5118be/afts/img/A*4NPGQ66arP0AAAAAAAAAAAAAARQnAQ" visible="{{true}}" />
```

### Demo 代码

<code src='../../demo/pages/Toast/index'></code>

## API

| 属性                  | 说明                                                              | 类型        | 默认值 |
| --------------------- | ----------------------------------------------------------------- | ----------- | ------ |
| className             | 组件根节点类名                                                    | string      | -      |
| content               | 文本内容                                                          | string      | -      |
| duration              | 持续时间，为 0 时不会自动关闭                                     | number      | 2000   |
| maskCloseable         | 点击蒙层是否关闭                                                  | boolean     | false  |
| icon                  | 图标，支持 Icon 组件所有 type                                     | string      | -      |
| image                 | 图片链接                                                          | string      | -      |
| maskStyle             | 蒙层样式                                                          | string      | -      |
| showMask              | 是否展示蒙层                                                      | boolean     | false  |
| style                 | 样式                                                              | string      | -      |
| type                  | 内置图标类型，可选 `success` `error` `warning` `loading` `alipay` | string      | -      |
| textType              | 文字类型，可选 `short` `long`，short 类型的圆角更大               | string      | `long` |
| visible               | 是否隐藏                                                          | boolean     | false  |
| #if ALIPAY onClose    | Toast 关闭后的回调                                                | (e) => void | -      |
| #if WECHAT bindclose | Toast 关闭后的回调                                                | (e) => void | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                | 浅色模式默认值                                                                                                    | 深色模式默认值                                                                                                    | 备注               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------ |
| --toast-default-bg    | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.75); color: #ffffff;">rgba(0, 0, 0, 0.75)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.75); color: #ffffff;">rgba(0, 0, 0, 0.75)</div> | Toast 默认背景颜色 |
| --toast-default-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div>                  | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div>                  | Toast 默认文字颜色 |
