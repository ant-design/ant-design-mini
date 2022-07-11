---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: false
---

#  Skeleton 骨架屏
在需要等待加载内容的位置提供一个占位图形组合
## 何时使用
- 网络较慢需要长时间等待加载，且只在第一次加载的时候使用；
- 在确保手机性能的前提下，尽量使用预加载，最好不用骨架屏；
- 适用于图文信息较多且重要的首页、列表、卡片中，小的模块类组件（例如弹窗）不要使用；

## 代码示例
### 基本使用
<code src='../../demo/pages/Skeleton'></code>

## 属性

#### Skeleton
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| loading | boolean  | 否 | true | 为 true 时，显示占位图。反之则直接展示子组件 |
| animate | boolean | 否 | flase | 是否展示动画效果 |
| avatar | string | 否 | false | 是否显示头像占位图 |
| title | boolean | 否 | true | 是否显示标题占位图 |
| rows | number | 否 | 3 | 段落行数，大于0展示 |
| avatarSize | string | 否 | '88rpx' | 头像大小 |
| avatarShape | 'circle' \| 'square' | 否 | 'square' | 头像形状 |
| className | string | 否 | - | 类名 |

#### Avatar 头像
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| loading | boolean  | 否 | true | 为 true 时，显示占位图。反之则直接展示子组件 |
| animate | boolean | 否 | flase | 是否展示动画效果 |
| size | string | 否 | '88rpx' | 头像大小 |
| shape | 'circle' \| 'square' | 否 | 'square' | 头像形状 |
| className | string | 否 | - | 类名 |

#### Paragraph 段落
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| loading | boolean  | 否 | true | 为 true 时，显示占位图。反之则直接展示子组件 |
| animate | boolean | 否 | flase | 是否展示动画效果 |
| rows | number | 否 | 3 | 段落行数，大于0展示 |
| className | string | 否 | - | 类名 |

#### Title 标题
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| loading | boolean  | 否 | true | 为 true 时，显示占位图。反之则直接展示子组件 |
| animate | boolean | 否 | flase | 是否展示动画效果 |
| className | string | 否 | - | 类名 |

#### Button 按钮
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| loading | boolean  | 否 | true | 为 true 时，显示占位图。反之则直接展示子组件 |
| animate | boolean | 否 | flase | 是否展示动画效果 |
| className | string | 否 | - | 类名 |
#### Input 输入框
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| loading | boolean  | 否 | true | 为 true 时，显示占位图。反之则直接展示子组件 |
| animate | boolean | 否 | flase | 是否展示动画效果 |
| className | string | 否 | - | 类名 |

#### Custom 自定义组件，添加标准容器和动画样式
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| loading | boolean  | 否 | true | 为 true 时，显示占位图。反之则直接展示子组件 |
| animate | boolean | 否 | flase | 是否展示动画效果 |
| className | string | 否 | - | 类名 |


## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-skeleton | 整体样式 |
| amd-skeleton-avatar | 头像样式 |
| amd-skeleton-button | 按钮样式 |
| amd-skeleton-paragraph | 段落样式 |
| amd-skeleton-title | 标题样式 |
| amd-skeleton-input | 输入框样式 |
| amd-skeleton-custom | 自定义容器样式 |
