---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# Tabs

Navigate between content groups.

- Navigate between content groups.
- The current content needs to be divided into groups of the same hierarchical structure for content switching and display, which is used at the top of the form or standard list interface.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-tabs": "antd-mini/es/Tabs/index"
#endif
#if WECHAT
  "ant-tabs": "antd-mini/Tabs/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-tabs items="{{items}}" />
```

```js
Page({
  data: {
    current: 0,
    items: [
      {
        title: 'fruits',
        subTitle: 'desc',
        content: 'watermelon',
      },
      {
        title: 'vegetables',
        subTitle: 'desc',
        badge: true,
        content: 'tomato',
      },
      {
        title: 'animals',
        subTitle: 'desc',
        content: 'monkey',
      },
    ],
  },
});
```

### With content

```xml
<ant-tabs items="{{items}}">
  <view class="content" slot-scope="item">
    {{item.value.content}}
  </view>
</ant-tabs>
```

### Capsule

```xml
<ant-tabs type="capsule" items="{{items}}" defaultCurrent="{{1}}"></ant-tabs>
```

### With subtitle

```xml
<ant-tabs type="mixin" items="{{items}}"></ant-tabs>
```

### With logo

```xml
<ant-tabs items="{{items}}">
 <view
    slot="title"
    slot-scope="item">
    <view a:if="{{item.value.badge}}">
      <ant-badge>{{item.value.title}}</ant-badge>
    </view>
    <view a:else>{{item.value.title}}</view>
  </view>
</ant-tabs>
```

### Disable state

```xml
<ant-tabs items="{{items}}" />
```

```js
Page({
  data: {
    current: 0,
    items: [
      {
        title: 'fruits',
        subTitle: 'desc',
        content: 'watermelon',
      },
      {
        title: 'vegetables',
        subTitle: 'desc',
        disabled: true,
        content: 'tomato',
      },
      {
        title: 'animals',
        subTitle: 'desc',
        content: 'monkey',
      },
    ],
  },
});
```

### plus button

```xml
<ant-tabs items="{{items}}">
  <view slot="plus">
    <ant-icon type="AddOutline" onTap="onPlus" />
  </view>
</ant-tabs>
```

### Control mode

```xml
<ant-tabs
  items="{{items}}"
  current="{{current}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
```

### Center scroll after selection

```xml
<ant-tabs items="{{items}}" scrollMode="center" />
```

### Swiper

```xml
<ant-tabs
  items="{{items}}"
  current="{{current}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
>
    <swiper
      current="{{current}}"
      autoplay="{{false}}"
      vertical="{{false}}"
      circular="{{false}}"
#if ALIPAY
      onChange="onSwipeChange"
#endif
#if WECHAT
      bindchange="onSwipeChange"
#endif
    >
      <block a:for="{{items}}" a:for-index="index" a:for-item="item" a:key="{{index}}">
        <swiper-item>
          <view class="content">{{item.content}}</view>
        </swiper-item>
      </block>
    </swiper>
</ant-tabs>
```

### Elevator mode

- Scrolling will correspond to tab.
- Click tab to scroll to the corresponding tab title.
- The onChange will only be triggered in tab switching. In the example, the custom title onTap can scroll current tab.

<code src='../../demo/pages/Tabs/TabsElevator/index'></code>

### ceiling

- Sliding to the very top will suck the ceiling.
- Toggling the tab content scrolls to the very top.

```xml
 <ant-tabs items="{{items}}" current="{{current}}" onChange="onChange" className="sticky-tabs" />
```

```css
.sticky-tabs {
  position: sticky;
  top: -1px;
  z-index: 999;
}
```

### Portrait mode

```xml
 <ant-tabs
    items="{{items}}"
    current="{{current}}"
    onChange="onChange"
    className="tabs"
    direction="vertical"
  >
    <scroll-view
      scroll-top="{{scrollTop}}"
      scroll-y="{{true}}"
      onScroll="onScroll"
      scroll-with-animation="{{true}}"
      scroll-animation-duration="{{300}}"
      class="content"
    >
      {{items[current].content}}
    </scroll-view>
  </ant-tabs>
