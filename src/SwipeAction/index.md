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

<code src='pages/SwipeAction/index'></code>

## Tip

1. 该组件父级容器必须设置css的width和height
2. 左右两侧都需要滑动按钮时，两侧设置的宽度总和需一致
3. elasticity设置为false时设置damping数值小一点体验更佳


## 属性
| 属性         | 类型            | 必填   | 默认值 | 说明                  |
| -------------|----------------|-------|-------|------------------------------------------- |
| leftButtons  | `SwipeButton[]`  | 否    | []    | 左侧按钮                                    |
| rightButtons | `SwipeButton[]`  | 否    | []    | 右侧按钮                                    |
| damping      | `number`         | 否    | 60    | 滑动速度                                    |
| elasticity   | `boolean`        | 否    | true  | 滑动弹性                                    |
| swiped       | `'' &verbar; 'left' &verbar; 'right'` | 否    | false | 是否滑开               |
| defaultSwiped| `'' &verbar; 'left' &verbar; 'right'` | 否    | false | 是否默认滑开            |
| disable      | `boolean`          | 否    | false | 禁止滑动                                    |

### SwipeButton
| 属性         | 类型            | 必填   | 默认值 | 说明                  |
| -------------|----------------|-------|-------|------------------------------------------- |
| text         | `string`         | 是    | -     | 按钮文字                                     |
| bgColor      | `string`         | 是    | -     | 按钮背景颜色                                  |
| color        | `string`         | 否    | #fff  | 按钮字体颜色                                  |
| width        | `number`         | 否    | 150   | 按钮长度                                     |
| confirmType  | `'' &verbar; 'move' &verbar; 'tap'`  | 否    | -     | 二次确认的类型，不触发二次确认 &verbar; 滑动超出最大距离触发二次确认 &verbar; 点击触发二次确认               |
| confirmText  | `string`         | 否    | -     | 二次确认的文案描述，不填则展示text               |

## 事件
| 事件名               | 说明                 | 类型             | 说明                  |
| --------------------|---------------------|-------------------------------------------|----|
| onSwipeStart        | 滑动开始             | (e: string) => void                  |e: 组件上data-xxx中的数据 |
| onSwipeEnd          | 滑动结束             | (e: string, data: object) => void    |e: 组件上data-xxx中的数据, data: direction(滑动的按钮是左边还是右边)，swiped(是否滑开)|
| onButtonTap         | 按钮触发             | (e: string, data: object) => void    |e: 组件上data-xxx中的数据, data: direction(滑动的按钮是左边还是右边)，btnIdx(按钮的index, 靠近主体的部分为0) |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-swipe-action | 整体样式 |
| amd-swipe-action-content | 内容区域样式 |
| amd-swipe-action-right | 右侧按钮区域样式 |
| amd-swipe-action-left  | 左侧按钮区域样式 |

