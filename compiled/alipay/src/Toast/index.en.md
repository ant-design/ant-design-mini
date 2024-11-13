---
nav:
  path: /components
group:
  title: Feedback
  order: 14
toc: 'content'
---

# Toast

## When to use

Lightweight feedback on the results of the operation, without user action can disappear. The longest copy can be no more than 2 lines and can display up to 24 characters. If the copy is too long, it will be truncated.

## Introduction

In `index.json` Introducing Components in

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

## Code Sample

### Basic use

```xml
<ant-toast
  content="这是一段提示文案"
  visible="{{ toastShow }}"
  duration="{{ 0 }}"
  showMask="{{ true }}"
  maskCloseable="{{ true }}"
#if ALIPAY
  onClose="handleCloseToast"
#endif
#if WECHAT
  bind:close="handleCloseToast"
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

### Icon type

> Incoming `type` property, you can use the built-in icon, optional `success`、`error`、`warning`、`loading`. Support `icon` property specifies [ant-icon](/components/icon) type, also supports `image` Property to customize the image.

```xml
<ant-toast content="操作成功" type="success" visible="{{ true }}" />
<ant-toast content="操作失败" type="error" visible="{{ true }}" />
<ant-toast content="警告" type="warning" visible="{{ true }}" />
<ant-toast content="加载中" type="loading" visible="{{ true }}" />
<ant-toast content="icon" icon="LikeOutline" visible="{{ true }}" />
<ant-toast content="自定义图片" image="https://gw.alipayobjects.com/mdn/rms_5118be/afts/img/A*4NPGQ66arP0AAAAAAAAAAAAAARQnAQ" visible="{{ true }}" />
```

## Demo Code

<code src='../../demo/pages/Toast/index'></code>

## API

| Property                  | Description                                                     | Type        | Default Value |
| --------------------- | -------------------------------------------------------- | ----------- | ------ |
| className             | Component root node class name                                           | string      | -      |
| content               | Text content                                                 | string      | -      |
| duration              | Duration, does not automatically close when 0                            | number      | 2000   |
| maskCloseable         | Click whether the layer is closed                                         | boolean     | false  |
| icon                  | Icon, supports all types of Icon components                            | string      | -      |
| image                 | Picture Link                                                 | string      | -      |
| maskStyle             | Masked Style                                                 | string      | -      |
| showMask              | Whether to show the layer                                             | boolean     | false  |
| style                 | Style                                                     | string      | -      |
| type                  | Built-in icon type, optional `success` `error` `warning` `loading` | string      | -      |
| visible               | Whether to hide                                                 | boolean     | false  |
| #if ALIPAY onClose    | Callback after Toast is closed                                       | (e) => void | -      |
| #if WECHAT bind:close | Callback after Toast is closed                                       | (e) => void | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                | Default Value                                                                                                                    | Remarks               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| --toast-default-bg    | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.75); color: #ffffff;">rgba(0, 0, 0, 0.75)</div> | Toast Default Background Color |
| --toast-default-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div>                         | Toast Default Text Color |
