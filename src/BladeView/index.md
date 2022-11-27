---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# BladeView 索引

分类展示和索引快速定位组件

## 何时使用

用于列表的分类显示和快速定位

## 注意事项
需基础库版本大于 2.7.4 [设置最低基础版本库](https://opendocs.alipay.com/mini/framework/lib)

## 代码示例

### 基本使用

<code src='pages/BladeView/index'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| className | 类名 | `string` | - | 
| defaultValue | 默认值 | `string \| number` | - | 
| sticky    | 每项label展示是否支持吸顶  | `boolean` | `false`  | 
| data     |  数据源  | <pre>{<br>  key: string; <br>  title: string;<br>  items: { <br>    label: string; <br>    value: string \| number; <br>  }[];<br>}[];</pre> | -  |
| value   |  当前值   | `string \| number` |  -   | 

## 事件

| 事件名    | 说明                   | 类型       |
| --------- | ---------------------- | ---------- |
| onChange | 点击某一项的回调 | <pre>(<br>  item: {<br>    label: string; <br>    value:  string \| number; <br>  },<br>  groups?: {<br>    label: string; <br>    value: string \| number; <br>  }[]<br>) => void; |

## 插槽

| 插槽名称 | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| default    | 索引每项自定义内容格式插槽 |

