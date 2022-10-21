---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: 'content'
---
# NoticeBar 通告栏
展示一组消息通知
## 何时使用
用于当前页面内信息的通知，是一种较醒目的页面内通知方式

## 代码示例
### 基本使用
<code src='../../demo/pages/NoticeBar'></code>


## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| mode | 'link' &verbar; 'closeable' | 否 | - | 通告类型，'link' 表示连接，整行可点；'closeable' 表示点击 x 可以关闭；不填时表示你右侧没有图标 |
| actions | string[] | 否 | - | 行动点，最多两个行动点，当有 action 时，mode 失效 |
| showIcon | boolean | 否 | false | 是否显示左侧的图标 |
| enableMarquee | boolean | 否 | false | 是否开启滚动动画 |
| loop | boolean | 否 | false | 是否循环滚动，enableMarquee 为 true 时有效 |
| type | 'default' &verbar; 'info' &verbar; 'error' &verbar; 'primary' | 否 | 'default' | 提示类型 'default' 橙色，'info' 灰色，'error' 红色，'primary' 蓝色 |
| className | string | 否 | - | 组件根节点类名 |
| style | string | 否 | - | 组件根节点 style |

## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onTap | 点击通知栏右侧的图标（箭头或者叉），触发回调  | () => void |
| onActionTap | 点击右侧操作区域文本，触发回调  | (index: number) => void |


