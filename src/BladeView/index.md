---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# BladeView 索引

通过定义索引列表提供出滑动选择页面元素的功能。

## 何时使用

用于A-Z或者其他索引的侧边滑动选择。

## 代码示例
### 基本使用

<code src='../../demo/pages/BladeView'></code>

## 属性 

| 属性       | 类型      | 必填 | 默认值 | 说明                    |
| ----------|-----------|-----|-------|------------------------ |
| type      | 'base' &verbar; 'diy' &verbar; 'only'   | 否  | 'base' | 'base': 基础模式;'diy': 提供自定义滚动区域,需插入slot="header""footer"; 'only': 只需要索引侧边栏 |
| data      | SwipeItem[] | 是  | []     | 数据源                  |
| sticky    | boolean   | 否  | true   | 每项label展示是否支持吸顶  |
| vibrate   | boolean   | 否  | true   | 修改激活key时是否震动      |
| value     | string    | 否  | -      | 当前值：默认内容区滚动位置  |
| scrollToKey| string   | 否  | -      | 滚动到的group key        |
| className | string    | 否  | -      | 类名                    |

#### SwipeItem
| 属性       | 类型      | 必填 | 默认值  | 说明                    |
| ----------|-----------|-----|------- |------------------------ |
| key       | string    | 是  | -      | 索引唯一标识              |
| title     | string    | 是  | -      | 索引展示的内容              |
| items     | object[] &verbar; { label: string; value: string; avator: string;}[]    | 否  | []      | Group Item数据 |


## 事件 

| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onChange | 点击某一项的回调 | (items: object, dataItem: SwipeItem) => void |
| onChangeSwipeKey | 点击某一项的回调 | (obj: SwipeItem) => void |


## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-blade-view| 整体样式 |
| amd-blade-view-item-title  | base模式下，标题样式 |
| amd-blade-view-item-group  | base模式下，各索引下整体样式 |
| amd-blade-view-sidebar     | 侧边栏导航整体样式 |
| amd-blade-view-sidebar-item| 侧边栏导航每项样式 |
| amd-blade-view-sidebar-active | 侧边栏导航激活项样式 |
| amd-blade-view-sidebar-item-tip| 侧边栏导航弹起tip样式 |
