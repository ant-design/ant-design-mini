---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---

# Tabs 标签页

内容组之间进行导航切换。

- 内容组之间进行导航切换。
- 当前内容需要分成同层级结构的组，进行内容切换展示，用在表单或者标准列表界面的顶部。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

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

### 带有 content

```xml
<ant-tabs items="{{items}}">
  <view class="content" slot-scope="item">
    {{item.value.content}}
  </view>
</ant-tabs>
```

### 胶囊

```xml
<ant-tabs type="capsule" items="{{items}}" defaultCurrent="{{1}}"></ant-tabs>
```

### 带副标题

```xml
<ant-tabs type="mixin" items="{{items}}"></ant-tabs>
```

### 带徽标

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

### 禁用状态

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

### plus 按钮

```xml
<ant-tabs items="{{items}}">
  <view slot="plus">
    <ant-icon type="AddOutline" onTap="onPlus" />
  </view>
</ant-tabs>
```

### 控制模式

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

### 选择后居中滚动

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

### 电梯模式

- 滚动会对应到 tab。
- 点击 tab 可滚动到对应 tab title。
- onChange 只会在 tab 切换触发，示例里自定义 title onTap 可滚动 current tab。

<code src='../../demo/pages/Tabs/TabsElevator/index'></code>

### 吸顶

- 滑动到最顶部会吸顶。
- 切换 tab content 会滚动到最顶部。

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

### 纵向模式

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

### 纵向电梯模式

<code src='../../demo/pages/Tabs/TabsVerticalElevator/index'></code>

### Demo 代码

<code src='../../demo/pages/Tabs/index'></code>

## API

| 属性                   | 说明                                                                                           | 类型                                                                                         | 默认值     |
| ---------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| className              | 类名                                                                                           | string                                                                                       | -          |
| current                | 选中索引                                                                                       | number                                                                                       | -          |
| defaultCurrent         | 选中索引初始值                                                                                 | number                                                                                       | 0          |
| direction              | tabs 方向，`horizontal`(水平) `vertical`(垂直)                                                 | string                                                                                       | horizontal |
| items                  | 选项，数量必须大于 0                                                                           | `Item[]`                                                                                     | -          |
| plus                   | 右上角操作按钮插槽；<br /> `slot-scope` 包括 `value`(对应 `Item`) `index`(对应 `Item` 的索引)  | slot                                                                                         | -          |
| scrollMode             | 滚动方式，可选 'edge', 'center'                                                                | string                                                                                       | edge       |
| style                  | 样式                                                                                           | string                                                                                       | -          |
| tabsBarClassName       | tabs bar 类名                                                                                  | string                                                                                       | -          |
| tabClassName           | tab 类名                                                                                       | string                                                                                       | -          |
| tabsBarWrapClassName           | tab wrap 类名                                                                                       | string                                                                                       | -          |
| tabActiveClassName     | tab active 类名                                                                                | string                                                                                       | -          |
| title                  | 自定义 `Items` 标题；<br /> `slot-scope` 包括 `value`(对应 `Item`) `index`(对应 `Item` 的索引) | slot                                                                                         | -          |
| type                   | 类型，`basic`(基础)，`capsule`(胶囊)，`mixin`(混合)                                            | string                                                                                       | `basic`    |
| #if ALIPAY onChange    | 面板切换时候，触发回调                                                                         | (index: number, e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -          |
| #if WECHAT bindchange | 面板切换时候，触发回调                                                                         | (index: number, e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -          |

### Item

| 属性  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| title | 标题 | string | -      |

在 Item 里除了可以有 `title`，还可以加上自定义的属性，比如 `content`, `badge` 等，这些属性可使用 `slot-scope` 访问：

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

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                        | 浅色模式默认值                                                                                    | 深色模式默认值                                                                                    | 备注                |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------- |
| --tabs-basic-color            | <div style="width: 150px; height: 30px; background-color: #333333; color: #FFFFFF;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #FFFFFF;">#c5cad1</div> | Tabs 基本颜色       |
| --tabs-weaken-color           | <div style="width: 150px; height: 30px; background-color: #999999; color: #FFFFFF;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #FFFFFF;">#616161</div> | Tabs 弱化颜色       |
| --tabs-inverse-color          | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Tabs 反转色         |
| --tabs-active-color           | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #FFFFFF;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #FFFFFF;">#3086ff</div> | Tabs 激活颜色       |
| --tabs-active-decorate-color  | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #FFFFFF;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #FFFFFF;">#3086ff</div> | Tabs 激活装饰颜色   |
| --tabs-underline-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Tabs 下划线边框颜色 |
| --tabs-plus-color             | <div style="width: 150px; height: 30px; background-color: #000000; color: #FFFFFF;">#000000</div> | <div style="width: 150px; height: 30px; background-color: #000000; color: #FFFFFF;">#000000</div> | Tabs 加号颜色       |
| --tabs-capsule-title-bg       | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | Tabs 胶囊标题背景色 |
| --tabs-subtitle-color         | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Tabs 副标题颜色     |
| --tabs-count-color            | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #fff;">#474747</div> | Tabs 计数颜色       |

## FAQ

### onChange 只有修改才能触发，想要在触发 current 标签的点击需要怎么做

可以使用 `slot` 来自定义。

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
