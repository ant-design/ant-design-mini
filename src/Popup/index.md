---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: 'content'
---

# Popup 弹出层

从屏幕滑出或弹出一块自定义内容区。用于展示弹窗、信息提示、选择输入、切换等内容，支持多个弹出层叠加展示。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-popup": "antd-mini/es/Popup/index"
#endif
#if WECHAT
  "ant-popup": "antd-mini/Popup/index"
#endif
}
```

## 代码示例

### 基本使用

> - `ant-popup` 组件必须通过 `visible` 属性控制显示/隐藏状态。`position` 指定出现方向，可选 `top` `bottom` `left` `right`。弹窗中的内容通过插槽的形式填入。
> - `close` 事件会在点击右上角关闭 icon 或点击蒙层关闭时触发。
> - `clickBack` 事件会在点击左上角返回按钮时触发。

```xml
<ant-popup
  visible="{{visible}}"
  position="bottom"
  title="title"
  height="{{250}}"
  width="{{250}}"
  showClose="{{true}}"
  showBack="{{true}}"
#if ALIPAY
  onClickBack="onClickBack"
  onClose="handlePopupClose"
#endif
#if WECHAT
  bindclickback="onClickBack"
  bindclose="handlePopupClose"
#endif
>
  <view style="padding: 12px">
    从屏幕滑出或弹出一块自定义内容区，用于展示弹窗、信息提示、选择输入、切换等内容。
  </view>
</ant-popup>
```

```js
Page({
  data: {
    visible: true,
  },
  onClickBack() {
#if ALIPAY
    my.showToast({ content: 'clicked icon', duration: 1000 });
#endif
#if WECHAT
    wx.showToast({ content: 'clicked icon', duration: 1000 });
#endif
  },
  handlePopupClose() {
    this.setData({
      visible: false,
    });
  },
});
```

### 设置背景图

> `backgroundImage` 属性，可以为整个弹层设置背景。

```xml
<ant-popup
  visible="{{true}}"
  height="{{450}}"
  className="customize-top-image-popup"
  backgroundImage="https://mdn.alipayobjects.com/huamei_ahikbw/afts/img/A*jVxmQq4bhoUAAAAAAAAAAAAADiWwAQ/original"
  position="bottom"
  showClose="{{false}}">
  <view class="customize-content">
    Ea consectetur ipsum consequat exercitation laboris excepteur pariatur
    excepteur labore dolor cillum tempor esse. Ad adipisicing nostrud fugiat eu
    mollit. Proident nisi voluptate sunt ea laboris Lorem ullamco deserunt aute
    incididunt cillum tempor duis est. Elit voluptate laboris laborum anim
  </view>
</ant-popup>
```

### 超长内容滚动

> 如果弹窗内内容过长需要支持滚动，请使用 [scroll-view](https://opendocs.alipay.com/mini/component/scroll-view?pathHash=8292073d) 组件，并添加以下属性：

```xml
<ant-popup
  visible="{{true}}"
  position="bottom"
  showClose="{{true}}"
>
  <scroll-view
    scroll-y
    style="padding: 12px; height: 300px"
    disable-lower-scroll="out-of-bounds"
    disable-upper-scroll="out-of-bounds">
    Ea consectetur ipsum consequat exercitation laboris excepteur pariatur
    excepteur labore dolor cillum tempor esse. Ad adipisicing nostrud fugiat eu
    mollit. Proident nisi voluptate sunt ea laboris Lorem ullamco deserunt aute
    incididunt cillum tempor duis est. Elit voluptate laboris laborum anim
    exercitation consequat laboris ad. Quis ad enim fugiat.
  </scroll-view>
