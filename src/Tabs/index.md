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
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| activeClass | swiper-item 可见时的 class | `string` |  -  |
| activeKey |  当前激活的索引 | `number` |  0  |
| adjustHeight | 自动以指定滑块的高度为整个容器的高度 | `string` | 'current' |  
| animation | 是否有过渡动画 | `boolean` | false | 
| className | 类名| `string` | - |
| swipeable | 是否支持手势切换 | `boolean` | false | 
| plus | 右上角操作按钮插槽 | `slot` | - |
| sticky | 是否支持吸顶 |  `boolean` | false | 
| stickyTop | 吸顶高度，仅在sticky为true时生效 | `string` \| `number` | 0 | 
| style | 样式| `string` | - |
| title | 自定义 tab 标题样式插槽，仅在 type 为 basis 时可用 | `slot` |- |
| type | 类型，basis(基础)，capsule(胶囊)，mixin(混合) | 'basis' \| 'capsule' \| 'mixin' | 'basis' | 
| uid |  当页面有多个Tabs时需传入，`必须页面唯一`，与内部 TabItem 组件的 uid 一致  | `string` | - |  
| onChange | 面板切换时候，触发回调 | (index: `number`, e: `Event`) => void| - |
| onAnimationEnd | 内部 swiper 组件的 onAnimationEnd 事件（仅在基础库 1.50.0 以上版本生效）| (e: `any`) => void | - | 
| onTouchStart | 内部 swiper 组件的 onTouchStart 事件（仅在基础库 2.x 版本生效） |(e: `any`) => void| - | 
| onTransition | 内部 swiper 组件的 onTransition 事件（仅在基础库 2.x 版本生效） |(e: `any`) => void| - | 

#### TabItem
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| style | 样式| `string` | - |
| tab | tab 内容 | [TabItemConfig](#tabitemconfig) | - |  
| uid |  当页面有多个Tabs时需传入，`必须页面唯一`，与外部 Tabs 组件的 uid 一致  | `string` | - |  




#### TabsElevator
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| style | 样式| `string` | - |
| title | 自定义 tab 标题作用域插槽，接收item、index、active参数 | `slot` | - |
| transparentTitle | 页面是否标题栏透明，设置为true时会自动获取状态栏高度作为顶部距离 | `boolean` | false |  
| onChange | 切换面板的回调 |(index: `number`, type: 'click'\|'scroll') => void | - |
| onTabClick | 点击tab的回调 |(index: `number`) => void| - |
| getRef | 未开启component2时可用此方法获取组件实例 | (ref) => void | - |

#### TabItemConfig
| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| badge | 徽标类型，参见 [Badge](./Badge) 组件 | `object` | - |
| disabled | 是否禁用 | `boolean` | false |
| subTitle | 副标题 | `string` | - |
| title | 标题 | string | - |

## 实例方法

#### TabsElevator
| 名称 | 说明 | 类型 |
| -----|-----|-----|
| setActiveTab | 改变当前激活项  | (index: `number`) => void |
| setTopHeight | 设置电梯上方内容区高度，当上方内容区高度存在动态变化时需调用此方法重新设置高度，单位为px。默认在组件didMount时获取电梯组件距离页面顶部距离 | (height: `number`) => void |
