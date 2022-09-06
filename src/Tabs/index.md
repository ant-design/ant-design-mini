---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---
# Tabs 标签页
内容组之间进行导航切换
## 何时使用
- 内容组之间进行导航切换
- 当前内容需要分成同层级结构的组，进行内容切换展示，用在表单或者标准列表界面的顶部

## 注意事项

- 在基础库 2.x 版本下，内嵌 scroll-view 产生 scroll-view 无法滚动的情况，建议scroll-view 阻止 touch 事件冒泡：catchTouchStart、catchTouchMove。详见[官方文档](https://opendocs.alipay.com/mini/component/scroll-view)
- Tabs 内部使用 transform 样式以进行轮播，会导致内嵌弹层显示问题，建议内部不嵌套包含弹层的组件或者使用 fallback 属性，以自己实现简单版的“轮播”，详见下方 fallback 的 demo。
- 电梯组件模式依赖页面的滚动事件，由于限制，必须在引用组件的页面内定义onPageScroll方法，否则滚动切换激活项将失效，具体见demo代码。

## 代码示例
### 基本使用
<code src='../../demo/pages/Tabs'></code>

### 吸顶模式
<code src='../../demo/pages/TabsSticky'></code>

### fallback
<code src='../../demo/pages/TabsFallback'></code>

### 电梯模式
<code src='../../demo/pages/TabsElevator'></code>

## 属性

#### Tabs
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| type | 'basis' &verbar; 'capsule' &verbar; 'mixin' | 否 | 'basis' | 类型，basis(基础)，capsule(胶囊)，mixin(混合) |
| index | number | 否 | 0 | 当前激活的索引 |
| sticky | boolean | 否 | false | 是否支持吸顶 |
| stickyTop | string \| number | 否 | 0 | 吸顶高度，仅在sticky为true时生效 |
| uid |  string  | 否 | - | 当页面有多个Tabs时需传入，`必须页面唯一`，与内部 TabItem 组件的 uid 一致 |
| adjustHeight | string | 否 | 'current' | 自动以指定滑块的高度为整个容器的高度 |
| activeClass | string | 否 |  -  |  swiper-item 可见时的 class |
| animation | boolean | 否 | false | 是否有过渡动画 |
| className | string | 否 | - | 类名 |
| easingFunction | string  | 否 | 'default' | 切换缓动动画类型 |
| nextMargin | string  | 否 | '0px' | 后边距，单位 px，1.9.0 暂时只支持水平方向 |
| previousMargin | string  | 否 | '0px' | 前边距，单位 px，1.9.0 暂时只支持水平方向 |
| snapToEdge | boolean  | 否 | false | 当 swiper-item 个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 时，可以指定这个边距是否应用到第一个、最后一个元素 |
| swipeRatio | number | 否 | 0.2 | 用户左右滑动手势触发切换的阈值，当滑动距离超过阈值时进行 `swiper-item` 切换 |
| swipeSpeed | number | 否 | 0.05 | 用户左右滑动手势对应的滑动距离，数值越小则需要用户手势相同位移下 `swiper-item` 位移越小 |
| swipeable | boolean | 否 | false | 是否支持手势切换 |
| touchAngle | number | 否 | 45 | 用户左右滑动手势生效的滑动角度。角度根据 touchstart 事件和首次 touchmove 事件的坐标计算得出。数值越小越对用户的滑动方向准确度要求越高 |


``` typescript
interface ITabItem {
  title: string;
  subTitle?: string;
  /** 传入空字符串显示原点 */
  badge?: string|number;
  disabled?: boolean;
}
```
#### TabItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tab | ITabItem[]| 是 | - | 每一项 tab 内容 |
| className | string | 否 | - | 类名 |

#### TabsElevator
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tabs | {title:string}[] | 否 |  -  |  tabs列表，title作为选项卡头显示文字，亦可传其他自定义属性，内容区渲染时作为作用域插槽属性透出 |
| transparentTitle | boolean | 否 |  false  |  页面是否标题栏透明，设置为true时会自动获取状态栏高度作为顶部距离 |
| className | string | 否 | - | 类名 |

## 事件

#### Tabs
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 面板切换时候，触发回调 |(index: number, e: Event) => void|
| onAnimationEnd | 内部 swiper 组件的 onAnimationEnd 事件（仅在基础库 1.50.0 以上版本生效）|(e: any) => void=> void|
| onTouchStart | 内部 swiper 组件的 onTouchStart 事件（仅在基础库 2.x 版本生效） |(e: any) => void|
| onTransition | 内部 swiper 组件的 onTransition 事件（仅在基础库 2.x 版本生效） |(e: any) => void|

#### TabsElevator
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 切换面板的回调 |(index: number, type: 'click'\|'scroll') => void|
| onTabClick | 点击tab的回调 |(index: number) => void|
| getRef | 未开启component2时可用此方法获取组件实例 |(ref) => void|

## 实例方法

#### TabsElevator
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| setActiveTab | 改变当前激活项  | (index: number) => void |
| setTopHeight | 设置电梯上方内容区高度，当上方内容区高度存在动态变化时需调用此方法重新设置高度，单位为px。默认在组件didMount时获取电梯组件距离页面顶部距离 | (height: number) => void |

## 插槽
#### Tabs
| 名称 | 说明 |
| ----|----|
| plus | 右上角操作按钮 |

## 作用域插槽
#### Tabs
| 名称 | 说明 |
| ----|----|
| title | 自定义 tab 标题样式，仅在 type 为 basis 时可用 |

#### TabsElevator
| 名称 | 说明 |
| ----|----|
| default | 内容区渲染，透出item、index、active |
| title | 自定义 tab 标题样式，透出item、index、active |

## 样式类
#### Tabs
| 类名 | 说明 |
| -----|-----|
| amd-tabs | 整体样式 |
| amd-tabs-bar | 上方标题区域样式 |
| `amd-tabs-bar-active` |  `上方标题区域激活时样式` |
| `amd-tabs-bar-active:after` | `上方标题区域激活时 indicator 样式` |
| amd-tabs-bar | 上方标题区域样式 |
| amd-tabs-bar-sticky | 吸顶状态样式 |
| amd-tabs-bar-plus | 右上角标签样式 |
| amd-tabs-bar-fade | 两侧渐淡效果样式 |
| amd-tabs-bar-fade-left | 左侧渐淡效果样式 |
| amd-tabs-bar-fade-right | 左侧渐淡效果样式 |
| amd-tabs-bar-scroll-view | 内部ScrollView组件样式 |
| amd-tabs-bar-wrap| 每个标题的样式 |
| amd-tabs-bar-item | 每个标题的样式 |
| amd-tabs-bar-basis | type 为 basis 时，每个标题的样式 |
| amd-tabs-bar-capsule | type 为 capsule 时，每个标题的样式 |
| amd-tabs-bar-capsule-title | type 为 capsule 时，每个标题内部文字的样式 |
| amd-tabs-bar-capsule-badge | type 为 capsule 时，每个标题内部 badge 的样式 |
| amd-tabs-bar-mixin| 内type 为 mixin 时，每个标题的样式 |
| amd-tabs-bar-mixin-title| 内type 为 mixin 时，每个标题的文字样式 |
| amd-tabs-bar-mixin-subtitle| 内type 为 mixin 时，每个标题的副标题样式 |
| amd-tabs-bar-disabled | 禁用态选项卡样式 |
| amd-tabs-elavator | 电梯模式整体样式 |
| amd-tabs-elavator-bar | 电梯模式标题区样式 |
| amd-tabs-elavator-content | 电梯模式内容区样式 |

#### TabItem
| 类名 | 说明 |
| -----|-----|
| amd-tabs-item | 整体样式 |
| amd-tabs-item-pane | 整体样式 |