</ant-popup>
```

### Demo 代码

<code src='../../demo/pages/Popup/index'></code>

## API

| 属性                         | 说明                                                                                                                                                              | 类型       | 默认值      |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| animation                    | 是否开启过渡动画                                                                                                                                                  | boolean    | true        |
| animationType                | 动画类型，可选`transform` `position`，默认使用`transform`动画性能更好。但当弹窗内部存在 fixed 定位或者 picker-view 元素时可能存在样式问题，可切换为`position`解决 | string     | `transform` |
| className                    | 类名                                                                                                                                                              | string     | -           |
| title                        | 标题                                                                                                                                                              | string     | ''          |
| destroyOnClose               | 不可见时卸载内容                                                                                                                                                  | boolean    | false       |
| duration                     | 过渡动画时长，单位毫秒                                                                                                                                            | number     | -           |
| height                       | 高度，在 position 为 `top` 或 `bottom` 时使用，单位 px。可选，不传时根据内容区高度自适应。                                                                        | number     | -           |
| maskClassName                | 蒙层的类名                                                                                                                                                        | string     | -           |
| maskStyle                    | 蒙层的样式                                                                                                                                                        | string     | -           |
| position                     | 弹窗布局，可选`top` `bottom` `left` `right`                                                                                                                       | string     | `bottom`    |
| showMask                     | 是否展示蒙层                                                                                                                                                      | boolean    | true        |
| style                        | 样式                                                                                                                                                              | string     | -           |
| visible                      | 是否显示                                                                                                                                                          | boolean    | false       |
| width                        | 宽度, 在 position 为 `left` 或 `right` 时使用，单位 px                                                                                                            | number     | -           |
| zIndex                       | 弹窗层级                                                                                                                                                          | number     | 998         |
| backgroundImage              | 弹框的背景图                                                                                                                                                      | string     | -           |
| showClose                    | 展示弹框关闭的 icon                                                                                                                                               | boolean    | false       |
| showBack                     | 展示弹框返回的 icon                                                                                                                                               | boolean    | false       |
| #if ALIPAY onClose           | 点击蒙层关闭，触发回调                                                                                                                                            | () => void | -           |
| #if ALIPAY onClickBack       | 点击返回按钮，触发回调                                                                                                                                            | () => void | -           |
| #if ALIPAY onAfterShow       | 完全展示后触发                                                                                                                                                    | () => void | -           |
| #if ALIPAY onAfterClose      | 完全关闭后触发                                                                                                                                                    | () => void | -           |
| #if WECHAT bindclose         | 点击蒙层关闭，触发回调                                                                                                                                            | () => void | -           |
| #if WECHAT bindclickbackicon | 点击返回按钮，触发回调                                                                                                                                            | () => void | -           |
| #if WECHAT bindaftershow     | 完全展示后触发                                                                                                                                                    | () => void | -           |
| #if WECHAT bindafterclose    | 完全关闭后触发                                                                                                                                                    | () => void | -           |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                       | 默认值                                                                                                                    | 深色模式默认值                                                                                                            | 备注                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --popover-list-content-bg    | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.93); color: #ffffff;">rgba(0, 0, 0, 0.93)</div> | Popover 列表内容背景颜色 |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Popover 列表内容颜色     |
| --popover-list-badge-color   | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | <div style="width: 150px; height: 30px; background-color: #ff411c; color: #ffffff;">#ff411c</div>                         | Popover 列表徽章颜色     |
| --popover-list-content-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                         | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                         | Popover 列表内容文字颜色 |

## FAQ

### Popup 打开后，蒙层后面的页面能滚动怎么办？

阻止蒙层后页面滚动目前在 IDE 和模拟器不生效，请在真机上调试。

### Popup 内部元素需要支持滚动怎么处理？

如果弹窗内需要滚动，请使用 scroll-view 组件，并添加以下属性：

```html
<popup height="{{250}}" visible="{{visible}}">
  <scroll-view
    scroll-y
    disable-lower-scroll="out-of-bounds"
    disable-upper-scroll="out-of-bounds"
  >
    ...你的内容...
  </scroll-view>
</popup>
```

### Popup 内部的 picker-view 显示异常怎么解决？

Popup 默认是通过 `display:none` 隐藏的，而 picker-view 不能放到 `display:none` 的组件里。有以下两种解决方式：

1. 在 picker-view 上添加属性 `a:if="{{popupVisible}}"`，在 Popup 显示时再显示 picker-view。
2. 在 Popup 上设置 `destroyOnClose="{{true}}"`，在 Popup 不可见时卸载内容。
