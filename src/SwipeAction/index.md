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

## Tip

1. 该组件父级容器必须设置width和height。
2. 左右两侧都需要滑动按钮时，两侧设置的宽度总和需一致。
3. elasticity设置为false时设置damping数值小一点体验更佳。
4. 每一侧的滑动二次确认只会触发第一个，其他不会触发。
5. 建议在appx2.0的小程序中使用，1.0（如：钉钉小程序）中体验存在体验缺陷（没有touchend之后滑动过渡效果）。


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

## API
| 属性         | 类型             | 默认值 | 说明                  |
| -------------|----------------|-------|------------------------------------------- |
| leftButtons  | [SwipeButton](#SwipeButton)  | []    | 左侧按钮                                    |
| rightButtons | [SwipeButton](#SwipeButton)  | []    | 右侧按钮                                    |
| damping      | number         | 70    | 滑动速度                                    |
| elasticity   | boolean        | true  | 滑动弹性                                    |
| swiped       | `''` &verbar; `'left'` &verbar; `'right'` | false | 是否滑开         |
| defaultSwiped| `''` &verbar; `'left'` &verbar; `'right'` | false | 是否默认滑开      |
| disable      | boolean         | false | 禁止滑动                                    |
| onSwipeStart | 滑动开始         | (e: string) => void      |e: 组件上data-xxx中的数据  |
| onSwipeEnd   | 滑动结束         | (e: string, data: object) => void |e: 组件上data-xxx中的数据, data: direction(滑动的按钮是左边还是右边)，swiped(是否滑开)|
| onButtonTap  | 按钮触发         | (e: string, data: object) => void |e: 组件上data-xxx中的数据, data: direction(滑动的按钮是左边还是右边)，btnIdx(按钮的index, 靠近主体的部分为0) |

### SwipeButton
| 属性         | 类型            | 必填   | 默认值 | 说明                  |
| -------------|----------------|-------|-------|------------------------------------------- |
| text         | string         | 是    | -     | 按钮文字                                     |
| bgColor      | string         | 是    | -     | 按钮背景颜色                                  |
| color        | string         | 否    | #fff  | 按钮字体颜色                                  |
| width        | number         | 否    | 150   | 按钮长度                                     |
| confirmType  | `''` &verbar; `'move'` &verbar; `'tap'`  | 否    | -     | 二次确认的类型，不触发二次确认 &verbar; 滑动超出最大距离触发二次确认 &verbar; 点击触发二次确认               |
| confirmText  | string         | 否    | -     | 二次确认的文案描述，不填则展示text               |
