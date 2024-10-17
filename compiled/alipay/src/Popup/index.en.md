---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Popup popup layer

Slides or pops up a custom content area from the screen.

## When to use

It is used to display pop-up windows, information prompts, selection input, switching, and other content. It supports multiple pop-up layers for overlay display.

## Code Sample

<code src='../../demo/pages/Popup/index'></code>

## API

| Property           | Description                                                                                                                                                              | Type       | Default Value      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| animation      | Whether to turn on transition animation                                                                                                                                                  | boolean    | true        |
| animationType  | 动画Type，可选`transform` `position`，默认使用`transform`动画性能更好。但当弹窗内部存在 fixed 定位或者 picker-view 元素时可能存在Style问题，可切换为`position`解决 | string     | `transform` |
| className      | Class Name                                                                                                                                                              | string     | -           |
| destroyOnClose | Unload content when invisible                                                                                                                                                  | boolean    | false       |
| duration       | Transition animation duration, in milliseconds                                                                                                                                            | number     | 300         |
| height         | 高度，在 position 为 `top` 或 `bottom` 时使用，单位 px。可选，不传时根据内容区高度自适应。                                                                        | number     | -           |
| maskClassName  | Class name of the layer                                                                                                                                                        | string     | -           |
| maskStyle      | The style of the layer                                                                                                                                                        | string     | -           |
| position       | Pop-up window layout, optional`top` `bottom` `left` `right`                                                                                                                       | string     | `bottom`    |
| showMask       | Show Mask                                                                                                                                                      | boolean    | true        |
| style          | Style                                                                                                                                                              | string     | -           |
| visible        | Whether to display                                                                                                                                                          | boolean    | false       |
| width          | 宽度, 在 position 为 `left` 或 `right` 时使用，单位 px                                                                                                            | number     | -           |
| zIndex         | Pop-up Level                                                                                                                                                          | number     | 998         |
| onClose        | Click the layer to close and trigger the callback.                                                                                                                                            | () => void | -           |
| onAfterShow    | Trigger after full display                                                                                                                                                    | () => void | -           |
| onAfterClose   | Trigger after full shutdown                                                                                                                                                    | () => void | -           |

## FAQ

### After Popup is opened, what if the page behind the layer can scroll?

Preventing page scrolling after the layer is currently not effective in IDE and emulator, please debug on real machine.

### Popup internal elements need to support scrolling how to deal?

If you need to scroll in the pop-up window, use the scroll-view component and add the following attributes:

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

### How to solve the abnormal display of picker-view inside Popup?

Popup 默认是通过 `display:none` 隐藏的，而 picker-view 不能放到 `display:none` 的组件里。有以下两种解决方式：

1. 在 picker-view 上添加Property `a:if="{{popupVisible}}"`，在 Popup 显示时再显示 picker-view。
2. 在 Popup 上设置 `destroyOnClose="{{true}}"`，在 Popup Unload content when invisible。
