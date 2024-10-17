---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# Tabs tab

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Navigate between content groups.
## When to use
- Navigate between content groups.
- The current content needs to be divided into groups of the same hierarchical structure for content switching and display, which is used at the top of the form or standard list interface.

## Code Sample
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
| direction | tabs 方向，`horizontal`(水平) `vertical`(垂直) | string | horizontal |
| items | option, quantity must be greater than 0 | `Item[]` | - |
| plus | Operation button slot in upper right corner;<br /> `slot-scope` 包括 `value`(对应 `Item`) `index`(对应 `Item` 的索引) | slot | - |
| scrollMode | Scrolling mode, optional 'edge', 'center' | string | edge |
| style | Style | string | - |
| tabsBarClassName | tabs bar class name | string | - |
| tabClassName | tab class name | string | - |
| tabActiveClassName | tab active class name | string | - |
| title | 自定义 `Items` Title；<br /> `slot-scope` 包括 `value`(对应 `Item`) `index`(对应 `Item` 的索引) | slot | - |
| type | Type，`basic`(基础)，`capsule`(胶囊)，`mixin`(混合) | string | `basic` |
| onChange | When the panel is switched, the callback is triggered. | (index: number, e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

### Item
| Property | Description | Type | Default Value |
| ---- | ---- | ---- | ---- |
| title | Title | string | - |

在 Item 里除了可以有 `title`，还可以加上自定义的Property，比如 `content`, `badge` 等，这些Property可使用 `slot-scope` 访问：

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
可以使用 `slot` 来自定义。
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
