---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# GuideTour

蒙层与自定义卡片的引导组件。适用于页面上关键功能的介绍。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-guide-tour": "antd-mini/es/GuideTour/index"
#endif
#if WECHAT
  "ant-guide-tour": "antd-mini/GuideTour/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-guide-tour
  items="{{items}}"
  visible="{{visible}}"
#if ALIPAY
  onCancel="closeTour"
  onChange="onChange"
#endif
#if WECHAT
  bindcancel="closeTour"
  bindchange="onChange"
#endif
/>
```

```js
Page({
  data: {
    visible: true,
    items: [
      { left: 20, top: 80, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/IV3MGP1qL/bianzu%25252013.png', imageMode: 'widthFix' },
      { left: 20, top: 160, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/%26B6d3lBJn/bianzu%25252020.png' },
      { left: 20, top: 220, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/lwVOkCcwb/bianzu%25252021.png' },
    ],
  },
  onChange(index) {
#if ALIPAY
    console.log('index', index);
#endif
  },
  closeTour() {
    this.setData({
      visible: false,
    });
  },
});
```

### 受控模式

```xml

<ant-guide-tour
  items="{{items}}"
  current="{{current}}"
  visible="{{visible}}"
#if ALIPAY
  onCancel="closeTour"
  onChange="onChangeControlled"
#endif
#if WECHAT
  bindcancel="closeTour"
  bindchange="onChangeControlled"
#endif
/>

```

```js
Page({
  data: {
    visible: false,
    current: 0,
    items: [
      { left: 20, top: 80, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/IV3MGP1qL/bianzu%25252013.png', imageMode: 'widthFix' },
      { left: 20, top: 160, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/%26B6d3lBJn/bianzu%25252020.png' },
      { left: 20, top: 220, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/lwVOkCcwb/bianzu%25252021.png' },
    ],
  },
  onChangeControlled(value) {
#if ALIPAY
    this.setData({ current: value });
#endif
#if WECHAT
    this.setData({ current: value.detail });
#endif
  },
  closeTour() {
    this.setData({
      visible: false
    });
  },
});


```

### Demo 代码

<code src='../../demo/pages/GuideTour/index'></code>

## API

| 属性                   | 说明             | 类型                                | 默认值   |
| ---------------------- | ---------------- | ----------------------------------- | -------- |
| className              | 类名             | `string`                            | -        |
| current                | 当前步骤         | `number`                            | -        |
| defaultCurrent         | 默认当前步骤     | `number`                            | 0        |
| items                  | 步骤信息         | [`GuideTourItem`](#guidetourttem)[] | -        |
| maskClassName          | 蒙层的类名       | `string`                            | -        |
| maskStyle              | 蒙层的样式       | `string`                            | -        |
| style                  | 样式             | `string`                            | -        |
| swiperable             | 是否开启滑动模式 | `boolean`                           | `false`  |
| visible                | 是否显示         | `boolean`                           | `false`  |
| jumpText               | 跳过按钮的文案   | `string`                            | '跳过'   |
| prevStepText           | 上一步按钮的文案 | `string`                            | '上一步' |
| nextStepText           | 下一步按钮的文案 | `string`                            | '下一步' |
| gotItText              | 知道了按钮的文案 | `string`                            | '知道了' |
| #if ALIPAY onCancel    | 关闭回调         | `() => void`                        | -        |
| #if ALIPAY onChange    | 步骤改变回调     | `(index: number) => void`           | -        |
| #if WECHAT bindcancel | 关闭回调         | `() => void`                        | -        |
| #if WECHAT bindchange | 步骤改变回调     | `(index: number) => void`           | -        |

### GuideTourItem

| 参数       | 说明                       | 类型     | 默认值 |
| ---------- | -------------------------- | -------- | ------ |
| left       | 距离左边距离，单位 `px`    | `number` | -      |
| imageMode  | 图片模式，同 image 的 mode | `string` | -      |
| imageStyle | 图片内联样式               | `string` | -      |
| imageUrl   | 图片地址                   | `string` | -      |
| top        | 距离顶部距离，单位 `px`    | `number` | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                    | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                 |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- |
| --guide-tour-text-color   | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 引导教程文本颜色     |
| --guide-tour-clear-color  | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 引导教程清除按钮颜色 |
| --guide-tour-dot-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 引导教程步骤点颜色   |
| --guide-tour-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | 引导教程边框颜色     |
| --guide-tour-btn-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 引导教程按钮颜色     |
