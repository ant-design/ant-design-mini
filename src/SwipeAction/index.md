---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# SwipeAction 滑动组件
列表的功能扩展
## 何时使用
通过滑动操作来展示隐藏的功能菜单

## 代码示例

### 组件使用
<code src='../../demo/pages/SwipeAction'></code>

### 使用限制

1. 该组件父级容器必须设置css的width和height
2. 左右两侧都需要滑动按钮时，left\right数量需一致


## 属性
| 属性         | 类型            | 必填   | 默认值 | 说明                  |
| -------------|----------------|-------|-------|------------------------------------------- |
| left         | SwipeButton[]  | 否    | []    | 左侧滑出事件                                 |
| right        | SwipeButton[]  | 否    | []    | 右侧滑出事件                                 |
| itemWidth    | number         | 否    | 150   | 左、右侧滑出按钮的宽度                         |
| damping      | number         | 否    | 20    | 滑动速度                                    |
| inertia      | boolean        | 否    | true  | 滑动速度                                    |
| key          | string         | 是    | -     | 唯一标识，用于控制自动收起滑开状态               |
| leftSwiped   | false          | 否    | false | 左侧按钮是否需要默认滑开                       |
| rightSwiped  | false          | 否    | false | 右侧按钮是否需要默认滑开                       |
| disable      | false          | 否    | false | 禁止滑动                                    |
| callbackData | object         | 否    | {}    | 在事件中回调返回                              |
| className    | string         | 否    | -     | 类名                                        |

### SwipeButton
| 属性         | 类型            | 必填   | 默认值 | 说明                  |
| -------------|----------------|-------|-------|------------------------------------------- |
| type         | string         | 是    | -     | 事件标志，在点击事件中返回                      |
| text         | string         | 是    | -     | 事件按钮文字                                 |
| bgColor      | string         | 否    | -     | 事件按钮背景颜色                              |
| color        | string         | 否    | -     | 事件按钮字体颜色                              |
| style        | object         | 否    | {}    | 事件按钮样式对象                              |
| eventType    | 'move' | 'auto'| 否    | -     | 二次确认方式，不填：没有二次确认；auto：点击确认；move：滑动超出最大距离触发确认 |
| confirmText  | string         | 否    | -     | 二次确认的文案描述，不填：展示text               |

## 事件
| 事件名               | 说明                 | 类型                                       |
| --------------------|---------------------|--------------------------------------------|
| onSwipeStart        | 滑动、触摸开始        | (key: string, callbackData: object) => void |
| onSwipeEnd          | 滑动结束             | (key: string, swipeObj: { direction: 'right' | 'left',left?: boolean,right?: boolean, }, callbackData: object) => void |
| onTouchEnd          | 触摸结束             | (key: string, callbackData: object) => void |
| onRightItemEvent    | 点击右侧按钮          | (type: string, key: string, callbackData: object) => void  |
| onLeftItemEvent     | 点击左侧按钮          | (type: string, key: string, callbackData: object) => void  |

