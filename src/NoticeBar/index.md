---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: false
---
# NoticeBar
消息通知栏组件。

## 代码示例
<code src='../../demo/pages/NoticeBar'></code>

## API
### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| mode | 'link' &verbar; 'closeable' | 否 | - | 通告类型，link 表示连接，整行可点；closeable 表示点击 x 可以关闭；不填时表示你右侧没有图标 |
| actions | string[] | 否 | - | 行动点，最多两个行动点，当有 action 时，mode 失效 |
| showIcon | boolean | 否 | false | 是否显示左侧的图标 |
| enableMarquee | boolean | 否 | false | 是否开启滚动动画 |
| loop | boolean | 否 | false | 是否循环滚动，enableMarquee 为 true 时有效 |
| type | 'default' &verbar; 'info' &verbar; 'error' &verbar; 'primary' | 否 | "default" | 提示类型 default 橙色，info 灰色，error 红色，primary 蓝色 |
| className | string | 否 | - | 类名 |

### 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击通知栏右侧的图标（箭头或者叉），触发回调  | () => void |
| onActionTap | 点击右侧操作区域文本，触发回调  | (index: number) => void |


### 样式类
| 类名 | 说明 |
| -----|-----|
| amd-notice-bar | 整体样式 |
| amd-notice-bar-default | 整体样式 |
| amd-notice-bar-danger | 整体样式 |
| amd-notice-bar-primary | 整体样式 |
| amd-notice-bar-transparent | 整体样式 |
| amd-notice-bar-content | 内部区域样式 |
| amd-notice-bar-scroll-left | 左侧阴影渐变区域样式 |
| amd-notice-bar-scroll-right | 右侧阴影渐变区域样式 |
| amd-notice-bar-marquee | 文本展示区域样式 |
| amd-notice-bar-operation | 右侧操作区域样式 |
| amd-notice-bar-operation-icon | 右侧操作区域内图标样式 |
| amd-notice-bar-operation-text | 右侧操作区域文字样式 |


<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 200px
} 
.__dumi-default-layout-content article table:nth-of-type(3) th:nth-of-type(2)  {
    width: 300px
} 
</style> 