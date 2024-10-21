---
order: 6
toc: false
---

# Upgrade to v1

v1 has made many changes over v0 and introduced many incompatible changes (break changes). If you choose to use v1, follow the overview documentation for the v1 component.

| Component Name | Upgrade Description |
|---|---|
| Button | Full redesign, including removal `default size` such as complex `props` combination approach, and using `primary`、`default`、`text` These semantic properties determine the style of the button. New `catchTap` attribute supersedes `stopPropagation`to control event bubbling; and samples of more custom buttons have been added. |
| Icon | Removed previous default `font-size`, can now be set `Icon` of `font-size` or the size of its parent element to change `Icon` The size. At the same time, we also compared the reference `antd` way of implementation. In `antd-mini` In the internal use of, all components related to the icon are also involved. `class` The developer can modify `class` to adjust the icon size, color, etc.; and in using the user interface, we also refactored the user interaction design, modeled after `antd` Icons to view and copy the page, making the search and use of icons more convenient. |
| Tabbar | Support for controlled mode and uncontrolled mode, through `current`、`onChange`、`defaultCurrent` to achieve.<br/>New `icon`、`text` Support `slot` to customize, and `onChange` The type of the method is changed `(index: number) => void`。 |
| Tabs | to `slot` of the form implementation, removing the previous `tabs` and `tab-content` To pass `uid` to associate, take out `uid`, using `options` Data-driven views,`slot-scopes` Used to project rendering information, custom operations become more convenient.<br/>`Tabs` & `VTabs` Components are merged in 1.0 versions `Tabs`, through `direction` parameters to distinguish usage patterns;<br/>Added controlled and uncontrolled modes, combined `current`、`onChange`、`defaultCurrent` to use.<br/>It is worth noting that in the 1.0 version `Tabs` represents the label area only, the content is passed through `slot` Form presentation, different use cases are provided in the documentation example. |
| Avatar | to the component's `props` Refactored, removed the original does not belong `Avatar` Components `name` and `desc` properties, recommend and `ListItem` components are used together. |
| BladeView | Renamed `Indexbar`, equipped with a new design `props`Support for more extensive customization. |
| Collapse | removed using `uid` to associate `collapse` + `collapse-item` The usage of, changed `options` data to control the view through `slot` to render the content.<br/>Added support for controlled and uncontrolled modes `current`、`onChange`、`defaultCurrent` implementation. |
| Container | removed `multiBox` + `box1/box2/box3` The usage of, more to the user's own custom layout.<br/>Overall increased vertical margin `margin-bottom`, the value is `12px`。 |
| Divider | `borderColor`、`borderStyle`、`height` Renamed respectively `lineColor`、`lineType`、`lineWidth`, removed `color` and `margin` property, new `textStyle` and `textClassName`to customize the text style. |
| Empty | removed `mode` property, the full-screen style can be passed through `style` implementation.<br/>removed `mainText`、`subText`, the new can be customized `title`、`message`、`image` content area, all support `slot`。<br/>Abandoned. `mainButtonText`、`subButtonText` buttons such as related, available `slot` Custom. |
| FloatPanel | This component is obsolete. |
| Footer | This component is obsolete. |
| Grid | removed some of the built-in style restrictions for version 0.x, added `iconSize`、`iconStyle`、`showDivider` properties such as to support more extensive customization. |
| GuideTour | Added support for controlled and uncontrolled modes, combined `current`、`onChange`、`defaultCurrent` to use. |
| List | `ListItem` Added `catchTap` attribute supersedes `stopPropagation`to control event bubbling.<br/>Redesigned custom `image` The way that goes away `imageSize`, and instead adopt `slot` way.<br/>removed `last`, added `showDivider` Property is used to set the split line. |
| ProgressBar | property settings have been adjusted as a whole,`ProgressBar` and `ProgressCircle` merged `Progress`, through `type` parameters to distinguish `circle` and `bar` The newly designed properties are more convenient to use. |
| Steps | removed `uid` to associate `steps` + `step-item` The usage of, changed `options` data-driven, and through `slot` to render the content.<br/>Added support for controlled and uncontrolled modes, combined `current`、`onChange`、`defaultCurrent` Use. |
| SwipeAction | The properties have been adjusted as a whole to use more industry-used interaction methods and have a better experience. |
| Tag | Optional `color`，`warn` Rename `warning`。 |
| Checkbox | Added `defaultChecked` Property, which supports controlled and uncontrolled modes. At the same time removed `icon`、`checkedIcon`、`disabledIcon`、`disabledCheckedIcon`、`id`、`name`properties, such as, make the use of components more lightweight. |
| CheckboxGroup | Abandoned before. `checkboxGroup + checkboxItem` The usage of, added `options` property to perform a data-driven presentation view, thus solving the previous problem of communication between the two. In addition, it turns out that many other visual effects are related but redundant attributes, such `uid`、`radius`、`header`、`footer` and in modal mode `name`、`mode` have been removed, making the component more pure and basic. |
| Checklist | Support controlled mode and uncontrolled mode. |
| DatePicker | Supports controlled mode and uncontrolled mode; fixes in `appx1`(DingTalk) use problems in the environment. |
| Filter | This component is removed and its related functions are integrated into `selector` Component, please refer to the corresponding instance for the specific usage method. |
| ImageUpload | Support for controlled and uncontrolled modes, removing `action`、`value`、`enableShowPhotoDownload`、`enableSavePhoto`、`fileName`、`formData`、`height`、`mode`、`preview`、`width` and `onAfterUpload` and other properties and methods; at the same time `onDelete` Rename `onRemove`, added `defaultFileList`、`fileList`、`onChooseImageError` properties and methods such as; in the 1.0 version,`ImageUpload` The upload of has become a custom method, which can call small programs `upload` `api` method to upload. |
| Input | Removed `label`、`controlled`、`layer`、`inputCls`、`labelCls` Remove the attributes associated with the previous form schema, while `autoFocus` Rename `focus`, removed `onClear` callbacks to provide additional functionality while remaining as consistent as possible with native components; adding `prefix`，`suffix slot` available before completion `SearchBar` same styles; adding controlled and uncontrolled attributes `value/defaultValue`; For automatic aggregation, aggregation is not allowed; controlled and other issues in the internal to achieve a better experience, making the use of developers more convenient. |
| Textarea | Added `Textarea` Components. |
| NumberKeyboard | Added numeric keypad `NumberKeyboard` Component that allows developers to customize the style of the numeric keypad. It should be noted that the numeric keyboard has not yet solved the problem of the keyboard blocking the input box. Developers need to adjust the screen scroll to solve such problems. |
| Picker | `dismissText`、`maskClass`、`indicatorClass`、`onDismiss`，`onTriggerPicker` Rename to respectively `cancelText`、`maskClassName`、`indicatorClassName`、`onCancel`、`onVisibleChange`, while adding `popClassName`、`popStyle`、`defaultValue` property, removing `onBeforeOk`. In addition, a new `content slot`。 |
| Radio | Added `defaultChecked` property, supports controlled/uncontrolled mode, and also removes `icon`、`checkedIcon`、`disabledIcon`、`disabledCheckedIcon`、`id`、`name` and other properties to make component use lighter. |
| RadioGroup | waste use `radioGroup + radioItem` The way, but added. `options` to perform data configuration-driven views, solving the previous problem of communication between the two. In addition, new `defaultValue`、`color` and removes more unnecessary attributes, such `uid`、`radius`、`header`、`footer`、`mode` And so on, make the component more pure. |
| SearchBar | is no longer used as a separate component, but is integrated into `input` Component, the specific implementation can refer to the relevant examples. `demo`。 |
| Selector | Support for controlled/uncontrolled mode, new `activeItemStyle`、`defaultValue` and will `options` Change the name `items`while removing `title`、`desc` and fields in form mode `name`、`mode` Wait. |
| Slider | Components support more convenient customization and controlled/uncontrolled modes, new `activeDotClassName`、`activeLineClassName`、`activeDotStyle`、`activeLineStyle` and other related properties. Add at the same time `defaultValue`、`showTicks` property, and increases `slider slot`。 |
| Stepper | Provides better use of controlled and uncontrolled modes, new `defaultValue`、`inputClassName`，`inputStyle`、`onConfirm` attribute, and removed some redundant attributes `inputWidth`、`name`、`mode` and so on at the same time `autoFocus` Rename `focus`。 |
| Switch | Better support for controlled/uncontrolled mode and remove `controlled`、`mode` property, new `defaultChecked` property, while `checked`、`unChecked` Slot renamed `checkedText`、`unCheckedText`。 |
| Terms | Deprecated and no longer used as a base component. |
| VideoUpload | Due to video playback permissions and restrictions, this component is no longer serving. |
| Badge | Abandoned. `iconType` property and provides a custom extension `text slot`。 |
| NoticeBar | Added an additional name `extra slot` and `Icon` field, supports all built-in `IconType` As well as custom links, and additional support for custom `slot`。 |
| Tips | integrated `popover` component, is no longer available as a separate component. |
| ActionSheet | Compatible with the original version. |
| Dialog | removed `Dialog` component, whose functions are integrated into `Modal` component, the default `type` It is `Dialog`。 |
| Loading | removed `loading` unrelated properties, which include `delay`、`height`、`theme`, Make it focus on retaining a single simple method of use. |
| Mask | This component is abandoned. can pass `Modal` Fully customize the content area to achieve the same functionality. |
| Modal | integrated `Dialog` and `Mask` Components. New `destroyOnClose` property, which defaults `false`for improved performance. |
| Popover | New `autoAdjustOverflow` Property to automatically adjust the position when the bubble is occluded; use for controlled/uncontrolled mode `visible/defaultVisible`, and increased `destroyOnClose` property, which defaults `false`to improve performance; position control is used instead `JavaScript` to solve the problem of inaccurate positioning. |
| Popup | New `destroyOnClose` property, which also defaults `false`for performance optimization; removed `disableScroll`、`autoHeight` Properties that should be of concern within components such as components that are not required by developers to improve ease of use; `showCloseIcon` and internal area `padding`, making the component easier to customize. |
| ProgressCircle | `ProgressBar` and `ProgressCircle` merged `Progress`, through `type` parameters to distinguish `circle` and `bar`The new property design makes it very easy to use. |
| Rate | Added controlled/uncontrolled support; new ways to interact, and added more custom attributes, such as custom character class names. |
| Result | Abandoned. `buttons` property, the bottom area can be passed through `slot` Custom. |
| Skeleton | make adjustments to the details,`Skeleton Avatar size` with `Avatar` Stay consistent:`'x-small'`、`'small'`、`'medium'`、`'large'`。 |
| Toast | Will `type error` Revised uniformly `fail`。 |
| Form | It supports detailed settings of form items including input boxes, selectors, picture uploads, etc., and has a powerful form verification function. |
| SafeArea | This component is discarded and the corresponding functions can be used. `css` implementation.<br/>For example:<br/>` padding-bottom: constant(safe-area-inset-bottom);`<br/>` padding-bottom: env(safe-area-inset-bottom);`<br/>` padding-top: constant(safe-area-inset-top);`<br/>` padding-top: env(safe-area-inset-top);` |

<style>
    th:nth-of-type(1){
        width: 0px !important;
    }
</style>
