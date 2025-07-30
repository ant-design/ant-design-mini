---
nav:
  path: /components
group:
  title: 数据展示
  order: 8
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# SwipeAction 滑动组件

列表的功能扩展。通过滑动操作来展示隐藏的功能菜单。

## 注意事项

1. 该组件的父级容器必须设置 width 和 height。
2. 两侧滑动按钮的宽度总和需一致。
3. 若 elasticity 设置为 false 时，较小的 damping 值可提供更佳的体验。
4. 每一侧的滑动二次确认只会触发第一个，其他不会触发。
5. 建议在基础库 2.0 的小程序中使用，1.0 版本（如钉钉小程序）中存在滑动体验缺陷（缺少 touchend 之后的滑动过渡效果）。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-swipe-action": "antd-mini/es/SwipeAction/index"
#endif

#if WECHAT
  "ant-swipe-action": "antd-mini/SwipeAction/index"
#endif
}
```

## 代码示例

### 基础用法

```xml
<ant-swipe-action
  rightButtons="{{[[
      {
        text: 'favor',
        bgColor: '#CCCCCC',
        color: '#fff',
        width: 200,
      },
      {
        text: 'rest',
        bgColor: '#1677FF',
        color: '#fff',
        width: 170,
      },
      {
        text: 'delete',
        bgColor: '#FF2B00',
        color: '#fff',
        width: 140,
      },
    ]]}}"
    elasticity="{{true}}"
    swiped="{{swipeIndex === index}}"
    onSwipeEnd="onSwipeEnd"
    onSwipeStart="onSwipeStart"
    onButtonTap="onButtonTap">
  <view>右侧-三个按钮</view>
</ant-swipe-action>
```

### 按钮在左侧

设置`leftButtons`属性
<code src='../../demo/pages/SwipeActionLeft/index'></code>

### 改变按钮数量

<code src='../../demo/pages/SwipeActionNumber/index'></code>

### 禁用滑动回弹

设置`elasticity`属性为`false`
<code src='../../demo/pages/SwipeActionAnimation/index'></code>

### 设置按钮宽度

设置 buttons 的`width`属性
<code src='../../demo/pages/SwipeActionWidth/index'></code>

### 设置滑动速度

设置`damping`属性
<code src='../../demo/pages/SwipeActionSpeed/index'></code>

### 按钮点击二次确认

设置 buttons 属性`confirmType`为`tap`

<code src='../../demo/pages/SwipeActionTap/index'></code>

### 按钮滑出最大距离二次确认

设置 buttons 属性`confirmType`为`move`
<code src='../../demo/pages/SwipeActionMove/index'></code>

### 左右两侧都有按钮

可同时设置`leftButtons`和`rightButtons`
<code src='../../demo/pages/SwipeActionLeftRight/index'></code>

### 自定义按钮

<code src='../../demo/pages/SwipeActionSlot/index'></code>

### Demo 代码

<code src='../../demo/pages/SwipeAction/index'></code>

## API

| 属性          | 类型                          | 默认值                            | 说明                                                                                                         |
| ------------- | ----------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| leftButtons   | [SwipeButton](#SwipeButton)   | []                                | 左侧按钮                                                                                                     |
| rightButtons  | [SwipeButton](#SwipeButton)   | []                                | 右侧按钮                                                                                                     |
| damping       | number                        | 70                                | 滑动速度                                                                                                     |
| elasticity    | boolean                       | `true`                            | 滑动弹性                                                                                                     |
| swiped        | `''` \| `'left'` \| `'right'` | `false`                           | 是否滑开                                                                                                     |
| defaultSwiped | `''` \| `'left'` \| `'right'` | `false`                           | 是否默认滑开                                                                                                 |
| disabled      | boolean                       | `false`                           | 禁止滑动                                                                                                     |
| onSwipeStart  | 滑动开始的回调函数            | (data: object, e: string) => void | e: 组件上 data-xxx 中的数据；data: direction(滑动的按钮是左边还是右边)，swiped(是否滑开)                     |
| onSwipeEnd    | 滑动结束的回调函数            | (data: object, e: string) => void | e: 组件上 data-xxx 中的数据；data: direction(滑动的按钮是左边还是右边)，swiped(是否滑开)                     |
| onButtonTap   | 按钮触发的回调函数            | (data: object, e: string) => void | e: 组件上 data-xxx 中的数据；data: direction(滑动的按钮是左边还是右边)，btnIdx(按钮的索引，靠近主体部分为 0) |

### SwipeButton

| 属性        | 类型                        | 默认值 | 说明                                                                                |
| ----------- | --------------------------- | ------ | ----------------------------------------------------------------------------------- |
| text        | string                      | -      | 按钮文字                                                                            |
| slotName    | string                      | -      | slot 名称,可以自定义对应按钮的内容。`${slotName}-confirm`可以自定义确认时的按钮内容 |
| bgColor     | string                      | -      | 按钮背景颜色                                                                        |
| color       | string                      | `#fff` | 按钮字体颜色                                                                        |
| width       | number                      | 150    | 按钮宽度                                                                            |
| confirmType | `''` \| `'move'` \| `'tap'` | -      | 二次确认类型：不触发二次确认 \| 滑动超出最大距离触发二次确认 \| 点击触发二次确认    |
| confirmText | string                      | -      | 二次确认的文案描述；若为空，则展示 text                                             |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名               | 浅色模式默认值                                                                                    | 深色模式默认值                                                                                    | 备注         |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --swipe-action-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 滑动操作颜色 |
