---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# Steps 步骤条

引导用户按照流程完成任务的导航条。当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-steps": "antd-mini/es/Steps/index"
#endif
#if WECHAT
  "ant-steps": "antd-mini/Steps/index"
#endif
}
```

## 代码示例

### 基本使用

> [items](#item) 数据驱动步骤条渲染。`current` 指定当前步骤，`status` 指定当前步骤的状态，可选 `finish` 或 `error`。

```xml
<ant-steps
  items="{{items}}"
  current="{{1}}"
  status="error"
/>
```

```js
Page({
  data: {
    items: [
      {
        title: 'Step1',
        description: 'description',
      },
      {
        title: 'Step2',
        description: 'description',
      },
      {
        title: 'Step3',
        description: 'description',
      },
    ],
  },
});
```

### 纵向步骤条

```xml
<ant-steps
  items="{{items}}"
  direction="vertical"
/>
```

### 受控模式

```xml
<ant-steps
  items="{{items}}"
  current="{{current}}"
/>
<ant-button
  type="primary"
#if ALIPAY
  onTap="onNextTap"
#endif
#if WECHAT
  bindtap="onNextTap"
#endif
>
  <view a:if="{{current < items.length - 1}}">下一步</view>
  <view a:else>完成</view>
</ant-button>
<ant-button
  a:if="{{current > 0}}"
#if ALIPAY
  onTap="onPrevTap"
#endif
#if WECHAT
  bindtap="onPrevTap"
#endif
  >
  上一步
</ant-button>
```

```js
Page({
  data: {
    current: 0,
    items: [
      {
        title: 'Step1',
        description: 'description',
      },
      {
        title: 'Step2',
        description: 'description',
      },
      {
        title: 'Step3',
        description: 'description',
      },
    ],
  },
  onNextTap() {
    if (this.data.current === this.data.items.length - 1) {
#if ALIPAY
      my.showToast({ content: 'Finish' })
#endif
#if WECHAT
      wx.showToast({ title: 'Finish' })
#endif
      return;
    }
    this.setData({
      current: this.data.current + 1,
    });
  },
  onPrevTap() {
    if (this.data.current === 0) {
      return;
    }
    this.setData({
      current: this.data.current - 1,
    });
  },
});
```

### Demo 代码

<code src='../../demo/pages/Steps/index'></code>

## API

| 属性        | 说明                                         | 类型            | 默认值       |
| ----------- | -------------------------------------------- | --------------- | ------------ |
| className   | 类名                                         | string          | -            |
| current     | 当前步骤                                     | number          | -            |
| description | 自定义描述内容渲染，接收 index 和 value      | slot            | -            |
| direction   | 方向，可选 `horizontal` 或 `vertical`        | string          | `horizontal` |
| icon        | 自定义图标渲染，接收 index 和 value          | slot            | -            |
| items       | 展示项                                       | [Item](#item)[] | -            |
| status      | 指定当前步骤的状态，可选 `finish` 或 `error` | string          | `finish`     |
| style       | 样式                                         | string          | -            |
| title       | 自定义标题渲染，接收 index 和 value          | slot            | -            |

### Item

| 属性        | 说明 | 类型   | 默认值 |
| ----------- | ---- | ------ | ------ |
| description | 内容 | string | -      |
| title       | 标题 | string | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注               |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --steps-non-active-bg | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div> | <div style="width: 150px; height: 30px; background-color: #444444; color: #ffffff;">#444444</div> | 未激活步骤背景颜色 |
| --steps-title-color   | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 步骤标题颜色       |
| --steps-desc-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 步骤描述颜色       |
| --steps-default-bg    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 默认步骤背景颜色   |
| --steps-finish-bg     | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div> | 完成步骤背景颜色   |
