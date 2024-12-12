---
nav:
  path: /components
group:
  title: 数据展示
  order: 9
toc: 'content'
---

# Empty 空状态

使用场景插画来作为空状态场景的反馈提示，在需要展示空状态页面或者局部空状态区块时使用。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-empty": "antd-mini/es/Empty/index"
#endif
#if WECHAT
  "ant-empty": "antd-mini/Empty/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-empty
  size="small"
  title="Nothing Here"
  message="See Others"
/>
```

### 自定义图片

```xml
<ant-empty
  title="Nothing Here"
  message="See Others"
  image="{{imageUrl}}"
/>
```

### 添加行动点

```xml
<ant-empty
  title="Nothing Here"
  message="See Others"
  buttonInfo="{{horizontalButtonInfo}}"
#if ALIPAY
  onClickButton="onClickButton"
#endif
#if WECHAT
  bindclickbutton="onClickButton"
#endif
/>
```

```js
const BUTTON_LIST = [
  {
    type: 'primary',
    text: 'refresh',
  },
  {
    type: 'default',
    text: 'checkout internet',
  },
];

Page({
  data: {
    // 水平按钮布局
    horizontalButtonInfo: {
      layout: 'horizontal',
      list: BUTTON_LIST,
    },
    // 垂直按钮布局
    verticalButtonInfo: {
      layout: 'vertical',
      list: BUTTON_LIST,
    },
  },
});
```

### 使用插槽

```xml
<ant-empty
  title="Nothing Here"
  message="See Others"
>
  <view slot="extra">
    <ant-button
      size="small"
      inline
    >
      自定义操作按钮
    </ant-button>
  </view>
</ant-empty>
```

### Demo 代码

<code src='../../demo/pages/Empty/index'></code>

## API

| 属性                        | 说明                              | 类型                                              | 默认值   |
| --------------------------- | --------------------------------- | ------------------------------------------------- | -------- |
| className                   | 根节点类名                        | string                                            | -        |
| title                       | 标题文案                          | string \| slot                                    | -        |
| image                       | 图片，可传入字符串作为图片地址    | string \| slot                                    |
| message                     | 描述文案                          | string \| slot                                    | -        |
| style                       | 样式                              | string                                            | -        |
| size                        | 空状态尺寸，可选 `normal` `small` | string                                            | `normal` |
| buttonInfo                  | 自定义按钮                        | [ButtonInfo](#buttoninfo)                         | `normal` |
| #if ALIPAY onClickButton    | 点击按钮回调                      | (item: [ButtonInfoItem](#buttoninfoitem)) => void | -        |
| #if WECHAT bindclickbutton | 点击按钮回调                      | (item: [ButtonInfoItem](#buttoninfoitem)) => void | -        |

### ButtonInfo

| 属性   | 说明                                   | 类型                                | 默认值       |
| ------ | -------------------------------------- | ----------------------------------- | ------------ |
| layout | 布局方式，可选 `horizontal` `vertical` | string                              | `horizontal` |
| list   | 布局按钮配置                           | [ButtonInfoItem](#buttoninfoitem)[] | -            |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                    | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注               |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --empty-text-color        | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 空状态文本颜色     |
| --empty-asisst-text-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 空状态辅助文本颜色 |
