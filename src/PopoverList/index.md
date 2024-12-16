---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# PopoverList 气泡菜单

点击元素，弹出气泡式的菜单。用于导航功能的气泡菜单唤起，通常用于收纳低频使用的功能。该功能只能通过导航栏上的图标激活。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-popover-list": "antd-mini/es/PopoverList/index"
#endif
#if WECHAT
  "ant-popover-list": "antd-mini/PopoverList/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-popover-list
  visible="{{visible}}"
  list="{{list}}"
  placement="bottom-right"
#if ALIPAY
  onTapItem="handleTapItem"
  onVisibleChange="handleVisibleChange"
#endif
#if WECHAT
  bindtapitem="handleTapItem"
  bindvisiblechange="handleVisibleChange"
#endif
>
  <ant-button inline>点我</ant-button>
</ant-popover-list>
```

```js
Page({
  data: {
    visible: true,
    list: [
      { text: '扫一扫', icon: 'ScanningOutline', showBadge: true, id: 'scan', },
      { text: '付钱/收钱', icon: 'ReceivePaymentOutline', showBadge: false, id: 'pay', },
      { text: '乘车码', icon: 'TransportQRcodeOutline', showBadge: false, id: 'code', },
      { text: '图片', iconImage: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ', showBadge: false, id: 'image', },
    ],
  },
  handleVisibleChange(visible, e) {
    console.log(visible, e);
#if ALIPAY
    this.setData({ visible });
#endif
#if WECHAT
    this.setData({ visible: visible.detail });
#endif
  },
  handleTapItem(e, item) {
    console.log(e, item);
    this.setData({ visible: false });
#if ALIPAY
    my.showToast({ content: '点击列表', duration: 1000 });
#endif
#if WECHAT
    wx.showToast({ title: '点击列表' });
#endif
  },
});
```

### 气泡位置自适应

> `autoAdjustOverflow` 属性，可以让气泡被遮挡时自动调整位置

```xml
<ant-popover-list
  visible="{{true}}"
  list="{{list}}"
  autoAdjustOverflow="{{true}}"
>
  <ant-button inline style="margin-top: 500px;">气泡位置自适应</ant-button>
</ant-popover-list>
```

### Demo 代码

<code src='../../demo/pages/PopoverList/index'></code>

## API

| 属性                          | 说明                                                                                                                                                                | 类型                                                                                                                         | 默认值 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ |
| autoAdjustOverflow            | 气泡被遮挡时的自动调整位置                                                                                                                                          | boolean                                                                                                                      | true   |
| className                     | 类名                                                                                                                                                                | string                                                                                                                       | -      |
| color                         | 背景颜色                                                                                                                                                            | string                                                                                                                       | -      |
| contentClassName              | content 类名                                                                                                                                                        | string                                                                                                                       | -      |
| contentStyle                  | content 样式                                                                                                                                                        | string                                                                                                                       | -      |
| content                       | 内容                                                                                                                                                                | string \| slot                                                                                                               | -      |
| defaultVisible                | 默认是否显示                                                                                                                                                        | boolean                                                                                                                      | false  |
| destroyOnClose                | 不可见时是否卸载内容                                                                                                                                                | boolean                                                                                                                      | false  |
| maskClassName                 | 蒙层的类名                                                                                                                                                          | string                                                                                                                       | -      |
| maskStyle                     | 蒙层的样式                                                                                                                                                          | string                                                                                                                       | -      |
| placement                     | 气泡框位置，可选 `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` 或 `right-bottom` | string                                                                                                                       | top    |
| showMask                      | 是否展示蒙层，为 true 时点击空白处可关闭 Popover                                                                                                                    | boolean                                                                                                                      | true   |
| style                         | 样式                                                                                                                                                                | string                                                                                                                       | -      |
| visible                       | 是否显示                                                                                                                                                            | boolean                                                                                                                      | -      |
| #if ALIPAY onVisibleChange    | visible 变更时的回调                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                          | -      |
| #if ALIPAY onTapItem          | visible 变更时的回调                                                                                                                                                | (item: [PopoverListItem](#popoverlistitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindvisiblechange | visible 变更时的回调                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                          | -      |
| #if WECHAT bindtapitem       | visible 变更时的回调                                                                                                                                                | (item: [PopoverListItem](#popoverlistitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

### PopoverListItem

| 属性      | 说明                                                    | 类型    | 默认值 |
| --------- | ------------------------------------------------------- | ------- | ------ |
| icon      | 菜单的 icon                                             | string  | -      |
| iconImage | 菜单的 icon 的图片, 优先取 iconImage 没有再取 icon 字段 | string  | -      |
| text      | 类名                                                    | string  | -      |
| showBadge | 是否禁用                                                | boolean | false  |
| id        | 右侧额外内容                                            | string  | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                       | 默认值                                                                                                                    | 深色模式默认值                                                                                                            | 备注                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --popover-list-content-bg    | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | Popover 列表内容背景颜色 |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Popover 列表内容颜色     |
| --popover-list-badge-color   | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | Popover 列表徽章颜色     |
|  --popover-list-item-bg      | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div>                         | <div style="width: 150px; height: 30px; background-color: #444444; color: #ffffff;">#444444</div>                         | Popover 列表内容文字颜色 |
