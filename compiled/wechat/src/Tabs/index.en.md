---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# Tabs

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Navigate between content groups.
## When to use
- Navigate between content groups.
- The current content needs to be divided into groups of the same hierarchical structure for content switching and display, which is used at the top of the form or standard list interface.

## Code example
### Basic use
<code src='../../demo/pages/Tabs/index'></code>

### Controlled
<!-- <code src='pages/TabsControl/index'></code> -->

### Slide
<!-- <code src='pages/TabsScroll/index'></code> -->

### Swiper
<!-- <code src='pages/TabsSwiper/index'></code> -->

### Elevator mode
- Scrolling will correspond to tab.
- Click tab to scroll to the corresponding tab title.
- The onChange will only be triggered in tab switching. In the example, the custom title onTap can scroll current tab.

<!-- <code src='pages/TabsElevator/index'></code> -->

### ceiling
- Sliding to the very top will suck the ceiling.
- Toggling the tab content scrolls to the very top.

<!-- <code src='pages/TabsSticky/index'></code> -->

### Portrait mode
<!-- <code src='pages/TabsVertical/index'></code> -->

### Longitudinal elevator mode
<!-- <code src='pages/TabsVerticalElevator/index'></code> -->

## API
| Property | Description | Type | Default Value |
| ---- | ---- | ---- | ---- |
| className | Class Name | string | - |
| current | Selected Index | number | - |
| defaultCurrent | Selected index initial value | number | 0 |
| direction | tabs direction,`horizontal`(Horizontal) `vertical`(Vertical) | string | horizontal |
| items | option, quantity must be greater than 0 | `Item[]` | - |
| plus | Operation button slot in upper right corner;<br /> `slot-scope` Include `value`(Corresponding `Item`) `index`(Corresponding `Item` index of) | slot | - |
| scrollMode | Scrolling mode, optional 'edge', 'center' | string | edge |
| style | Style | string | - |
| tabsBarClassName | tabs bar class name | string | - |
| tabClassName | tab class name | string | - |
| tabActiveClassName | tab active class name | string | - |
| title | Custom `Items` Title;<br /> `slot-scope` Include `value`(Corresponding `Item`) `index`(Corresponding `Item` index of) | slot | - |
| type | Type,`basic`(basis),`capsule`(capsule),`mixin`(Mixed) | string | `basic` |
| onChange | When the panel is switched, the callback is triggered. | (index: number, e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

### Item
| Property | Description | Type | Default Value |
| ---- | ---- | ---- | ---- |
| title | Title | string | - |

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
        content: 'tab 3 content'
      }
    ]
  }
})
```

```html
<tabs items="{{items}}">
  <view slot="title" slot-scope="tab">
    {{ tab.index }}：{{ tab.value.title }}，{{ tab.value.content }}
  </view>
</tabs>
```

## FAQ
### onChange can only be triggered by modification. What do you need to do if you want to click on the trigger current label?
can be used `slot` From the definition.
```html
<tabs items="{{items}}" onChange="onChange">
  <view slot="title" slot-scope="tab" data-index="{{tab.index}}" onTap="onTap">
    {{ tab.value.title }}
  </view>
</tabs>
```

```js
Page({
  onChange(index) {
    console.log(index)
  },
  onTap(e) {
    const { index } = e.currentTarget.dataset
  }
})
```
