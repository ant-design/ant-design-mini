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
<code src='pages/IndexbarTest/index'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| ---------------|-----------------|-----------|------|
| items          | 索引数组         | `string[]` | []    | 
| className      | 类名             | `string`  | -    | 
| activeClassName| 索引激活时的样式   | `string`  | -    | 
| defaultCurrent | 默认索引          | `string`  | -    | 
| current        | 索引值            | `string`  | -    | 
| vibrate        | 索引改变时是否震动  | `boolean` | true | 
| preview        | 索引激活时是否需要侧边预览  | `boolean` | true | 
| itemSize       | 索引的尺寸（宽高，单位px）  | `number`  | 16    | 


## 事件

| 事件名    | 说明                   | 类型       |
| --------- | ---------------------- | ---------- |
| onChange | 索引改变时回调 | <pre>(index: string) => void; |

