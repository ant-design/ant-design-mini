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
| activekey | number | 否 | 0 | 当前激活的索引 |
| sticky | boolean | 否 | false | 是否支持吸顶 |
| stickyTop | string \| number | 否 | 0 | 吸顶高度，仅在sticky为true时生效 |
| uid |  string  | 否 | - | 当页面有多个Tabs时需传入，`必须页面唯一`，与内部 TabItem 组件的 uid 一致 |
| adjustHeight | string | 否 | 'current' | 自动以指定滑块的高度为整个容器的高度 |
| activeClass | string | 否 |  -  |  swiper-item 可见时的 class |
| animation | boolean | 否 | false | 是否有过渡动画 |
| swipeable | boolean | 否 | false | 是否支持手势切换 |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |


``` typescript
interface ITabItem {
  /** 标题 */
  title: string;
  /** 副标题 */
  subTitle?: string;
  /** 徽标类型，参加Badge组件 */
  badge?: object;
  /** 是否禁用 */
  disabled?: boolean;
}
```
#### TabItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tab | ITabItem | 是 | - | tab 内容 |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |

``` typescript
interface ITabElevatorItem {
  /** 标题 */
  title: string;
}
```

#### TabsElevator
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| tabs | ITabElevatorItem[] | 否 |  -  |  tabs列表，title作为选项卡头显示文字，亦可传其他自定义属性，内容区渲染时作为作用域插槽属性透出 |
| transparentTitle | boolean | 否 |  false  |  页面是否标题栏透明，设置为true时会自动获取状态栏高度作为顶部距离 |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |

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
| 名称 | 说明 | 作用域参数 |
| ----|----|----|
| plus | 右上角操作按钮 | - |
| title | 自定义 tab 标题样式，仅在 type 为 basis 时可用 | - |

#### TabsElevator
| 名称 | 说明 | 作用域参数 |
| ----|----|----|
| default | 内容区渲染 | item、index、active|
| title | 自定义 tab 标题 | item、index、active|

