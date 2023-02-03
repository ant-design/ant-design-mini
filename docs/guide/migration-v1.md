---
toc: false
---

## 升级到v1

v1对比v0做了很多修改，也有很多breakchange。使用v1可按照v1组件说明文档。


|  组件名称 |  升级说明 |
| --- | --- |
|  Button | 重新设计包括default size等去掉复杂的props组合式用法，使用更为清晰明确的 `primary` `default` `text` 语义确定按钮。添加`catchTap`取代`stopPropagation`用于非冒泡；添加更多的示例包括自定义按钮。 |
|  Icon | 去掉的之前default的font-size。让icon使用不再必须要去修改size props，而是通过自身及上层font-size就可修改icon。这里也是对比了antd的做法。在antd-mini内部，也对所有使用icon的组件进行了修改，使用上传的class即可修改icon大小、颜色等；对于使用界面上，也重构了交互，实现了类似antd的icon查看及复制界面，让搜索使用icon更方便。 |
|  Tabbar | 支持受控/非受控，current+onChange+defaultCurrent。<br/>新增icon、text支持slot自定义 |
|  Tabs | 使用slot的方式，不再需要tabs+tab-content使用uid关联，移除uid，使用options数据驱动视图，slot-scopes抛出渲染信息，自定义更方便；<br/>1.0中Tabs&VTabs组件合并到Tabs，使用direction区分模式；<br/>新增受控/非受控模式，current+onChange+defaultCurrent；<br/>另外1.0里的Tabs只是Tabs区域，content是作为slot方式，文档示例里添加了不同的使用方式。 |
|  Avatar | 重新设计组件props，移除不应该属于Avatar的name和desc，改为搭配ListItem使用 |
|  BladeView | 新命名为Indexbar，全新设计的props，支持更多自定义 |
|  Collapse | 移除使用uid关联collapse+collapse-item的使用方式，改成options数据视图，slot的方式渲染内容。<br/>新增支持受控/非受控，current+onChange+defaultCurrent。 |
|  Container | 移除multiBox+box1/box2/box3 用法，交给用户自定义<br/>整体增加竖向边距margin-bottom 12px |
|  Divider | borderColor、borderStyle、height分别重命名为lineColor、ineType、lineWidth，移除color和margin，新增textStyle和textClassName自定义文字样式 |
|  Empty | 移除mode，全屏样式可通过style实现<br/>移除mainText、subText，新增title、message、image自定义内容区，均支持插槽。<br/>移除mainButtonText、subButtonText按钮相关，可通过slot自定义 |
|  FloatPanel | 去掉了这个组件。 |
|  Footer | 去掉了这个组件。 |
|  Grid | 取消0.x版本部分内置样式限制，新增iconSize、iconStyle、showDivider实现更多自定义 |
|  GuideTour | 新增支持受控/非受控，current+onChange+defaultCurrent。 |
|  List | ListItem添加`catchTap`取代`stopPropagation`用于非冒泡 <br/>重新设计的自定义image方式，移除imageSize，改成slot方式<br/>移除last，新增showDivider设置分割线 |
|  ProgressBar | props整体调整，ProgressBar和ProgressCircle合并为Progress，使用type 参数区分 circle & bar，全新设计的props，使用更方便 |
|  Steps | 移除使用uid关联steps+step-item的使用方式，改成options数据视图，slot的方式渲染内容。<br/>新增支持受控/非受控，current+onChange+defaultCurrent。 |
|  SwipeAction | props整体调整，使用更业界使用的交互方式，有更好的体验。 |
|  Tag | color可选项，warn重命名warning |
|  Checkbox | 新增 defaultChecked 属性，支持受控/非受控模式，同时移除 icon、checkedIcon、disabledIcon、disabledCheckedIcon、id、name 等属性，让组件使用更轻便。 |
|  CheckboxGroup | 废弃之前 checkboxGroup + checkboxItem 的使用方式，新增 options 进行数据配置驱动视图，解决了之前两者互相通信的问题，此外还新增了 defaultValue、color 等属性，移除了更多冗余属性，包括 uid、radius、header、footer、mode 等，让其成为一个更加纯粹的基础组件。 |
|  Checklist | 支持受控/非受控。 |
|  DatePicker | 支持受控/非受控；修复appx1（钉钉）下的使用问题。 |
|  Filter | 移除该组件，相关实现集成到 selector 中，具体使用方式可参考对应示例。 |
|  ImageUpload | 支持受控/非受控，移除 action、value、enableShowPhotoDownload、enableSavePhoto、fileName、formData、height、mode、preview、width、onAfterUpload 等属性及方法，同时 onDelete 更名为 onRemove，新增 defaultFileList、fileList、onChooseImageError 等属性及方法；1.0里ImageUpload的上传为自定义方法，可调用小程序upload api方法进行上传。 |
|  Input | 移除 label、controlled、layer、inputCls、labelCls，以外移除与之前表单模式相关的属性，同时 autoFocus 重命名为 focus，移除 onClear 回调，尽可能保持与原生组件一致的前提下提供额外功能；添加prefix，suffix slot 可用于完成之前SearchBar相同样式；添加受控/非受控分别为value/defaultValue；对自动聚集、聚集不准；controlled等问题在组件内部进行了最佳实践，对于开发者使用更加方便。 |
|  Textarea | 新增 Textarea 组件。 |
|  NumberKeyboard | 新增数字键盘 NumberKeyboard 组件，让开发者可以定制自己的数字键盘。注意：数字键盘暂未解决键盘遮挡输入框的问题，需要开发者自行设置屏幕滚动来解决此类问题。 |
|  Picker | dismissText 、maskClass、indicatorClass、onDismiss，onTriggerPicker 分别重命名为 cancelText、maskClassName、indicatorClassName、onCancel、onVisibleChange，同时新增 popClassName、popStyle、defaultValue，移除onBeforeOk，此外还新增了 content slot。 |
|  Radio | 新增 defaultChecked 属性，支持受控/非受控模式，同时移除 icon、checkedIcon、disabledIcon、disabledCheckedIcon、id、name 等属性，让组件使用更轻便。 |
|  RadioGroup | 废弃之前 radioGroup + radioItem 的使用方式，新增 options 进行数据配置驱动视图，解决了之前两者互相通信的问题，此外还新增了 defaultValue、color 等属性，移除了更多冗余属性，包括 uid、radius、header、footer、mode 等，让其成为一个更加纯粹的基础组件。 |
|  SearchBar | 不再单独作为组件提供，整合到 input 组件中，具体可参考相关实例 demo 实现。 |
|  Selector | 支持受控/非受控，新增 activeItemStyle、defaultValue，options 重命名为 items，同时移除 title、desc 及表单模式下的字段 name、mode等。 |
|  Slider | 组件支持更多更方便的自定义方式和受控/非受控模式，新增activeDotClassName、activeLineClassName、activeDotStyle、activeLineStyle 等相关属性。同时新增 defaultValue、showTicks 属性，此外还新增了slider slot。 |
|  Stepper | 提供更好的受控/非受控方式，新增defaultValue、inputClassName，inputStyle、onConfirm，同时移除一些冗余属性 inputWidth、name、mode，此外 autoFocus 重命名为 focus。 |
|  Switch | 更好的支持受控/非受控模式，移除controlled、mode，同时新增defaultChecked，此外 checked、unChecked 两个slot分别重命名为 checkedText、unCheckedText。 |
|  Terms | 非基础组件，已经移除。 |
|  VideoUpload | 因为视频播放权限和限制问题，不在提供相关组件。 |
|  Badge | 移除 iconType，同时提供 text slot进行自定义拓展。 |
|  NoticeBar | 新增 extra 插槽，同时新增 Icon 字段，支持内置所有 IconType 和自定义链接，同时还支持自定义 slot。 |
|  Tips | 已经移除，相关能力已经集成到 popover 中 |
|  ActionSheet | 完全兼容 |
|  Dialog | 去掉了这个组件，功能整合到了Modal组件里。Modal组件default type就是Dialog。 |
|  Loading | 去掉了跟loading不相关的属性，包括delay，height，theme。让loading保持单纯方便使用。 |
|  Mask | 去掉了这个组件。使用 Modal完全自定义内容区域即可做到相同功能。 |
|  Modal | 整合了Dialog，Mask。添加 destroyOnClose default 为 false用来提升性能。 |
|  Popover | 添加了autoAdjustOverflow对气泡被遮挡时自动调整位置；添加受控/非受控分别为visible/defaultVisible;添加 destroyOnClose default 为 false用来提升性能;位置控制从修改为js，解决定位不准问题。 |
|  Popup | 添加 destroyOnClose default 为 false用来提升性能；去掉disableScroll，autoHeight等开发者不需要关注的属性而是作为组件内部来解决，提升组件使用方便性；去掉showCloseIcon、内部区域padding，让组件更方便自定义。 |
|  ProgressCircle | ProgressBar和ProgressCircle合并为Progress，使用type 参数区分 circle & bar，全新设计的props，使用更方便 |
|  Rate | 添加受控/非受控；使用新的交互方式，添加了更多的自定义属性，包括自定义字符类名。 |
|  Result | 去掉buttons属性，底部区域通过slot来自定义。 |
|  Skeleton | 细节调整，Skeleton Avatar size修改跟跟Avatar相同的 'x-small' &#124; 'small' &#124; 'medium' &#124; 'large' |
|  Toast | type error统一修改为fail |
|  Form | 支持了包括输入框、选择器、图片上传等表单项；有较为强大的表单校验功能。 |
|  SafeArea | 去掉了这个组件，可使用css完成相同功能。<br/>` padding-bottom: constant(safe-area-inset-bottom);`<br/>` padding-bottom: env(safe-area-inset-bottom);`<br/>` padding-top: constant(safe-area-inset-top);`<br/>` padding-top: env(safe-area-inset-top);` |

<style>
    th:nth-of-type(1){
        width: 0px !important;
    }
</style>