---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# Indexbar 索引

侧边索引组件

## 何时使用

用于快速定位列表索引

## 代码示例

### 基本使用
<code src='pages/Indexbar/index'></code>

### 结合列表使用
<code src='pages/IndexbarScrollView/index'></code>

## API

### Indexbar

| 属性            | 说明                  | 类型       | 默认值 |
| ---------------|-----------------------|-----------|------|
| items          | 索引数组               | `Item[]`  | []    | 
| className      | 类名                  | string  | -    | 
| activeClassName| 索引激活时的样式        | string  | -    | 
| defaultCurrent | 默认索引               | string  | -    | 
| current        | 索引值                 | string  | -    | 
| vibrate        | 索引改变时是否震动       | boolean | true | 
| size           | 索引的尺寸（宽高，单位px）| number  | 16    | 

#### Item
items 里每一项
| 属性            | 说明                 | 类型        | 默认值 |
| ---------------|----------------------|------------|-------|
| label          | 索引标识              | string   | -      |
| disablePreview | 禁用索引触发时的预览效果 | boolean  | -      |

## 插槽

| 插槽名称      | 说明  | 类型 |
| -------------| ------|---------------------------------------------------|
| default      | 列表内容|`slot-scope: {value: Item, index: number}`       |
| labelPreview | 索引预览内容|`slot-scope: {value: Item, index: number}`    |
## 事件

| 事件名    | 说明                   | 类型       |
| ---------| ---------------------- | ---------- |
| onChange | 索引改变时回调            | `(value: Item, index: number) => void`  |