```

### Longitudinal elevator mode

<code src='../../demo/pages/Tabs/TabsVerticalElevator/index'></code>

### Demo Code

<code src='../../demo/pages/Tabs/index'></code>

## API

| Property                   | Description                                                                                           | Type                                                                                         | Default Value     |
| ---------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| className              | Class Name                                                                                           | string                                                                                       | -          |
| current                | Selected Index                                                                                       | number                                                                                       | -          |
| defaultCurrent         | Selected index initial value                                                                                 | number                                                                                       | 0          |
| direction              | tabs direction,`horizontal`(Horizontal) `vertical`(Vertical)                                                 | string                                                                                       | horizontal |
| items                  | option, quantity must be greater than 0                                                                           | `Item[]`                                                                                     | -          |
| plus                   | Operation button slot in upper right corner;<br /> `slot-scope` Include `value`(corresponding `Item`) `index`(corresponding `Item` index of)  | slot                                                                                         | -          |
| scrollMode             | Scrolling mode, optional 'edge', 'center'                                                                | string                                                                                       | edge       |
| style                  | Style                                                                                           | string                                                                                       | -          |
| tabsBarClassName       | tabs bar class name                                                                                  | string                                                                                       | -          |
| tabClassName           | tab class name                                                                                       | string                                                                                       | -          |
| tabsBarWrapClassName           | tab wrap class name                                                                                       | string                                                                                       | -          |
| tabActiveClassName     | tab active class name                                                                                | string                                                                                       | -          |
| title                  | Custom `Items` Title;<br /> `slot-scope` Include `value`(corresponding `Item`) `index`(corresponding `Item` index of) | slot                                                                                         | -          |
| type                   | Type,`basic`(basis),`capsule`(capsule),`mixin`(Mixed)                                            | string                                                                                       | `basic`    |
| #if ALIPAY onChange    | When the panel is switched, the callback is triggered.                                                                         | (index: number, e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -          |
| #if WECHAT bindchange | When the panel is switched, the callback is triggered.                                                                         | (index: number, e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -          |

### Item

| Property  | Description | Type   | Default Value |
| ----- | ---- | ------ | ------ |
| title | Title | string | -      |

In addition to item can have `title`, you can also add custom attributes, such `content`, `badge` and so on, these properties can be used. `slot-scope` Visit:

```js
Page({
  data: {
    items: [
      {
        title: 'tab 1',
        content: 'tab 1 content',
      },
      {
        title: 'tab 2',
        content: 'tab 2 content',
      },
      {
        title: 'tab 3',
        content: 'tab 3 content',
      },
    ],
  },
});
```

```html
<tabs items="{{items}}">
  <view slot="title" slot-scope="tab">
    {{tab.index}}：{{tab.value.title}}，{{tab.value.content}}
  </view>
</tabs>
```

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                        | Light Mode Default                                                                                    | Dark Mode Default                                                                                    | Remarks                |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------- |
| --tabs-basic-color            | <div style="width: 150px; height: 30px; background-color: #333333; color: #FFFFFF;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #FFFFFF;">#c5cad1</div> | Tabs Basic Colors       |
| --tabs-weaken-color           | <div style="width: 150px; height: 30px; background-color: #999999; color: #FFFFFF;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #FFFFFF;">#616161</div> | Tabs Weaken Color       |
| --tabs-inverse-color          | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Tabs Invert Color         |
| --tabs-active-color           | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #FFFFFF;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #FFFFFF;">#3086ff</div> | Tabs Activate Colors       |
| --tabs-active-decorate-color  | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #FFFFFF;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #FFFFFF;">#3086ff</div> | Tabs Activate Decorative Colors   |
| --tabs-underline-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Tabs Underline Border Color |
| --tabs-plus-color             | <div style="width: 150px; height: 30px; background-color: #000000; color: #FFFFFF;">#000000</div> | <div style="width: 150px; height: 30px; background-color: #000000; color: #FFFFFF;">#000000</div> | Tabs Plus Color       |
| --tabs-capsule-title-bg       | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | Tabs Capsule Title Background Color |
| --tabs-subtitle-color         | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Tabs Subtitle Color     |
| --tabs-count-color            | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #fff;">#474747</div> | Tabs Count Color       |

## FAQ

### onChange can only be triggered by modification. What do you need to do if you want to click on the trigger current label?

can be used `slot` From the definition.

```xml
<tabs
  items="{{items}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
>
  <view
    slot="title"
    slot-scope="tab"
    data-index="{{tab.index}}"
#if ALIPAY
    onTap="onTap"
#endif
#if WECHAT
    bindtap="onTap"
#endif
  >
    {{tab.value.title}}
  </view>
</tabs>
```

```js
Page({
  onChange(index) {
    console.log(index);
  },
  onTap(e) {
    const { index } = e.currentTarget.dataset;
  },
});
```
