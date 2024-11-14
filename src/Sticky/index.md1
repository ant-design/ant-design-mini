---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
---

# Sticky 粘性吸附

## 何时使用

需要在滚动中吸附在某些地方的情况。

## 代码示例

### 基础用法

<code src="../../demo/pages/Sticky/index"></code>

## 属性

| 属性                | 类型        | 默认值            | 说明                                       |
|-------------------|----------|----------------|------------------------------------------|
| className         | string     | ""             | 容器 className     |
| top               | string     | ""          | 吸顶高度，需要写单位，比如10px,24rpx                  |
| check             | bool       | false          | 是否需要感知是否吸顶了，因为吸顶检查还是有一定成本的               |
| sticky            | bool       | true           | 是否要吸顶，某些场景不一定需要                          |
| transparentTitle  | bool       | false          | 是否是透明头，透明头会自动计算titlebar高度，默认吸附在titlebar下 |
| onStickyChange    | Function   | (status) => {} | 是否在吸顶状态，注意需要打开check功能才有这个回调              |
| onGetHeaderHeight | Function       | (height) => {} | 计算了头的高度，顺便抛出来                            |

## 插槽

仅有一个默认插槽，用于包裹想吸顶的元素、组件。

## 其他

需要注意的是，透明页面场景下自动计算头高度仅方便吸在顶上的情况，如果有偏移，还是需要自行计算的。
