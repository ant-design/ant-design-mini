---
toc: false
---

## 升级到 v1

v1 比 v0 做了许多修改，也引入了许多不兼容的更改（break change）。如果你选择使用 v1，请遵循 v1 组件的概述文档。

| 组件名称 | 升级说明 |
|---|---|
| Button | 全面重新设计，包括去掉 `default size` 等复杂的 `props` 组合方式，并采用 `primary`、`default`、`text` 这些具有语义性的属性来确定按钮的样式。新增 `catchTap` 属性取代 `stopPropagation`，用于控制事件冒泡；同时添加了更多自定义按钮的样例。 |
| Icon | 删除了以前的默认 `font-size`，现在可以通过设置 `Icon` 的 `font-size` 或其父元素的大小来改变 `Icon` 的尺寸。同时，我们也对照参考了 `antd` 的实现方式。在 `antd-mini` 的内部使用中，有关图标的所有组件也都经过了涉及 `class` 的修改，开发者可以通过上层的 `class` 来调整图标尺寸、颜色等；而在使用用户界面上，我们也重构了用户交互设计，仿照 `antd` 实现的图标查看及复制页面，使得搜索和使用图标更为方便。 |
| Tabbar | 支持受控模式和非受控模式，通过 `current`、`onChange`、`defaultCurrent` 来实现。<br/>新增 `icon`、`text` 支持 `slot` 进行自定义，并且 `onChange` 方法的类型改为 `(index: number) => void`。 |
| Tabs | 以 `slot` 的形式实现，去除了之前的 `tabs` 和 `tab-content` 要通过 `uid` 来关联，取出 `uid`，使用 `options` 数据驱动视图，`slot-scopes` 用来投射渲染信息，自定义操作变得更加便捷。<br/>`Tabs` & `VTabs` 组件在 1.0 版本中合并为 `Tabs`，通过 `direction` 参数来区分使用模式；<br/>新增了受控模式和非受控模式，结合 `current`、`onChange`、`defaultCurrent` 来使用。<br/>值得注意的是，1.0 版本中的 `Tabs` 仅代表标签区域，内容通过 `slot` 形式展现，文档示例中提供了不同的使用案例。 |
| Avatar | 对组件的 `props` 进行了重构，移除了原本不属于 `Avatar` 组件的 `name` 和 `desc` 属性，推荐和 `ListItem` 组件一起使用。 |
| BladeView | 重新命名为 `Indexbar`，配备了全新设计的 `props`，支持更广泛的自定义。 |
| Collapse | 去除了使用 `uid` 来关联 `collapse` + `collapse-item` 的用法，改为以 `options` 数据来控制视图，通过 `slot` 来渲染内容。<br/>新增了对受控模式和非受控模式的支持，以 `current`、`onChange`、`defaultCurrent` 实现。 |
| Container | 去除了 `multiBox` + `box1/box2/box3` 的用法，更多地交给用户自己自定义布局。<br/>整体增加了竖向边距 `margin-bottom`，值为 `12px`。 |
| Divider | `borderColor`、`borderStyle`、`height` 分别更名为 `lineColor`、`lineType`、`lineWidth`，去除了 `color` 和 `margin` 属性，新增了 `textStyle` 和 `textClassName`，用于自定义文字样式。 |
| Empty | 去除了 `mode` 属性，全屏样式可以通过 `style` 实现。<br/>去除了 `mainText`、`subText`，新增了可以自定义的 `title`、`message`、`image` 内容区，都支持 `slot`。<br/>废弃了 `mainButtonText`、`subButtonText` 等按钮相关，可通过 `slot` 自定义。 |
| FloatPanel | 这个组件已被废弃。 |
| Footer | 这个组件已被废弃。 |
| Grid | 取消了 0.x 版本的一些内置样式限制，新增了 `iconSize`、`iconStyle`、`showDivider` 等属性以支持更广泛的自定义。 |
| GuideTour | 新增对受控模式和非受控模式的支持，结合 `current`、`onChange`、`defaultCurrent` 来使用。 |
| List | `ListItem` 新增了 `catchTap` 属性取代 `stopPropagation`，用于控制事件冒泡。<br/>重新设计了自定义 `image` 的方式，去除了 `imageSize`，转而采用 `slot` 方式。<br/>去除了 `last`，新增了 `showDivider` 属性用于设置分割线。 |
| ProgressBar | 属性设置进行了整体调整，`ProgressBar` 和 `ProgressCircle` 合并为 `Progress`，通过 `type` 参数来区分 `circle` 和 `bar` 的样式，全新设计的属性使用起来更方便。 |
| Steps | 去除了通过 `uid` 来关联 `steps` + `step-item` 的用法，改为以 `options` 数据为驱动，并通过 `slot` 方式渲染内容。<br/>新增支持受控模式和非受控模式，结合 `current`、`onChange`、`defaultCurrent` 使用。 |
| SwipeAction | 属性进行了整体调整，使用更业界使用的交互方式，有更好的体验。 |
| Tag | 可选的 `color`，`warn` 重命名为 `warning`。 |
| Checkbox | 新增了 `defaultChecked` 属性，支持受控模式及非受控模式。同时移除了 `icon`、`checkedIcon`、`disabledIcon`、`disabledCheckedIcon`、`id`、`name`等属性，使得组件的使用变得更加轻巧。 |
| CheckboxGroup | 废弃了之前的 `checkboxGroup + checkboxItem` 的用法，新增了 `options` 属性来进行数据驱动展现视图，从而解决了之前两者相互通信的问题。此外，原来的许多其他视觉效果相关但冗余的属性，如 `uid`、`radius`、`header`、`footer` 以及模态模式下的 `name`、`mode` 等均已移除，使该组件变得更加纯粹和基础。 |
| Checklist | 支持受控模式及非受控模式。 |
| DatePicker | 支持受控模式和非受控模式；修复了在 `appx1`（钉钉）环境下存在的使用问题。 |
| Filter | 去除了这个组件，其相关功能集成到了 `selector` 组件中，具体使用方法请参见对应实例。 |
| ImageUpload | 支持受控模式和非受控模式，移除了 `action`、`value`、`enableShowPhotoDownload`、`enableSavePhoto`、`fileName`、`formData`、`height`、`mode`、`preview`、`width` 以及 `onAfterUpload` 等属性和方法；同时 `onDelete` 更名为 `onRemove`，新增了 `defaultFileList`、`fileList`、`onChooseImageError` 等属性和方法；在 1.0 版本中，`ImageUpload` 的上传变为了自定义方法，可调用小程序的 `upload` `api` 方法进行上传。 |
| Input | 移除了 `label`、`controlled`、`layer`、`inputCls`、`labelCls` 以外移除与之前表单模式相关的属性，同时 `autoFocus` 重命名为 `focus`，去除了 `onClear` 回调，尽可能保持与原生组件一致的前提下提供额外功能；添加 `prefix`，`suffix slot` 可用于完成之前 `SearchBar` 相同样式；添加受控和非受控属性 `value/defaultValue`；对自动聚集、聚集不准；controlled 等问题在内部实现了较好的体验，使得开发者的使用变得更加便捷。 |
| Textarea | 新增了 `Textarea` 组件。 |
| NumberKeyboard | 新增了数字键盘 `NumberKeyboard` 组件，允许开发者自定义数字键盘的样式。需要注意的是：数字键盘目前尚未解决键盘挡住输入框的问题，开发者需要通过调整屏幕滚动来解决此类问题。 |
| Picker | `dismissText`、`maskClass`、`indicatorClass`、`onDismiss`，`onTriggerPicker` 分别重命名为 `cancelText`、`maskClassName`、`indicatorClassName`、`onCancel`、`onVisibleChange`，同时新增 `popClassName`、`popStyle`、`defaultValue` 属性，去除了 `onBeforeOk`。此外，还新增了 `content slot`。 |
| Radio | 新增了 `defaultChecked` 属性，支持受控/非受控模式，并同样移除了 `icon`、`checkedIcon`、`disabledIcon`、`disabledCheckedIcon`、`id`、`name` 等属性，让组件使用变得更加轻巧。 |
| RadioGroup | 废使用 `radioGroup + radioItem` 的方式，而是新增了 `options` 来进行数据配置驱动视图，解决了之前两者互相通信的问题。此外还新增了 `defaultValue`、`color` 等属性，并移除了更多不必要的属性，如 `uid`、`radius`、`header`、`footer`、`mode` 等，令组件更加纯净。 |
| SearchBar | 不再作为单独的组件使用，而是整合到 `input` 组件中，具体的实现可以参考相关的示例 `demo`。 |
| Selector | 支持受控/非受控模式，新增了 `activeItemStyle`、`defaultValue` 以及将 `options` 改名为 `items`，同时移除了 `title`、`desc` 及表单模式下的字段 `name`、`mode` 等。 |
| Slider | 组件支持更多方便的自定义方式和受控/非受控模式，新增 `activeDotClassName`、`activeLineClassName`、`activeDotStyle`、`activeLineStyle` 等相关属性。同时新增 `defaultValue`、`showTicks` 属性，并增加了 `slider slot`。 |
| Stepper | 提供更好的受控和非受控模式使用方式，新增了 `defaultValue`、`inputClassName`，`inputStyle`、`onConfirm` 属性，并移除了一些冗余属性 `inputWidth`、`name`、`mode` 等，同时 `autoFocus` 更名为 `focus`。 |
| Switch | 更好的支持受控/非受控模式，并去除了 `controlled`、`mode` 属性，新增了 `defaultChecked` 属性，同时将 `checked`、`unChecked` 插槽重命名为 `checkedText`、`unCheckedText`。 |
| Terms | 已经废弃不再作为基础组件使用。 |
| VideoUpload | 由于视频播放权限和限制问题，该组件不再提供服务。 |
| Badge | 废弃了 `iconType` 属性，并提供了自定义拓展用的 `text slot`。 |
| NoticeBar | 新增了额外的名为 `extra slot` 和 `Icon` 字段，支持内置所有的 `IconType` 以及自定义链接，并额外支持了自定义 `slot`。 |
| Tips | 已整合进 `popover` 组件中，不再作为单独的组件提供。 |
| ActionSheet | 兼容原有版本。 |
| Dialog | 去除了 `Dialog` 组件，其功能已整合到 `Modal` 组件中，默认 `type` 就是 `Dialog`。 |
| Loading | 去除了与 `loading` 不相关的属性，这些属性包括 `delay`、`height`、`theme`，使其重点在于保留单一简便的使用方法。 |
| Mask | 废弃了这个组件。可以通过 `Modal` 完全自定义内容区域以实现相同的功能。 |
| Modal | 整合了 `Dialog` 和 `Mask` 组件。新增 `destroyOnClose` 属性，默认为 `false`，用于提升性能。 |
| Popover | 新增 `autoAdjustOverflow` 属性，当气泡被遮挡时将自动调整位置；对于受控/非受控模式使用 `visible/defaultVisible`，并增加了 `destroyOnClose` 属性，默认为 `false`，以提升性能；位置控制改用 `JavaScript` 实现，以解决定位不准的问题。 |
| Popup | 新增 `destroyOnClose` 属性，同样默认为 `false`，用于性能优化；去除了 `disableScroll`、`autoHeight` 等组件内部应该关注的而非开发者需要的属性，以提高易用性；去除了 `showCloseIcon` 及内部区域 `padding`，使得组件更加方便自定义。 |
| ProgressCircle | `ProgressBar` 和 `ProgressCircle` 合并为 `Progress`，通过 `type` 参数来区分 `circle` 和 `bar`，新的属性设计使它变得很容易使用。 |
| Rate | 新增受控/非受控支持；采用新的交互方式，并新增了更多自定义属性，如自定义字符类名。 |
| Result | 废弃了 `buttons` 属性，底部区域可以通过 `slot` 自定义。 |
| Skeleton | 对细节进行调整，`Skeleton Avatar size` 与 `Avatar` 保持一致：`'x-small'`、`'small'`、`'medium'`、`'large'`。 |
| Toast | 将 `type error` 统一修改为 `fail`。 |
| Form | 支持了包括输入框、选择器、图片上传等表单项的详细设置，并具有强大的表单校验功能。 |
| SafeArea | 废弃了这个组件，相应的功能可以使用 `css` 实现。<br/>比如：<br/>` padding-bottom: constant(safe-area-inset-bottom);`<br/>` padding-bottom: env(safe-area-inset-bottom);`<br/>` padding-top: constant(safe-area-inset-top);`<br/>` padding-top: env(safe-area-inset-top);` |

<style>
    th:nth-of-type(1){
        width: 0px !important;
    }
</style>