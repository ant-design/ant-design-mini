---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# SwipeAction 滑动组件

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

列表的功能扩展。

## 何时使用

通过滑动操作来展示隐藏的功能菜单。

## Tip

1. 该组件的父级容器必须设置 width 和 height。
2. 两侧滑动按钮的宽度总和需一致。
3. 若 elasticity 设置为 false 时，较小的 damping 值可提供更佳的体验。
4. 每一侧的滑动二次确认只会触发第一个，其他不会触发。
5. 建议在基础库 2.0 的小程序中使用，1.0 版本（如钉钉小程序）中存在滑动体验缺陷（缺少 touchend 之后的滑动过渡效果）。

## 代码示例

### 基础用法

<code src='pages/SwipeAction/index'></code>

### 按钮在左侧

<code src='pages/SwipeActionLeft/index'></code>

### 改变按钮数量

<code src='pages/SwipeActionNumber/index'></code>

### 禁用滑动回弹

<code src='pages/SwipeActionAnimation/index'></code>

### 设置按钮宽度

<code src='pages/SwipeActionWidth/index'></code>

### 设置滑动速度

<code src='pages/SwipeActionSpeed/index'></code>

### 按钮点击二次确认

<code src='pages/SwipeActionTap/index'></code>

### 按钮滑出最大距离二次确认

<code src='pages/SwipeActionMove/index'></code>

### 左右两侧都有按钮

<code src='pages/SwipeActionLeftRight/index'></code>

### 自定义按钮

<code src='pages/SwipeActionSlot/index'></code>

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
