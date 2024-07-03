---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Popup 弹出层

从屏幕滑出或弹出一块自定义内容区。

## 何时使用

用于展示弹窗、信息提示、选择输入、切换等内容，支持多个弹出层叠加展示。

## 代码示例

<code src='pages/Popup/index'></code>

## API

| 属性           | 说明                                                                                                                                                              | 类型       | 默认值      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| animation      | 是否开启过渡动画                                                                                                                                                  | boolean    | true        |
| animationType  | 动画类型，可选`transform` `position`，默认使用`transform`动画性能更好。但当弹窗内部存在 fixed 定位或者 picker-view 元素时可能存在样式问题，可切换为`position`解决 | string     | `transform` |
| className      | 类名                                                                                                                                                              | string     | -           |
| destroyOnClose | 不可见时卸载内容                                                                                                                                                  | boolean    | false       |
| duration       | 过渡动画时长，单位毫秒                                                                                                                                            | number     | 300         |
| height         | 高度，在 position 为 `top` 或 `bottom` 时使用，单位 px。可选，不传时根据内容区高度自适应。                                                                        | number     | -           |
| maskClassName  | 蒙层的类名                                                                                                                                                        | string     | -           |
| maskStyle      | 蒙层的样式                                                                                                                                                        | string     | -           |
| position       | 弹窗布局，可选`top` `bottom` `left` `right`                                                                                                                       | string     | `bottom`    |
| showMask       | 是否展示蒙层                                                                                                                                                      | boolean    | true        |
| style          | 样式                                                                                                                                                              | string     | -           |
| visible        | 是否显示                                                                                                                                                          | boolean    | false       |
| width          | 宽度, 在 position 为 `left` 或 `right` 时使用，单位 px                                                                                                            | number     | -           |
| zIndex         | 弹窗层级                                                                                                                                                          | number     | 998         |
| onClose        | 点击蒙层关闭，触发回调                                                                                                                                            | () => void | -           |
| onAfterShow    | 完全展示后触发                                                                                                                                                    | () => void | -           |
| onAfterClose   | 完全关闭后触发                                                                                                                                                    | () => void | -           |

## FAQ

### Popup 打开后，蒙层后面的页面能滚动怎么办？

阻止蒙层后页面滚动目前在 IDE 和模拟器不生效，请在真机上调试。

### Popup 内部元素需要支持滚动怎么处理？

如果弹窗内需要滚动，请使用 scroll-view 组件，并添加以下属性：

```html
<popup height="{{ 250 }}" visible="{{ visible }}">
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
