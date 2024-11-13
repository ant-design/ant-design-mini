---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Popup

Slide or pop-up a custom content area from the screen.

## When to use

It is used to display pop-up windows, information prompts, selection input, switching, and other content. It supports multiple pop-up layers for overlay display.

## Code example

<code src='../../demo/pages/Popup/index'></code>

## API

| Property           | Description                                                                                                                                                              | Type       | Default Value      |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| animation      | Whether to turn on transition animation                                                                                                                                                  | boolean    | true        |
| animationType  | Animation type, optional`transform` `position`, the default is used`transform`Animation performance is better. However, when there is a fixed positioning or picker-view element inside the pop-up window, there may be a style problem, which can be switched`position`Solve | string     | `transform` |
| className      | Class Name                                                                                                                                                              | string     | -           |
| destroyOnClose | Unload content when invisible                                                                                                                                                  | boolean    | false       |
| duration       | Transition animation duration, in milliseconds                                                                                                                                            | number     | 300         |
| height         | The height, in position, is `top` or `bottom` When used, the unit is px. Optional, when not transmitted, it is highly adaptive according to the content area.                                                                        | number     | -           |
| maskClassName  | Class name of the layer                                                                                                                                                        | string     | -           |
| maskStyle      | Mask Style                                                                                                                                                        | string     | -           |
| position       | Pop-up window layout, optional`top` `bottom` `left` `right`                                                                                                                       | string     | `bottom`    |
| showMask       | Show Mask                                                                                                                                                      | boolean    | true        |
| style          | Style                                                                                                                                                              | string     | -           |
| visible        | Display                                                                                                                                                          | boolean    | false       |
| width          | The width, in position, is `left` or `right` unit px                                                                                                            | number     | -           |
| zIndex         | Pop-up Level                                                                                                                                                          | number     | 998         |
| onClose        | Click the mask to close and trigger the callback.                                                                                                                                            | () => void | -           |
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

By default, Popup is `display:none` Hidden, and picker-view cannot be placed in `display:none` in the components. There are two solutions:

1. Add attribute on picker-view `a:if="{{popupVisible}}"`, the picker-view is displayed when the Popup is displayed.
2. Set on Popup `destroyOnClose="{{true}}"`to unload content when the Popup is not visible.
