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

## 代码示例

### 基本使用

<code src='../../demo/pages/BladeView'></code>

## 属性

| 属性      | 类型   | 必填 | 默认值 | 说明       |
| --------- | ------ | ---- | ------ | ---------- |
| data     | <pre>{<br>  key: string; <br>  title: string;<br>  items: { <br>    label: string; <br>    value: string \| number; <br>  }[];<br>}[];</pre> | 是  | -   | 数据源     |
| value        | string\|number | 否 | -      | 当前值           |
| scrollToKey  | string        | 否 | -      | 默认滚动到的元素   |
| sticky       | boolean       | 否 | false  | 每项label展示是否支持吸顶  |
| className    | string        | 否 | -      | 类名             |

## 事件

| 事件名    | 说明                   | 类型       |
| --------- | ---------------------- | ---------- |
| onChange | 点击某一项的回调 | <pre>(<br>  item: {<br>    label: string; <br>    value:  string \| number; <br>  },<br>  groups?: {<br>    label: string; <br>    value: string \| number; <br>  }[]<br>) => void; |

## 样式类

| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-blade-view   | 整体样式         |
| amd-blade-view-body-group-title       | 标题样式   |
| amd-blade-view-body-group-item | 各索引下整体样式   |
| amd-blade-view-body-group-item-text | 各索引下各项文案样式   |
| amd-blade-view-sidebar  | 侧边栏导航整体样式 |
| amd-blade-view-sidebar-item      | 侧边栏导航每项样式    |
| amd-blade-view-sidebar-current      | 侧边栏导航激活项样式    |
| amd-blade-view-sidebar-item-text      | 侧边栏导航每项文案样式    |
