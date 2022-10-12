---
nav:
  path: /components
group:
  title: 实验性质的组件
  order: 16
toc: 'content'
---

# IndexList 索引选择器

通过定义索引列表提供出滑动选择页面元素的功能。

## 何时使用

用于A-Z或者其他索引的侧边滑动选择。

## 代码示例
### 基本使用

<code src='../../demo/pages/IndexList'></code>

## 属性 

| 属性       | 类型      | 必填 | 默认值 | 说明                    |
| ----------|-----------|-----|-------|------------------------ |
| type      | 'base' &verbar; 'diy' &verbar; 'only'   | 否  | 'base' | 'base': 基础模式;'diy': 提供自定义滚动区域,需插入slot="header""footer"; 'only': 只需要索引侧边栏 |
| indexList | string[]  | 是  | []     | 索引数组                 |
| indexArr  | { index: string, name?: string, avator?: string, [key: string]: any  }[]  | 否  | []     | 滚动区域数组，only模式下可不传, diy模式下index必传，其他数据可自定义 |
| sticky    | boolean   | 否  | true   | 每项label展示是否支持吸顶  |
| vibrate   | boolean   | 否  | true   | 修改激活key时是否震动      |
| scrollToKey| string   | 否  | -      | 滚动到的元素,支持update   |



## 事件 

| 事件名 | 说明 | 类型 |
| -----|-----|----- |
| onChange | 索引被激活时触发,返回索引值 | (key: string) => void |


## 样式类 

| 类名 | 说明 |
| -----|----- |
| amd-index-list-index| 侧边栏索引样式 |
| amd-index-list-list | base、diy模式下滚动列表样式 |
| amd-index-list-key  | base模式下，滚动列表中索引值样式 |
| amd-index-list-item | base模式下，滚动列表中文本模块样式 |
